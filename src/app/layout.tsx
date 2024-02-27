import { ComponentIcon, PlayIcon } from "lucide-react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import AchievementLink from "./_achievements_link";
import Providers from "./_providers";
import SocialLink from "./_social_link";
import "./globals.css";
import Navbar from "./_nav-bar";

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
        <Navbar />
        <Providers>{children}</Providers>
        <footer className="flex items-center justify-center max-w-max px-5 h-8 bg-neutral-950/30 rounded-lg ring-1 ring-neutral-800 mx-auto mb-10">
          <SocialLink />
        </footer>
      </body>
    </html>
  );
}
