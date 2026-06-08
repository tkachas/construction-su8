export type CompanyMetric = {
  value: string;
  label: string;
  note?: string;
};

export type CompanyInfo = {
  name: string;
  shortName: string;
  founded: string;
  inn: string;
  address: string;
  phone: string;
  email: string;
  description: string[];
  metrics: CompanyMetric[];
};
