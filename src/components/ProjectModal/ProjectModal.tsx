import { CalendarDays, ChevronLeft, ChevronRight, FileText, MapPin, X } from "lucide-react";
import { useEffect, useMemo, useRef } from "react";
import { ProjectGallery } from "../ProjectGallery/ProjectGallery";
import { useBodyLock } from "../../hooks/useBodyLock";
import type { FeaturedProject, ProjectContractDetails, ProjectStage } from "../../types/project";
import { formatDateLabel } from "../../utils/formatDateLabel";
import styles from "./ProjectModal.module.css";

type ProjectModalProps = {
  projects: FeaturedProject[];
  project: FeaturedProject | null;
  onClose: () => void;
  onSelectProject: (project: FeaturedProject) => void;
};

type FactItem = {
  label: string;
  value?: string;
  isStrong?: boolean;
};

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "details summary",
  '[tabindex]:not([tabindex="-1"])'
].join(",");

function getLocation(project: FeaturedProject) {
  return [project.city, project.region].filter(Boolean).join(", ");
}

function getContractFields(details?: ProjectContractDetails) {
  if (!details) {
    return [];
  }

  return [
    { label: "Заказчик", value: details.customer },
    { label: "Договор", value: details.contractNumber },
    { label: "Дата договора", value: details.contractDate },
    { label: "Цена договора", value: details.contractPrice },
    { label: "Завершение", value: details.completionDate }
  ].filter((item) => item.value);
}

function DetailsList({ items }: { items: { label: string; value?: string }[] }) {
  if (!items.length) {
    return null;
  }

  return (
    <dl className={styles.detailsList}>
      {items.map((item) => (
        <div key={`${item.label}-${item.value}`}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function StageCard({ stage }: { stage: ProjectStage }) {
  const contractFields = getContractFields(stage);

  return (
    <article className={styles.stageCard}>
      <div>
        <span>{stage.period}</span>
        <h4>{stage.title}</h4>
      </div>
      <strong>{stage.completedAmount}</strong>
      {contractFields.length > 0 && (
        <details className={styles.contractDisclosure}>
          <summary>Реквизиты этапа</summary>
          <DetailsList items={contractFields} />
        </details>
      )}
    </article>
  );
}

export function ProjectModal({ projects, project, onClose, onSelectProject }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<Element | null>(null);
  const isOpen = Boolean(project);
  useBodyLock(isOpen);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    previouslyFocusedRef.current = document.activeElement;
    closeButtonRef.current?.focus();

    return () => {
      const previous = previouslyFocusedRef.current;
      if (previous instanceof HTMLElement) {
        previous.focus();
      }
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      scrollAreaRef.current?.scrollTo({ top: 0 });
    }
  }, [isOpen, project?.id]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !modalRef.current) {
        return;
      }

      const focusable = Array.from(modalRef.current.querySelectorAll<HTMLElement>(focusableSelector)).filter(
        (element) => !element.hasAttribute("disabled") && element.tabIndex !== -1
      );

      if (!focusable.length) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const modalData = useMemo(() => {
    if (!project) {
      return null;
    }

    const index = projects.findIndex((item) => item.id === project.id);
    const canNavigate = index >= 0 && projects.length > 1;
    const facts: FactItem[] = [
      { label: "Период", value: formatDateLabel(project) },
      { label: "Формат работ", value: project.workType },
      { label: "Назначение", value: project.type },
      { label: project.amountLabel ?? "Стоимость", value: project.cost, isStrong: true },
      { label: "Вместимость", value: project.area },
      { label: "Статус", value: project.status }
    ].filter((fact) => fact.value);

    return {
      index,
      displayIndex: index >= 0 ? index + 1 : null,
      total: projects.length,
      previous: canNavigate ? projects[(index - 1 + projects.length) % projects.length] : null,
      next: canNavigate ? projects[(index + 1) % projects.length] : null,
      location: getLocation(project),
      facts,
      contractFields: getContractFields(project.contractDetails)
    };
  }, [project, projects]);

  if (!project || !modalData) {
    return null;
  }

  const modalDescriptionId = `${project.id}-modal-description`;

  return (
    <div className={styles.overlay} role="presentation" onMouseDown={onClose}>
      <section
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        aria-describedby={modalDescriptionId}
        ref={modalRef}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className={styles.topbar}>
          <div>
            <span className={styles.kicker}>
              {modalData.displayIndex ? `Объект ${String(modalData.displayIndex).padStart(2, "0")} / ${modalData.total}` : "Объект"}
            </span>
            <span className={styles.topbarDate}>{formatDateLabel(project)}</span>
          </div>
          <button className={styles.closeButton} type="button" onClick={onClose} ref={closeButtonRef} aria-label="Закрыть">
            <X size={22} aria-hidden />
          </button>
        </header>

        <div className={styles.scrollArea} ref={scrollAreaRef}>
          <div className={styles.layout}>
            <ProjectGallery key={project.id} images={project.images} projectTitle={project.title} />

            <div className={styles.passport}>
              <div className={styles.passportHeader}>
                <span className="eyebrow">Карточка объекта</span>
                <h2 id="project-modal-title">{project.title}</h2>
                {(modalData.location || project.status) && (
                  <div className={styles.badges}>
                    {modalData.location && (
                      <span>
                        <MapPin size={16} aria-hidden />
                        {modalData.location}
                      </span>
                    )}
                    {project.status && (
                      <span>
                        <CalendarDays size={16} aria-hidden />
                        {project.status}
                      </span>
                    )}
                  </div>
                )}
              </div>

              <p id={modalDescriptionId} className={styles.description}>
                {project.shortDescription}
              </p>

              <dl className={styles.factGrid}>
                {modalData.facts.map((fact) => (
                  <div key={`${fact.label}-${fact.value}`} className={fact.isStrong ? styles.factStrong : undefined}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {project.stages && project.stages.length > 0 && (
            <section className={styles.section} aria-labelledby="project-stages-title">
              <div className={styles.sectionHeader}>
                <FileText size={20} aria-hidden />
                <h3 id="project-stages-title">Этапы проекта</h3>
              </div>
              <div className={styles.stages}>
                {project.stages.map((stageItem) => (
                  <StageCard key={stageItem.id} stage={stageItem} />
                ))}
              </div>
            </section>
          )}

          {modalData.contractFields.length > 0 && (
            <section className={styles.section} aria-labelledby="project-contract-title">
              <details className={styles.contractDisclosure}>
                <summary id="project-contract-title">Реквизиты договора</summary>
                <DetailsList items={modalData.contractFields} />
              </details>
            </section>
          )}

          {project.historicalNote && (
            <section className={styles.note} aria-label="Примечание">
              <p>{project.historicalNote}</p>
            </section>
          )}
        </div>

        {(modalData.previous || modalData.next) && (
          <footer className={styles.nav}>
            <button
              className="button"
              type="button"
              onClick={() => modalData.previous && onSelectProject(modalData.previous)}
              disabled={!modalData.previous}
            >
              <ChevronLeft size={18} aria-hidden />
              Предыдущий
            </button>
            <span>{modalData.displayIndex ?? "—"} / {modalData.total}</span>
            <button
              className="button"
              type="button"
              onClick={() => modalData.next && onSelectProject(modalData.next)}
              disabled={!modalData.next}
            >
              Следующий
              <ChevronRight size={18} aria-hidden />
            </button>
          </footer>
        )}
      </section>
    </div>
  );
}
