import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { LANGS, useLang } from "@/lib/i18n";
import { ChatBot } from "@/components/ChatBot";

function LangSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-card p-1">
      {LANGS.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          aria-label={l.label}
          className={
            "rounded-full px-3 py-1 text-xs font-semibold transition-colors " +
            (lang === l.code
              ? "bg-accent-gradient text-primary-foreground"
              : "text-muted-foreground hover:text-foreground")
          }
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}

function Header() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/problemes", label: t.nav.problems },
    { to: "/solutions", label: t.nav.solutions },
    { to: "/cours", label: t.nav.courses },
    { to: "/professeurs", label: t.nav.teachers },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex size-9 items-center justify-center rounded-xl bg-accent-gradient text-primary-foreground">
            <Sparkles className="size-4" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">{t.brand}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "bg-secondary text-foreground" }}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangSwitcher />
          <button
            className="rounded-lg border border-border p-2 md:hidden"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-5 py-3 md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "bg-secondary text-foreground" }}
              className="rounded-xl px-4 py-2.5 text-sm font-medium text-muted-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

function Footer() {
  const { t } = useLang();
  return (
    <footer className="mt-20 border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-10 text-center">
        <p className="font-display text-base font-semibold">{t.brand}</p>
        <p className="mt-2 text-sm text-muted-foreground">{t.footer.world}</p>
        <p className="mt-6 text-sm font-medium">{t.footer.credit}</p>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const { dir } = useLang();
  return (
    <div dir={dir} className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <ChatBot />
    </div>
  );
}

export function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="bg-hero-gradient border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <h1 className="text-4xl font-bold md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">{subtitle}</p>
      </div>
    </section>
  );
}
