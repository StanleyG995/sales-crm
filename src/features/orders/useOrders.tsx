import { useState, useMemo } from "react"
import type { OrderProps } from "../../data/Order.type"
import { ordersData } from "../../data/orders"

export const useOrders = () => {
	const [orders, setOrders] = useState<OrderProps[]>(ordersData)
	const [sortKey, setSortKey] = useState<keyof OrderProps>("orderDate")
	const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")

	const sortComparators: Record<
		string,
		(a: OrderProps, b: OrderProps) => number
	> = {
		id: (a, b) => a.id - b.id,

		invoiceNumber: (a, b) =>
			a.invoiceNumber.localeCompare(b.invoiceNumber),

		companyName: (a, b) =>
			a.companyName.localeCompare(b.companyName),

		employee: (a, b) =>
			a.employee.localeCompare(b.employee),

		orderDate: (a, b) =>
			new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime(),

		total: (a, b) => a.total - b.total,
	}

	const sortedOrders = useMemo(() => {
		const comparator = sortComparators[sortKey]
		if (!comparator) return orders

		const sorted = [...orders].sort(comparator)
		return sortDirection === "asc" ? sorted : sorted.reverse()
	}, [orders, sortKey, sortDirection])

	const addOrder = (order: OrderProps) => {
		setOrders(prev => [...prev, order])
	}

	const editOrder = (order: OrderProps) => {
		setOrders(prev => prev.map(o => (o.id === order.id ? order : o)))
	}

	const deleteOrder = (order: OrderProps) => {
		setOrders(prev => prev.filter(o => o.id !== order.id))
	}

	const toggleSort = (key: keyof OrderProps) => {
		setSortKey(key)
		setSortDirection(prev => (prev === "asc" ? "desc" : "asc"))
	}

	const renderSortArrow = (key: keyof OrderProps) =>
		sortKey === key ? (sortDirection === "asc" ? " ▲" : " ▼") : null

	return {
		orders: sortedOrders,
		addOrder,
		editOrder,
		deleteOrder,
		toggleSort,
		renderSortArrow,
	}
}
