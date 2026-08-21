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
 * As imagens são placeholders para demonstrar o funcionamento do slider.
 * Para usar fotos reais do Instagram:
 *  1. Salve as fotos em /public/images/antes-depois/
 *  2. Atualize os caminhos `before` e `after` abaixo
 *  3. Se ainda não houver material, deixe o array vazio (a seção é ocultada)
 */
export const beforeAfter: BeforeAfterPair[] = [
  {
    id: "ba1",
    title: "Piscina com água verde recuperada",
    before: "/images/antes-depois/antes-1.jpg",
    after: "/images/antes-depois/depois-1.jpg",
    altBefore: "Piscina com água verde antes da manutenção profissional",
    altAfter: "Piscina com água cristalina depois da manutenção profissional",
    note: "Foto ilustrativa — substituir pelas fotos reais.",
  },
  {
    id: "ba2",
    title: "Água cristalina após troca de areia do filtro",
    before: "/images/antes-depois/antes-2.jpg",
    after: "/images/antes-depois/depois-2.jpg",
    altBefore: "Água turva antes da troca de areia do filtro",
    altAfter: "Água cristalina depois da troca de areia do filtro",
    note: "Foto ilustrativa — substituir pelas fotos reais.",
  },
];