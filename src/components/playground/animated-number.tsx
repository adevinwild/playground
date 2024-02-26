import { memo, useEffect, useRef, useState } from "react";
import { useAnimate } from "framer-motion";
import { cn } from "~/lib/utils";

/**
 * @name AnimatedNumber
 * @description A component that animates a number from an initial value to a new value
 *
 * @param {Object} props - The options for the component
 * @param {string | number} props.initialValue - The initial value of the number
 * @param {string} [props.className] - The class name of the component
 * @param {number} [props.decimals=2] - The number of decimal places to display
 * @param {string} [props.suffix] - The suffix to display after the number
 * @param {string} [props.prefix] - The prefix to display before the number
 * @param {number} [props.delay=0] - The delay (in seconds) before the animation starts
 *
 */
export const AnimatedNumber = memo(
  ({
    initialValue,
    className,
    decimals = 0,
    suffix,
    prefix,
    delay = 0,
    onAnimationComplete,
  }: {
    initialValue: string | number;
    className?: string;
    decimals?: number;
    suffix?: string;
    prefix?: string;
    delay?: number;
    onAnimationComplete?: () => void;
  }) => {
    const [scope, animate] = useAnimate();

    const [previousValue, setPreviousValue] = useState(0);

    // Update previous value only when the initial value changes
    // This will make sure that the animation do not goes from 0 to the value but from a previous value stored to the new value
    useEffect(() => {
      if (+initialValue === previousValue) return;
      setPreviousValue(+initialValue);
      previousValueRef.current = previousValue;
    }, [initialValue, previousValue]);

    const previousValueRef = useRef(previousValue);

    // Animate the number
    useEffect(() => {
      const node = scope.current;
      if (!node) return;

      const DEFAULT_DURATION = 1; //In seconds

      const controls = animate(previousValueRef.current, +initialValue, {
        duration: DEFAULT_DURATION + delay,
        onUpdate(value) {
          node.textContent = `${prefix ?? ""}${new Intl.NumberFormat("en-US", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          }).format(value)}${suffix ?? ""}`;
        },
      });

      controls.then(() => {
        if (controls.state === "finished") {
          onAnimationComplete?.();
        }
      });

      return () => controls.stop();
    }, [
      animate,
      decimals,
      delay,
      initialValue,
      onAnimationComplete,
      prefix,
      scope,
      suffix,
    ]);

    return (
      <span
        ref={scope}
        className={cn(
          "flex items-center gap-x-0 font-mono tabular-nums tracking-tighter",
          className
        )}
      />
    );
  },
  (prevProps, nextProps) => {
    return prevProps.initialValue === nextProps.initialValue;
  }
);

AnimatedNumber.displayName = "AnimatedNumber";
