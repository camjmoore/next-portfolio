"use client";
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Image from "next/image";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="mx-auto min-w-32">
      <button
        className="group rounded-full bg-white/90 px-3 py-1.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20 cursor-pointer"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        <Image  className="" alt="bisected circle" src="/theme.svg" width={30} height={30}/>
      </button>
    </div>
  )
}
