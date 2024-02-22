import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import * as schemaTypes from "./src/schema";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",

  projectId,
  dataset,
  plugins: [structureTool()],
  schema: {
    types: Object.values(schemaTypes),
  },
});
