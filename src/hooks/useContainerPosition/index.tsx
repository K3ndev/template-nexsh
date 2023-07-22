import { useState, useEffect } from "react";
import { useContainerPositionType } from "./types";

/**
 * Custom hook that tracks the Y position of the target element
 *
 * @returns {useContainerPositionType}
 *
 * @example
 * // Usage example:
 * const containerRef = useRef<HTMLDivElement>(null);
 * const { positionY } = useContainerPosition({ containerRef });
 */

export function useContainerPosition({
  containerRef,
}: useContainerPositionType): {
  positionY: number;
} {
  const [positionY, setPositionY] = useState<number>(0);

  useEffect(() => {
    // Function to get the current position of the div
    const getPosition = () => {
      if (containerRef.current) {
        const { y } = containerRef.current.getBoundingClientRect();
        setPositionY(y + 1);
      }
    };

    getPosition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { positionY };
}
