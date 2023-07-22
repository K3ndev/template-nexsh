import { useState, useEffect } from "react";

/**
 * Custom hook that returns the responsive size string based on Tailwind CSS's responsive design breakpoints.
 *
 * @returns {string} - A string representing the current responsive size (one of: 'xs', 'sm', 'md', 'lg', 'xl', '2xl').
 * @example
 * // Usage example:
 * const responsiveSize = useResponsiveSize();
 * console.log(responsiveSize); // Output: 'xs', 'sm', 'md', 'lg', 'xl', or '2xl' based on the window size.
 */

export function useResponsiveSize() {
  const [size, setSize] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(min-width: 1536px)").matches) {
        setSize("2xl");
      } else if (window.matchMedia("(min-width: 1280px)").matches) {
        setSize("xl");
      } else if (window.matchMedia("(min-width: 1024px)").matches) {
        setSize("lg");
      } else if (window.matchMedia("(min-width: 768px)").matches) {
        setSize("md");
      } else if (window.matchMedia("(min-width: 640px)").matches) {
        setSize("sm");
      } else {
        setSize("xs");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
}
