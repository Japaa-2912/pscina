const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const OUT = "public/images/antes-depois";
fs.mkdirSync(OUT, { recursive: true });

const W = 1000;
const H = 667;

function labelOverlay(text, subtext, color, bg) {
  const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="${W}" height="${H}" fill="${bg}" />
    <g transform="translate(40,40)">
      <rect x="0" y="0" width="190" height="64" rx="10" fill="${color}" />
      <text x="95" y="42" font-family="Arial, sans-serif" font-size="40" font-weight="700" fill="#ffffff" text-anchor="middle">${text}</text>
    </g>
    <text x="${W - 40}" y="${H - 36}" font-family="Arial, sans-serif" font-size="26" font-weight="700" fill="rgba(255,255,255,0.92)" text-anchor="end" letter-spacing="2">${subtext}</text>
  </svg>`;
  return Buffer.from(svg);
}

function tintOverlay(color, opacity) {
  const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="${W}" height="${H}" fill="${color}" fill-opacity="${opacity}" />
  </svg>`;
  return Buffer.from(svg);
}

async function build(src, beforeOut, afterOut) {
  const img = sharp(src).resize(W, H, { fit: "cover", position: "centre" });

  // ANTES: água esverdeada/turva (menos saturação, leve escurecida + tom verde)
  await img
    .clone()
    .modulate({ brightness: 0.86, saturation: 0.55 })
    .composite([
      { input: tintOverlay("#2f7d4f", 0.32), blend: "overlay" },
      { input: labelOverlay("ANTES", "FOTO ILUSTRATIVA", "#1C8A4D", "rgba(0,0,0,0)") },
    ])
    .jpeg({ quality: 82 })
    .toFile(beforeOut);

  // DEPOIS: água cristalina (mais saturação, leve clareamento + tom azul)
  await img
    .clone()
    .modulate({ brightness: 1.06, saturation: 1.25 })
    .composite([
      { input: tintOverlay("#7fd4e6", 0.14), blend: "screen" },
      { input: labelOverlay("DEPOIS", "FOTO ILUSTRATIVA", "#0A343C", "rgba(0,0,0,0)") },
    ])
    .jpeg({ quality: 82 })
    .toFile(afterOut);

  console.log("gerado:", beforeOut, afterOut);
}

(async () => {
  await build(
    "public/images/galeria/galeria-1.jpg",
    path.join(OUT, "antes-1.jpg"),
    path.join(OUT, "depois-1.jpg")
  );
  await build(
    "public/images/galeria/galeria-2.jpg",
    path.join(OUT, "antes-2.jpg"),
    path.join(OUT, "depois-2.jpg")
  );
  console.log("pronto");
})();
