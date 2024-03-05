"use client";

import Link from "next/link";
import { Button } from "~/components/ui/button";

import { AnimatedNumber } from "~/components/playground/animated-number";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import useCounter from "./use-counter";
import useAchievementListener from "~/lib/use-achievement-listener";
import { Github, MinusIcon, PlusIcon, Undo } from "lucide-react";

const AnimatedNumberTemplate = () => {
  const { count, increment, decrement, reset } = useCounter();

  useAchievementListener({
    name: "animated-number",
    condition: count > 9000,
  });

  return (
    <div className="w-full h-full bg-neutral-900 p-6 flex flex-col gap-y-5 ring-2 ring-neutral-800 rounded-2xl shadow-2xl shadow-black">
      <div className="h-32 relative bg-neutral-950 gap-x-5 rounded-lg p-5 flex items-center justify-center">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="secondary"
                className="size-6 aspect-square"
                onClick={decrement}
              >
                <MinusIcon className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Decrement by 100</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <AnimatedNumber initialValue={count} className="text-2xl select-none" />

        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="secondary"
                className="size-6 aspect-square"
                onClick={increment}
              >
                <PlusIcon className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Increment by 100</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="secondary"
                className="size-6 aspect-square absolute left-1/2 -translate-x-1/2 bottom-2"
                onClick={reset}
              >
                <Undo className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Reset the counter to 0</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="flex flex-col">
        <h4 className="text-lg font-medium">Animated number</h4>
        <span className="text-base text-neutral-500">
          An animated number made with{" "}
          <Button variant="link" className="p-0" asChild>
            <Link href="https://www.framer.com/motion/">Framer Motion</Link>
          </Button>
        </span>
        <div className="flex gap-x-2 mt-4 ">
          <Button variant="outline" className="max-w-max gap-x-2" asChild>
            <Link
              href="https://gist.github.com/adevinwild/27fe1063e4a17d680513005ad2b8b97a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="size-4" />
              Get the code
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnimatedNumberTemplate;
