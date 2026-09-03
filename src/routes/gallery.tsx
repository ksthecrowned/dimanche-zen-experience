import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Galerie — Dimanche ZEN" },
      {
        name: "description",
        content: "Ceux qui étaient là : photos des éditions Dimanche ZEN à Pointe-Noire et Brazzaville.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Galerie"
        title="Ceux qui étaient"
        accent="là."
        text="Moments, faces, dancefloors — filtrez par édition et ouvrez en plein écran."
      />

      <section className="shell pb-24 md:pb-32">
        <Reveal>
          <GalleryGrid />
        </Reveal>
        <Reveal className="mt-16 flex flex-wrap gap-3">
          <Link to="/journal" className="btn-ghost-zen">
            Lire les Zen Stories <span aria-hidden>→</span>
          </Link>
          <Link to="/tickets" className="btn-zen">
            Rejoindre le prochain
          </Link>
        </Reveal>
      </section>
    </>
  );
}
