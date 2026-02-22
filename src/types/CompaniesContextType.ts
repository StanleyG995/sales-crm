import type { CompanyType } from "./CompanyType";

export interface CompaniesContextType {
  companies: CompanyType[];
  toggleModalVisibility: () => void,
  isModalOpen: boolean,
  deleteCompany: (id: number) => void;
  addCompany: (company: CompanyType) => void,
  sortByDate: () => void,
};
