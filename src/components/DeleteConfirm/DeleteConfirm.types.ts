import type { CompanyProps } from '../../features/companies/Company.type'

export interface DeleteConfirmProps {
    company: CompanyProps;
    onCancel: () => void;
    onConfirm: () => void;
  }
  