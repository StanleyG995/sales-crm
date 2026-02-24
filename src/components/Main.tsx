import { useContext } from "react"
import NewCompanyForm from "./NewCompanyForm"
import Table from "./Table"
import { CompaniesContext } from "../context/CompaniesContext"

function Main() {

	const context = useContext(CompaniesContext)
	if (!context) return null
	const { isModalOpen } = context

	return (
		<section className = { isModalOpen ? "app-main app-main--scroll-disabled" : "app-main app-main--scroll-enabled" }>
            <NewCompanyForm />
			<Table></Table>
		</section>
	)
}

export default Main
