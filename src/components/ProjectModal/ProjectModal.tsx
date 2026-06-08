import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { useBodyLock } from "../../hooks/useBodyLock";
import type { FeaturedProject } from "../../types/project";
import { formatDateLabel } from "../../utils/formatDateLabel";
import styles from "./ProjectModal.module.css";

type ProjectModalProps = {
  projects: FeaturedProject[];
  project: FeaturedProject | null;
  onClose: () => void;
  onSelectProject: (project: FeaturedProject) => void;
};

export function ProjectModal({ projects, project, onClose, onSelectProject }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const isOpen = Boolean(project);
  useBodyLock(isOpen);

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
    }
  }, [isOpen, project?.id]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!project) {
    return null;
  }

  const index = projects.findIndex((item) => item.id === project.id);
  const canNavigate = index >= 0 && projects.length > 1;
  const previous = canNavigate ? projects[(index - 1 + projects.length) % projects.length] : null;
  const next = canNavigate ? projects[(index + 1) % projects.length] : null;

  return (
    <div className={styles.overlay} role="presentation" onMouseDown={onClose}>
      <section
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className={styles.closeButton} type="button" onClick={onClose} ref={closeButtonRef} aria-label="Закрыть">
          <X size={22} aria-hidden />
        </button>

        <div className={styles.header}>
          <span className="eyebrow">{formatDateLabel(project)}</span>
          <h2 id="project-modal-title">{project.title}</h2>
          <p>{project.fullDescription ?? project.shortDescription}</p>
        </div>

        <div className={styles.gallery}>
          {project.images.map((image, imageIndex) => (
            <div key={`${project.id}-${imageIndex}`} className={styles.imageSlot}>
              {image.src ? (
                <img src={image.src} alt={image.alt} loading="lazy" />
              ) : (
                <span>{imageIndex === 0 ? "Основное фото будет добавлено" : "Дополнительное фото будет добавлено"}</span>
              )}
            </div>
          ))}
        </div>

        <div className={styles.details}>
          <div>
            <h3>Что было сделано</h3>
            <ul>
              {(project.works ?? ["Данные по составу работ уточняются"]).map((work) => (
                <li key={work}>{work}</li>
              ))}
            </ul>
          </div>
          <dl>
            <div>
              <dt>Тип</dt>
              <dd>{project.type ?? "Уточняется"}</dd>
            </div>
            <div>
              <dt>Регион</dt>
              <dd>{project.city ?? project.region ?? "Уточняется"}</dd>
            </div>
            <div>
              <dt>Стоимость</dt>
              <dd>{project.cost ?? "Данные уточняются"}</dd>
            </div>
            <div>
              <dt>Статус</dt>
              <dd>{project.status ?? "Уточняется"}</dd>
            </div>
          </dl>
        </div>

        <div className={styles.result}>
          <h3>Результат</h3>
          <p>{project.result ?? "Результат будет уточнен после финального описания объекта."}</p>
        </div>

        {previous && next && (
          <div className={styles.nav}>
            <button className="button" type="button" onClick={() => onSelectProject(previous)}>
              <ChevronLeft size={18} aria-hidden />
              Предыдущий
            </button>
            <button className="button" type="button" onClick={() => onSelectProject(next)}>
              Следующий
              <ChevronRight size={18} aria-hidden />
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
