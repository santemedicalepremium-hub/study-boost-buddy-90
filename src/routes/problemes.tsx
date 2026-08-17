import { createFileRoute } from "@tanstack/react-router";
import { AlarmClock, BrainCircuit, Smartphone, HelpCircle, Frown, BatteryWarning } from "lucide-react";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/problemes")({
  head: () => ({
    meta: [
      { title: "Les problèmes de l'ennui en cours | Anti Ennui" },
      {
        name: "description",
        content:
          "Décrochage, révisions inefficaces, procrastination, manque de sens, peur de l'erreur et fatigue : les causes principales de l'ennui scolaire expliquées simplement.",
      },
      { property: "og:title", content: "Les problèmes de l'ennui en cours | Anti Ennui" },
      {
        property: "og:description",
        content: "Six causes principales de l'ennui scolaire et comment les comprendre pour mieux les résoudre.",
      },
    ],
  }),
  component: ProblemsPage,
});

const icons = [AlarmClock, BrainCircuit, Smartphone, HelpCircle, Frown, BatteryWarning];

function ProblemsPage() {
  const { t } = useLang();
  return (
    <SiteLayout>
      <PageHeader title={t.problems.title} subtitle={t.problems.subtitle} />
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.problems.items.map((item: { t: string; d: string }, i: number) => {
            const Icon = icons[i]!;
            return (
              <article key={item.t} className="card-surface flex flex-col gap-4 p-7 hover:shadow-card">
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-display text-3xl font-bold text-border">0{i + 1}</span>
                </div>
                <h2 className="text-xl font-semibold">{item.t}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.d}</p>
              </article>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
