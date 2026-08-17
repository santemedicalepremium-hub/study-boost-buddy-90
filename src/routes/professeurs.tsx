import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/professeurs")({
  head: () => ({
    meta: [
      { title: "Méthodes pour capter l'attention des élèves | Anti Ennui" },
      {
        name: "description",
        content:
          "8 méthodes concrètes pour les professeurs : accroche, règle des 15 minutes, participation de tous, mouvement et rappel final.",
      },
      { property: "og:title", content: "Méthodes pour capter l'attention des élèves | Anti Ennui" },
      {
        property: "og:description",
        content: "Des techniques simples pour garder une classe entière attentive du début à la fin du cours.",
      },
    ],
  }),
  component: TeachersPage,
});

function TeachersPage() {
  const { t } = useLang();
  return (
    <SiteLayout>
      <PageHeader title={t.teachers.title} subtitle={t.teachers.subtitle} />
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.teachers.items.map((item: { t: string; d: string }, i: number) => (
            <article key={item.t} className="card-surface p-6 hover:shadow-card">
              <span className="font-display text-sm font-bold text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-3 text-base font-semibold">{item.t}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
