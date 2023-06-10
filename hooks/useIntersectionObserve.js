import { useState, useEffect } from "react";
export default function useIntersectionObserve({ element, options }) {
  const [isIntersect, setIsIntersect] = useState(false);

  function observeCallback(entries) {
    setIsIntersect(entries[0].isIntersecting);
  }
  useEffect(() => {
    const observer = new IntersectionObserver(observeCallback, options);
    if (element) observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [element]);

  return isIntersect;
}
