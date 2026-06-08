import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import type { ArchiveProject } from "../../types/project";
import { emptyArchiveFilters, filterArchiveProjects, type ArchiveFilters, uniqueOptions } from "../../utils/projectFilters";
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

const pageSize = 10;
type FilterKey = Exclude<keyof ArchiveFilters, "query">;

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
  const filteredProjects = useMemo(() => filterArchiveProjects(projects, filters), [projects, filters]);
  const pageCount = Math.max(1, Math.ceil(filteredProjects.length / pageSize));
  const currentPage = Math.min(page, pageCount);
  const paginatedProjects = filteredProjects.slice((currentPage - 1) * pageSize, currentPage * pageSize);

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
        <span className="eyebrow">Архив</span>
        <div className={styles.heading}>
          <div>
            <h2 className="section-title">Архив реализованных объектов</h2>
            <p className="section-lead">
              Полный текущий реестр из предоставленного документа. Финальный список можно уточнить после
              утверждения заказчиком.
            </p>
          </div>
          <div className={styles.counter}>
            <strong>{filteredProjects.length}</strong>
            <span>из {projects.length} объектов</span>
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

        <div className={styles.mobileList}>
          {paginatedProjects.map((project) => (
            <article key={project.id} className={styles.mobileCard}>
              <div>
                <span>№{project.sourceNumber} · {project.periodLabel ?? project.year}</span>
                <h3>{project.title}</h3>
              </div>
              <dl>
                <div>
                  <dt>Тип</dt>
                  <dd>{project.type}</dd>
                </div>
                <div>
                  <dt>Регион</dt>
                  <dd>{project.region}</dd>
                </div>
                <div>
                  <dt>Стоимость</dt>
                  <dd>{project.cost ?? "Уточняется"}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        {filteredProjects.length > pageSize && (
          <nav className={styles.pagination} aria-label="Пагинация архива объектов">
            <button className="button" type="button" disabled={currentPage === 1} onClick={() => setPage(currentPage - 1)}>
              Назад
            </button>
            <div className={styles.pageNumbers}>
              {Array.from({ length: pageCount }, (_, index) => index + 1).map((pageNumber) => (
                <button
                  aria-current={pageNumber === currentPage ? "page" : undefined}
                  className={pageNumber === currentPage ? styles.currentPage : ""}
                  key={pageNumber}
                  type="button"
                  onClick={() => setPage(pageNumber)}
                >
                  {pageNumber}
                </button>
              ))}
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
