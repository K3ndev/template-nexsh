import { useIsDivVisible } from "@/shared/hooks";
import React, { useEffect, useRef, useState } from "react";
import { NumberTransitionProps } from "./types";

/**
 * NumberTransition is a component that animates a number
 * from an initial value to a target value with a smooth animation.
 *
 * @param {NumberTransitionProps} props - The props for the NumberTransition component.
 * @returns {JSX.Element} - The JSX for the NumberTransition component.
 *
 * @example
 * // Usage example:
 *<NumberTransition
 *  from={0}
 *  to={8}
 *  duration={1000}
 *  className="text-2xl bg-red-100"
 *  threshold={1}
 *  />
 */

export function NumberTransition({
  from,
  to,
  duration,
  className = "",
  threshold,
}: NumberTransitionProps) {
  const [value, setValue] = useState(from);

  //  custom hooks
  const containerRef = useRef<HTMLDivElement>(null);
  const isDivVisible = useIsDivVisible({
    divRef: containerRef,
    threshold: threshold,
  });

  useEffect(() => {
    let start: number | null = null;
    let animationFrameId: number | null = null;

    const animate = (timestamp: number) => {
      start = start || timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const currentValue = progress * (to - from) + from;
      setValue(Math.floor(currentValue));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(animate);
      }
    };

    if (isDivVisible) {
      animationFrameId = window.requestAnimationFrame(animate);
    }

    return () => {
      // Cleanup function
      if (animationFrameId != null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [from, to, duration, isDivVisible]);

  return (
    <div className={className}>
      <span ref={containerRef}>{value}</span>
    </div>
  );
}
