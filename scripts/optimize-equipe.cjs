const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

async function optimize(src, dest, width) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  await sharp(src)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(dest);
  const m = await sharp(dest).metadata();
  console.log(`${dest} <- ${src} (${m.width}x${m.height})`);
}

(async () => {
  await optimize("img/equipe garagem.jpg", "public/images/equipe/equipe-garagem.jpg", 1200);
  await optimize("img/equipe piscina.jpg", "public/images/equipe/equipe-piscina.jpg", 900);
  await optimize(
    "public/images/galeria/galeria-12.jpg",
    "public/images/hero/hero-profissional.jpg",
    1200
  );
  console.log("pronto");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
