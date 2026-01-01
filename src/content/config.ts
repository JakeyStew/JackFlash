import { defineCollection, z } from 'astro:content';

const portfolio = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  portfolio,
};