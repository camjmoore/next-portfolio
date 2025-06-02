import { getPost } from "@/sanity/lib/resolvers";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

type Props = { params: { post: string } };

export default async function Post({ params }: Props) {
  const slug = params.post;

  const post = await getPost(slug);

  return (
    <div className="xl:relative">
      <div className="mx-auto max-w-2xl">
        <button className="group mb-8 flex items-center justify-center rounded-full lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0 shadow-lg ring-1 backdrop-blur transition bg-zinc-800/90 ring-white/10 hover:ring-white/20">
          <Image src="/left-arrow.svg" alt="left arrow" width={20} height={20}/>
        </button>
      </div>
      <header>
        <h1>{post.name}</h1>
      </header>
      <div>
        <PortableText value={post.content} />
      </div>
    </div>
  );
}
