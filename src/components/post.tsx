import { Post as PostModel } from "@/interfaces/post";
import Link from "next/link";

export async function Post({ post }: {post: PostModel}) {
    return (
        <div className="rounded-md bg-slate-50">
            <Link href={`/post/${post.slug}`}>
                {
                    post.coverImage
                        ? <img className="w-full h-52 bg-slate-200 rounded-tl-md rounded-tr-md" src={post.coverImage} alt={`${post.title}-preview`} />
                        : <div className="w-full h-52 bg-slate-200 rounded-tl-md rounded-tr-md" />
                }
                <h1 className="text-center text-balance p-4">
                        {post.title}
                </h1>
            </Link>
        </div>
    )
}