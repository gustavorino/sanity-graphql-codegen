import { graphqlClient } from "@/sanity";
import { PostListing } from "./components/PostListing";

export default async function Home() {
  const data = await graphqlClient.AllPostsListing();

  return (
    <main className="container mx-auto">
      <div className="grid p-4 gap-8 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {data.allPost.map((item) => (
          <PostListing key={item.slug?.current} data={item} />
        ))}
      </div>
    </main>
  );
}
