import { getCollection } from "astro:content";
import { OGImageRoute } from "astro-og-canvas";
import { home } from "../constants";

const collectionEntries = await getCollection("posts");

export const { getStaticPaths, GET } = OGImageRoute({
  param: "route",

  pages: {
    ...Object.fromEntries(collectionEntries.map(({ id, data }) => [id + ".html", data])),
    ...{ "home.html": home },
  },

  getImageOptions: (_, page) => ({ title: page.title, description: page.description }),
});
