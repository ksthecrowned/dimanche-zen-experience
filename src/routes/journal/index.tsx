import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { journalFilters, journalPosts } from "@/data/site";

export const Route = createFileRoute("/journal/")({
  head: () => ({
    meta: [
      { title: "Journal — Dimanche ZEN" },
      {
        name: "description",
        content: "Zen Stories : recaps, people, culture et manifeste du Dimanche ZEN.",
      },
    ],
  }),
  component: JournalPage,
});

function JournalPage() {
  const [filter, setFilter] = useState("ALL");
  const posts =
    filter === "ALL" ? journalPosts : journalPosts.filter((p) => p.category === filter);

  return (
    <>
      <PageHeader
        eyebrow="Journal"
        title="Zen"
        accent="Stories"
        text="Récits, talents et manifeste — le journal de la communauté."
      />

      <section className="shell pb-24 md:pb-32">
        <div className="mb-12 flex flex-wrap gap-2">
          {journalFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 text-[0.65rem] font-bold tracking-[0.18em] uppercase transition-colors ${
                filter === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} as="article" delay={i * 70}>
              <Link to="/journal/$slug" params={{ slug: post.slug }} className="zoom-frame group block">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={post.image} alt={post.title} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <p className="eyebrow mt-5">{post.category}</p>
                <h2 className="display mt-3 text-2xl transition-colors group-hover:text-primary md:text-3xl">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">{post.excerpt}</p>
                <p className="label-xs mt-4">
                  {post.date} · {post.readTime}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        {posts.length === 0 ? (
          <p className="mt-10 text-muted-foreground">Aucun article dans cette catégorie pour le moment.</p>
        ) : null}
      </section>
    </>
  );
}
