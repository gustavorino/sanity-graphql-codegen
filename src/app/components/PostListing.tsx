import { PostListingFragment } from "@/graphql-generated";
import { imageBuilder } from "@/sanity";
import Image from "next/image";
import Link from "next/link";

export function PostListing({ data }: { data: PostListingFragment }) {
  return (
    <Link className="space-y-4" href={"post/" + data.slug?.current || ""}>
      <div className="text-2xl font-bold text-center">{data.title}</div>
      {data.image?.asset?._id && (
        <Image
          className="w-full"
          width={400}
          height={400}
          alt={data.title || ""}
          src={imageBuilder
            .image(data.image?.asset?._id)
            .width(800)
            .height(800)
            .fit("crop")
            .format("webp")
            .url()}
        />
      )}
      <div className="text-left">{data.description}</div>
    </Link>
  );
}
