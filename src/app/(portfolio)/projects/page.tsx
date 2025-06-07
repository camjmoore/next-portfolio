import Layout from "@/components/Layout";
import { getProjects } from "@/sanity/lib/resolvers";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { LinkIcon } from '@heroicons/react/24/solid'
export default async function Projects() {

  const projects = await getProjects();

  return (
    <Layout>

      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">Things I&apos;ve Proudly Built</h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400"> I enjoy working with frameworks and learning new strategies, but most of all, learning from awesome people and communities. These are the projects that I’m most proud of.</p>
      </header>

      <div className="mt-16 sm:mt-20">
        <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (

            <li
              className="group relative flex flex-col items-start rounded-lg z-10 px-3 py-3 bg-zinc-900 bg-opacity-0 transition hover:scale-105 hover:bg-zinc-800/50"
              key={project._id}
            >
              <div className="min-w-3/4 flex items-center">
                <div className="z-10 flex h-12 w-12 overflow-hidden items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <Image src={project.image} alt={project.name} width={50} height={50}/>
                </div>


                <span className={`ml-5 px-3 py-1 rounded-full text-center text-sm border ${
project.status == 'live' ? 'bg-teal-800/20 text-teal-400 border-teal-400/30' :
project.status == 'in progress' ? 'bg-amber-700/20 text-amber-700 border-amber-700/30' :
'bg-sky-800/20 text-sky-500 border-sky-500/30'
}`}>
                  {project.status}
                </span>
              </div>

              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  <a href={project.url} target="_blank">
                    <span className="relative z-10">{project.name}</span>
                  </a>
              </h2>

              <div className="relative z-10 my-2 text-sm text-zinc-600 dark:text-zinc-400">
                <PortableText value={project.content} />
              </div>

              <p className="relative z-10 mt-6 flex text-xs font-bold text-zinc-400 transition group-hover:text-orange-500 dark:text-zinc-200">
                <LinkIcon className="h-4 w-4 flex-none" />
                <small className="ml-1">{project.url?.toString().substring(8)}</small>
              </p>

            </li>
          ))}
        </ul>
      </div>

    </Layout>
  )
}
