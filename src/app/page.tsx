import Post from "@/components/post/post";
import { getAllPosts } from "@/lib/api";

export default function Home() {
  const posts = getAllPosts();

  return (
    <section className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Post key={post.slug} post={post} />
      ))}
    </section>
  );
}
