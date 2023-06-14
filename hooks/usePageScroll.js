import { useEffect, useState } from "react";

const usePageScroll = () => {
  const [scrollDirection, setScrollDirection] = useState({
    isScrollUp: false,
    isScrollDown: false,
  });
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (window.innerHeight > currentScrollY) {
        setScrollDirection({
          isScrollUp: false,
          isScrollDown: false,
        });
        return;
      }

      const isScrollUp = currentScrollY < prevScrollY;
      const isScrollDown = currentScrollY > prevScrollY;

      setScrollDirection({
        isScrollUp,
        isScrollDown,
      });
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return scrollDirection;
};

export default usePageScroll;
