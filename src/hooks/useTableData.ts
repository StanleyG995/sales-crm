import { useState, useMemo } from "react"

export function useTableData<T extends { id: number }>(
	initialData: T[],
	initialSortKey: keyof T
) {
	const [data, setData] = useState<T[]>(initialData)
	const [sortKey, setSortKey] = useState<keyof T>(initialSortKey)
	const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")

	const sortedData = useMemo(() => {
		const sorted = [...data].sort((a, b) => {
			const valueA = a[sortKey]
			const valueB = b[sortKey]

			if (typeof valueA === "number" && typeof valueB === "number") {
				return valueA - valueB
			}

			if (typeof valueA === "string" && typeof valueB === "string") {
				return valueA.localeCompare(valueB)
			}

			if (valueA instanceof Date && valueB instanceof Date) {
				return valueA.getTime() - valueB.getTime()
			}

			return 0
		})

		return sortDirection === "asc" ? sorted : sorted.reverse()
	}, [data, sortKey, sortDirection])

	const addItem = (item: T) => {
		setData(prev => [...prev, item])
	}

	const editItem = (item: T) => {
		setData(prev => prev.map(i => (i.id === item.id ? item : i)))
	}

	const deleteItem = (item: T) => {
		setData(prev => prev.filter(i => i.id !== item.id))
	}

	const toggleSort = (key: keyof T) => {
		if (key === sortKey) {
			setSortDirection(prev => (prev === "asc" ? "desc" : "asc"))
		} else {
			setSortKey(key)
			setSortDirection("asc")
		}
	}

	const renderSortArrow = (key: keyof T) =>
		sortKey === key ? (sortDirection === "asc" ? " ▲" : " ▼") : null

	return {
		data: sortedData,
		addItem,
		editItem,
		deleteItem,
		toggleSort,
		renderSortArrow,
	}
}