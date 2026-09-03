import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { journalPosts } from "@/data/site";

export const Route = createFileRoute("/journal/$slug")({
  loader: ({ params }) => {
    const post = journalPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.post.title ?? "Article"} — Dimanche ZEN` },
      {
        name: "description",
        content: loaderData?.post.excerpt ?? "Zen Stories — Dimanche ZEN.",
      },
    ],
  }),
  component: JournalArticlePage,
});

function JournalArticlePage() {
  const { post } = Route.useLoaderData();
  const others = journalPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <article>
        <header className="shell pt-32 pb-10 md:pt-48 md:pb-14">
          <Reveal>
            <p className="eyebrow">{post.category}</p>
            <h1 className="display mt-5 max-w-4xl text-[12vw] leading-[0.88] sm:text-5xl lg:text-7xl">
              {post.title}
            </h1>
            <p className="label-xs mt-8">
              {post.date} · {post.readTime}
            </p>
          </Reveal>
        </header>

        <Reveal className="shell zoom-frame pb-14 md:pb-20">
          <img
            src={post.image}
            alt={post.title}
            className="aspect-[21/9] w-full object-cover"
          />
        </Reveal>

        <div className="shell max-w-3xl pb-20 md:pb-28">
          <Reveal>
            <p className="text-xl text-muted-foreground md:text-2xl">{post.excerpt}</p>
          </Reveal>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            {post.body.map((paragraph, i) => (
              <Reveal key={i} delay={i * 60}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <Link to="/journal" className="btn-ghost-zen">
              ← Retour au journal
            </Link>
          </Reveal>
        </div>
      </article>

      {others.length > 0 ? (
        <section className="section-y border-t border-border">
          <div className="shell">
            <Reveal>
              <p className="eyebrow">À lire aussi</p>
            </Reveal>
            <div className="mt-10 grid gap-10 md:grid-cols-2">
              {others.map((p, i) => (
                <Reveal key={p.slug} as="article" delay={i * 80}>
                  <Link to="/journal/$slug" params={{ slug: p.slug }} className="zoom-frame group block">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                    <p className="eyebrow mt-5">{p.category}</p>
                    <h2 className="display mt-3 text-2xl transition-colors group-hover:text-primary">
                      {p.title}
                    </h2>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
