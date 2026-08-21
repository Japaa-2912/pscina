export interface BeforeAfterPair {
  id: string;
  title: string;
  before: string;
  after: string;
  altBefore: string;
  altAfter: string;
  note?: string;
}

/**
 * Comparativos "antes e depois".
 * Coloque as fotos na pasta /img/ com os nomes abaixo e rode:
 *   npm run copy:beforeafter
 * (o script copia de /img/ para /public/images/antes-depois/)
 *   - antes-1.jpg  / depois-1.jpg
 *   - antes-2.jpg  / depois-2.jpg
 * Se não houver fotos suficientes, remova o par correspondente deste array
 * (a seção some automaticamente quando o array fica vazio).
 */
export const beforeAfter: BeforeAfterPair[] = [
  {
    id: "ba1",
    title: "Piscina com água verde recuperada",
    before: "/images/antes-depois/antes-1.jpg",
    after: "/images/antes-depois/depois-1.jpg",
    altBefore: "Piscina com água verde antes da manutenção profissional",
    altAfter: "Piscina com água cristalina depois da manutenção profissional",
  },
  {
    id: "ba2",
    title: "Água cristalina após troca de areia do filtro",
    before: "/images/antes-depois/antes-2.jpg",
    after: "/images/antes-depois/depois-2.jpg",
    altBefore: "Água turva antes da troca de areia do filtro",
    altAfter: "Água cristalina depois da troca de areia do filtro",
  },
];