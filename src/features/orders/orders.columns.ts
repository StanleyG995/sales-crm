import type { OrderProps } from "../../data/Order.type"
import type { TableColumn } from "../../components/Table/Table.types"
import { formatDate } from "../../utils/helpers/formatDate"

export const orderColumns: TableColumn<OrderProps>[] = [
  { key: "id", header: "ID", sortable: true },

  { key: "invoiceNumber", header: "Invoice", sortable: true },

  { key: "companyName", header: "Company", sortable: true },

  { key: "employee", header: "Employee" },

  { key: "createdBy", header: "Created by" },

  {
    key: "orderDate",
    header: "Order date",
    sortable: true,
    render: (o) => formatDate(o.orderDate),
  },

  { key: "orderStatus", header: "Order status" },

  { key: "paymentStatus", header: "Payment" },

  { key: "salesStage", header: "Stage" },

  {
    key: "total",
    header: "Total (PLN)",
    sortable: true,
    render: (o) => o.total.toLocaleString("pl-PL"),
  },
]