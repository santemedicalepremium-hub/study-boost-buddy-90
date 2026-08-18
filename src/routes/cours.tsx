import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BookOpen, GraduationCap, Sparkles } from "lucide-react";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";
import { useLang } from "@/lib/i18n";
import { coursesContent } from "@/lib/courses";

export const Route = createFileRoute("/cours")({
  head: () => ({
    meta: [
      { title: "Cours et résumés primaire, collège, lycée | Anti Ennui" },
      {
        name: "description",
        content:
          "Résumés clairs par matière pour le primaire, le collège et le lycée : maths, physique-chimie, SVT, langues, histoire-géo et philosophie, avec des astuces pour retenir.",
      },
      { property: "og:title", content: "Cours et résumés par matière | Anti Ennui" },
      {
        property: "og:description",
        content: "L'essentiel de chaque matière en fiches courtes, du primaire au lycée.",
      },
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  const { lang } = useLang();
  const c = coursesContent[lang];
  const [active, setActive] = useState(0);
  const level = c.levels[Math.min(active, c.levels.length - 1)]!;

  return (
    <SiteLayout>
      <PageHeader title={c.title} subtitle={c.subtitle} />
      <section className="mx-auto max-w-5xl px-5 py-12">
        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">{c.intro}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {c.levels.map((l, i) => (
            <button
              key={l.id}
              onClick={() => setActive(i)}
              className={
                "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors " +
                (i === active
                  ? "bg-accent-gradient text-primary-foreground"
                  : "border border-border bg-card text-muted-foreground hover:text-foreground")
              }
            >
              <GraduationCap className="size-4" />
              {l.name}
              <span className="text-xs font-normal opacity-70">{l.age}</span>
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {level.subjects.map((s) => (
            <article key={s.name} className="card-surface flex flex-col gap-4 p-6 hover:shadow-card">
              <div className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-accent-gradient text-primary-foreground">
                  <BookOpen className="size-4" />
                </span>
                <h2 className="text-lg font-semibold">{s.name}</h2>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {c.summaryLabel}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
              </div>
              <div>
                <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  <Sparkles className="size-3.5" /> {c.tipsLabel}
                </p>
                <ul className="mt-2 space-y-1.5">
                  {s.tips.map((tip) => (
                    <li key={tip} className="flex gap-2 text-sm leading-relaxed">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
