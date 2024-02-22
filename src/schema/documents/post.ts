import { defineField, defineType } from "sanity";

export const post = defineType({
  type: "document",
  name: "post",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({ name: "description", title: "Description", type: "string" }),
    defineField({ name: "body", title: "Body", type: "richText" }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
