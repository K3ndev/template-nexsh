import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

export function useAos() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    AOS.init();
  }, []);
}
