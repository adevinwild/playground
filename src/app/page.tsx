import { ComponentIcon, PlayIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center overflow-hidden">
      <div className="flex items-center text-white text-2xl">
        <PlayIcon className="size-10 text-emerald-400" />
        <span className="tracking-tight font-light">ground</span>
      </div>
      <p className="mt-10 text-base font-light text-neutral-400 text-center">
        A simple playground for me to test out new things.
      </p>
      <Button variant="outline" className="gap-x-2 mt-8" asChild>
        <Link href="/components">
          <ComponentIcon className="size-4 text-emerald-400" />
          Components
        </Link>
      </Button>
    </main>
  );
}
