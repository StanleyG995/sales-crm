import { companiesData } from "./companies"
import type { CompanyProps } from "./Company.type"

export type OrderProduct = {
	id: number
	name: string
	quantity: number
	price: number
	total: number
}

export type OrderStatus = "pending" | "completed" | "cancelled"
export type PaymentStatus = "unpaid" | "paid" | "refunded"
export type SalesStage = "lead" | "negotiation" | "won"

export type OrderProps = {
	id: number
	invoiceNumber: string
	companyId: number
	companyName: string
	employee: string
	createdBy: string
	orderDate: string
	orderStatus: OrderStatus
	paymentStatus: PaymentStatus
	salesStage: SalesStage
	products: OrderProduct[]
	total: number
}

const employees = [
	"Anna Nowak",
	"Piotr Kowalski",
	"Marta Zielińska",
	"Tomasz Wiśniewski",
	"Katarzyna Wójcik",
	"Michał Lewandowski",
]

const productsCatalog = [
	{ id: 1, name: "Laptop Pro 14", price: 6500 },
	{ id: 2, name: "Monitor 27'' 4K", price: 1800 },
	{ id: 3, name: "Keyboard Mechanical", price: 450 },
	{ id: 4, name: "Wireless Mouse", price: 220 },
	{ id: 5, name: "Docking Station", price: 900 },
	{ id: 6, name: "Office Chair", price: 1200 },
	{ id: 7, name: "Desk Lamp LED", price: 150 },
	{ id: 8, name: "External SSD 1TB", price: 600 },
]

const statuses: OrderStatus[] = ["pending", "completed", "cancelled"]
const payments: PaymentStatus[] = ["unpaid", "paid", "refunded"]
const stages: SalesStage[] = ["lead", "negotiation", "won"]

const randomFrom = <T>(arr: T[]): T =>
	arr[Math.floor(Math.random() * arr.length)]

const randomDate = () => {
	const start = new Date(2023, 0, 1).getTime()
	const end = new Date(2025, 11, 31).getTime()
	const date = new Date(start + Math.random() * (end - start))
	return date.toISOString().split("T")[0]
}

const getRandomProducts = (): OrderProduct[] => {
	const count = Math.floor(Math.random() * 4) + 1
	const items: OrderProduct[] = []

	for (let i = 0; i < count; i++) {
		const product = randomFrom(productsCatalog)
		const quantity = Math.floor(Math.random() * 5) + 1

		items.push({
			id: product.id,
			name: product.name,
			quantity,
			price: product.price,
			total: quantity * product.price,
		})
	}

	return items
}

const generateInvoice = (id: number) => {
	return `INV-${new Date().getFullYear()}-${String(id).padStart(5, "0")}`
}

export const ordersData: OrderProps[] = Array.from({ length: 200 }, (_, i) => {
	const company: CompanyProps = randomFrom(companiesData)

	const products = getRandomProducts()
	const total = products.reduce((sum, p) => sum + p.total, 0)

	const orderStatus = randomFrom(statuses)
	const paymentStatus =
		orderStatus === "cancelled" ? "refunded" : randomFrom(payments)

	const salesStage = orderStatus === "completed" ? "won" : randomFrom(stages)

	return {
		id: i + 1,
		invoiceNumber: generateInvoice(i + 1),
		companyId: company.id,
		companyName: company.companyName,
		employee: company.assignedEmployee,
		createdBy: randomFrom(employees),
		orderDate: randomDate(),
		orderStatus,
		paymentStatus,
		salesStage,
		products,
		total,
	}
})
