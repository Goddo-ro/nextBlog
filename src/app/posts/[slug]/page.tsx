import Avatar from "@/components/avatar";
import DateFormatter from "@/components/date-formatter";
import { PostBody } from "@/components/post/post-body";
import { getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { notFound } from "next/navigation";

type Params = {
  params: Promise<{
    slug: string;
  }>;
};
export default async function Page(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content);
  const author = post.author;

  return (
    <article>
      <header className="flex flex-col gap-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none text-center md:text-left">
          {post.title}
        </h1>
        <div className="hidden md:flex justify-between">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-8 md:mb-16 sm:mx-0">
          <img
            src={post.coverImage}
            alt={`Cover image for ${post.title}`}
            className="w-full"
          />
        </div>
      </header>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={post.date} />
        </div>
      </div>
      <PostBody content={content} />
    </article>
  );
}

export async function generateMetadata(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title}`;

  return {
    title,
    openGraph: {
      title,
    },
  };
}
