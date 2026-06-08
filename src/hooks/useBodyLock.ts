import { useEffect } from "react";

export function useBodyLock(isLocked: boolean): void {
  useEffect(() => {
    if (!isLocked) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isLocked]);
}
