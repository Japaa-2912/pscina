import { useState } from "react";
import {
  gallery,
  galleryCategories,
  type GalleryCategory,
} from "../../data/gallery";
import { Lightbox } from "../Lightbox";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

export function Gallery() {
  const [active, setActive] = useState<GalleryCategory | "todos">("todos");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const items =
    active === "todos"
      ? gallery
      : gallery.filter((item) => item.category === active);

  return (
    <Section id="galeria" className="bg-cream">
      <SectionHeading
        eyebrow="Galeria"
        title="Nosso trabalho em fotos"
        description="As fotos exibidas são ilustrativas e serão substituídas pelas fotos reais dos serviços realizados, publicadas no Instagram da empresa."
      />

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {galleryCategories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => setActive(category.id)}
            aria-pressed={active === category.id}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active === category.id
                ? "bg-deep text-cream"
                : "bg-white text-ink/70 hover:bg-sand-light"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <Reveal className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setLightboxIndex(items.indexOf(item))}
            className="group relative block w-full break-inside-avoid overflow-hidden rounded-2xl text-left"
            aria-label={`Ampliar foto: ${item.title}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 flex items-end bg-gradient-to-t from-deep/70 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-sm font-medium text-white">{item.title}</span>
            </span>
          </button>
        ))}
      </Reveal>

      {lightboxIndex !== null && (
        <Lightbox
          items={items}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </Section>
  );
}