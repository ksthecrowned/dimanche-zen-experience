import { createFileRoute, Link } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { brand, vendorCategories } from "@/data/site";

export const Route = createFileRoute("/vendors")({
  head: () => ({
    meta: [
      { title: "Exposants — Dimanche ZEN" },
      {
        name: "description",
        content: "Food, drinks, fashion, art : proposez votre stand pour exposer au Dimanche ZEN.",
      },
    ],
  }),
  component: VendorsPage,
});

function VendorsPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageHeader
        eyebrow="Exposants"
        title="Tu veux exposer"
        accent="au Zen ?"
        text="Rejoins le marché des créateurs et les food corners d'une édition Dimanche ZEN."
      />

      <section className="shell pb-16 md:pb-20">
        <Reveal>
          <p className="label-xs mb-6">Catégories</p>
          <ul className="flex flex-wrap gap-3">
            {vendorCategories.map((c) => (
              <li
                key={c}
                className="border border-border px-5 py-3 text-[0.7rem] font-bold tracking-[0.18em] uppercase"
              >
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="section-y border-t border-border">
        <div className="shell grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow">Candidature</p>
            <h2 className="display mt-5 text-[11vw] leading-[0.85] sm:text-5xl lg:text-6xl">
              Propose ton <span className="text-primary">stand.</span>
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              Dis-nous qui tu es, ce que tu proposes, et pour quelle édition. On te répond sous quelques
              jours.
            </p>
            <a href={`mailto:${brand.email}`} className="label-xs mt-8 inline-block !text-foreground">
              {brand.email}
            </a>
          </Reveal>

          <Reveal delay={100}>
            {sent ? (
              <div className="border border-border p-10">
                <p className="display text-3xl text-primary">C'est noté.</p>
                <p className="mt-4 text-muted-foreground">
                  Votre candidature exposant a bien été reçue. À très vite.
                </p>
                <Link to="/" className="btn-ghost-zen mt-8">
                  Retour à l'accueil
                </Link>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <Field label="Nom / marque" name="brand" required />
                <Field label="Contact" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Téléphone / WhatsApp" name="phone" />
                <label className="block">
                  <span className="label-xs">Catégorie</span>
                  <select
                    name="category"
                    required
                    className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Choisir…
                    </option>
                    {vendorCategories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="label-xs">Présentation</span>
                  <textarea
                    name="pitch"
                    required
                    rows={4}
                    placeholder="Ce que vous proposez, besoins en stand, références…"
                    className="mt-2 w-full border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-primary"
                  />
                </label>
                <button type="submit" className="btn-zen">
                  Envoyer ma candidature <span aria-hidden>→</span>
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
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="label-xs">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-primary"
      />
    </label>
  );
}
