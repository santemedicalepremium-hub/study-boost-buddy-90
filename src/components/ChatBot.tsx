import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, RotateCcw, Loader2 } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { chatContent } from "@/lib/courses";

type Msg = { role: "user" | "assistant"; content: string };

export function ChatBot() {
  const { lang, dir } = useLang();
  const c = chatContent[lang];
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open, loading]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    const next: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      if (!res.ok || !res.body) throw new Error(String(res.status));
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      setMessages([...next, { role: "assistant", content: "" }]);
      let acc = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages([...next, { role: "assistant", content: acc }]);
      }
    } catch {
      setMessages([...next, { role: "assistant", content: c.error }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div dir={dir} className="fixed bottom-5 end-5 z-[60] flex flex-col items-end gap-3">
      {open && (
        <div className="flex h-[70vh] max-h-[560px] w-[min(92vw,380px)] flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
          <div className="flex items-center justify-between gap-2 border-b border-border bg-accent-gradient px-4 py-3 text-primary-foreground">
            <p className="font-display text-sm font-semibold">{c.title}</p>
            <div className="flex items-center gap-1">
              <button
                aria-label={c.clear}
                onClick={() => setMessages([])}
                className="rounded-lg p-1.5 hover:bg-white/20"
              >
                <RotateCcw className="size-4" />
              </button>
              <button
                aria-label="Close"
                onClick={() => setOpen(false)}
                className="rounded-lg p-1.5 hover:bg-white/20"
              >
                <X className="size-4" />
              </button>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            <div className="rounded-2xl bg-secondary px-3 py-2 text-sm leading-relaxed">{c.welcome}</div>
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  "max-w-[85%] whitespace-pre-wrap rounded-2xl px-3 py-2 text-sm leading-relaxed " +
                  (m.role === "user"
                    ? "ms-auto bg-accent-gradient text-primary-foreground"
                    : "bg-secondary text-foreground")
                }
              >
                {m.content || "…"}
              </div>
            ))}
            {loading && messages[messages.length - 1]?.role === "user" && (
              <Loader2 className="size-4 animate-spin text-muted-foreground" />
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              void send();
            }}
            className="flex items-center gap-2 border-t border-border p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={c.placeholder}
              className="min-w-0 flex-1 rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
            <button
              type="submit"
              disabled={loading}
              aria-label={c.send}
              className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-accent-gradient text-primary-foreground disabled:opacity-50"
            >
              <Send className="size-4" />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={c.open}
        className="flex size-14 items-center justify-center rounded-full bg-accent-gradient text-primary-foreground shadow-xl transition-transform hover:scale-105"
      >
        {open ? <X className="size-6" /> : <MessageCircle className="size-6" />}
      </button>
    </div>
  );
}
