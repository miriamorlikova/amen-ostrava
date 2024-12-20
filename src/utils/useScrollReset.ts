import { useLenis } from "@studio-freight/react-lenis";
import { useEffect } from "react";

const useScrollReset = (path: string) => {
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 0 });
    }
  }, [path, lenis]);
};

export default useScrollReset;
