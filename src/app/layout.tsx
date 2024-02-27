import { ComponentIcon, PlayIcon } from "lucide-react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import AchievementLink from "./_achievements_link";
import Providers from "./_providers";
import SocialLink from "./_social_link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Playground | adevinwild",
  description:
    "A collection of components and utilities to play with that I've built.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed max-w-[90dvw] top-3.5 flex items-center justify-between w-full lg:max-w-3xl px-10 h-12 shadow-2xl shadow-black bg-neutral-900 rounded-2xl ring-1 ring-neutral-700 left-1/2 -translate-x-1/2">
          <Link href="/">
            <div className="flex items-center text-white text-base">
              <PlayIcon className="size-6 text-emerald-400" />
              <span className="tracking-tight font-light">ground</span>
            </div>
          </Link>
          <div className="flex items-center gap-x-5">
            <Button variant="link" className="gap-x-2" asChild>
              <Link href="/components">
                <ComponentIcon className="size-4 text-emerald-400" />
                Components
              </Link>
            </Button>
            <AchievementLink />
          </div>
        </nav>
        <Providers>{children}</Providers>
        <footer className="flex items-center justify-center max-w-max px-5 h-8 bg-neutral-950/30 rounded-lg ring-1 ring-neutral-800 mx-auto mb-10">
          <SocialLink />
        </footer>
      </body>
    </html>
  );
}
