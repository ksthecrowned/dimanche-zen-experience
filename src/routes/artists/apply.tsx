import { createFileRoute, Link } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { brand, images } from "@/data/site";

const talentTypes = ["DJ", "Artiste live", "Danse", "Humoriste", "Créateur", "Autre"];

export const Route = createFileRoute("/artists/apply")({
  head: () => ({
    meta: [
      { title: "Proposer mon talent — Dimanche ZEN" },
      {
        name: "description",
        content: "DJ, artiste, danseur, humoriste : proposez votre talent pour une édition Dimanche ZEN.",
      },
    ],
  }),
  component: ArtistsApplyPage,
});

function ArtistsApplyPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageHeader
        eyebrow="Talents"
        title="La scène est"
        accent="à vous."
        text="DJ, artiste, danseur, humoriste, créateur ou passionné : faites découvrir votre talent."
      />

      <section className="shell pb-16 md:pb-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
          <Reveal className="zoom-frame">
            <img
              src={images.culture}
              alt="Performance sur la scène Dimanche ZEN"
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>

          <Reveal delay={100}>
            {sent ? (
              <div className="border border-border p-10">
                <p className="display text-3xl text-primary">Reçu.</p>
                <p className="mt-4 text-muted-foreground">
                  Merci pour votre proposition. On écoute, on regarde, et on revient vers vous.
                </p>
                <Link to="/" className="btn-ghost-zen mt-8">
                  Retour à l'accueil
                </Link>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <Field label="Nom de scène / artiste" name="artist" required />
                <Field label="Contact" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Instagram / lien" name="link" placeholder="@… ou URL" />
                <label className="block">
                  <span className="label-xs">Type de talent</span>
                  <select
                    name="type"
                    required
                    className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Choisir…
                    </option>
                    {talentTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="label-xs">Pitch</span>
                  <textarea
                    name="pitch"
                    required
                    rows={5}
                    placeholder="Qui êtes-vous, ce que vous proposez, liens audio/vidéo…"
                    className="mt-2 w-full border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-primary"
                  />
                </label>
                <button type="submit" className="btn-zen">
                  Proposer mon talent <span aria-hidden>→</span>
                </button>
                <p className="text-xs text-muted-foreground">
                  Ou écrivez-nous à{" "}
                  <a href={`mailto:${brand.email}`} className="text-foreground underline">
                    {brand.email}
                  </a>
                </p>
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
