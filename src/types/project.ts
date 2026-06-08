export type ProjectImage = {
  src: string;
  alt: string;
  isPlaceholder?: boolean;
};

export type FeaturedProject = {
  id: string;
  sourceNumber?: number;
  title: string;
  year: number;
  month?: number;
  periodLabel?: string;
  sortDate: string;
  city?: string;
  region?: string;
  type?: string;
  role?: string;
  customer?: string;
  cost?: string;
  duration?: string;
  area?: string;
  status?: string;
  shortDescription: string;
  fullDescription?: string;
  works?: string[];
  result?: string;
  images: ProjectImage[];
  isPlaceholder?: boolean;
};

export type ArchiveProject = {
  id: string;
  sourceNumber?: number;
  title: string;
  year?: number;
  month?: number;
  periodLabel?: string;
  sortDate?: string;
  city?: string;
  region?: string;
  type?: string;
  role?: string;
  customer?: string;
  cost?: string;
  description?: string;
};
