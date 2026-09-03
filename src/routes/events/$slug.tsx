import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Countdown } from "@/components/site/Countdown";
import { Reveal } from "@/components/site/Reveal";
import { events } from "@/data/site";

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    const event = events.find((e) => e.slug === params.slug);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.event.title ?? "Édition"} — Dimanche ZEN` },
      {
        name: "description",
        content: loaderData?.event.excerpt ?? "Détails de l'édition Dimanche ZEN.",
      },
    ],
  }),
  component: EventDetailPage,
});

function EventDetailPage() {
  const { event } = Route.useLoaderData();

  return (
    <>
      <section className="relative flex min-h-[70svh] flex-col justify-end overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/25" />
        <div className="shell relative z-10">
          <p className="eyebrow">{event.edition}</p>
          <h1 className="display mt-5 text-[14vw] leading-[0.85] sm:text-6xl lg:text-8xl">
            Dimanche Zen
            <span className="block text-primary">{event.edition.replace("ÉDITION ", "#")}</span>
          </h1>
          <p className="display mt-8 text-2xl md:text-4xl">{event.dateLabel}</p>
          <p className="mt-3 text-muted-foreground">
            {event.venue.name} · {event.venue.city} · {event.time}
          </p>
        </div>
      </section>

      <section className="section-y shell">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">À propos</p>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">{event.excerpt}</p>
            {event.status === "upcoming" ? (
              <div className="mt-10">
                <Countdown target={event.date} />
              </div>
            ) : null}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/tickets" className="btn-zen">
                Réserver mon pass <span aria-hidden>→</span>
              </Link>
              <Link to="/events" className="btn-ghost-zen">
                Toutes les éditions
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="eyebrow">Line-up</p>
            <ul className="mt-6 space-y-4 border-t border-border">
              {event.lineup.map((name) => (
                <li key={name} className="display border-b border-border py-4 text-2xl md:text-3xl">
                  {name}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section-y border-t border-border">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Tickets</p>
            <h2 className="display mt-5 text-[12vw] leading-[0.85] sm:text-5xl lg:text-6xl">
              Choisis ton <span className="text-primary">pass.</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {event.tickets.map((t, i) => (
              <Reveal key={t.id} delay={i * 80} className="border border-border p-8">
                <p className="label-xs">{t.name}</p>
                <p className="display mt-4 text-4xl">{t.price}</p>
                <ul className="mt-6 space-y-2">
                  {t.perks.map((p) => (
                    <li key={p} className="text-sm text-muted-foreground">
                      {p}
                    </li>
                  ))}
                </ul>
                <Link to="/tickets" className="btn-zen mt-8 w-full">
                  Sélectionner
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
