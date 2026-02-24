import { useContext } from "react"
import NewCompanyForm from "./NewCompanyForm"
import Table from "./Table"
import { CompaniesContext } from "../context/CompaniesContext"
import { FaSquarePlus } from "react-icons/fa6";


function Main() {

	const context = useContext(CompaniesContext)
	if (!context) return null
	const { isModalOpen, toggleModalVisibility } = context

	return (
		<section className = { isModalOpen ? "app-main app-main--scroll-disabled" : "app-main app-main--scroll-enabled" }>
			<button style= {{marginBottom: '30px'}}className = 'button button--primary' onClick = { toggleModalVisibility }><FaSquarePlus className = 'button-icon'/> Add company</button>
            <NewCompanyForm />
			<Table></Table>
		</section>
	)
}

export default Main
