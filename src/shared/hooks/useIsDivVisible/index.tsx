import { useEffect, useState } from "react";
import { useIsDivVisibleType } from "./types";

/**
 * Custom hook that tracks the visibility of a target element using the Intersection Observer API.
 *
 * @param {useIsDivVisibleType} options - The options object containing the reference to the target element and optional threshold.
 * @param {React.RefObject} options.divRef - The reference to the target element (created using useRef).
 * @param {number | number[]} [options.threshold=0] - The threshold value(s) at which the observer's callback should be executed.
 *   If not specified, it defaults to 0 (i.e., the callback is triggered when the target enters the root).
 *
 * @returns {boolean} - A boolean value indicating whether the target element is currently visible on the screen.
 * @example
 * // Usage example:
 * const containerRef = useRef<HTMLDivElement>(null);
 * const isDivVisible = useIsDivVisible({
 *   divRef: containerRef,
 *   threshold: 0.5,
 * });
 */

export function useIsDivVisible({
  divRef,
  threshold = 0,
}: useIsDivVisibleType): boolean {
  const [isDivVisible, setIsDivVisible] = useState(false);

  useEffect(() => {
    const currentDivRef = divRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) {
          setIsDivVisible(entry.isIntersecting);
        }
      },
      { root: null, rootMargin: "0px", threshold: threshold }
    );

    if (currentDivRef) {
      observer.observe(currentDivRef);
    }

    return () => {
      if (currentDivRef) {
        observer.unobserve(currentDivRef);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [divRef]);

  return isDivVisible;
}
