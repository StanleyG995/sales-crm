import type { CompanyType } from "./CompanyType";

export interface CompaniesContextType {
  companies: CompanyType[];
  deleteCompany: (id: number) => void;
  addCompany: (company: CompanyType) => void
};
