import type { CompanyType } from "./CompanyType";

export interface CompaniesContextType {
  companies: CompanyType[];
  sortedCompanies: CompanyType[],
  isModalOpen: boolean,
  
  toggleModalVisibility: () => void,
  deleteCompany: (id: number) => void;
  addCompany: (company: CompanyType) => void,
  sortByDate: () => void,
};
