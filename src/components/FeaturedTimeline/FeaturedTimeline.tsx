import { useMemo, useState } from "react";
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
  const prefersReducedMotion = useReducedMotion();
  const sortedProjects = useMemo(() => sortByProjectDate(projects), [projects]);
  const ids = useMemo(() => sortedProjects.map((project) => `timeline-${project.id}`), [sortedProjects]);
  const observedActiveId = useActiveTimelineItem(ids);
  const activeId = manualActiveId ?? observedActiveId;
  const activeIndex = Math.max(0, ids.indexOf(activeId));
  const progress = sortedProjects.length > 1 ? (activeIndex / (sortedProjects.length - 1)) * 100 : 0;

  const handleMarkerClick = (id: string) => {
    setManualActiveId(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "center"
    });
    window.setTimeout(() => setManualActiveId(null), prefersReducedMotion ? 0 : 750);
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

              return (
                <a
                  key={project.id}
                  className={isActive ? styles.activeMarker : ""}
                  href={`#${id}`}
                  onClick={(event) => {
                    event.preventDefault();
                    handleMarkerClick(id);
                  }}
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
      </div>
    </section>
  );
}
