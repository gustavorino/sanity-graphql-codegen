import { defineType } from "sanity";

export const richText = defineType({
  name: "richText",
  type: "array",
  title: "Content",
  of: [
    {
      type: "block",
    },
  ],
});
