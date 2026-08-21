
# Med's Piscinas — Site institucional

Site comercial profissional da **Med's Piscinas** — limpeza, manutenção e
tratamento de piscinas — com foco em **conversão pelo WhatsApp** e **SEO local**.

Desenvolvido com **React + TypeScript + Tailwind CSS** (Vite 7). 100% estático,
pronto para hospedagem na Vercel/Netlify/GitHub Pages.

## ✨ O que o site entrega

- Estrutura comercial completa: **Hero → Benefícios → Serviços → Como trabalhamos →
  Sobre → Por que escolher → Galeria → Antes e depois → Produtos → Área de
  atendimento → CTA → Instagram → Depoimentos → FAQ → Contato → Rodapé**.
- **Barra de topo** com horário de atendimento e WhatsApp + header com menu e
  botão **"Solicitar orçamento"**.
- **WhatsApp em tudo**: botão flutuante (desktop), barra fixa no mobile
  (WhatsApp · Orçamento · Instagram), e CTAs com mensagem pré-preenchida e
  específica por serviço.
- **Formulário de orçamento** (Nome, Telefone, Serviço, Cidade/região, Mensagem)
  que monta a solicitação e envia direto para o WhatsApp da empresa.
- **SEO local**: title, meta description, Open Graph, Twitter Card, dados
  estruturados Schema.org (`LocalBusiness` + `Service` + `GeoCircle`),
  `sitemap.xml`, `robots.txt`, headings semânticos e alt text descritivos.
- Identidade visual **água cristalina + areia + sol + limpeza** (azul profundo,
  azul água, tons de areia, bege e detalhes mínimos em dourado), sem cara de
  template genérico.
- **Fontes self-hosted** (`@fontsource-variable/inter` e `fraunces`) — sem
  requisição externa ao Google Fonts, primeira pintura instantânea.
- Mobile-first, animações discretas (reveal ao rolar, hover, transições), foco
  visível e suporte a `prefers-reduced-motion`.

## 🎨 Paleta (tema em `src/index.css`)

| Token | Cor | Uso |
| --- | --- | --- |
| `deep` | `#0A343C` | Azul profundo/petróleo — fundos, rodapé |
| `water` / `water-light` | `#3FA8BC` / `#8FD0DB` | Azul água cristalina |
| `sand` / `sand-light` | `#E6D9C0` / `#F0E8D6` | Tons de areia (fundos, chips) |
| `sand-deep` / `sand-dark` | `#C2AE8A` / `#A89370` | Areia úmida — acentos e botões |
| `cream` / `cream-dark` | `#F8F4EA` / `#EFE8D8` | Bege quente de fundo |
| `wa` / `wa-dark` | `#1C8A4D` / `#15693B` | Verde WhatsApp (CTAs) |

## 📁 Estrutura do projeto

```
public/
├─ favicon.png                # gerado a partir de img/simbulo.jpg (símbolo)
├─ robots.txt / sitemap.xml   # TROQUE_AQUI: domínio real
└─ images/
   ├─ logo/logo.jpg           # ★ logo real (imagem + nome da empresa)
   ├─ hero/hero-piscina.jpg   # foto de piscina (Pexels, licença livre)
   ├─ cta/cta-piscina.jpg     # foto do CTA intermediário (Pexels)
   ├─ profissional/           # ★ fotos reais do profissional trabalhando
   ├─ galeria/                # 8 fotos Pexels + 2 fotos reais da empresa
   ├─ produtos/               # fotos de água/piscina (Pexels)
   └─ antes-depois/           # placeholders SVG (substituir pelas fotos reais)

img/                          # fotos originais fornecidas pela empresa (fonte)
src/
├─ config/site.ts             # ★ TODOS os dados da empresa (editável)
├─ data/                      # services, products, gallery, benefits, whyUs,
│  │                          #   howItWorks, beforeAfter, faqs, testimonials
├─ lib/whatsapp.ts            # links WhatsApp com mensagens pré-preenchidas
└─ components/
   ├─ ui/                     # Button, Container, Section, Reveal, SectionHeading, icons
   ├─ layout/                 # Header (com barra de topo), Footer, WhatsAppFloat, MobileBottomBar
   └─ sections/               # Hero, Benefits, Services, HowItWorks, About, WhyUs,
                               #   Gallery, BeforeAfter, Products, ServiceArea, CTA,
                               #   InstagramFeed, Testimonials, Faq, Contact
```

## 🚀 Como executar

Pré-requisitos: **Node.js 18+** e **npm**.

```bash
npm install            # instala as dependências
npm run dev            # ambiente de desenvolvimento (http://localhost:5173)
npm run build          # build de produção (gera /dist)
npm run preview        # pré-visualiza o build (http://localhost:4173)
npm run placeholders   # regenera imagens placeholder (antes/depois)
npm run typecheck      # checagem de tipos
```

> **Importante:** para medir a velocidade real, use `npm run build` + `npm run
> preview`. O `npm run dev` tem "cold start" no Windows (transforma módulos sob
> demanda) — isso não acontece no site publicado.

Deploy: envie a pasta `dist/` para a **Vercel** (ou Netlify). Há um
`vercel.json` pronto com cache de imagens.

## ✏️ Onde editar cada informação

**95% dos casos = `src/config/site.ts`:**

| O que alterar | Campo |
| --- | --- |
| Nome da empresa | `businessName` |
| WhatsApp | `whatsappNumber` (55 + DDD, só dígitos) e `whatsappDisplay` |
| Instagram | `instagramUrl` e `instagramHandle` |
| Domínio do site | `siteUrl` |
| Cidade / região / UF / endereço / CEP | `city`, `region`, `state`, `street`, `zip` |
| Cidades atendidas | `serviceAreas` (alimenta o campo "Verificar atendimento") |
| Coordenadas / raio (SEO local) | `geo` e `geoRadius` |
| Horário de atendimento | `openingHours` |
| Imagens | `images` (logo, hero, profissional, cta, og) |
| Feed do Instagram ao vivo | `instagramFeed` (Lightwidget ou Graph API) |

**Conteúdos por seção (`src/data/`):**
- `services.ts` — 6 serviços (limpeza, manutenção, tratamento da água, troca de
  areia, produtos, equipamentos) com mensagem própria de WhatsApp.
- `products.ts` — cloro, tratamento e limpeza (sem marcas/preços inventados).
- `gallery.ts` — mosaico editorial (use `span` para controlar o tamanho das fotos).
- `benefits.ts`, `whyUs.ts`, `howItWorks.ts` — faixas, diferenciais e etapas.
- `beforeAfter.ts` — comparativos antes/depois (SVG ilustrativos marcados).
- `faqs.ts`, `testimonials.ts` — FAQ e depoimentos (depoimentos começam vazios).

## 🖼️ Imagens

A estrutura já usa fotos reais da empresa e fotos livres do Pexels:

- **`img/logo.jpg`** → `public/images/logo/logo.jpg` (header/footer) e
  **`img/simbulo.jpg`** → `favicon.png` + `og-image.jpg` (Open Graph 1200×630).
- **`img/foto profissional do mesmo*.jpg`** → seção **Sobre** e galeria.
- **Hero / CTA / galeria / produtos** → fotos de piscina do Pexels (licença
  livre, sem atribuição obrigatória).

Para trocar por fotos suas: salve em `public/images/<pasta>/` e atualize o
caminho em `src/config/site.ts` (imagens principais) ou nos arquivos de
`src/data/` (galeria/produtos/antes-depois).

## 📸 Feed do Instagram ao vivo (opcional)

A seção **"Acompanhe nosso trabalho"** mostra as fotos do perfil
**@medspiscinas** atualizando automaticamente. Ative em `src/config/site.ts`:

- **Lightwidget** (recomendado, funciona em site estático):
  1. Crie conta em https://lightwidget.com e gere o widget do perfil.
  2. Copie o ID (a parte `widgets/XXXX.html`) e configure
     `instagramFeed.enabled = true`, `method: "lightwidget"`, `widgetId: "XXXX"`.
- **Instagram Graph API** (requer backend): configure `method: "graph"` +
  `accessToken` e adicione uma serverless function que retorne as mídias.

Enquanto o widget não estiver pronto, a seção exibe um convite para seguir o
perfil.

## 🔎 SEO local

- Meta tags, canonical, Open Graph e Twitter Card são injetados a partir de
  `src/config/site.ts` (veja `vite.config.ts`).
- JSON-LD com `LocalBusiness`, `Service`, `OfferCatalog`, `ContactPoint` e
  `areaServed` (GeoCircle) gerados automaticamente.
- `public/sitemap.xml` e `public/robots.txt` apontam para
  `https://TROQUE_AQUI.com.br` — **substitua pelo domínio real** após o deploy.
- Quando a cidade/região for preenchida, o conteúdo já está pronto para
  pesquisas como "piscineiro [cidade]", "limpeza de piscina [cidade]",
  "troca de areia de filtro de piscina" etc., sem keyword stuffing.

## 🧑‍💻 Stack

- **Vite 7** + **React 19** + **TypeScript**
- **Tailwind CSS v4** (tema customizado em `src/index.css`)
- **Fontes self-hosted**: `@fontsource-variable/inter` + `@fontsource-variable/fraunces`
- Animações leves com IntersectionObserver (`components/ui/Reveal.tsx`)
- Ícones SVG próprios (sem biblioteca externa)
- Bundle inicial de ~75 KB (gzip), sem requisições externas de CSS/fontes

---
© 2026 Med's Piscinas — Todos os direitos reservados.