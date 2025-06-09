"use client";
import Link from "next/link";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

export default function MobileNav() {

  const menu = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Posts", href: "/posts" },
    { name: "Rudiments", href: "/rudiments" },
  ];

  return (
      <div className="pointer-events-auto sm:hidden md:hidden">
      <Popover>
        {({close}) => (
          <>
            <PopoverButton className="group flex items-center rounded-full bg-white/90 px-4 py-3 text-sm font-bold text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20 cursor-pointer">
              Menu
            </PopoverButton>
            <PopoverPanel
              transition
              anchor="bottom"
              className="z-10 mx-15 divide-y divide-zinc-900/5 dark:divide-white/5 rounded-xl w-3/4 bg-white/90 dark:bg-zinc-800/90 ring-1 ring-zinc-900/5 dark:ring-white/10 backdrop-blur text-sm/6 text-zinc-800 dark:text-zinc-200 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0"
            >
              {menu.map((link) => (
                <div key={link.name} onClick={() => close()} className="p-3">
                  <Link href={link.href} className="block rounded-lg px-3 py-2 transition hover:text-orange-500">
                    {link.name}
                  </Link>
                </div>
              ))}
            </PopoverPanel>
          </>
        )}
        </Popover>
      </div>
  )
}
