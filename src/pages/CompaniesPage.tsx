import Modal from "../components/Modal/Modal"
import Table from "../components/Table/Table"
import NewCompanyForm from "../components/CompanyForm/CompanyForm"

import { useModal } from '../components/Modal/useModal'

import { FaSquarePlus } from "react-icons/fa6";

import { useCompanies } from '../features/companies/useCompanies'



const CompaniesPage = () => {
    const { isOpen, toggle } = useModal()
    const companiesHook = useCompanies()

	return (
		<section className = { isOpen ? "app-main app-main--scroll-disabled" : "app-main app-main--scroll-enabled" }>
			<button style= {{marginBottom: '30px'}}className = 'button button--primary' onClick = { toggle }><FaSquarePlus className = 'button-icon'/> Add company</button>
            <Modal isOpen = {isOpen} onClose = { toggle }>
				<NewCompanyForm />
			</Modal>
			<Table
                companies={companiesHook.companies}
                deleteCompany={companiesHook.deleteCompany}
                toggleSort={companiesHook.toggleSort}
                renderSortArrow={companiesHook.renderSortArrow}
                />
		</section>
	)
}

export default CompaniesPage
