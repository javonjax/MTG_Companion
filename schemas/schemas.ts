import { z } from 'zod';

/* 
  Common fields and transformers.
*/
export const LegalitySchema = z.enum(['not_legal', 'legal', 'banned', 'restricted']);
export type Legality = z.infer<typeof LegalitySchema>;
export const LegalityTransformer = LegalitySchema.transform((val) => val === 'legal');

export const RaritySchema = z.enum(['common', 'uncommon', 'rare', 'mythic', 'special', 'bonus']);
export type Rarity = z.infer<typeof RaritySchema>;

/*
  Card sets.
*/
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

export const SetsAPIResponseSchema = z.object({
  has_more: z.boolean(),
  data: z.array(CardSetSchema),
});

export type SetsAPIResponse = z.infer<typeof SetsAPIResponseSchema>;

/*
  Card.
*/
export const CardFaceSchema = z.object({
  cmc: z.number().optional(),
  color_indicator: z.array(z.string()).optional(),
  colors: z.array(z.string()).optional(),
  defense: z.string().optional(),
  flavor_text: z.string().optional(),
  image_uris: z
    .object({
      normal: z.string(),
      art_crop: z.string(),
      border_crop: z.string(),
    })
    .optional(),
  mana_cost: z.string(),
  name: z.string(),
  oracle_text: z.string().optional(),
  power: z.string().optional(),
  toughness: z.string().optional(),
  type_line: z.string().optional(),
});

export const CardSchema = z.object({
  id: z.string(),
  lang: z.string(),
  layout: z.string(),
  card_faces: z.array(CardFaceSchema).optional(),
  cmc: z.number(),
  color_identity: z.array(z.string()),
  colors: z.array(z.string()).optional(),
  keywords: z.array(z.string()),
  legalities: z.object({
    standard: LegalitySchema,
    future: LegalitySchema,
    historic: LegalitySchema,
    timeless: LegalitySchema,
    gladiator: LegalitySchema,
    pioneer: LegalitySchema,
    explorer: LegalitySchema,
    modern: LegalitySchema,
    legacy: LegalitySchema,
    pauper: LegalitySchema,
    vintage: LegalitySchema,
    penny: LegalitySchema,
    commander: LegalitySchema,
    oathbreaker: LegalitySchema,
    standardbrawl: LegalitySchema,
    brawl: LegalitySchema,
    alchemy: LegalitySchema,
    paupercommander: LegalitySchema,
    duel: LegalitySchema,
    oldschool: LegalitySchema,
    premodern: LegalitySchema,
    predh: LegalitySchema,
  }),
  loyalty: z.string().optional(),
  name: z.string(),
  oracle_text: z.string().optional(),
  power: z.string().optional(),
  toughness: z.string().optional(),
  type_line: z.string(),
  artist: z.string().optional(),
  digital: z.boolean(), // This refers to the card being digital only, such as alchemy cards.
  flavor_text: z.string().optional(),
  prices: z.object({
    usd: z.string().nullable(),
    eur: z.string().nullable(),
  }),
  purchase_uris: z
    .object({
      tcgplayer: z.string().optional(),
      cardmarket: z.string().optional(),
      cardhoarder: z.string().optional(),
    })
    .optional(),
  rarity: RaritySchema,
  released_at: z.string(),
  reprint: z.boolean(),
  set: z.string(), // Set code (usually 3 characters).
  set_name: z.string(), // Full set name.
  set_id: z.string(),
  textless: z.boolean(),
});

export type Card = z.infer<typeof CardSchema>;

export const CardsAPIResponseSchema = z.object({
  has_more: z.boolean(),
  data: z.array(CardSchema),
});

export type CardsAPIResponse = z.infer<typeof CardsAPIResponseSchema>;
