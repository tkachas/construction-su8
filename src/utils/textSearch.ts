export function normalizeText(value: string): string {
  return value
    .toLowerCase()
    .replace(/ё/g, "е")
    .replace(/\s+/g, " ")
    .trim();
}

export function includesQuery(source: string, query: string): boolean {
  const normalizedQuery = normalizeText(query);

  if (!normalizedQuery) {
    return true;
  }

  return normalizeText(source).includes(normalizedQuery);
}
