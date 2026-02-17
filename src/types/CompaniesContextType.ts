import type { CompanyType } from "./CompanyType";

export interface CompaniesContextType {
  companies: CompanyType[];
  setCompanies: React.Dispatch<React.SetStateAction<CompanyType[]>>;
};
