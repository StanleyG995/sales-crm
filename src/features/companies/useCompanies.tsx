import { useState, useMemo } from "react"
import type { CompanyProps } from "./Company.type"
import { companiesData } from "../../data/companies"

export const useCompanies = () => {
	const [companies, setCompanies] = useState<CompanyProps[]>(companiesData)
	const [sortKey, setSortKey] = useState<keyof CompanyProps>("createdAt")
	const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")

	const sortComparators: Record<
		string,
		(a: CompanyProps, b: CompanyProps) => number
	> = {
		id: (a, b) => a.id - b.id,
		companyName: (a, b) => a.companyName.localeCompare(b.companyName),
		createdAt: (a, b) =>
			new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
		totalSales: (a, b) => a.totalSales - b.totalSales,
	}

	const sortedCompanies = useMemo(() => {
		const comparator = sortComparators[sortKey]
		if (!comparator) return companies
		const sorted = [...companies].sort(comparator)
		return sortDirection === "asc" ? sorted : sorted.reverse()
	}, [companies, sortDirection, sortKey])

	const addCompany = (company: CompanyProps) => {
		setCompanies(prev => [...prev, company])
	}

	const deleteCompany = (company: CompanyProps) => {
		setCompanies(prev => prev.filter(c => c.id !== company.id))
	}

	const toggleSort = (key: keyof CompanyProps) => {
		setSortKey(key)
		setSortDirection(prev => (prev === "asc" ? "desc" : "asc"))
	}

	const renderSortArrow = (key: keyof CompanyProps) =>
		sortKey === key ? (sortDirection === "asc" ? " ▲" : " ▼") : null

	return {
		companies: sortedCompanies,
		addCompany,
		deleteCompany,
		toggleSort,
		renderSortArrow,
	}
}
