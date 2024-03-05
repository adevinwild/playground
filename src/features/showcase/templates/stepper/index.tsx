"use client";

import Link from "next/link";
import { Stepper } from "~/components/playground/stepper";
import { Button } from "~/components/ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

import useStepper, { AvailableSteps } from "./use-stepper";
import useAchievementListener from "~/lib/use-achievement-listener";
import { ChevronLeftIcon, ChevronRightIcon, Github } from "lucide-react";

const StepperTemplate = () => {
  const { step, nextStep, previousStep } = useStepper();

  useAchievementListener({
    name: "stepper",
    condition: step === AvailableSteps.THIRD,
  });

  return (
    <div className="w-full h-full bg-neutral-900 p-6 flex flex-col gap-y-5 ring-2 ring-neutral-800 rounded-2xl shadow-2xl shadow-black">
      <div className="h-32 relative bg-neutral-950 gap-x-5 rounded-lg p-5 flex items-center">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="secondary"
                className="size-6 aspect-square"
                onClick={previousStep}
              >
                <ChevronLeftIcon className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Previous step</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Stepper steps={3} value={step} />

        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="secondary"
                className="size-6 aspect-square"
                onClick={nextStep}
              >
                <ChevronRightIcon className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Next step</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="flex flex-col">
        <h4 className="text-lg font-medium">Stepper</h4>
        <p className="text-base text-neutral-500">
          A simple stepper component that I've built.
        </p>
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

export default StepperTemplate;
