export interface Testimonial {
  id: string;
  name: string;
  text: string;
  source?: string;
}

/**
 * Depoimentos de clientes.
 * IMPORTANTE: NADA foi inventado. A lista começa vazia.
 * Para adicionar um depoimento real (do Instagram ou fornecido pelo cliente),
 * basta incluir um item neste array. A seção "Quem conhece, recomenda"
 * só aparece quando houver pelo menos um depoimento.
 */
export const testimonials: Testimonial[] = [];

export const testimonialsAvailable = testimonials.length > 0;