import { createFileRoute, Link } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { brand, partnerBenefits, partners } from "@/data/site";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partenaires — Dimanche ZEN" },
      {
        name: "description",
        content: "Devenez partenaire Dimanche ZEN : visibilité, activation, expérience et contenu pour votre marque.",
      },
    ],
  }),
  component: PartnersPage,
});

function PartnersPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageHeader
        eyebrow="Partenaires"
        title="Les marques qui font"
        accent="le Zen"
        text="Votre marque. Notre communauté. Une expérience commune."
      />

      <section className="shell pb-16 md:pb-24">
        <div className="grid grid-cols-2 gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
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
      </section>

      <section className="section-y border-t border-border">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Pourquoi le ZEN</p>
            <h2 className="display mt-5 max-w-3xl text-[11vw] leading-[0.85] sm:text-5xl lg:text-6xl">
              Quatre leviers pour <span className="text-primary">votre marque.</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {partnerBenefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <p className="display text-2xl">{b.title}</p>
                <p className="mt-3 text-sm text-muted-foreground">{b.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-t border-border">
        <div className="shell grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow">Devenir partenaire</p>
            <h2 className="display mt-5 text-[11vw] leading-[0.85] sm:text-5xl lg:text-6xl">
              Parlons de <span className="text-primary">votre édition.</span>
            </h2>
            <p className="mt-6 text-muted-foreground">
              Décrivez votre marque et vos objectifs. On revient vers vous sous 48h.
            </p>
            <a href={`mailto:${brand.email}`} className="label-xs mt-8 inline-block !text-foreground">
              {brand.email}
            </a>
          </Reveal>

          <Reveal delay={100}>
            {sent ? (
              <div className="border border-border p-10">
                <p className="display text-3xl text-primary">Merci.</p>
                <p className="mt-4 text-muted-foreground">
                  Votre demande a bien été enregistrée. L'équipe ZEN vous contacte bientôt.
                </p>
                <Link to="/" className="btn-ghost-zen mt-8">
                  Retour à l'accueil
                </Link>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <Field label="Marque / entreprise" name="brand" required />
                <Field label="Contact" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Catégorie" name="category" placeholder="Audio, Lifestyle, Boissons…" />
                <label className="block">
                  <span className="label-xs">Message</span>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="mt-2 w-full border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-primary"
                  />
                </label>
                <button type="submit" className="btn-zen">
                  Envoyer ma demande <span aria-hidden>→</span>
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="label-xs">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-primary"
      />
    </label>
  );
}
