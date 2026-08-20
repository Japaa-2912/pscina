import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { site } from "./src/config/site";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Injeta meta tags de SEO, Open Graph e dados estruturados Schema.org a
 *  partir da configuração central (src/config/site.ts). */
function seoPlugin() {
  const url = site.siteUrl.replace(/\/$/, "");
  const title = `${site.businessName} | Limpeza, manutenção e tratamento de piscinas`;
  const description = `Limpeza, manutenção e tratamento profissional de piscinas, troca de areia do filtro e produtos para o cuidado da água. Atendimento rápido pelo WhatsApp ${site.whatsappDisplay}.`;

  const localBusiness: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}/#empresa`,
    name: site.businessName,
    url,
    image: `${url}${site.images.og}`,
    telephone: `+${site.whatsappNumber}`,
    priceRange: "$$",
    description,
    sameAs: [site.instagramUrl],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: `+${site.whatsappNumber}`,
      availableLanguage: ["Portuguese (Brazil)"],
    },
  };

  if (site.city || site.street) {
    localBusiness.address = {
      "@type": "PostalAddress",
      streetAddress: site.street || undefined,
      addressLocality: site.city || undefined,
      addressRegion: site.state || undefined,
      postalCode: site.zip || undefined,
      addressCountry: "BR",
    };
  }

  if (site.openingHours) {
    localBusiness.openingHoursSpecification = {
      "@type": "OpeningHoursSpecification",
      description: site.openingHours,
    };
  }

  if (site.serviceAreas.length > 0) {
    localBusiness.areaServed = {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: site.geo.latitude,
        longitude: site.geo.longitude,
      },
      geoRadius: site.geoRadius,
    };
  }

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Limpeza, manutenção e tratamento de piscinas",
    provider: { "@id": `${url}/#empresa` },
    areaServed: { "@type": "Place", name: site.region || "região de atendimento" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de piscina",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Limpeza de piscinas" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Manutenção de piscinas" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tratamento da água" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Troca de areia do filtro" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Produtos para piscina" } },
      ],
    },
  };

  const jsonLd = JSON.stringify([localBusiness, service]).replace(/</g, "\\u003c");

  const meta = `
  <meta name="description" content="${esc(description)}" />
  <link rel="canonical" href="${url}/" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="${esc(site.businessName)}" />
  <meta property="og:title" content="${esc(title)}" />
  <meta property="og:description" content="${esc(description)}" />
  <meta property="og:url" content="${url}/" />
  <meta property="og:image" content="${url}${site.images.og}" />
  <meta property="og:locale" content="pt_BR" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(title)}" />
  <meta name="twitter:description" content="${esc(description)}" />
  <meta name="twitter:image" content="${url}${site.images.og}" />
  <meta name="robots" content="index, follow" />`;

  return {
    name: "inject-seo",
    transformIndexHtml(html: string) {
      return html
        .replace(/<title>.*?<\/title>/, `<title>${esc(title)}</title>`)
        .replace("<!--SEO-->", () => meta)
        .replace("</head>", () => `<script type="application/ld+json">${jsonLd}</script></head>`);
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), seoPlugin()],
});