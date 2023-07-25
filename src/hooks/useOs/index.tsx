import { useEffect, useState } from "react";

/**
 * Custom hook that returns the operating system of the user.
 *
 * @returns {string} - A string value indicating the operating system of the user, such as "Linux", "Windows", "MacIntel", "Android", or "undetermined" if the information is not available.
 * @example
 * // Usage example:
 * const os = useOs();
 */
export function useOs() {
  const [os, setOs] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if the property is available before accessing it
      if (window.navigator && window.navigator.platform) {
        const firstWord = window.navigator.platform.split(" ")[0];
        setOs(firstWord as string);
      } else {
        console.log("Platform information not available.");
        setOs("undetermined");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return os || "undetermined";
}
