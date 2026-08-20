# Med's Piscinas — Site institucional

Site profissional, moderno e responsivo para a **Med's Piscinas**, empresa de
limpeza, manutenção e tratamento de piscinas. Desenvolvido com **React +
TypeScript + Tailwind CSS** (Vite), 100% estático, otimizado para SEO local e
conversão via WhatsApp.

## ✨ O que o site entrega

- Página única (landing) com as 13 seções: Hero, Serviços, Antes e depois,
  Sobre, Como funciona, Galeria, Área de atendimento, Produtos, Feed do
  Instagram, Depoimentos, FAQ, CTA final e Footer.
- Botão flutuante de WhatsApp + barra inferior no mobile (WhatsApp · Orçamento ·
  Instagram).
- Mensagens de WhatsApp pré-preenchidas e diferentes por serviço.
- SEO local: título e meta description, Open Graph, dados estruturados
  Schema.org (`LocalBusiness` + `Service`), `sitemap.xml`, `robots.txt`,
  headings semânticos e URLs amigáveis.
- Identidade visual inspirada em **água + areia + sol + profissionalismo**
  (azul profundo, azul água, areia, bege e dourado solar), sem visual de
  template genérico.
- Mobile-first, animações leves, acessibilidade (WCAG AA, foco visível,
  `prefers-reduced-motion`) e performance (imagens otimizadas e lazy loading).

## 📁 Estrutura do projeto

```
public/
├─ favicon.svg                 # ícone do site (marca da empresa)
├─ robots.txt                  # TROQUE_AQUI: domínio real
├─ sitemap.xml                 # TROQUE_AQUI: domínio real
└─ images/                     # todas as imagens do site
   ├─ logo/logo-mark.svg       # marca/logo (SVG próprio — pode substituir)
   ├─ hero/                    # foto da primeira dobra
   ├─ profissional/            # foto do profissional (seção Sobre)
   ├─ servicos/                # 6 imagens dos serviços
   ├─ produtos/                # 3 imagens dos produtos
   ├─ galeria/                 # 8 imagens da galeria (formatos variados)
   ├─ antes-depois/            # pares antes/depois
   └─ og-image.svg             # imagem de compartilhamento (trocar por .jpg 1200x630)

src/
├─ config/site.ts              # ★ TODOS os dados da empresa (editável)
├─ data/                       # conteúdos editáveis (serviços, produtos,
│  │                          #   galeria, antes/depois, FAQ, depoimentos)
├─ lib/whatsapp.ts             # links do WhatsApp com mensagens pré-preenchidas
├─ components/
│  ├─ ui/                      # botões, containers, seções, animações, ícones
│  ├─ layout/                  # header, menu mobile, footer, WhatsApp flutuante, barra mobile
│  └─ sections/                # as seções da página
├─ App.tsx
└─ main.tsx
```

## 🚀 Como executar localmente

Pré-requisitos: **Node.js 18+** e **npm**.

```bash
# 1. instalar dependências
npm install

# 2. ambiente de desenvolvimento (http://localhost:5173)
npm run dev

# 3. gerar/regenerar as imagens placeholder (opcional)
npm run placeholders

# 4. build de produção (gera a pasta /dist)
npm run build

# 5. pré-visualizar o build (http://localhost:4173)
npm run preview
```

Deploy estático: envie a pasta `dist/` para a **Vercel**, **Netlify** ou
qualquer hospedagem estática (há um `vercel.json` pronto com cache otimizado).

## ✏️ Onde editar cada informação

Tudo está centralizado. Em **95% dos casos basta editar `src/config/site.ts`**:

| O que alterar | Onde |
| --- | --- |
| Nome/razão social | `site.businessName` |
| Número do WhatsApp | `site.whatsappNumber` (com 55 + DDD, só dígitos) e `site.whatsappDisplay` |
| Instagram | `site.instagramUrl` e `site.instagramHandle` |
| Domínio do site | `site.siteUrl` |
| Cidade / região / UF / endereço / CEP | `site.city`, `site.region`, `site.state`, `site.street`, `site.zip` |
| Cidades atendidas (campo "Ver atendimento") | `site.serviceAreas` |
| Coordenadas e raio (SEO local) | `site.geo` e `site.geoRadius` |
| Horário de atendimento | `site.openingHours` |
| Foto do hero | `site.images.hero` |
| Foto do profissional | `site.images.profissional` |
| Logotipo | `site.images.logo` (+ arquivo em `public/images/logo/`) |
| Feed do Instagram ao vivo | `site.instagramFeed` |

### Conteúdos por seção (arquivos em `src/data/`)

- **Serviços**: `services.ts` — títulos, descrições e mensagens de WhatsApp.
- **Produtos**: `products.ts` — apenas categorias (marcas/preços ficam sob consulta).
- **Galeria**: `gallery.ts` — itens e categorias.
- **Antes e depois**: `beforeAfter.ts` — pares de fotos (seção some se o array estiver vazio).
- **FAQ**: `faqs.ts` — perguntas e respostas.
- **Depoimentos**: `testimonials.ts` — começa vazio (nada foi inventado); a seção
  mostra um aviso honesto até existirem depoimentos reais.

## 🖼️ Substituindo as fotos (importante)

As fotos atuais são **placeholders SVG** criados com a paleta do site
(azul profundo + água + areia + sol) e marcados com a frase
*"Substituir por foto real"*.

Para usar uma foto real:

1. Salve o arquivo em `public/images/<pasta>/` com um nome claro
   (ex.: `hero-piscina.jpg`, `profissional-piscineiro.jpg`).
2. Atualize o caminho no arquivo correspondente (em `site.images` ou nos
   arquivos de `src/data/`).
3. Rode `npm run build` para gerar o novo `dist/`.

Sugestão de fotos: piscina cristalina (hero), profissional realizando limpeza,
aspiração, análise da água, troca de areia do filtro, casa de máquinas,
produtos e fotos de antes/depois.

## 📸 Feed do Instagram ao vivo

A seção "Acompanhe nosso trabalho" pode exibir as fotos do perfil
**@medspiscinas** atualizando automaticamente, sem precisar manter as fotos
no site. Duas opções:

### Opção A — Lightwidget (recomendada, funciona em site estático)

1. Crie uma conta gratuita em https://lightwidget.com.
2. Adicione o perfil `@medspiscinas` e gere o widget (configure para
   sincronizar sozinho).
3. Copie o **ID** do widget (a parte `widgets/XXXX.html` do código gerado).
4. Em `src/config/site.ts`, ative:

```ts
instagramFeed: {
  enabled: true,
  method: "lightwidget",
  widgetId: "SEU_ID_AQUI", // substitua
  accessToken: "",
},
```

5. Rode `npm run build` e publique. Pronto: as fotos do Instagram aparecem e
   atualizam sozinhas na página.

### Opção B — Instagram Graph API (nativa, requer backend)

1. Vincule a conta do Instagram a uma página do Facebook (Conta Profissional).
2. Crie um app no Facebook Developers e gere um token de acesso de longa duração.
3. Ative em `site.instagramFeed` com `method: "graph"` e `accessToken`.
4. Adicione uma função serverless na Vercel/Netlify (ex.: `/api/instagram.ts`)
   que busque as mídias do perfil e retorne um JSON; o componente já está
   preparado para receber essa estrutura.

## 🔎 SEO local

- Meta tags, canonical, Open Graph e Twitter Card são injetados a partir de
  `src/config/site.ts` (veja `vite.config.ts`).
- JSON-LD com `LocalBusiness`, `Service`, `OfferCatalog`, `ContactPoint` e
  `areaServed` (GeoCircle) são gerados automaticamente.
- `public/sitemap.xml` e `public/robots.txt` apontam para o domínio
  `https://TROQUE_AQUI.com.br` — **substitua pelo domínio real** após o deploy.
- Palavras-chave ("piscineiro", "limpeza de piscina", "manutenção de piscina",
  "troca de areia do filtro", "tratamento de piscina", "produtos para piscina")
  aparecem de forma natural em títulos, textos, alts e dados estruturados.

## 🧑‍💻 Stack

- **Vite 7** + **React 19** + **TypeScript**
- **Tailwind CSS v4** (tema customizado em `src/index.css`)
- Animações leves com IntersectionObserver (`components/ui/Reveal.tsx`)
- Ícones SVG próprios (sem biblioteca externa)
- Sem dependências pesadas — bundle inicial de ~74 KB (gzip)

---
© 2026 Med's Piscinas. Todos os direitos reservados.