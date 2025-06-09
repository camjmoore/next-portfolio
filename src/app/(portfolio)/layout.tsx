import { Navigation, MobileNav, Headshot, Footer, ThemeToggle } from "@/components";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { NextThemeProvider } from "@/providers/NextThemeProvider";
import { AnimatePresence } from "framer-motion";
import "../globals.css";

const quattro = localFont({
  src: [
    {
      path: "../fonts/iAWriterQuattroS-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/iAWriterQuattroS-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/iAWriterQuattroS-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/iAWriterQuattroS-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "Cameron Moore",
  description: "Cameron Moore Full-Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html className="h-full" lang="en" suppressHydrationWarning>
      <body
        className={`${quattro.className} antialiased flex h-full flex-col`}
      >
        <NextThemeProvider>
          {/*gray backdrop*/}
          <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="w-full ring-1 bg-white dark:bg-zinc-900 ring-zinc-300/20">
              </div>
            </div>
          </div>

          {/*header backdrop*/}
          <div className="relative">
            <div className="sticky backdrop-blur z-50 top-0 h-20 sm:w-[90%] md:w-[90%] lg:w-[85%] max-w-[68rem] mx-auto">
              <div className="flex items-center justify-around sm:justify-start md:justify-center h-full max-w-5xl mx-auto">
                <Headshot/>
                <MobileNav/>
                <Navigation/>
                <ThemeToggle/>
              </div>
            </div>
            <AnimatePresence mode="wait" initial={false}>
              {children}
            </AnimatePresence>
            <Footer/>
          </div>

        </NextThemeProvider>
      </body>
    </html>
  );
}
