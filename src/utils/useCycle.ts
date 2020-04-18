import { useState } from "react";

export const useCycle = (items: any[]) => {
  const [i, setI] = useState(0);
  const next = (dir: "previous" | "next" = "next") => {
    if (dir === "previous")
      setI((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    else setI((prev) => (prev + 1 === items.length ? 0 : prev + 1));
  };
  return [items[i], next, i];
};
