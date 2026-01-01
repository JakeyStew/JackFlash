import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    //slug: z.string(),
    featuredImage: z.string(),
    gallery: z.array(z.string()).optional(),
    description: z.string().optional(),
  }),
});

export const collections = {
  projects,
};
