import {useState, useEffect} from "react";

type WindowSize = {
  width: number;
  height: number;
};

export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth ?? 0,
      height: window.innerHeight ?? 0,
    });
  };

  useEffect(() => {
    setWindowSize({width: window.innerWidth, height: window.innerHeight});
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
