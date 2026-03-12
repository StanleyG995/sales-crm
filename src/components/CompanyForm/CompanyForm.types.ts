import type { CompanyType } from '../../features/companies/Company.type'

export interface CompanyFormProps {
    addCompany: (company: CompanyType) => void,
    onSuccess: () => void
  };
  