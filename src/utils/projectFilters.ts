import type { ArchiveProject } from "../types/project";
import { includesQuery } from "./textSearch";

export type ArchiveFilters = {
  query: string;
  year: string;
  type: string;
  region: string;
};

export const emptyArchiveFilters: ArchiveFilters = {
  query: "",
  year: "",
  type: "",
  region: "",
    };

export function filterArchiveProjects(projects: ArchiveProject[], filters: ArchiveFilters): ArchiveProject[] {
  return projects.filter((project) => {
    const haystack = [
      project.title,
      project.region,
      project.type,
      project.customer,
      project.cost,
      project.description
    ]
      .filter(Boolean)
      .join(" ");

    const matchesQuery = includesQuery(haystack, filters.query);
    const matchesYear = !filters.year || String(project.year ?? project.periodLabel ?? "").includes(filters.year);
    const matchesType = !filters.type || project.type === filters.type;
    const matchesRegion = !filters.region || project.region === filters.region;

    return matchesQuery && matchesYear && matchesType && matchesRegion;
  });
}

export function uniqueOptions(values: Array<string | number | undefined>): string[] {
  return Array.from(new Set(values.filter(Boolean).map(String))).sort((a, b) =>
    a.localeCompare(b, "ru", { numeric: true })
  );
}
