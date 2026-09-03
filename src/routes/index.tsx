import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Countdown } from "@/components/site/Countdown";
import { Counter } from "@/components/site/Counter";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import {
  brand,
  dna,
  events,
  experiences,
  images,
  journalPosts,
  nextEvent,
  partners,
  stats,
  vendorCategories,
} from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dimanche ZEN — Le dimanche, autrement. | Pointe-Noire" },
      {
        name: "description",
        content:
          "Dimanche ZEN transforme le dimanche en expérience : DJ sets, jeux, food corners, mode et communauté à Pointe-Noire, Congo.",
      },
      { property: "og:title", content: "Dimanche ZEN — Le dimanche, autrement." },
      {
        property: "og:description",
        content: "Art · Music · Food · Games · Community. Prochain rendez-vous à Pointe-Noire.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <NextEvent />
      <ExperienceSection />
      <Story />
      <Stats />
      <Calendar />
      <Partners />
      <Vendors />
      <Gallery />
      <Journal />
      <Talents />
      <Social />
      <FinalCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[92svh] flex-col justify-end overflow-hidden">
      <img
        src={images.hero}
        alt="Foule dansant au coucher du soleil lors d'un Dimanche ZEN"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
      <div className="shell relative z-10">
        <p className="eyebrow">{brand.city}</p>
        <h1 className="display mt-5 text-[19vw] leading-[0.82] sm:text-[15vw] lg:text-[11rem]">
          Dimanche
          <span className="block text-primary">Zen</span>
        </h1>
        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="max-w-sm text-lg text-foreground md:text-xl">{brand.signature}</p>
            <p className="label-xs mt-3">{brand.pillars}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/tickets" className="btn-zen">
              Prochain ZEN <span aria-hidden>→</span>
            </Link>
            <a href="#prochain" className="btn-ghost-zen">
              Explorer <span aria-hidden>↓</span>
            </a>
          </div>
        </div>
        <p className="label-xs mt-10 border-t border-border pt-5">
          Prochaine édition · {nextEvent.dateLabel} · {nextEvent.venue.city}
        </p>
      </div>
    </section>
  );
}

function NextEvent() {
  return (
    <section id="prochain" className="section-y shell">
      <Reveal>
        <p className="eyebrow">Prochain rendez-vous</p>
      </Reveal>
      <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="zoom-frame">
          <img
            src={nextEvent.image}
            alt={`Lieu de ${nextEvent.title}`}
            loading="lazy"
            width={1408}
            height={1600}
            className="h-full w-full object-cover"
          />
        </Reveal>
        <Reveal delay={120} className="flex flex-col justify-center">
          <h2 className="display text-[12vw] leading-[0.85] sm:text-6xl lg:text-7xl">
            Dimanche Zen
            <span className="block text-primary">{nextEvent.edition}</span>
          </h2>
          <p className="display mt-8 text-3xl md:text-4xl">{nextEvent.dateLabel}</p>
          <div className="mt-6 space-y-1 text-muted-foreground">
            <p>
              {nextEvent.venue.name} · {nextEvent.venue.city} · {nextEvent.venue.country}
            </p>
            <p>{nextEvent.time}</p>
          </div>
          <p className="mt-8 max-w-md text-base text-muted-foreground">{nextEvent.excerpt}</p>
          <div className="mt-10">
            <Countdown target={nextEvent.date} />
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/tickets" className="btn-zen">
              Réserver mon pass <span aria-hidden>→</span>
            </Link>
            <Link to="/events/$slug" params={{ slug: nextEvent.slug }} className="btn-ghost-zen">
              Détails de l'édition
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="section-y border-t border-border">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">L'expérience ZEN</p>
          <h2 className="display mt-5 max-w-3xl text-[12vw] leading-[0.85] sm:text-6xl lg:text-8xl">
            Plus qu'un dimanche.
            <span className="block text-primary">Une expérience.</span>
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 md:mt-24">
        {experiences.map((exp, i) => (
          <Reveal key={exp.key} as="article">
            <Link
              to="/experiences"
              className="zoom-frame group relative block border-t border-border"
            >
              <div className="shell relative grid grid-cols-1 items-center gap-6 py-8 md:grid-cols-[auto_1fr_auto] md:py-12">
                <span className="label-xs">{String(i + 1).padStart(2, "0")}</span>
                <div className="min-w-0">
                  <h3 className="display text-[14vw] leading-[0.9] transition-colors duration-500 group-hover:text-primary sm:text-6xl lg:text-7xl">
                    {exp.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm text-muted-foreground md:text-base">{exp.text}</p>
                </div>
                <div className="h-52 w-full overflow-hidden md:h-40 md:w-64 lg:h-48 lg:w-80">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="section-y border-t border-border">
      <div className="shell grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">Notre histoire</p>
          <h2 className="display mt-5 text-[12vw] leading-[0.85] sm:text-6xl lg:text-7xl">
            Nous sommes
            <span className="block text-primary">Dimanche Zen</span>
          </h2>
          <p className="mt-8 max-w-md text-lg text-muted-foreground">
            « Une envie simple : faire du dimanche un moment où l'on se retrouve, où l'on découvre, où
            l'on partage et où l'on profite. »
          </p>
          <div className="mt-10">
            <Link to="/about" className="btn-ghost-zen">
              Découvrir notre histoire <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>

        <div>
          <Reveal className="zoom-frame">
            <img
              src={images.community}
              alt="Communauté Dimanche ZEN réunie"
              loading="lazy"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
          </Reveal>
          <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {dna.map((d, i) => (
              <Reveal key={d.num} delay={i * 80}>
                <dt className="display text-2xl">
                  <span className="text-primary">{d.num}</span> — {d.title}
                </dt>
                <dd className="mt-2 text-sm text-muted-foreground">{d.text}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="shell grid grid-cols-2 gap-10 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90}>
            <p className="display text-5xl md:text-7xl">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="label-xs mt-3">{s.label}</p>
            {s.placeholder ? <p className="mt-1 text-[0.65rem] text-muted-foreground/70">estimation</p> : null}
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Calendar() {
  return (
    <section className="section-y border-t border-border">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Calendrier</p>
          <h2 className="display mt-5 text-[12vw] leading-[0.85] sm:text-6xl lg:text-8xl">
            Trouvez votre <span className="text-primary">Zen</span>
          </h2>
        </Reveal>

        <ul className="mt-14">
          {events.map((e, i) => (
            <Reveal key={e.slug} as="li" delay={i * 80}>
              <Link
                to="/events/$slug"
                params={{ slug: e.slug }}
                className="zoom-frame group grid grid-cols-[auto_1fr] items-center gap-6 border-t border-border py-7 md:grid-cols-[auto_1.4fr_1fr_auto] md:py-9"
              >
                <div className="w-16 shrink-0 text-center">
                  <span className="display block text-4xl">{e.day}</span>
                  <span className="label-xs">{e.month}</span>
                </div>
                <div className="min-w-0">
                  <h3 className="display truncate text-2xl transition-colors group-hover:text-primary md:text-3xl">
                    {e.edition}
                  </h3>
                  <p className="mt-1 truncate text-sm text-muted-foreground">
                    {e.venue.city} · {e.venue.name}
                  </p>
                </div>
                <div className="hidden h-24 overflow-hidden md:block">
                  <img src={e.image} alt={e.title} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <span className="label-xs hidden md:block">View event →</span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="section-y border-t border-border">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Partenaires</p>
          <h2 className="display mt-5 max-w-3xl text-[11vw] leading-[0.85] sm:text-5xl lg:text-7xl">
            Les marques qui font le <span className="text-primary">Zen</span>
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Votre marque. Notre communauté. Une expérience commune.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex h-32 flex-col items-center justify-center bg-background transition-colors duration-500 hover:bg-secondary md:h-40"
            >
              <span className="display text-lg md:text-xl">{p.name}</span>
              <span className="label-xs mt-2">{p.category}</span>
            </div>
          ))}
        </div>

        <Reveal className="mt-16 flex flex-wrap items-end justify-between gap-8">
          <div>
            <h3 className="display text-3xl md:text-4xl">Devenez partenaire</h3>
            <p className="label-xs mt-4">Visibilité · Activation · Expérience · Contenu</p>
          </div>
          <Link to="/partners" className="btn-zen">
            Devenir partenaire <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Vendors() {
  return (
    <section className="section-y border-t border-border">
      <div className="shell grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <Reveal>
          <p className="eyebrow">Exposants</p>
          <h2 className="display mt-5 text-[12vw] leading-[0.85] sm:text-5xl lg:text-7xl">
            Tu veux exposer <span className="text-primary">au Zen ?</span>
          </h2>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {vendorCategories.map((c) => (
              <li key={c} className="label-xs">
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={100}>
          <Link to="/vendors" className="btn-zen">
            Devenir exposant <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="section-y border-t border-border">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Galerie</p>
          <h2 className="display mt-5 text-[12vw] leading-[0.85] sm:text-6xl lg:text-8xl">
            Ceux qui étaient <span className="text-primary">là.</span>
          </h2>
        </Reveal>
        <div className="mt-14">
          <GalleryGrid />
        </div>
        <div className="mt-12">
          <Link to="/gallery" className="btn-ghost-zen">
            Voir toute la galerie <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Journal() {
  return (
    <section className="section-y border-t border-border">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Journal</p>
          <h2 className="display mt-5 text-[12vw] leading-[0.85] sm:text-6xl lg:text-8xl">
            Zen <span className="text-primary">Stories</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {journalPosts.slice(0, 3).map((post, i) => (
            <Reveal key={post.slug} as="article" delay={i * 90}>
              <Link to="/journal/$slug" params={{ slug: post.slug }} className="zoom-frame group block">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={post.image} alt={post.title} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <p className="eyebrow mt-5">{post.category}</p>
                <h3 className="display mt-3 text-2xl transition-colors group-hover:text-primary">{post.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{post.excerpt}</p>
                <p className="label-xs mt-4">
                  {post.date} · {post.readTime}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <Link to="/journal" className="btn-ghost-zen">
            Voir le journal <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Talents() {
  return (
    <section className="section-y border-t border-border">
      <div className="shell grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="eyebrow">Talents</p>
          <h2 className="display mt-5 text-[12vw] leading-[0.85] sm:text-5xl lg:text-7xl">
            La scène est <span className="text-primary">à vous.</span>
          </h2>
          <p className="mt-7 max-w-md text-lg text-muted-foreground">
            DJ, artiste, danseur, humoriste, créateur ou passionné : faites découvrir votre talent.
          </p>
          <div className="mt-9">
            <Link to="/artists/apply" className="btn-zen">
              Proposer mon talent <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>
        <Reveal delay={120} className="zoom-frame">
          <img
            src={images.culture}
            alt="Danseuse en performance au Dimanche ZEN"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}

function Social() {
  const grid = [images.hero, images.music, images.play, images.food, images.community, images.finalCta];
  return (
    <section className="section-y border-t border-border">
      <div className="shell">
        <Reveal className="flex flex-wrap items-end justify-between gap-8">
          <h2 className="display text-[13vw] leading-[0.85] sm:text-6xl lg:text-8xl">
            #Dimanche<span className="text-primary">Zen</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            <a href={brand.instagram} className="btn-ghost-zen">
              Suivre @dimanchezen <span aria-hidden>→</span>
            </a>
            <a href={brand.whatsapp} className="btn-zen">
              Rejoindre la communauté <span aria-hidden>→</span>
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-3 gap-3 md:grid-cols-6">
          {grid.map((src, i) => (
            <div key={i} className="zoom-frame aspect-square">
              <img src={src} alt="Moments partagés par la communauté ZEN" loading="lazy" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative flex min-h-[85svh] items-end overflow-hidden">
      <img
        src={images.finalCta}
        alt="Public en pleine énergie lors d'un Dimanche ZEN"
        loading="lazy"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
      <div className="shell relative z-10 pb-16 md:pb-24">
        <h2 className="display text-[15vw] leading-[0.84] sm:text-7xl lg:text-[9rem]">
          Ton dimanche
          <span className="block text-primary">commence ici.</span>
        </h2>
        <p className="label-xs mt-8">{brand.pillars}</p>
        <div className="mt-8">
          <Link to="/tickets" className="btn-zen">
            Réserver le prochain ZEN <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
