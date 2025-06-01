import Link from "next/link";

export default function Footer(){
  return (
    <footer className="mt-auto">
      <div className="sm:px-8">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    <Link href={"/about"} key={"about"} className="transition hover:text-orange-400 dark:hover:text-orange-300">About</Link>
                    <Link href={"/projects"} key={"projects"} className="transition hover:text-orange-400 dark:hover:text-orange-300">Projects</Link>
                    <Link href={"/posts"} key={"posts"} className="transition hover:text-orange-400 dark:hover:text-orange-300">Posts</Link>
                    <Link href={"/rudiments"} key={"rudiments"} className="transition hover:text-orange-400 dark:hover:text-orange-300">Rudiments</Link>
                  </div> 
                </div> 
            </div> 
          </div> 
        </div>
      </div>
    </div>
  </footer>
)
}
