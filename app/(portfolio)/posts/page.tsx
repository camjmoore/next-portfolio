export default function Posts() {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-5xl">

      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Lessons I've Learned
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">{/*Post page subtitle*/} </p>
      </header>

      <div className="mt-16 sm:mt-20">
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            <article className="md:grid md:grid-cols-4 md:items-baseline">
              <div className="md:col-span-3 group relative flex flex-col items-start">

                <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                  <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                  <a>
                    <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                    <span className="relative z-10">{/*Post Title*/}</span>
                  </a>
                </h2>

                <time className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"></time>

                <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">{/*Post Description*/}</p>

                <div className="flex w-full items-center justify-between">
                  <div className="relative z-10 mt-4 flex items-center text-sm font-medium text-orange-500">{/*read more*/}</div>
                </div>

              </div>

              <time className="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500">{/*Post Date*/}</time>

            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
