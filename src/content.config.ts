import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { file, glob } from "astro/loaders";

// const plates = defineCollection({
//   loader: file("src/data/plates.json"),
//   schema: z.object({
//     slug: z.string(),
//     prettyName: z.string(),
//     description: z.string(),
//     plates: z.array(
//       z.object({
//         name: z.string(),
//         description: z.string(),
//         price: z.number(),
//       }),
//     ),
//   }),
// });

// const reviews = defineCollection({
//   loader: file("src/data/reviews.json"),
//   schema: z.object({
//     author: z.string(),
//     review: z.string(),
//   }),
// });

// const gallery = defineCollection({
//   loader: file("src/data/gallery.json"),
//   schema: ({ image }) =>
//     z.object({
//       title: z.string(),
//       alt: z.string(),
//       image: image(),
//     }),
// });

const plates = defineCollection({
  loader: glob({ pattern: "**/plates.json", base: "./src/data" }),
  schema: z.array(
    z.object({
      slug: z.string(),
      prettyName: z.string(),
      description: z.string(),
      plates: z.array(
        z.object({
          name: z.string(),
          description: z.string(),
          price: z.number(),
        }),
      ),
    }),
  ),
});

const reviews = defineCollection({
  loader: glob({ pattern: "**/reviews.json", base: "./src/data" }),
  schema: z.array(
    z.object({
      author: z.string(),
      review: z.string(),
    }),
  ),
});

const gallery = defineCollection({
  loader: glob({ pattern: "**/gallery.json", base: "./src/data" }),
  schema: ({ image }) =>
    z.array(
      z.object({
        title: z.string(),
        alt: z.string(),
        image: image(),
      }),
    ),
});

export const collections = { plates, reviews, gallery };
