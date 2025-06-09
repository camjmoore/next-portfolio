import Link from "next/link"
import { getPost } from "@/sanity/lib/resolvers";
import { LeftArrow, Layout } from "@/components";
import { PortableText } from "@portabletext/react";

type Params = Promise<{ post: string }>

export default async function Post({ params }: { params: Params }) {
  const { post } = await params
  const selectedPost = await getPost(post);

  return (
    <Layout>

      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            <Link href="/posts">
              <button className="group mb-8 h-10 w-10 flex items-center justify-center rounded-full lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20 cursor-pointer">
                <LeftArrow />
              </button>
            </Link>

            <article>
              <header className="flex flex-col">
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">{selectedPost.name}</h1>
                <time className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500">
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                  <span className="ml-3">{selectedPost._createdAt.toString().substring(5, 10)}</span>
                </time>
              </header>
              <div className="mt-8 md:prose-lg xl:prose-xl prose">
                <PortableText value={selectedPost.content} />
              </div>
            </article>
          </div>
        </div>
      </div>
    </Layout>
  );
}
