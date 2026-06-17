import { Search } from "lucide-react";
import { type CSSProperties, useMemo, useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import type { ArchiveProject } from "../../types/project";
import { emptyArchiveFilters, filterArchiveProjects, type ArchiveFilters, uniqueOptions } from "../../utils/projectFilters";
import { sortByProjectDate } from "../../utils/projectSort";
import styles from "./ProjectArchive.module.css";

type ProjectArchiveProps = {
  projects: ArchiveProject[];
};

type FilterDropdownProps = {
  label: string;
  value: string;
  placeholder: string;
  options: string[];
  isOpen: boolean;
  onChange: (value: string) => void;
  onClose: () => void;
  onOpen: () => void;
};

const desktopPageSize = 10;
const mobilePageSize = 3;
const mobileCardClosedHeight = 150;
const mobileCardGap = 12;
type FilterKey = Exclude<keyof ArchiveFilters, "query">;
type PaginationItem = number | "start-ellipsis" | "end-ellipsis";

function getPaginationItems(currentPage: number, pageCount: number): PaginationItem[] {
  if (pageCount <= 7) {
    return Array.from({ length: pageCount }, (_, index) => index + 1);
  }

  const pages = new Set([1, pageCount, currentPage - 1, currentPage, currentPage + 1]);
  const boundedPages = [...pages].filter((page) => page >= 1 && page <= pageCount).sort((a, b) => a - b);
  const items: PaginationItem[] = [];

  boundedPages.forEach((page, index) => {
    const previous = boundedPages[index - 1];

    if (previous && page - previous > 1) {
      items.push(page - previous === 2 ? previous + 1 : index === 1 ? "start-ellipsis" : "end-ellipsis");
    }

    items.push(page);
  });

  return items;
}

function FilterDropdown({ label, value, placeholder, options, isOpen, onChange, onClose, onOpen }: FilterDropdownProps) {
  return (
    <details
      className={styles.filterDropdown}
      open={isOpen}
      onToggle={(event) => {
        if (event.currentTarget.open) {
          onOpen();
        } else {
          onClose();
        }
      }}
    >
      <summary>
        <span>{label}</span>
        <strong>{value || placeholder}</strong>
      </summary>
      <div className={styles.filterMenu}>
        <button
          className={!value ? styles.selectedOption : ""}
          type="button"
          onClick={() => {
            onChange("");
            onClose();
          }}
        >
          {placeholder}
        </button>
        {options.map((option) => (
          <button
            className={value === option ? styles.selectedOption : ""}
            key={option}
            type="button"
            onClick={() => {
              onChange(option);
              onClose();
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </details>
  );
}

export function ProjectArchive({ projects }: ProjectArchiveProps) {
  const [filters, setFilters] = useState(emptyArchiveFilters);
  const [page, setPage] = useState(1);
  const [openFilter, setOpenFilter] = useState<FilterKey | null>(null);
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 720px)");
  const pageSize = isMobile ? mobilePageSize : desktopPageSize;
  const filteredProjects = useMemo(() => sortByProjectDate(filterArchiveProjects(projects, filters)), [projects, filters]);
  const pageCount = Math.max(1, Math.ceil(filteredProjects.length / pageSize));
  const currentPage = Math.min(page, pageCount);
  const paginatedProjects = filteredProjects.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const paginationItems = getPaginationItems(currentPage, pageCount);
  const activeFilterCount = [filters.year, filters.type, filters.region].filter(Boolean).length;
  const hasPagination = filteredProjects.length > pageSize;
  const mobileListStyle = hasPagination
    ? ({
        "--archive-mobile-list-min-height": `${mobilePageSize * mobileCardClosedHeight + (mobilePageSize - 1) * mobileCardGap}px`
      } as CSSProperties)
    : undefined;

  const years = useMemo(() => uniqueOptions(projects.map((project) => project.year ?? project.periodLabel)), [projects]);
  const types = useMemo(() => uniqueOptions(projects.map((project) => project.type)), [projects]);
  const regions = useMemo(() => uniqueOptions(projects.map((project) => project.region)), [projects]);

  const updateFilter = (key: keyof ArchiveFilters, value: string) => {
    setFilters((current) => ({ ...current, [key]: value }));
    setPage(1);
  };

  const closeFilter = (filter: FilterKey) => {
    setOpenFilter((current) => (current === filter ? null : current));
  };

  return (
    <section className="section" id="archive">
      <div className="container">
        <span className="eyebrow">Объекты</span>
        <div className={styles.heading}>
          <div>
            <h2 className="section-title">Реализованные объекты</h2>
          </div>
          <div className={styles.counter}>
            <strong>{filteredProjects.length}</strong>
            <span>из {projects.length}</span>
          </div>
        </div>

        <div className={styles.filters} aria-label="Фильтры архива">
          <label className={styles.search}>
            <Search size={18} aria-hidden />
            <input
              type="search"
              placeholder="Поиск по объекту, региону, стоимости"
              value={filters.query}
              onChange={(event) => updateFilter("query", event.target.value)}
            />
          </label>

          <details
            className={styles.filterPanel}
            open={!isMobile || isFilterPanelOpen}
            onToggle={(event) => {
              if (isMobile) {
                setIsFilterPanelOpen(event.currentTarget.open);
              }
            }}
          >
            <summary>
              <span>Фильтры</span>
              <strong>{activeFilterCount ? `${activeFilterCount} активн.` : "Год, тип, регион"}</strong>
            </summary>

            <div className={styles.filterGroup}>
              <FilterDropdown
                label="Год"
                value={filters.year}
                placeholder="Все годы"
                options={years}
                isOpen={openFilter === "year"}
                onChange={(value) => updateFilter("year", value)}
                onClose={() => closeFilter("year")}
                onOpen={() => setOpenFilter("year")}
              />

              <FilterDropdown
                label="Тип"
                value={filters.type}
                placeholder="Все типы"
                options={types}
                isOpen={openFilter === "type"}
                onChange={(value) => updateFilter("type", value)}
                onClose={() => closeFilter("type")}
                onOpen={() => setOpenFilter("type")}
              />

              <FilterDropdown
                label="Регион"
                value={filters.region}
                placeholder="Все регионы"
                options={regions}
                isOpen={openFilter === "region"}
                onChange={(value) => updateFilter("region", value)}
                onClose={() => closeFilter("region")}
                onOpen={() => setOpenFilter("region")}
              />
            </div>
          </details>
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>№</th>
                <th>Период</th>
                <th>Объект</th>
                <th>Тип</th>
                <th>Регион</th>
                <th>Стоимость</th>
              </tr>
            </thead>
            <tbody>
              {paginatedProjects.map((project) => (
                <tr key={project.id}>
                  <td>
                    <span className={styles.cellText}>{project.sourceNumber}</span>
                  </td>
                  <td>
                    <span className={styles.cellText}>{project.periodLabel ?? project.year}</span>
                  </td>
                  <td title={project.title}>
                    <span className={styles.cellText}>{project.title}</span>
                  </td>
                  <td title={project.type}>
                    <span className={styles.cellText}>{project.type}</span>
                  </td>
                  <td title={project.region}>
                    <span className={styles.cellText}>{project.region}</span>
                  </td>
                  <td title={project.cost ?? "Уточняется"}>
                    <span className={styles.cellText}>{project.cost ?? "Уточняется"}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={`${styles.mobileList} ${hasPagination ? styles.mobileListPaged : ""}`} style={mobileListStyle}>
          {paginatedProjects.map((project) => (
            <details key={project.id} className={styles.mobileCard}>
              <summary>
                <span>№{project.sourceNumber} · {project.periodLabel ?? project.year}</span>
                <h3>{project.title}</h3>
                <div className={styles.mobileFacts} aria-label="Краткие данные объекта">
                  <span>{project.type}</span>
                  <span>{project.region}</span>
                </div>
              </summary>
              <dl className={styles.mobileDetails}>
                <div>
                  <dt>Стоимость</dt>
                  <dd>{project.cost ?? "Уточняется"}</dd>
                </div>
              </dl>
            </details>
          ))}
        </div>

        {hasPagination && (
          <nav className={styles.pagination} aria-label="Пагинация архива объектов">
            <button className="button" type="button" disabled={currentPage === 1} onClick={() => setPage(currentPage - 1)}>
              Назад
            </button>
            <div className={styles.pageNumbers}>
              {paginationItems.map((item) =>
                typeof item === "number" ? (
                  <button
                    aria-current={item === currentPage ? "page" : undefined}
                    className={item === currentPage ? styles.currentPage : ""}
                    key={item}
                    type="button"
                    onClick={() => setPage(item)}
                  >
                    {item}
                  </button>
                ) : (
                  <span className={styles.ellipsis} key={item} aria-hidden>
                    ...
                  </span>
                )
              )}
            </div>
            <button
              className="button"
              type="button"
              disabled={currentPage === pageCount}
              onClick={() => setPage(currentPage + 1)}
            >
              Вперед
            </button>
          </nav>
        )}

        {!filteredProjects.length && (
          <div className={styles.emptyState}>
            По текущим фильтрам объектов не найдено. Попробуйте изменить запрос или очистить фильтры.
          </div>
        )}
      </div>
    </section>
  );
}
