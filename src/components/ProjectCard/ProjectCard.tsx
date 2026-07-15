import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { formatDateLabel } from "../../utils/formatDateLabel";
import type { FeaturedProject } from "../../types/project";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  project: FeaturedProject;
  isActive?: boolean;
  onOpen: (project: FeaturedProject) => void;
};

export function ProjectCard({ project, isActive = false, onOpen }: ProjectCardProps) {
  const image = project.images[0];
  const location = [project.city, project.region].filter(Boolean).join(", ");
  const facts = [
    { label: "Формат", value: project.workType ?? project.type },
    { label: project.amountLabel ?? "Стоимость", value: project.cost },
    { label: "Статус", value: project.status }
  ].filter((fact) => fact.value);

  return (
    <article className={`${styles.card} ${isActive ? styles.active : ""}`}>
      <div className={styles.media}>
        {image?.src ? (
          <img src={image.src} alt={image.alt} loading="lazy" />
        ) : (
          <div className={styles.placeholder} role="img" aria-label={image?.alt ?? "Фото будет добавлено"}>
            <span>Фото будет добавлено</span>
          </div>
        )}
      </div>

      <div className={styles.body}>
        <div className={styles.meta}>
          <span>
            <CalendarDays size={16} aria-hidden />
            {formatDateLabel(project)}
          </span>
          {location && (
            <span>
              <MapPin size={16} aria-hidden />
              {location}
            </span>
          )}
        </div>
        <h3>{project.title}</h3>
        <p>{project.shortDescription}</p>
        {facts.length > 0 && (
          <dl className={styles.facts}>
            {facts.map((fact) => (
              <div key={`${fact.label}-${fact.value}`}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        )}
        <button className="button" type="button" onClick={() => onOpen(project)}>
          Подробнее
          <ArrowUpRight size={17} aria-hidden />
        </button>
      </div>
    </article>
  );
}
