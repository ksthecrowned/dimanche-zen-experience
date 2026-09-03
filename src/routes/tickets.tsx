import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Countdown } from "@/components/site/Countdown";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { events, nextEvent } from "@/data/site";

export const Route = createFileRoute("/tickets")({
  head: () => ({
    meta: [
      { title: "Tickets — Dimanche ZEN" },
      {
        name: "description",
        content: `Réservez votre pass pour ${nextEvent.title} — ${nextEvent.dateLabel}, ${nextEvent.venue.city}.`,
      },
    ],
  }),
  component: TicketsPage,
});

function TicketsPage() {
  const [selectedEventSlug, setSelectedEventSlug] = useState(nextEvent.slug);
  const [selectedTicket, setSelectedTicket] = useState(nextEvent.tickets[0]?.id ?? "");
  const [qty, setQty] = useState(1);
  const [confirmed, setConfirmed] = useState(false);

  const event = events.find((e) => e.slug === selectedEventSlug) ?? nextEvent;
  const ticket = event.tickets.find((t) => t.id === selectedTicket) ?? event.tickets[0];

  function onEventChange(slug: string) {
    const next = events.find((e) => e.slug === slug) ?? nextEvent;
    setSelectedEventSlug(slug);
    setSelectedTicket(next.tickets[0]?.id ?? "");
    setConfirmed(false);
  }

  return (
    <>
      <PageHeader
        eyebrow="Tickets"
        title="Réserver mon"
        accent="pass"
        text={`${nextEvent.edition} · ${nextEvent.dateLabel} · ${nextEvent.venue.city}`}
      />

      <section className="shell pb-24 md:pb-32">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal>
            <div className="zoom-frame">
              <img
                src={event.image}
                alt={event.title}
                className="aspect-[4/5] w-full object-cover md:aspect-[5/6]"
              />
            </div>
            <p className="display mt-8 text-3xl md:text-4xl">{event.dateLabel}</p>
            <p className="mt-2 text-muted-foreground">
              {event.venue.name} · {event.venue.city} · {event.time}
            </p>
            <div className="mt-8">
              <Countdown target={event.date} />
            </div>
          </Reveal>

          <Reveal delay={100}>
            {confirmed && ticket ? (
              <div className="border border-border p-8 md:p-10">
                <p className="eyebrow">Confirmation</p>
                <h2 className="display mt-4 text-4xl text-primary">Pass réservé</h2>
                <p className="mt-6 text-muted-foreground">
                  {qty} × {ticket.name} pour {event.title}.
                  <br />
                  Paiement et billetterie en ligne arrivent bientôt — cette démo enregistre votre
                  intention.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/events/$slug" params={{ slug: event.slug }} className="btn-ghost-zen">
                    Voir l'édition
                  </Link>
                  <button type="button" className="btn-zen" onClick={() => setConfirmed(false)}>
                    Modifier
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <label className="block">
                  <span className="label-xs">Édition</span>
                  <select
                    value={selectedEventSlug}
                    onChange={(e) => onEventChange(e.target.value)}
                    className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                  >
                    {events.map((e) => (
                      <option key={e.slug} value={e.slug}>
                        {e.edition} — {e.venue.city} ({e.dateLabel})
                      </option>
                    ))}
                  </select>
                </label>

                <div>
                  <p className="label-xs mb-4">Type de pass</p>
                  <ul className="space-y-3">
                    {event.tickets.map((t) => (
                      <li key={t.id}>
                        <button
                          type="button"
                          onClick={() => setSelectedTicket(t.id)}
                          className={`w-full border p-5 text-left transition-colors ${
                            selectedTicket === t.id
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-foreground/40"
                          }`}
                        >
                          <div className="flex items-baseline justify-between gap-4">
                            <span className="display text-xl">{t.name}</span>
                            <span className="text-sm font-semibold">{t.price}</span>
                          </div>
                          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                            {t.perks.map((p) => (
                              <li key={p} className="text-xs text-muted-foreground">
                                {p}
                              </li>
                            ))}
                          </ul>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <label className="block max-w-[8rem]">
                  <span className="label-xs">Quantité</span>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    value={qty}
                    onChange={(e) => setQty(Math.max(1, Math.min(10, Number(e.target.value) || 1)))}
                    className="mt-2 w-full border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-primary"
                  />
                </label>

                <button type="button" className="btn-zen w-full sm:w-auto" onClick={() => setConfirmed(true)}>
                  Continuer <span aria-hidden>→</span>
                </button>
                <p className="text-xs text-muted-foreground">
                  Billetterie démo — aucun paiement n'est effectué.
                </p>
              </div>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
