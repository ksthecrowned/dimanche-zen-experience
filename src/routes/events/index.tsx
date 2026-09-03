import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { events } from "@/data/site";

export const Route = createFileRoute("/events/")({
  head: () => ({
    meta: [
      { title: "Éditions — Dimanche ZEN" },
      {
        name: "description",
        content: "Toutes les éditions Dimanche ZEN à venir : dates, lieux et line-up à Pointe-Noire et au-delà.",
      },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Éditions"
        title="Trouvez votre"
        accent="Zen"
        text="Chaque dimanche est une édition. Voici celles qui arrivent."
      />

      <section className="shell pb-24 md:pb-32">
        <ul>
          {events.map((e, i) => (
            <Reveal key={e.slug} as="li" delay={i * 80}>
              <Link
                to="/events/$slug"
                params={{ slug: e.slug }}
                className="zoom-frame group grid grid-cols-1 items-center gap-6 border-t border-border py-8 md:grid-cols-[auto_1.4fr_1fr_auto] md:py-10"
              >
                <div className="flex items-center gap-6 md:w-20 md:flex-col md:gap-0 md:text-center">
                  <span className="display text-5xl md:text-4xl">{e.day}</span>
                  <span className="label-xs">{e.month}</span>
                </div>
                <div className="min-w-0">
                  <p className="eyebrow">{e.edition}</p>
                  <h2 className="display mt-2 truncate text-3xl transition-colors group-hover:text-primary md:text-4xl">
                    {e.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {e.venue.city} · {e.venue.name} · {e.time}
                  </p>
                </div>
                <div className="hidden h-28 overflow-hidden md:block">
                  <img src={e.image} alt={e.title} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <span className="label-xs hidden md:block">Voir l'édition →</span>
              </Link>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-16 flex flex-wrap gap-3 border-t border-border pt-10">
          <Link to="/calendar" className="btn-ghost-zen">
            Vue calendrier <span aria-hidden>→</span>
          </Link>
          <Link to="/tickets" className="btn-zen">
            Réserver un pass <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </section>
    </>
  );
}
