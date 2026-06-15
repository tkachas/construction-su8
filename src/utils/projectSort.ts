import type { ArchiveProject, FeaturedProject } from "../types/project";

export function sortByProjectDate<T extends ArchiveProject | FeaturedProject>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    const left = a.sortDate ?? `${a.year ?? 0}-12-01`;
    const right = b.sortDate ?? `${b.year ?? 0}-12-01`;

    if (left === right) {
      return (b.sourceNumber ?? 0) - (a.sourceNumber ?? 0);
    }

    return right.localeCompare(left);
  });
}
