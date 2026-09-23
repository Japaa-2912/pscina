const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const SRC = path.join("img", "img galeria");
const OUT = path.join("public", "images", "galeria");

fs.mkdirSync(OUT, { recursive: true });

const files = fs
  .readdirSync(SRC)
  .filter((f) => /\.(jpe?g|png)$/i.test(f))
  .sort();

(async () => {
  let n = 9;
  for (const file of files) {
    const dest = path.join(OUT, `galeria-${n}.jpg`);
    await sharp(path.join(SRC, file))
      .rotate()
      .resize({ width: 1000, withoutEnlargement: true })
      .jpeg({ quality: 78, mozjpeg: true })
      .toFile(dest);
    const meta = await sharp(dest).metadata();
    console.log(`galeria-${n}.jpg <- ${file} (${meta.width}x${meta.height})`);
    n++;
  }
  console.log(`pronto — ${files.length} imagens otimizadas`);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
