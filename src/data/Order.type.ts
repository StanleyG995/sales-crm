export interface OrderProduct {
    id: number
    name: string
    quantity: number
    price: number
    total: number
  }
  
  export interface OrderProps {
    id: number
    invoiceNumber: string
    companyId: number
    companyName: string
    employee: string
    createdBy: string
    orderDate: string
    orderStatus: "pending" | "completed" | "cancelled"
    paymentStatus: "unpaid" | "paid" | "refunded"
    salesStage: "lead" | "negotiation" | "won"
    products: OrderProduct[]
    total: number
  }