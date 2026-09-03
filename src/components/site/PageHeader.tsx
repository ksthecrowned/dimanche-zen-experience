import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  accent,
  text,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  text?: string;
}) {
  return (
    <section className="shell pt-32 pb-14 md:pt-48 md:pb-20">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display mt-5 text-[13vw] leading-[0.85] sm:text-6xl lg:text-8xl">
          {title}
          {accent ? <span className="block text-primary">{accent}</span> : null}
        </h1>
        {text ? <p className="mt-7 max-w-xl text-base text-muted-foreground md:text-lg">{text}</p> : null}
      </Reveal>
    </section>
  );
}
