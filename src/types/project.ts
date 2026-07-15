export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  srcSet?: string;
  sizes?: string;
  width?: number;
  height?: number;
  isPlaceholder?: boolean;
};

export type ProjectContractDetails = {
  customer?: string;
  contractNumber?: string;
  contractDate?: string;
  contractPrice?: string;
  completionDate?: string;
};

export type ProjectStage = ProjectContractDetails & {
  id: string;
  title: string;
  period: string;
  completedAmount: string;
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
  workType?: string;
  role?: string;
  customer?: string;
  cost?: string;
  amountLabel?: string;
  duration?: string;
  area?: string;
  status?: string;
  shortDescription: string;
  fullDescription?: string;
  historicalNote?: string;
  contractDetails?: ProjectContractDetails;
  stages?: ProjectStage[];
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
