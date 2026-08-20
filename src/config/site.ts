/**
 * ============================================================================
 *  CONFIGURAÇÃO CENTRAL DO SITE — MED'S PISCINAS
 * ============================================================================
 *  Todas as informações da empresa ficam centralizadas AQUI.
 *  Altere somente este arquivo para atualizar o site inteiro
 *  (SEO, WhatsApp, Instagram, área de atendimento, imagens etc).
 *
 *  Campos com "TROQUE_AQUI" são os únicos que precisam de informação real
 *  fornecida pela empresa. Nada foi inventado.
 * ============================================================================
 */

export const site = {
  /** Nome comercial da empresa */
  businessName: "Med's Piscinas",

  /** Frase curta usada em meta tags e rodapé */
  tagline: "Limpeza, manutenção e tratamento profissional de piscinas",

  /**
   * URL pública do site.
   * TROQUE_AQUI: substitua pela URL real após o deploy (ex: https://medspiscinas.com.br)
   * Usada no canonical, Open Graph, sitemap e Schema.org.
   */
  siteUrl: "https://TROQUE_AQUI.com.br",

  /** WhatsApp: número com DDD e código do país 55, SOMENTE dígitos */
  whatsappNumber: "5511975996208",

  /** WhatsApp no formato de exibição */
  whatsappDisplay: "(11) 97599-6208",

  /** Instagram */
  instagramUrl: "https://www.instagram.com/medspiscinas/",
  instagramHandle: "@medspiscinas",

  /** E-mail (opcional). Se vazio, o site usa WhatsApp/Instagram como contato. */
  email: "",

  /* ========================================================================
   *  ÁREA DE ATENDIMENTO
   *  ----------------------------------------------------------------------
   *  TROQUE_AQUI: preencha cidade/região/estado e a lista de cidades
   *  atendidas. Isso alimenta o SEO local, o Schema.org e a seção
   *  "Área de Atendimento" do site.
   * ====================================================================== */
  city: "", // TROQUE_AQUI: cidade base (ex: "São Paulo")
  region: "", // TROQUE_AQUI: região de atendimento (ex: "Grande São Paulo")
  state: "", // TROQUE_AQUI: UF (ex: "SP")
  street: "", // TROQUE_AQUI: endereço (ex: "Av. Exemplo, 123")
  zip: "", // TROQUE_AQUI: CEP

  /** Lista de cidades/regiões atendidas (usada no campo "Ver atendimento"). */
  serviceAreas: [
    // TROQUE_AQUI: ex: "São Paulo", "Guarulhos", "Osasco", "Santo André"...
  ] as string[],

  /** Coordenadas aproximadas da região (usadas no Schema.org -> GeoCircle). */
  geo: {
    latitude: -23.5505, // TROQUE_AQUI: latitude da cidade base
    longitude: -46.6333, // TROQUE_AQUI: longitude da cidade base
  },
  /** Raio de atendimento em metros (padrão ~20 km). */
  geoRadius: 20000,

  /** Horário de atendimento (exibido no rodapé e no Schema.org). */
  openingHours: "", // TROQUE_AQUI: ex "Seg a Sáb, 08h às 18h"

  /* ========================================================================
   *  IMAGENS
   *  ----------------------------------------------------------------------
   *  As imagens placeholder (.svg) já existem no projeto. Para usar uma foto
   *  real, salve o arquivo em /public/images/... e atualize o caminho aqui
   *  (ou no arquivo de dados correspondente).
   * ====================================================================== */
  images: {
    /** Logo/marca. Já existe um SVG de marca próprio em /public/images/logo/logo-mark.svg */
    logo: "/images/logo/logo-mark.svg",
    /** Foto do hero (primeira dobra). Placeholder: hero-piscina.svg */
    hero: "/images/hero/hero-piscina.svg",
    /** Foto do profissional (seção Sobre). Placeholder: profissional-piscineiro.svg */
    profissional: "/images/profissional/profissional-piscineiro.svg",
    /** Imagem de compartilhamento (Open Graph). 1200x630. Placeholder gerado. */
    og: "/images/og-image.svg",
  },

  /* ========================================================================
   *  FEED DO INSTAGRAM AO VIVO (opcional)
   *  ----------------------------------------------------------------------
   *  Mostra as fotos do Instagram atualizando automaticamente na página.
   *
   *  Método recomendado (estático, sem backend): Lightwidget
   *    1. Crie uma conta gratuita em https://lightwidget.com
   *    2. Adicione o perfil @medspiscinas e gere o widget
   *    3. Copie o ID (a parte "widgets/XXXX.html" do código)
   *    4. Ative:  enabled: true, method: "lightwidget", widgetId: "XXXX"
   *
   *  Método nativo (requer backend/function): Instagram Graph API
   *    1. Vincule a conta do Instagram a uma página do Facebook
   *    2. Crie um app e um token de acesso de longa duração
   *    3. Ative:  enabled: true, method: "graph", accessToken: "XXXX"
   *    4. Adicione uma serverless function (ex: /api/instagram.ts na Vercel)
   * ====================================================================== */
  instagramFeed: {
    enabled: false, // TROQUE_AQUI: true quando o widget estiver pronto
    method: "lightwidget" as "lightwidget" | "graph",
    widgetId: "", // TROQUE_AQUI: ID do widget Lightwidget
    accessToken: "", // TROQUE_AQUI: token da Instagram Graph API
  },
} as const;

export type SiteConfig = typeof site;