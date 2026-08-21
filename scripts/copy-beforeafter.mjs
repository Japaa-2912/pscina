import fs from "fs";
import path from "path";

const SRC = "img";
const OUT = "public/images/antes-depois";

const files = [
  ["antes-1.jpg", "antes-1.jpg"],
  ["depois-1.jpg", "depois-1.jpg"],
  ["antes-2.jpg", "antes-2.jpg"],
  ["depois-2.jpg", "depois-2.jpg"],
];

fs.mkdirSync(OUT, { recursive: true });

let copied = 0;
for (const [from, to] of files) {
  const src = path.join(SRC, from);
  const dest = path.join(OUT, to);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    copied++;
    console.log(`copiado: ${src} -> ${dest}`);
  } else {
    console.log(`ausente (ignorado): ${src}`);
  }
}
console.log(`pronto — ${copied} arquivo(s) copiado(s) para ${OUT}`);
