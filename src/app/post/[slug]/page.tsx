import { graphqlClient, imageBuilder } from "@/sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await graphqlClient
    .PostBySlug({ slug: params.slug })
    .then((v) => v.allPost[0]);

  if (!post) {
    notFound();
  }

  return (
    <div className="container p-4 mx-auto">
      <article className="space-y-8">
        <h1 className="font-bold text-4xl text-center">{post.title}</h1>
        {post.image?.asset?._id && (
          <Image
            className="aspect-square w-full max-w-screen-sm mx-auto"
            width={400}
            height={400}
            alt={post.title || ""}
            src={imageBuilder
              .image(post.image?.asset._id)
              .width(1200)
              .height(1200)
              .fit("crop")
              .format("webp")
              .url()}
          />
        )}
        <div className="text-left">{post.description}</div>

        <PortableText
          value={post.bodyRaw}
          // components={/* optional object of custom components to use */}
        />
      </article>
    </div>
  );
}
