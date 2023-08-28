import { useEffect, useState } from "react";
import { ScrollData } from "./types";

/**
 * Custom hook that tracks the scroll position of the entire vh
 *
 * @returns {ScrollData}
 *
 * @example
 * // Usage example:
 * const { scrollY, scrollPercentage } = useScrollY();
 */

export function useWScrollY(): ScrollData {
  const [scrollWY, setScrollWY] = useState(0);
  const [scrollWPercentage, setScrollWPercentage] = useState(0);

  const handleScroll = () => {
    const totalScrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const currentScrollY = window.scrollY;
    const percentage = (currentScrollY / totalScrollHeight) * 100;
    setScrollWY(currentScrollY);
    setScrollWPercentage(Math.round(percentage));
  };

  useEffect(() => {
    // Add event listener to track scroll position
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener on component unmount to avoid memory leaks
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrollWY, scrollWPercentage };
}
