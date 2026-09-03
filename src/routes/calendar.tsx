import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { events } from "@/data/site";

export const Route = createFileRoute("/calendar")({
  head: () => ({
    meta: [
      { title: "Calendrier — Dimanche ZEN" },
      {
        name: "description",
        content: "Calendrier des prochaines éditions Dimanche ZEN : dates, villes et réservations.",
      },
    ],
  }),
  component: CalendarPage,
});

function CalendarPage() {
  return (
    <>
      <PageHeader
        eyebrow="Calendrier"
        title="Prochains"
        accent="rendez-vous"
        text="Repérez votre édition, réservez votre pass, et venez vibrer."
      />

      <section className="shell pb-24 md:pb-32">
        <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {events.map((e, i) => (
            <Reveal key={e.slug} delay={i * 90} className="flex flex-col bg-background p-8 md:p-10">
              <div className="flex items-baseline gap-3">
                <span className="display text-6xl">{e.day}</span>
                <span className="label-xs">{e.month} · {e.dateLabel.split(" ").slice(-1)}</span>
              </div>
              <p className="eyebrow mt-8">{e.edition}</p>
              <h2 className="display mt-3 text-3xl">{e.venue.city}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {e.venue.name}
                <br />
                {e.time}
              </p>
              <p className="mt-6 flex-1 text-sm text-muted-foreground">{e.excerpt}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/events/$slug" params={{ slug: e.slug }} className="btn-ghost-zen !px-5 !py-2.5">
                  Détails
                </Link>
                <Link to="/tickets" className="btn-zen !px-5 !py-2.5">
                  Tickets
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <Link to="/events" className="btn-ghost-zen">
            Liste des éditions <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </section>
    </>
  );
}
