const monthNames = [
  "январь",
  "февраль",
  "март",
  "апрель",
  "май",
  "июнь",
  "июль",
  "август",
  "сентябрь",
  "октябрь",
  "ноябрь",
  "декабрь"
];

type DateLike = {
  year?: number;
  month?: number;
  periodLabel?: string;
};

export function formatDateLabel(project: DateLike): string {
  if (project.year && project.month) {
    return `${monthNames[project.month - 1]} ${project.year}`;
  }

  if (project.periodLabel) {
    return project.periodLabel;
  }

  if (project.year) {
    return String(project.year);
  }

  return "Период уточняется";
}

export function formatCompactDate(project: DateLike): string {
  if (project.year && project.month) {
    return `${String(project.month).padStart(2, "0")}.${project.year}`;
  }

  return formatDateLabel(project);
}
