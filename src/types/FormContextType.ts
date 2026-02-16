import type { CompanyType } from "../types/CompanyType";

export interface FormContextType {
  companies: CompanyType[];
  setCompanies: React.Dispatch<React.SetStateAction<CompanyType[]>>;
};
