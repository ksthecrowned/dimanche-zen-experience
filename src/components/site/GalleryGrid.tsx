import { useState } from "react";
import { galleryFilters, galleryItems, type GalleryItem } from "@/data/site";

const spanClass: Record<GalleryItem["span"], string> = {
  tall: "row-span-2 aspect-[3/4]",
  wide: "sm:col-span-2 aspect-[16/10]",
  square: "aspect-square",
};

export function GalleryGrid({ filterable = true }: { filterable?: boolean }) {
  const [filter, setFilter] = useState("ALL");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);
  const items = filter === "ALL" ? galleryItems : galleryItems.filter((i) => i.edition === filter);

  return (
    <div>
      {filterable ? (
        <div className="mb-10 flex flex-wrap gap-2">
          {galleryFilters.map((f) => (
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
      ) : null}

      <div className="grid auto-rows-auto grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setLightbox(item)}
            className={`zoom-frame group relative ${spanClass[item.span]}`}
          >
            <img
              src={item.image}
              alt={item.alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <span className="label-xs absolute bottom-3 left-3 !text-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {item.edition}
            </span>
          </button>
        ))}
      </div>

      {lightbox ? (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 p-4 backdrop-blur-md"
          onClick={() => setLightbox(null)}
        >
          <img src={lightbox.image} alt={lightbox.alt} className="max-h-[85vh] w-auto max-w-full object-contain" />
          <button
            type="button"
            aria-label="Fermer"
            className="absolute top-6 right-6 text-sm tracking-[0.2em] uppercase"
            onClick={() => setLightbox(null)}
          >
            Fermer ✕
          </button>
        </div>
      ) : null}
    </div>
  );
}
