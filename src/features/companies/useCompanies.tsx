import { useTableData } from "../../hooks/useTableData"
import { companiesData } from "../../data/companies"
import type { CompanyProps } from "../../data/Company.type"

export const useCompanies = () => {

	const table = useTableData<CompanyProps>(
		companiesData,
		"createdAt"
	)

	return {
		companies: table.data,
		addCompany: table.addItem,
		editCompany: table.editItem,
		deleteCompany: table.deleteItem,
		toggleSort: table.toggleSort,
		renderSortArrow: table.renderSortArrow,
	}
}