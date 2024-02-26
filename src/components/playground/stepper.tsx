"use client";

import React, {
  Fragment,
  createContext,
  useContext,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "~/lib/utils";

type StepperProps = {
  children?: ReactNode;
  value?: number;
  onValueChange?: (_v: number) => void;
  steps?: number;
} & HTMLAttributes<HTMLDivElement>;

type StepperContext = {
  currentStep: number;
  setCurrentStep: (_v: number) => void;
};

const StepperContext = createContext<StepperContext | null>(null);

export const Stepper = ({
  className,
  children,
  steps,
  ...props
}: StepperProps) => {
  return (
    <StepperContext.Provider
      value={{
        currentStep: props.value ?? 0,
        setCurrentStep: props.onValueChange ?? (() => {}),
      }}
    >
      <div
        className={cn("flex w-full items-center justify-between", className)}
        {...props}
      >
        {steps &&
          steps > 0 &&
          Array.from({ length: steps }).map((_, index) => {
            if (index < steps - 1) {
              const isActiveOrPassed = index < (props.value ?? 0);
              return (
                <Fragment key={index}>
                  <Step index={index} />
                  <div
                    className={cn(
                      "z-0 w-full border-b border-dashed border-neutral-800 transition-all duration-300 ease-in",
                      isActiveOrPassed && "border-solid border-emerald-500"
                    )}
                  />
                </Fragment>
              );
            }

            return <Step key={index} index={index} />;
          })}

        {children &&
          React.Children.map(children, (child, index) => {
            if (!React.isValidElement(child)) return null;

            const clonedChild = React.cloneElement(child, {
              index,
            } as StepProps);

            const length = React.Children.count(children);

            // We want to add divider between steps
            if (index < length - 1) {
              const isActiveOrPassed = index < (props.value ?? 0);
              return (
                <>
                  {clonedChild}
                  <div
                    className={cn(
                      "z-0 w-full border-b border-dashed border-neutral-800 transition-all duration-300 ease-in",
                      isActiveOrPassed && "border-solid border-emerald-500"
                    )}
                  />
                </>
              );
            }

            return clonedChild;
          })}
      </div>
    </StepperContext.Provider>
  );
};

type StepProps = {
  children?: ReactNode;
  onClick?: () => void;
  index?: number;
} & HTMLAttributes<HTMLDivElement>;

export const Step = ({ children, className, index, ...props }: StepProps) => {
  const { currentStep } = useStepper();

  if (typeof index !== "number" && typeof index !== "string") {
    return null;
  }

  const isActive = index === currentStep || index < currentStep;

  return (
    <div
      className={cn(
        "z-10 flex aspect-square size-6 items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold text-neutral-500 ring-1 ring-neutral-200 transition-all duration-300 lg:size-8 lg:text-sm",
        isActive && "bg-emerald-500 text-white ring-emerald-500",
        className
      )}
      {...props}
    >
      {children ?? index + 1}
    </div>
  );
};

function useStepper() {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error("useStepper must be used within a Stepper component");
  }
  return context;
}
