import { getCollection } from "astro:content";
import { OGImageRoute } from "astro-og-canvas";
import { home } from "../constants";

const collectionEntries = await getCollection("posts");

export const { getStaticPaths, GET } = OGImageRoute({
  // Tell us the name of your dynamic route segment.
  // In this case it’s `route`, because the file is named `[...route].ts`.
  param: "route",

  // Map the array of content collection entries to create an object.
  // Converts [{ id: 'post.md', data: { title: 'Example', description: '' } }]
  // to { 'post.md': { title: 'Example', description: '' } }
  pages: {
    ...Object.fromEntries(collectionEntries.map(({ id, data }) => [id, data])),
    ...{ home },
  },

  getSlug: (path) => path,

  getImageOptions: (_, page) => ({ title: page.title, description: page.description }),
});
