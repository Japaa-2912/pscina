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
    before: "/images/antes-depois/antes-1.svg",
    after: "/images/antes-depois/depois-1.svg",
    altBefore: "Piscina antes da manutenção profissional",
    altAfter: "Piscina depois da manutenção profissional",
    note: "Exemplo ilustrativo — substituir pelas fotos reais.",
  },
  {
    id: "ba2",
    title: "Água cristalina após troca de areia do filtro",
    before: "/images/antes-depois/antes-2.svg",
    after: "/images/antes-depois/depois-2.svg",
    altBefore: "Água turva antes da troca de areia do filtro",
    altAfter: "Água cristalina depois da troca de areia do filtro",
    note: "Exemplo ilustrativo — substituir pelas fotos reais.",
  },
];