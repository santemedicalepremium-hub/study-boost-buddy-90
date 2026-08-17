import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe2 } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anti Ennui — En finir avec l'ennui en cours" },
      {
        name: "description",
        content:
          "Pourquoi les élèves s'ennuient en cours et comment y remédier : 3 problèmes, 3 solutions et des méthodes pour les professeurs. En français, anglais et arabe.",
      },
      { property: "og:title", content: "Anti Ennui — En finir avec l'ennui en cours" },
      {
        property: "og:description",
        content: "3 problèmes, 3 solutions et des méthodes pour capter l'attention des élèves du monde entier.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useLang();

  const cards = [
    { to: "/problemes", title: t.home.previewProblems, items: t.problems.items },
    { to: "/solutions", title: t.home.previewSolutions, items: t.solutions.items },
    { to: "/professeurs", title: t.home.previewTeachers, items: t.teachers.items.slice(0, 3) },
  ] as const;

  return (
    <SiteLayout>
      <section className="bg-hero-gradient border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold">
            <Globe2 className="size-3.5 text-primary" />
            {t.hero.badge}
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.05] md:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {t.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/problemes"
              className="inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
            >
              {t.hero.ctaProblems}
              <ArrowRight className="size-4 rtl:rotate-180" />
            </Link>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              {t.hero.ctaSolutions}
            </Link>
          </div>

          <dl className="mt-14 grid gap-4 sm:grid-cols-3">
            {[
              [t.hero.stat1, t.hero.stat1Label],
              [t.hero.stat2, t.hero.stat2Label],
              [t.hero.stat3, t.hero.stat3Label],
            ].map(([value, label]) => (
              <div key={label} className="card-surface p-6">
                <dt className="font-display text-3xl font-bold text-primary">{value}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16">
        <h2 className="text-2xl font-bold md:text-3xl">{t.home.whyTitle}</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t.home.whyText}</p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-6">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <Link key={c.to} to={c.to} className="card-surface group flex flex-col p-7 hover:shadow-card">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <ul className="mt-4 flex flex-1 flex-col gap-2 text-sm text-muted-foreground">
                {c.items.map((i: { t: string }) => (
                  <li key={i.t} className="flex gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    {i.t}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                {t.home.readMore}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
