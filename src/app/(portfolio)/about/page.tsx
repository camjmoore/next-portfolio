import Image from "next/image";

export default function About () {
  return (
    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">

      <div className="lg:pl-20">
        <div className="max-w-xs px-2.5 lg:max-w-none">
          <Image className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800" src="/headshot.png" alt="headshot photo of Cameron" quality={50} width={400} height={400} />
        </div>
      </div>

      <div className="lg:order-first lg:row-span-2">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">Hi I&apos;m Cameron and I can help your tech organization</h1>
        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
          I&apos;m an American full-stack developer based in Bolivia with a nice setup for remote working. I am open to collaborating in both Spanish and English.

          I&apos;m a independent software consultant with more than 10 years of experience in the software industry. I&apos;ve been a senior developer consultant, a tech lead, an engineering manager, and head of engineering.

          I have been working in industries like fintech, e-commerce, developer tools, and more. I&apos;ve been working with startups, scaleups, and big companies.

          In order to adapt to all those different environments, I&apos;ve learned different roles and disciplines to adapt myself to the context at hand
          {/*Sanity content*/}
        </div>
      </div>

      <div className="lg:pl-20">

        <ul>

          <li>
            <a className="flex items-center bg-white dark:bg-zinc-900 rounded-lg mt-4 mr-2 -block lg:flex z-0 hover:scale-105 transition hover:text-orange-500 hover:scale-100 hover:bg-zinc-50 dark:hover:bg-zinc-800/50" href="https://github.com/camjmoore" target="_blank">
              <div className="w-12 h-12 bg-teal-400/20 border border-teal-400/30 rounded-full px-2 flex items-center justify-center">
                <Image src="/Github.svg" alt="github logo" width={50} height={50}/>
              </div>
              <span className="ml-4 hidden lg:block ">Follow me on Github</span>
            </a>
          </li>

          <li>
            <a className="flex items-center bg-white dark:bg-zinc-900 rounded-lg mt-4 mr-2 -block lg:flex z-0 hover:scale-105 transition hover:text-orange-500 hover:scale-100 hover:bg-zinc-50 dark:hover:bg-zinc-800/50" href="https://www.linkedin.com/in/cameronjmoore/" target="_blank">
              <div className="w-12 h-12 bg-sky-800/20 border border-sky-800/30 rounded-full px-2 flex items-center justify-center group-hover:border-sky-800 transition-colors">
                <Image src="/Linkedin.svg" alt="linkedin logo" width={50} height={50}/>
              </div>
              <span className="ml-4 hidden lg:block">Connect with me on Linkedin</span>
            </a>
          </li>

          <li>
           <a className="flex items-center bg-white dark:bg-zinc-900 rounded-lg mt-4 mr-2 -block lg:flex z-0 hover:scale-105 transition hover:text-orange-500  hover:scale-100 hover:bg-zinc-50 dark:hover:bg-zinc-800/50" href="mailto:cjmooredev@gmail.com" target="_blank">
              <div className="w-12 h-12 bg-amber-700/20 border border-amber-700/30 rounded-full px-2 flex items-center justify-center group-hover:border-amber-700 transition-colors">
                <Image src="/Email.svg" alt="Email at-symbol logo" width={40} height={40}/>
              </div>
              <span className="ml-4 hidden lg:block">Contact me</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
