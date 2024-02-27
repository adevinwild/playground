"use client";

import { ComponentIcon, MenuIcon, PlayIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useToggle } from "usehooks-ts";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import AchievementLink from "./_achievements_link";

const Navbar = () => {
  const [isMenuOpen, toggleMenu] = useToggle();

  return (
    <nav
      className={cn(
        "fixed flex-col items-center justify-center z-50 max-w-[90dvw] top-3.5 flex w-full lg:max-w-3xl px-10 lg:pt-0 min-h-12 lg:h-12 shadow-2xl shadow-black bg-neutral-900 rounded-2xl ring-1 ring-neutral-700 left-1/2 -translate-x-1/2",
        isMenuOpen && "pt-1.5 pb-6"
      )}
    >
      <div className="flex items-center w-full justify-between">
        <Link href="/">
          <div className="flex items-center text-white text-base">
            <PlayIcon className="size-6 text-emerald-400" />
            <span className="tracking-tight font-light">ground</span>
          </div>
        </Link>
        <div className="hidden lg:flex items-center gap-x-5">
          <Button variant="link" className="gap-x-2" asChild>
            <Link href="/components">
              <ComponentIcon className="size-4 text-emerald-400" />
              <span className="">Components</span>
            </Link>
          </Button>
          <AchievementLink />
        </div>
        <Button
          className="lg:hidden aspect-square"
          variant="ghost"
          size="icon"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <XIcon className="size-6" />
          ) : (
            <MenuIcon className="size-6" />
          )}
        </Button>
      </div>
      {isMenuOpen && (
        <>
          <hr className="w-full border-neutral-700 mt-2 mb-5" />
          <div className="flex flex-col gap-y-6">
            <Button variant="link" className="gap-x-2" asChild>
              <Link href="/components" onClick={() => toggleMenu()}>
                <ComponentIcon className="size-4 text-emerald-400" />
                Components
              </Link>
            </Button>
            <AchievementLink onClick={toggleMenu} />
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
