import { useEffect, useState } from "react";

const useWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateWindowWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);
  return { width };
};

export default useWidth;
