import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const StickyNavContext = createContext();

function StickyNavProvider({ children }) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const heroSection = document.querySelector("#hero");

    if (!heroSection) return;

    const observerCallback = (entries) => {
      const ent = entries[0];
      if (!ent.isIntersecting && ent.intersectionRatio === 0 && !isSticky) {
        setIsSticky(true);
      } else if (ent.isIntersecting && isSticky) {
        setIsSticky(false);
      }
    };

    const obs = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 0,
      rootMargin: "100px",
    });

    obs.observe(heroSection);

    // Cleanup observer on component unmount
    return () => {
      obs.disconnect();
    };
  }, [isSticky]);

  return (
    <StickyNavContext.Provider value={{ isSticky }}>
      {children}
    </StickyNavContext.Provider>
  );
}

function useStickyNav() {
  const context = useContext(StickyNavContext);

  if (context === undefined)
    throw new Error("StickyNavContext was used outside of Context");

  return context;
}

export { StickyNavProvider, useStickyNav };
