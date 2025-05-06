import { z } from 'zod';

export const CardSetSchema = z.object({
  id: z.string(),
  code: z.string(),
  name: z.string(),
  card_count: z.number(),
  set_type: z.string(),
  released_at: z.string(),
  digital: z.boolean(),
  parent_set_code: z.string().optional(),
  icon_svg_uri: z.string(),
});

export type CardSet = z.infer<typeof CardSetSchema>;
export type CardSetList = CardSet[];

export const SetsAPIResponseSchema = z.object({
  has_more: z.boolean(),
  data: z.array(CardSetSchema),
});

export type SetsAPIResponse = z.infer<typeof SetsAPIResponseSchema>;
