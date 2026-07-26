import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useActiveTimelineItem } from "../../hooks/useActiveTimelineItem";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import type { FeaturedProject } from "../../types/project";
import { formatCompactDate } from "../../utils/formatDateLabel";
import { sortByProjectDate } from "../../utils/projectSort";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import styles from "./FeaturedTimeline.module.css";

type FeaturedTimelineProps = {
  projects: FeaturedProject[];
  onOpenProject: (project: FeaturedProject) => void;
};

export function FeaturedTimeline({ projects, onOpenProject }: FeaturedTimelineProps) {
  const [manualActiveId, setManualActiveId] = useState<string | null>(null);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const [mobileViewportRef, mobileCarouselApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps"
  });
  const prefersReducedMotion = useReducedMotion();
  const sortedProjects = useMemo(() => sortByProjectDate(projects), [projects]);
  const ids = useMemo(() => sortedProjects.map((project) => `timeline-${project.id}`), [sortedProjects]);
  const observedActiveId = useActiveTimelineItem(ids);
  const activeId = manualActiveId ?? observedActiveId;
  const activeIndex = Math.max(0, ids.indexOf(activeId));
  const progress = sortedProjects.length > 1 ? (activeIndex / (sortedProjects.length - 1)) * 100 : 0;

  useEffect(() => {
    setMobileActiveIndex((current) => Math.min(current, Math.max(sortedProjects.length - 1, 0)));
  }, [sortedProjects.length]);

  const handleMarkerClick = (id: string) => {
    setManualActiveId(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "center"
    });
    window.setTimeout(() => setManualActiveId(null), prefersReducedMotion ? 0 : 750);
  };

  const handleMobileSelect = useCallback(() => {
    if (!mobileCarouselApi) {
      return;
    }

    setMobileActiveIndex(mobileCarouselApi.selectedScrollSnap());
  }, [mobileCarouselApi]);

  useEffect(() => {
    if (!mobileCarouselApi) {
      return;
    }

    handleMobileSelect();
    mobileCarouselApi.on("settle", handleMobileSelect);
    mobileCarouselApi.on("reInit", handleMobileSelect);

    return () => {
      mobileCarouselApi.off("settle", handleMobileSelect);
      mobileCarouselApi.off("reInit", handleMobileSelect);
    };
  }, [mobileCarouselApi, handleMobileSelect]);

  useEffect(() => {
    mobileCarouselApi?.reInit();
  }, [mobileCarouselApi, sortedProjects.length]);

  const selectMobileProject = useCallback(
    (index: number) => {
      const boundedIndex = Math.min(Math.max(index, 0), Math.max(sortedProjects.length - 1, 0));

      setMobileActiveIndex(boundedIndex);
      mobileCarouselApi?.scrollTo(boundedIndex);
    },
    [mobileCarouselApi, sortedProjects.length]
  );

  return (
    <section className="section" id="projects">
      <div className="container">
        <span className="eyebrow">Ключевые объекты</span>
        <h2 className="section-title">Витрина объектов</h2>

        <div className={styles.timeline}>
          <aside className={styles.rail} aria-label="Навигация по объектам таймлайна">
            <div className={styles.line} aria-hidden>
              <span style={{ height: `${progress}%` }} />
            </div>
            {sortedProjects.map((project, index) => {
              const id = ids[index];
              const isActive = id === activeId;
              const markerState = index < activeIndex ? "passed" : index === activeIndex ? "active" : "upcoming";

              return (
                <a
                  key={project.id}
                  className={isActive ? styles.activeMarker : ""}
                  href={`#${id}`}
                  onClick={(event) => {
                    event.preventDefault();
                    handleMarkerClick(id);
                  }}
                  data-state={markerState}
                >
                  <span className={styles.dot} aria-hidden />
                  <span>{formatCompactDate(project)}</span>
                </a>
              );
            })}
          </aside>

          <div className={styles.cards}>
            {sortedProjects.map((project, index) => {
              const id = ids[index];
              return (
                <div key={project.id} id={id} className={styles.cardAnchor}>
                  <ProjectCard project={project} isActive={id === activeId} onOpen={onOpenProject} />
                </div>
              );
            })}
          </div>
        </div>

        {sortedProjects.length > 0 && (
          <div className={styles.mobileCarousel} aria-label="Мобильная витрина объектов">
            <div className={styles.mobileDates} aria-label="Выбор объекта по дате">
              {sortedProjects.map((project, index) => (
                <button
                  aria-pressed={index === mobileActiveIndex}
                  aria-label={`Показать объект ${formatCompactDate(project)}`}
                  className={index === mobileActiveIndex ? styles.currentMobileDate : ""}
                  key={project.id}
                  type="button"
                  onClick={() => selectMobileProject(index)}
                >
                  {formatCompactDate(project)}
                </button>
              ))}
            </div>

            {/* <div className={styles.mobileCounter} aria-live="polite">
              {mobileActiveIndex + 1} / {sortedProjects.length}
            </div> */}

            <div className={styles.mobileViewport} ref={mobileViewportRef}>
              <div className={styles.mobileTrack}>
                {sortedProjects.map((project) => (
                  <div className={styles.mobileSlide} key={project.id}>
                    <ProjectCard project={project} onOpen={onOpenProject} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
