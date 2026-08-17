import { createFileRoute } from "@tanstack/react-router";
import { Zap, Repeat, Timer } from "lucide-react";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "3 solutions contre l'ennui scolaire | Anti Ennui" },
      {
        name: "description",
        content:
          "Pédagogie active, rappel actif et répétition espacée, cockpit anti-procrastination : trois solutions concrètes pour apprendre mieux.",
      },
      { property: "og:title", content: "3 solutions contre l'ennui scolaire | Anti Ennui" },
      {
        property: "og:description",
        content: "Séquençage des cours, flashcards espacées et outils Pomodoro pour retenir durablement.",
      },
    ],
  }),
  component: SolutionsPage,
});

const icons = [Zap, Repeat, Timer];

function SolutionsPage() {
  const { t } = useLang();
  return (
    <SiteLayout>
      <PageHeader title={t.solutions.title} subtitle={t.solutions.subtitle} />
      <section className="mx-auto max-w-4xl px-5 py-14">
        <div className="flex flex-col gap-6">
          {t.solutions.items.map((item: { t: string; d: string }, i: number) => {
            const Icon = icons[i]!;
            return (
              <article
                key={item.t}
                className="card-surface flex flex-col gap-4 p-7 hover:shadow-card sm:flex-row sm:items-start sm:gap-6"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent-gradient text-primary-foreground">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h2 className="text-xl font-semibold">{item.t}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
