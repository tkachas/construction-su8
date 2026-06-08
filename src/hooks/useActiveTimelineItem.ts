import { useEffect, useState } from "react";

export function useActiveTimelineItem(ids: string[]): string {
  const [activeId, setActiveId] = useState(ids[0] ?? "");

  useEffect(() => {
    if (!ids.length) {
      return;
    }

    let frame = 0;

    const updateActiveItem = () => {
      frame = 0;
      const viewportCenter = window.innerHeight / 2;
      const candidates = ids
        .map((id) => {
          const element = document.getElementById(id);

          if (!element) {
            return null;
          }

          const rect = element.getBoundingClientRect();
          const elementCenter = rect.top + rect.height / 2;

          return {
            id,
            distance: Math.abs(elementCenter - viewportCenter)
          };
        })
        .filter((candidate): candidate is { id: string; distance: number } => Boolean(candidate));

      const nearest = candidates.sort((a, b) => a.distance - b.distance)[0];

      if (nearest?.id) {
        setActiveId(nearest.id);
      }
    };

    const scheduleUpdate = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateActiveItem);
      }
    };

    updateActiveItem();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [ids]);

  return activeId;
}
