import { useEffect, useMemo, useRef, useState, type TransitionEvent } from "react";
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

type SwipePhase = "idle" | "dragging" | "entering" | "settling";

const minSwipeDistance = 44;
const swipeDirectionRatio = 1.25;
const maxSwipeResistanceOffset = 48;
const maxEnterOffset = 96;

export function FeaturedTimeline({ projects, onOpenProject }: FeaturedTimelineProps) {
  const [manualActiveId, setManualActiveId] = useState<string | null>(null);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const [swipePhase, setSwipePhase] = useState<SwipePhase>("idle");
  const dragFrameRef = useRef<number | null>(null);
  const settleFrameRef = useRef<number | null>(null);
  const settleTimeoutRef = useRef<number | null>(null);
  const mobileSwipeAreaRef = useRef<HTMLDivElement>(null);
  const activePointerIdRef = useRef<number | null>(null);
  const swipeStartRef = useRef<{ x: number; y: number } | null>(null);
  const swipeOffsetRef = useRef(0);
  const queuedSwipeOffsetRef = useRef(0);
  const prefersReducedMotion = useReducedMotion();
  const sortedProjects = useMemo(() => sortByProjectDate(projects), [projects]);
  const ids = useMemo(() => sortedProjects.map((project) => `timeline-${project.id}`), [sortedProjects]);
  const observedActiveId = useActiveTimelineItem(ids);
  const activeId = manualActiveId ?? observedActiveId;
  const activeIndex = Math.max(0, ids.indexOf(activeId));
  const progress = sortedProjects.length > 1 ? (activeIndex / (sortedProjects.length - 1)) * 100 : 0;
  const mobileProject = sortedProjects[mobileActiveIndex];

  useEffect(() => {
    setMobileActiveIndex((current) => Math.min(current, Math.max(sortedProjects.length - 1, 0)));
  }, [sortedProjects.length]);

  useEffect(
    () => () => {
      if (dragFrameRef.current !== null) {
        window.cancelAnimationFrame(dragFrameRef.current);
      }

      if (settleFrameRef.current !== null) {
        window.cancelAnimationFrame(settleFrameRef.current);
      }

      if (settleTimeoutRef.current !== null) {
        window.clearTimeout(settleTimeoutRef.current);
      }
    },
    []
  );

  useEffect(() => {
    if (swipePhase === "settling") {
      applySwipeOffset(0);
    }
  }, [swipePhase]);

  const handleMarkerClick = (id: string) => {
    setManualActiveId(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "center"
    });
    window.setTimeout(() => setManualActiveId(null), prefersReducedMotion ? 0 : 750);
  };

  const applySwipeOffset = (offset: number) => {
    swipeOffsetRef.current = offset;

    const swipeArea = mobileSwipeAreaRef.current;
    if (!swipeArea) {
      return;
    }

    const swipeOpacity = 1 - Math.min(Math.abs(offset) / 360, 0.24);
    const swipeScale = 1 - Math.min(Math.abs(offset) / 1600, 0.025);

    swipeArea.style.opacity = String(swipeOpacity);
    swipeArea.style.transform = `translate3d(${Math.round(offset)}px, 0, 0) scale(${swipeScale})`;
  };

  const queueSwipeOffset = (offset: number) => {
    queuedSwipeOffsetRef.current = offset;

    if (dragFrameRef.current !== null) {
      return;
    }

    dragFrameRef.current = window.requestAnimationFrame(() => {
      dragFrameRef.current = null;
      applySwipeOffset(queuedSwipeOffsetRef.current);
    });
  };

  const cancelDragFrame = () => {
    if (dragFrameRef.current === null) {
      return;
    }

    window.cancelAnimationFrame(dragFrameRef.current);
    dragFrameRef.current = null;
  };

  const cancelSettleTimers = () => {
    if (settleFrameRef.current !== null) {
      window.cancelAnimationFrame(settleFrameRef.current);
      settleFrameRef.current = null;
    }

    if (settleTimeoutRef.current !== null) {
      window.clearTimeout(settleTimeoutRef.current);
      settleTimeoutRef.current = null;
    }
  };

  const releaseActivePointer = () => {
    if (activePointerIdRef.current === null) {
      return;
    }

    try {
      mobileSwipeAreaRef.current?.releasePointerCapture(activePointerIdRef.current);
    } catch {
      // The browser may have already released capture during cancellation.
    }

    activePointerIdRef.current = null;
  };

  const resetSwipeVisual = () => {
    cancelDragFrame();
    cancelSettleTimers();
    releaseActivePointer();
    swipeStartRef.current = null;
    queuedSwipeOffsetRef.current = 0;
    applySwipeOffset(0);
    setSwipePhase("idle");
  };

  const selectMobileProject = (index: number) => {
    resetSwipeVisual();
    setMobileActiveIndex(Math.min(Math.max(index, 0), Math.max(sortedProjects.length - 1, 0)));
  };

  const scheduleSwipeSettle = () => {
    cancelSettleTimers();

    settleFrameRef.current = window.requestAnimationFrame(() => {
      settleFrameRef.current = window.requestAnimationFrame(() => {
        settleFrameRef.current = null;
        setSwipePhase("settling");
        settleTimeoutRef.current = window.setTimeout(() => {
          settleTimeoutRef.current = null;
          applySwipeOffset(0);
          setSwipePhase("idle");
        }, 260);
      });
    });
  };

  const settleSwipeVisual = () => {
    cancelDragFrame();
    queuedSwipeOffsetRef.current = 0;

    if (prefersReducedMotion || Math.abs(swipeOffsetRef.current) < 1) {
      resetSwipeVisual();
      return;
    }

    setSwipePhase("entering");
    scheduleSwipeSettle();
  };

  const startSwipeTransition = (nextIndex: number, enterOffset: number) => {
    const boundedIndex = Math.min(Math.max(nextIndex, 0), sortedProjects.length - 1);

    if (boundedIndex === mobileActiveIndex) {
      settleSwipeVisual();
      return;
    }

    if (prefersReducedMotion) {
      selectMobileProject(boundedIndex);
      return;
    }

    cancelDragFrame();
    queuedSwipeOffsetRef.current = 0;
    setMobileActiveIndex(boundedIndex);
    setSwipePhase("entering");
    applySwipeOffset(enterOffset);
    scheduleSwipeSettle();
  };

  const handleSwipeEnd = (clientX: number, clientY: number) => {
    if (!swipeStartRef.current) {
      return;
    }

    const deltaX = clientX - swipeStartRef.current.x;
    const deltaY = clientY - swipeStartRef.current.y;
    const isHorizontalSwipe = Math.abs(deltaX) >= minSwipeDistance && Math.abs(deltaX) > Math.abs(deltaY) * swipeDirectionRatio;
    const swipeAreaWidth = mobileSwipeAreaRef.current?.clientWidth ?? 320;
    const enterOffset = Math.min(swipeAreaWidth * 0.28, maxEnterOffset);

    swipeStartRef.current = null;
    cancelDragFrame();
    queuedSwipeOffsetRef.current = 0;

    if (!isHorizontalSwipe) {
      settleSwipeVisual();
      return;
    }

    if (deltaX < 0) {
      startSwipeTransition(mobileActiveIndex + 1, enterOffset);
    } else {
      startSwipeTransition(mobileActiveIndex - 1, -enterOffset);
    }
  };

  const handleSwipeMove = (clientX: number, clientY: number) => {
    if (!swipeStartRef.current || activePointerIdRef.current === null) {
      return;
    }

    const deltaX = clientX - swipeStartRef.current.x;
    const deltaY = clientY - swipeStartRef.current.y;
    const isVerticalScroll = Math.abs(deltaY) > 12 && Math.abs(deltaY) > Math.abs(deltaX) * swipeDirectionRatio;

    if (isVerticalScroll) {
      resetSwipeVisual();
      return;
    }

    const isAtStart = mobileActiveIndex === 0 && deltaX > 0;
    const isAtEnd = mobileActiveIndex === sortedProjects.length - 1 && deltaX < 0;
    const resistedOffset =
      isAtStart || isAtEnd ? Math.sign(deltaX) * Math.min(Math.abs(deltaX) * 0.32, maxSwipeResistanceOffset) : deltaX;

    queueSwipeOffset(resistedOffset);
  };

  const handleSwipeTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget || event.propertyName !== "transform") {
      return;
    }

    if (swipePhase === "settling") {
      if (settleTimeoutRef.current !== null) {
        window.clearTimeout(settleTimeoutRef.current);
        settleTimeoutRef.current = null;
      }

      applySwipeOffset(0);
      setSwipePhase("idle");
    }
  };

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

        {mobileProject && (
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

            <div className={styles.mobileCounter} aria-live="polite">
              {mobileActiveIndex + 1} / {sortedProjects.length}
            </div>

            <div
              className={styles.mobileSwipeArea}
              data-swipe-phase={swipePhase}
              ref={mobileSwipeAreaRef}
              onPointerCancel={() => {
                resetSwipeVisual();
              }}
              onPointerDown={(event) => {
                if (swipePhase !== "idle") {
                  return;
                }

                if (event.pointerType === "mouse" && event.button !== 0) {
                  return;
                }

                activePointerIdRef.current = event.pointerId;
                event.currentTarget.setPointerCapture(event.pointerId);
                swipeStartRef.current = { x: event.clientX, y: event.clientY };
                setSwipePhase("dragging");
              }}
              onPointerMove={(event) => {
                if (activePointerIdRef.current !== event.pointerId) {
                  return;
                }

                handleSwipeMove(event.clientX, event.clientY);
              }}
              onPointerLeave={(event) => {
                if (event.pointerType === "mouse" && activePointerIdRef.current === null) {
                  resetSwipeVisual();
                }
              }}
              onPointerUp={(event) => {
                if (activePointerIdRef.current !== event.pointerId) {
                  return;
                }

                releaseActivePointer();
                handleSwipeEnd(event.clientX, event.clientY);
              }}
              onTransitionEnd={handleSwipeTransitionEnd}
            >
              <ProjectCard project={mobileProject} isActive onOpen={onOpenProject} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
