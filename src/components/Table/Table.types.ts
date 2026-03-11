import type { CompanyType } from "../../features/companies/CompanyType"

export interface TableProps {
    companies: CompanyType[]
    deleteCompany: (id: number) => void
    toggleSort: (key: keyof CompanyType) => void
    renderSortArrow: (key: keyof CompanyType) => React.ReactNode
  }