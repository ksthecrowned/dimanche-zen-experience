import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { experiences } from "@/data/site";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Expériences — Dimanche ZEN" },
      {
        name: "description",
        content: "Music, Play, Culture, Food, Community : les cinq piliers de l'expérience Dimanche ZEN.",
      },
    ],
  }),
  component: ExperiencesPage,
});

function ExperiencesPage() {
  return (
    <>
      <PageHeader
        eyebrow="L'expérience ZEN"
        title="Plus qu'un dimanche."
        accent="Une expérience."
        text="Cinq piliers. Une journée. Une communauté qui revient chaque dimanche."
      />

      <section className="pb-24 md:pb-32">
        {experiences.map((exp, i) => (
          <Reveal key={exp.key} as="article">
            <div
              className={`border-t border-border ${i % 2 === 1 ? "bg-secondary/30" : ""}`}
            >
              <div className="shell grid items-center gap-10 py-14 md:grid-cols-2 md:gap-16 md:py-20">
                <div className={i % 2 === 1 ? "md:order-2" : undefined}>
                  <span className="label-xs">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="display mt-4 text-[16vw] leading-[0.88] sm:text-6xl lg:text-8xl">
                    {exp.title}
                  </h2>
                  <p className="mt-6 max-w-md text-base text-muted-foreground md:text-lg">{exp.text}</p>
                </div>
                <div className={`zoom-frame ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <img
                    src={exp.image}
                    alt={exp.title}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover md:aspect-[5/6]"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        ))}

        <div className="shell mt-16 flex flex-wrap gap-3">
          <Link to="/tickets" className="btn-zen">
            Vivre le prochain ZEN <span aria-hidden>→</span>
          </Link>
          <Link to="/gallery" className="btn-ghost-zen">
            Voir la galerie
          </Link>
        </div>
      </section>
    </>
  );
}
