import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Marca como visíveis os elementos `.reveal` ao entrarem na tela (uma vez cada). */
export function useReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)"));
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
}
