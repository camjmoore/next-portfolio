export default function Projects() {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-5xl">

      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">Things I&apos;ve Proudly built</h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400"> I enjoy working with frameworks and learning new strategies, but most of all, learning from awesome people and communities. These are the projects that I’m most proud of.</p>
      </header>

      <div className="mt-16 sm:mt-20">
        <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {/*map over projects?*/}
          <li className="group relative flex flex-col items-start">

            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"></div>

            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl">
                {/*Project URL*/}
                <a>
                  <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                  <span className="relative z-10">{/*Project title*/}</span>
                </a>
              </div>
            </h2>

            <p className="relative z-10 my-2 text-sm text-zinc-600 dark:text-zinc-400">
              {/*Project description*/}
            </p>

            <p className="relative z-10 mt-6 mt-auto flex text-sm font-medium text-zinc-400 transition group-hover:text-orange-500 dark:text-zinc-200">
              {/*svg link icon classsName h-6 w-6 flex-none*/}
              <span className="ml-2">non-functional decorative text of github link</span>
            </p>

          </li>
        </ul>
      </div>

    </div>
  )
}
