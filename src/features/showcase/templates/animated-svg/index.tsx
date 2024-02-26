"use client";

import Link from "next/link";
import { Button } from "~/components/ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { cn } from "~/lib/utils";
import useAnimation from "./use-animation";
import { Github, Heart, PlayIcon } from "lucide-react";
import useAchievementListener from "~/lib/use-achievement-listener";

const AnimatedSVGTemplate = () => {
  const { play, isIdle, isPlaying, isFinished } = useAnimation();

  useAchievementListener({
    condition: isFinished,
    name: "animated-svg",
  });

  return (
    <div
      className={cn(
        "w-full row-span-2 h-full bg-neutral-900 p-6 transition-all duration-500 flex flex-col gap-y-5 ring-2 ring-neutral-800 rounded-2xl shadow-2xl shadow-black",
        (isPlaying || isFinished) && "ring-rose-400 shadow-rose-600/40"
      )}
    >
      <div className="h-full relative bg-neutral-950 gap-x-5 rounded-lg p-5 flex items-center justify-center">
        <Heart
          className={cn(
            "size-32 transition-all [transition-duration:0.5s] fill-transparent stroke-neutral-800",
            isPlaying && "animate-svg stroke-rose-400",
            isFinished && "fill-rose-400 stroke-rose-400"
          )}
        />
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="secondary"
                className="size-10 aspect-square absolute left-1/2 -translate-x-1/2 bottom-5"
                onClick={play}
                disabled={!isIdle}
              >
                <PlayIcon className="size-6" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Play the heart animation</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="flex flex-col">
        <h4 className="text-lg font-medium">Animated SVG</h4>
        <p className="text-base text-neutral-500">
          A simple animation made with SVG and CSS.
        </p>
        <div className="flex gap-x-2 mt-4 ">
          <Button variant="outline" className="max-w-max gap-x-2" asChild>
            <Link
              href="https://gist.github.com/adevinwild/27fe1063e4a17d680513005ad2b8b97a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="size-4" />
              Gist
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnimatedSVGTemplate;
