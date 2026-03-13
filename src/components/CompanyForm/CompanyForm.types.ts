import type { CompanyProps } from '../../features/companies/Company.type'

export interface CompanyFormProps {
    addCompany: (company: CompanyProps) => void,
    onSuccess: () => void
  };
  