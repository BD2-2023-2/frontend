import { z } from 'zod'

export const ProdutoFormSchema = z.object({
  id: z.number().optional().readonly(),
  descricao: z.string(),
  valor: z.number(),
  quantidade: z.number(),
  fotoUrl: z.string()
})