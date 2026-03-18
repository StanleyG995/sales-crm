import type { OrderProps } from "../../data/Order.type"
import type { TableColumn } from "../../components/Table/Table.types"
import { formatDate } from "../../utils/helpers/formatDate"

export const orderColumns: TableColumn<OrderProps>[] = [
  { key: "id", header: "ID", sortable: true },

  { key: "invoiceNumber", header: "Invoice", sortable: true },

  { key: "companyName", header: "Company", sortable: true },

  { key: "employee", header: "Employee" },

  {
    key: "orderDate",
    header: "Order date",
    sortable: true,
    render: (o) => formatDate(o.orderDate),
  },

  { key: "orderStatus", header: "Order status" },

  { key: "paymentStatus", header: "Payment" },

  {
    key: "products",
    header: "Products",
    render: (o) => (
      <ul>
        {o.products.map(p => (
          <li key={p.id} style={{margin: "5px 0", padding: "5px 0", borderBottom: "solid 1px #dddddd"}}>
            • <strong>{p.quantity} x </strong>{p.name} | {p.price} PLN | <strong>{p.total} PLN</strong> 
          </li>
        ))}
      </ul>
    ),
  },

  {
    key: "total",
    header: "Total",
    sortable: true,
    render: (o) => o.total.toLocaleString("pl-PL"),
  },
]