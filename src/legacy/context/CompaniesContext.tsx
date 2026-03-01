import { createContext, useState, useMemo, type ReactNode } from "react"
import type { CompaniesContextType } from "../types/CompaniesContextType"
import type { CompanyType } from "../types/CompanyType"
import { companiesData } from "../data/companies"

type Props = {
	children: ReactNode
}

export const CompaniesContext = createContext<CompaniesContextType | null>(null)

export const CompaniesProvider = ({ children }: Props) => {
	const [companies, setCompanies] = useState<CompanyType[]>(companiesData)

	const sortComparators: Record<
		string,
		(a: CompanyType, b: CompanyType) => number
	> = {
		id: (a, b) => a.id - b.id,
		companyName: (a, b) => a.companyName.localeCompare(b.companyName),
		createdAt: (a, b) => {
			return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
		},
		totalSales: (a, b) => a.totalSales - b.totalSales,
	}

	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

	const [sortKey, setSortKey] = useState<keyof CompanyType>("createdAt")
	const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")

	const sortedCompanies = useMemo(() => {
		const comparator = sortComparators[sortKey]

		if (!comparator) return companies

		const sorted = [...companies].sort(comparator)

		return sortDirection === "asc" ? sorted : sorted.reverse()
	}, [companies, sortDirection, sortKey])

	const deleteCompany = (id: number): void => {
		setCompanies(prev => prev.filter(company => company.id != id))
	}

	const addCompany = (company: CompanyType) => {
		setCompanies(prev => [...prev, company])
	}

	const toggleSort = (key: keyof CompanyType) => {
		setSortKey(key)

		setSortDirection(prev => (prev === "asc" ? "desc" : "asc"))
	}

	const renderSortArrow = (key: keyof CompanyType) => {
		if (sortKey !== key) return null

		return sortDirection === "asc" ? " ▲" : " ▼"
	}

	const toggleModalVisibility = () => {
		isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true)
	}

	return (
		<CompaniesContext.Provider
			value={{
				companies: sortedCompanies,
				deleteCompany,
				addCompany,
				toggleSort,
				toggleModalVisibility,
				isModalOpen,
				sortedCompanies,
				renderSortArrow,
			}}>
			{children}
		</CompaniesContext.Provider>
	)
}
