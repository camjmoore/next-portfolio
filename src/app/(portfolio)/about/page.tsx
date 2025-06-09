import Image from "next/image";
import { Layout } from "@/components";
import { PortableText } from "@portabletext/react";
import { getAbout } from "@/sanity/lib/resolvers";

export default async function About() {

  const about = (await getAbout())[0];

  return (
    <Layout>
      <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">

        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800" src="/headshot.png" alt="headshot photo of Cameron" quality={50} width={400} height={400} />
          </div>
        </div>

        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">{about.hello}</h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <PortableText value={about.content}/>
          </div>
        </div>

        <div className="lg:pl-20">
          <ul>
            <li>
              <a className="flex items-center bg-white dark:bg-zinc-900 rounded-lg mt-4 mr-2 -block lg:flex z-0 hover:scale-105 transition hover:text-orange-500 hover:scale-100 hover:bg-zinc-50 dark:hover:bg-zinc-800/50" href="https://github.com/camjmoore" target="_blank">
                <div className="w-12 h-12 bg-teal-400/20 border border-teal-400/30 rounded-full px-2 flex items-center justify-center">
                  <Image src="/Github.svg" alt="github logo" width={50} height={50}/>
                </div>
                <span className="ml-4 block ">Follow me on Github</span>
              </a>
            </li>

            <li>
              <a className="flex items-center bg-white dark:bg-zinc-900 rounded-lg mt-4 mr-2 -block lg:flex z-0 hover:scale-105 transition hover:text-orange-500 hover:scale-100 hover:bg-zinc-50 dark:hover:bg-zinc-800/50" href="https://www.linkedin.com/in/cameronjmoore/" target="_blank">
                <div className="w-12 h-12 bg-sky-800/20 border border-sky-800/30 rounded-full px-2 flex items-center justify-center group-hover:border-sky-800 transition-colors">
                  <Image src="/Linkedin.svg" alt="linkedin logo" width={50} height={50}/>
                </div>
                <span className="ml-4 block">Connect with me on Linkedin</span>
              </a>
            </li>

            <li>
              <a className="flex items-center bg-white dark:bg-zinc-900 rounded-lg mt-4 mr-2 -block lg:flex z-0 hover:scale-105 transition hover:text-orange-500  hover:scale-100 hover:bg-zinc-50 dark:hover:bg-zinc-800/50" href="mailto:cjmooredev@gmail.com" target="_blank">
                <div className="w-12 h-12 bg-amber-700/20 border border-amber-700/30 rounded-full px-2 flex items-center justify-center group-hover:border-amber-700 transition-colors">
                  <Image src="/Email.svg" alt="Email at-symbol logo" width={40} height={40}/>
                </div>
                <span className="ml-4 block">Contact me</span>
              </a>
            </li>
          </ul>
        </div>

      </div>
    </Layout>
  )
}
