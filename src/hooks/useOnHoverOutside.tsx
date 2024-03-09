import React, { useEffect } from "react";

export function useOnHoverOutside(
  ref: React.MutableRefObject<HTMLDivElement | null>,
  handler: () => void,
) {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler();
    };
    document.addEventListener("mouseover", listener);
    return () => {
      document.removeEventListener("mouseout", listener);
    };
  }, [ref, handler]);
}
