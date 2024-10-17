import { useEffect, useRef, useState } from "react";

interface ObserverOption {
  root: null;
  rootMargin: string;
  threshold: number;
}

export const useObserver = (option: ObserverOption, once: boolean) => {
  const [isInView, setIsInView] = useState(false);
  const observeRef = useRef<Element>(null);

  const observerFunc: IntersectionObserverCallback = (enteries) => {
    const [entery] = enteries;
    setIsInView(entery.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerFunc, option);
    const element = observeRef.current;

    if (element) {
      observer.observe(element);

      if (once && isInView) {
        observer.unobserve(element);
      }
    }
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [option, once, isInView]);

  return [observeRef, isInView];
};
