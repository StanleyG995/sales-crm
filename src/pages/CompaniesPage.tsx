
import { useState } from 'react'

import Modal from "../components/Modal/Modal"
import Table from "../components/Table/Table"
import NewCompanyForm from "../components/CompanyForm/CompanyForm"
import DeleteConfirm from "../components/DeleteConfirm/DeleteConfirm"

import { useModal } from '../components/Modal/useModal'
import { useCompanies } from '../features/companies/useCompanies'

import { FaSquarePlus } from "react-icons/fa6";

import type { CompanyProps } from '../features/companies/Company.type'



const CompaniesPage = () => {
    const { isOpen: isAddOpen, toggle: toggleAdd } = useModal();
    const companiesHook = useCompanies()

    const [companyToDelete, setCompanyToDelete] = useState<CompanyProps | null>(null);

	return (
		<section className = { isAddOpen ? "app-main app-main--scroll-disabled" : "app-main app-main--scroll-enabled" }>
			<button style= {{marginBottom: '30px'}}className = 'button button--primary' onClick = { toggleAdd }><FaSquarePlus className = 'button-icon'/> Add company</button>
            <Modal isOpen = {isAddOpen} onClose = { toggleAdd }>
				<NewCompanyForm addCompany = {companiesHook.addCompany} onSuccess = {toggleAdd} />
			</Modal>

            {companyToDelete && (
        <Modal isOpen={!!companyToDelete} onClose={() => setCompanyToDelete(null)}>
          <DeleteConfirm
            company={companyToDelete}
            onCancel={() => setCompanyToDelete(null)}
            onConfirm={() => {
              companiesHook.deleteCompany(companyToDelete);
              setCompanyToDelete(null);
            }}
          />
        </Modal>
      )}
            
			<Table
                companies={companiesHook.companies}
                onDeleteClick={setCompanyToDelete}
                toggleSort={companiesHook.toggleSort}
                renderSortArrow={companiesHook.renderSortArrow}
                />
		</section>
	)
}

export default CompaniesPage
