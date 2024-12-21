import { Post } from "@/components/post";
import { getAllPosts } from "@/lib/api";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8">
        <section className="gap-6 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {
            posts.map(post => <Post key={post.slug} post={post} />)
          }
        </section>
      </main>
    </div>
  );
}
