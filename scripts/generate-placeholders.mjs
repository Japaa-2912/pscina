/**
 * Gera imagens placeholder SVG para todos os slots de foto do site.
 *
 * Uso:  npm run placeholders
 *
 * As imagens usam a paleta da Med's Piscinas (azul profundo + água + areia)
 * e ficam claramente identificadas como "substituir por foto real".
 * Para usar uma foto real: salve o arquivo em /public/images/... e atualize
 * o caminho correspondente em src/config/site.ts ou nos arquivos de dados.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function svg({ label, w, h, sublabel = "Foto real em breve", note = "Substituir por foto real em /public/images/" }) {
  const cx = Math.round(w * 0.88);
  const cy = Math.round(h * 0.14);
  const sunR = Math.round(w * 0.07);
  const fs = Math.round(Math.min(w, h) * 0.045);
  const subFs = Math.round(fs * 0.5);
  const noteFs = Math.round(subFs * 0.72);

  const wave1 = `M0,${Math.round(h * 0.62)} C${Math.round(w * 0.2)},${Math.round(h * 0.5)} ${Math.round(w * 0.4)},${Math.round(h * 0.72)} ${Math.round(w * 0.6)},${Math.round(h * 0.6)} C${Math.round(w * 0.8)},${Math.round(h * 0.5)} ${Math.round(w * 0.9)},${Math.round(h * 0.55)} ${w},${Math.round(h * 0.52)} L${w},${h} L0,${h} Z`;
  const wave2 = `M0,${Math.round(h * 0.7)} C${Math.round(w * 0.25)},${Math.round(h * 0.58)} ${Math.round(w * 0.5)},${Math.round(h * 0.8)} ${Math.round(w * 0.75)},${Math.round(h * 0.68)} C${Math.round(w * 0.9)},${Math.round(h * 0.62)} ${Math.round(w * 0.95)},${Math.round(h * 0.64)} ${w},${Math.round(h * 0.62)} L${w},${h} L0,${h} Z`;

  const bg = `<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0A343C"/><stop offset="1" stop-color="#3FA8BC"/></linearGradient>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">
  <defs>${bg}</defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <circle cx="${cx}" cy="${cy}" r="${sunR}" fill="#C2AE8A" opacity="0.85"/>
  <path d="${wave2}" fill="#E6D9C0" opacity="0.14"/>
  <path d="${wave1}" fill="#8FD0DB" opacity="0.22"/>
  <text x="50%" y="${Math.round(h * 0.42)}" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="${fs}" font-weight="600" fill="#F8F4EA">${label}</text>
  <text x="50%" y="${Math.round(h * 0.42 + fs * 1.35)}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${subFs}" fill="#E6D9C0">${sublabel}</text>
  <text x="50%" y="${Math.round(h * 0.42 + fs * 1.35 + subFs * 1.6)}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${noteFs}" fill="#FFFFFF" opacity="0.4">${note}</text>
</svg>
`;
}

/** [caminho, rótulo, largura, altura] */
const files = [
  ["public/images/hero/hero-piscina.svg", "Foto do hero — piscina cristalina", 1600, 900],
  ["public/images/profissional/profissional-piscineiro.svg", "Foto do profissional da Med's Piscinas", 900, 1100],

  ["public/images/servicos/servico-limpeza.svg", "Limpeza de Piscinas", 800, 520],
  ["public/images/servicos/servico-manutencao.svg", "Manutenção de Piscinas", 800, 520],
  ["public/images/servicos/servico-tratamento-agua.svg", "Tratamento da Água", 800, 520],
  ["public/images/servicos/servico-troca-areia.svg", "Troca de Areia do Filtro", 800, 520],
  ["public/images/servicos/servico-produtos.svg", "Produtos para Piscina", 800, 520],
  ["public/images/servicos/servico-equipamentos.svg", "Manutenção de Equipamentos", 800, 520],

  ["public/images/produtos/produto-cloro.svg", "Cloro", 640, 640],
  ["public/images/produtos/produto-tratamento.svg", "Produtos para tratamento", 640, 640],
  ["public/images/produtos/produto-limpeza.svg", "Produtos de limpeza", 640, 640],

  ["public/images/galeria/galeria-limpeza-1.svg", "Limpeza de bordas", 800, 1000],
  ["public/images/galeria/galeria-limpeza-2.svg", "Piscina limpa e cristalina", 800, 560],
  ["public/images/galeria/galeria-manutencao-1.svg", "Verificação de equipamentos", 800, 800],
  ["public/images/galeria/galeria-manutencao-2.svg", "Casa de máquinas", 800, 1000],
  ["public/images/galeria/galeria-troca-areia-1.svg", "Troca de areia do filtro", 800, 560],
  ["public/images/galeria/galeria-troca-areia-2.svg", "Manutenção do filtro", 800, 700],
  ["public/images/galeria/galeria-produtos-1.svg", "Produtos para a piscina", 800, 800],
  ["public/images/galeria/galeria-antes-depois-1.svg", "Antes e depois da manutenção", 800, 640],

  ["public/images/antes-depois/antes-1.svg", "Antes da manutenção", 900, 675],
  ["public/images/antes-depois/depois-1.svg", "Depois da manutenção", 900, 675],
  ["public/images/antes-depois/antes-2.svg", "Antes da troca de areia", 900, 675],
  ["public/images/antes-depois/depois-2.svg", "Depois da troca de areia", 900, 675],
];

for (const [path, label, w, h] of files) {
  const full = join(root, path);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, svg({ label, w, h }), "utf-8");
  console.log(`✓ ${path}`);
}

console.log(`\nGeradas ${files.length} imagens placeholder.`);