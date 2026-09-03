import { Link } from "@tanstack/react-router";
import { brand } from "@/data/site";

const nav = [
  { to: "/events", label: "Éditions" },
  { to: "/experiences", label: "Expériences" },
  { to: "/gallery", label: "Galerie" },
  { to: "/journal", label: "Journal" },
  { to: "/partners", label: "Partenaires" },
  { to: "/vendors", label: "Exposants" },
  { to: "/artists/apply", label: "Talents" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="shell grid gap-14 py-16 md:grid-cols-[1.2fr_1fr_1fr] md:py-24">
        <div>
          <p className="display text-3xl md:text-4xl">Dimanche Zen</p>
          <p className="mt-3 text-sm text-muted-foreground">{brand.signature}</p>
          <p className="label-xs mt-8">{brand.pillars}</p>
        </div>

        <nav className="flex flex-col gap-3">
          <p className="label-xs mb-2">Navigation</p>
          {nav.map((l) => (
            <Link key={l.to} to={l.to} className="link-underline w-fit text-sm text-muted-foreground hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <p className="label-xs mb-2">Contact</p>
          <a href={`mailto:${brand.email}`} className="link-underline w-fit text-sm text-muted-foreground hover:text-foreground">
            {brand.email}
          </a>
          <a href={brand.instagram} className="link-underline w-fit text-sm text-muted-foreground hover:text-foreground">
            Instagram
          </a>
          <a href={brand.tiktok} className="link-underline w-fit text-sm text-muted-foreground hover:text-foreground">
            TikTok
          </a>
          <a href={brand.whatsapp} className="link-underline w-fit text-sm text-muted-foreground hover:text-foreground">
            WhatsApp
          </a>
          <p className="label-xs mt-6">{brand.city}</p>
        </div>
      </div>
      <div className="shell flex flex-col gap-2 border-t border-border py-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
        <p>© 2026 Dimanche ZEN. Tous droits réservés.</p>
        <p>Pointe-Noire · Congo</p>
      </div>
    </footer>
  );
}
