import type { CompanyProps } from "../../features/companies/Company.type"

export interface TableProps {
	companies: CompanyProps[];
	onDeleteClick: (company: CompanyProps) => void;
	onEditClick: (company: CompanyProps) => void;
	toggleSort: (key: keyof CompanyProps) => void;
	renderSortArrow: (key: keyof CompanyProps) => React.ReactNode;
  }
