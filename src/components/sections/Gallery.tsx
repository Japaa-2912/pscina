import { useState } from "react";
import { gallery } from "../../data/gallery";
import { Lightbox } from "../Lightbox";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <Section id="galeria" className="bg-white">
      <SectionHeading
        eyebrow="Galeria"
        title="Piscinas que cuidamos"
        description="Confira alguns dos nossos trabalhos de limpeza, tratamento e manutenção."
      />

      <Reveal className="mt-12 grid grid-cols-2 gap-3 auto-rows-[160px] sm:mt-14 sm:gap-4 sm:auto-rows-[200px] md:grid-cols-4 md:auto-rows-[240px]">
        {gallery.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setLightboxIndex(index)}
            className={`group relative block overflow-hidden rounded-2xl text-left ${item.span}`}
            aria-label={`Ampliar foto: ${item.title}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-deep/75 via-deep/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <span className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center justify-between gap-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="text-sm font-medium text-white">{item.title}</span>
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                Ampliar
              </span>
            </span>
          </button>
        ))}
      </Reveal>

      {lightboxIndex !== null && (
        <Lightbox
          items={gallery}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </Section>
  );
}