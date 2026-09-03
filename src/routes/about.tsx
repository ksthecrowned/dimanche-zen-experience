import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { brand, dna, images, stats } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Notre histoire — Dimanche ZEN" },
      {
        name: "description",
        content:
          "Dimanche ZEN : une envie simple — faire du dimanche un moment où l'on se retrouve, découvre, partage et profite. Pointe-Noire, Congo.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Notre histoire"
        title="Nous sommes"
        accent="Dimanche Zen"
        text="Une envie simple : faire du dimanche un moment où l'on se retrouve, où l'on découvre, où l'on partage et où l'on profite."
      />

      <section className="shell pb-20 md:pb-28">
        <Reveal className="zoom-frame">
          <img
            src={images.community}
            alt="Communauté Dimanche ZEN réunie"
            width={1600}
            height={1200}
            className="aspect-[16/9] w-full object-cover md:aspect-[21/9]"
          />
        </Reveal>
      </section>

      <section className="section-y border-t border-border">
        <div className="shell grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow">Manifeste</p>
            <h2 className="display mt-5 text-[11vw] leading-[0.85] sm:text-5xl lg:text-6xl">
              Le dimanche <span className="text-primary">mérite mieux.</span>
            </h2>
          </Reveal>
          <Reveal delay={100} className="space-y-6 text-base text-muted-foreground md:text-lg">
            <p>
              Pas de formule magique. De la musique choisie, de la bonne nourriture, de l'espace, et des
              gens qui ont envie d'être là.
            </p>
            <p>
              Depuis Pointe-Noire, Dimanche ZEN construit un rendez-vous culturel et lifestyle :
              art, music, food, games et community — cinq piliers, une même énergie.
            </p>
            <p className="label-xs !text-foreground">{brand.pillars}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-y border-t border-border">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Notre ADN</p>
            <h2 className="display mt-5 text-[12vw] leading-[0.85] sm:text-5xl lg:text-7xl">
              Quatre mots. <span className="text-primary">Une promesse.</span>
            </h2>
          </Reveal>
          <dl className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {dna.map((d, i) => (
              <Reveal key={d.num} delay={i * 80}>
                <dt className="display text-3xl md:text-4xl">
                  <span className="text-primary">{d.num}</span>
                  <span className="mt-3 block text-2xl md:text-3xl">{d.title}</span>
                </dt>
                <dd className="mt-3 text-sm text-muted-foreground">{d.text}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <div className="shell grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <p className="display text-5xl md:text-7xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="label-xs mt-3">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-y border-t border-border">
        <div className="shell flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <h2 className="display text-[12vw] leading-[0.85] sm:text-5xl lg:text-7xl">
              Rejoins le <span className="text-primary">mouvement.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Link to="/tickets" className="btn-zen">
              Prochain ZEN <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
