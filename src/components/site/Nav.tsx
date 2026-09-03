import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/about", label: "ZEN" },
  { to: "/events", label: "ÉDITIONS" },
  { to: "/experiences", label: "EXPÉRIENCES" },
  { to: "/gallery", label: "GALERIE" },
  { to: "/journal", label: "JOURNAL" },
  { to: "/partners", label: "PARTENAIRES" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="shell grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 md:h-20 lg:flex lg:justify-between">
          <Link to="/" className="min-w-0" onClick={() => setOpen(false)}>
            <span className="display block truncate text-lg md:text-xl">Dimanche Zen</span>
            <span className="label-xs hidden md:block">Le dimanche, autrement.</span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="link-underline text-[0.7rem] font-semibold tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <Link to="/tickets" className="btn-zen !px-5 !py-2.5 text-[0.65rem] md:!px-6 md:!py-3">
              <span className="hidden md:inline">Prochain ZEN</span>
              <span className="md:hidden">Tickets</span>
              <span aria-hidden>→</span>
            </Link>
            <button
              type="button"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[5px] lg:hidden"
            >
              <span
                className={`h-[1.5px] w-6 bg-foreground transition-transform duration-300 ${open ? "translate-y-[6.5px] rotate-45" : ""}`}
              />
              <span className={`h-[1.5px] w-6 bg-foreground transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
              <span
                className={`h-[1.5px] w-6 bg-foreground transition-transform duration-300 ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-background transition-all duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="shell flex h-full flex-col justify-center gap-2 pt-20">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="display border-b border-border py-4 text-4xl transition-colors hover:text-primary"
              style={{
                transitionDelay: `${open ? 80 + i * 45 : 0}ms`,
                opacity: open ? 1 : 0,
                transform: open ? "none" : "translateY(18px)",
                transitionProperty: "opacity, transform, color",
                transitionDuration: "600ms",
              }}
            >
              {l.label}
            </Link>
          ))}
          <p className="label-xs mt-8">Pointe-Noire · Congo</p>
        </div>
      </div>
    </>
  );
}
