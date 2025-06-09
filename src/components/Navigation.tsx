"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Nav() {
  const pathname = usePathname();

  const menu = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Posts", href: "/posts" },
    { name: "Rudiments", href: "/rudiments" },
  ];

  return (
    <div className="hidden sm:flex md:flex lg:flex flex-1 items-center justify-center h-20 max-w-full mx-auto">
      <nav className="flex backdrop-blur-sm rounded-full px-3 shadow-lg shadow-zinc-800/5 text-sm font-bold text-zinc-800 dark:text-zinc-200 bg-white/90 dark:bg-zinc-800/90 bg-opacity-80 ring-1 ring-zinc-900/5 dark:ring-white/10 pointer-events-auto">
        {menu.map((link) => {
          const isActive = pathname.startsWith(link.href);

          return (
            <Link
              href={link.href}
              key={link.name}
              className={
                isActive
                  ? "relative block px-3 py-2.5 transition text-orange-400"
                  : "relative block px-3 py-2.5 transition hover:text-orange-400"
              }
            >
              {link.name}
              <span
                className={`${
isActive
? "absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-orange-400/0 via-orange-400/70 to-orange-400/0"
: "hidden"
}`}
              ></span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

