import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function ScrollManager() {
  const { pathname, hash } = useLocation();
  const previousPathname = useRef(null);

  useEffect(() => {
    const pathChanged = previousPathname.current !== pathname;
    previousPathname.current = pathname;

    if (hash) {
      if (!pathChanged) return;

      const t = setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return () => clearTimeout(t);
    }
    if (pathChanged) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default ScrollManager;
