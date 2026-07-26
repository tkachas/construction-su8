import { memo, useId } from "react";
import { ArrowUpRight, CalendarDays, Info, MapPin } from "lucide-react";
import { formatDateLabel } from "../../utils/formatDateLabel";
import type { FeaturedProject } from "../../types/project";
import styles from "./ProjectCard.module.css";

const costNote = "На момент введения в эксплуатацию";

type ProjectCardProps = {
  project: FeaturedProject;
  isActive?: boolean;
  onOpen: (project: FeaturedProject) => void;
};

export const ProjectCard = memo(function ProjectCard({ project, isActive = false, onOpen }: ProjectCardProps) {
  const costNoteId = useId();
  const image = project.images[0];
  const location = [project.city, project.region].filter(Boolean).join(", ");
  const facts = [
    { label: "Формат", value: project.workType ?? project.type },
    { label: "Стоимость", value: project.cost, note: costNote },
    { label: "Статус", value: project.status }
  ].filter((fact) => fact.value);

  return (
    <article className={`${styles.card} ${isActive ? styles.active : ""}`}>
      <div className={styles.media}>
        {image?.src ? (
          <img
            src={image.src}
            srcSet={image.srcSet}
            sizes={image.sizes ?? "(max-width: 820px) calc(100vw - 40px), (max-width: 1120px) 42vw, 360px"}
            width={image.width}
            height={image.height}
            alt={image.alt}
            loading="lazy"
            decoding="async"
          />
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
                <dt>
                  <span>{fact.label}</span>
                  {fact.note && (
                    <span className={styles.factNote}>
                      <button
                        type="button"
                        className={styles.noteTrigger}
                        aria-label={`Примечание: ${fact.note}`}
                        aria-describedby={costNoteId}
                      >
                        <Info size={12} strokeWidth={2.2} aria-hidden />
                      </button>
                      <span className={styles.noteTooltip} id={costNoteId} role="tooltip">
                        {fact.note}
                      </span>
                    </span>
                  )}
                </dt>
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
});
