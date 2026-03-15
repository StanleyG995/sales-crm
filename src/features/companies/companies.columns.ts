import type { CompanyProps } from '../../data/Company.type'
import type { TableColumn } from '../../components/Table/Table.types'
import { formatDate } from '../../utils/helpers/formatDate'

export const companyColumns: TableColumn<CompanyProps>[] = [
    { key: "id", header: "ID", sortable: true },
  
    { key: "companyName", header: "Name", sortable: true },
  
    { key: "industry", header: "Industry" },
  
    { key: "email", header: "Email" },
  
    { key: "phone", header: "Phone number" },
  
    {
      key: "totalSales",
      header: "Total (PLN)",
      sortable: true,
      render: (c) => c.totalSales.toLocaleString("pl-PL"),
    },
  
    { key: "assignedEmployee", header: "Employee" },
  
    {
      key: "createdAt",
      header: "Date",
      sortable: true,
      render: (c) => formatDate(c.createdAt),
    },
  ]