import { useState } from "react"

import Modal from "../components/Modal/Modal"
import Table from "../components/Table/Table"
import CompanyForm from "../components/CompanyForm/CompanyForm"
import DeleteConfirm from "../components/DeleteConfirm/DeleteConfirm"

import { useModal } from "../components/Modal/useModal"
import { useCompanies } from "../features/companies/useCompanies"

import { FaSquarePlus } from "react-icons/fa6"

import type { CompanyProps } from "../features/companies/Company.type"

const CompaniesPage = () => {
	const { isOpen, toggle } = useModal()
	const companiesHook = useCompanies()

	const [companyToDelete, setCompanyToDelete] = useState<CompanyProps | null>(
		null
	)
	const [companyToEdit, setCompanyToEdit] = useState<CompanyProps | null>(null)

	return (
		<section
			className={
				isOpen
					? "app-main app-main--scroll-disabled"
					: "app-main app-main--scroll-enabled"
			}>
      <h2 className='page-title'>Companies</h2>
			<button
				style={{ marginBottom: "30px" }}
				className='button button--primary'
				onClick={toggle}>
				<FaSquarePlus className='button-icon' /> Add company
			</button>
			<Modal
				isOpen={isOpen}
				onClose={() => {
					toggle()
					setCompanyToEdit(null)
				}}>
				<CompanyForm
					addCompany={companiesHook.addCompany}
					editCompany={companiesHook.editCompany}
					onSuccess={() => {
						toggle()
						setCompanyToEdit(null)
					}}
					editedCompany={companyToEdit}
				/>
			</Modal>

			{companyToDelete && (
				<Modal
					isOpen={!!companyToDelete}
					onClose={() => setCompanyToDelete(null)}>
					<DeleteConfirm
						company={companyToDelete}
						onCancel={() => setCompanyToDelete(null)}
						onConfirm={() => {
							companiesHook.deleteCompany(companyToDelete)
							setCompanyToDelete(null)
						}}
					/>
				</Modal>
			)}

			<Table
				companies={companiesHook.companies}
				onDeleteClick={setCompanyToDelete}
				onEditClick={company => {
					setCompanyToEdit(company)
					toggle()
				}}
				toggleSort={companiesHook.toggleSort}
				renderSortArrow={companiesHook.renderSortArrow}
			/>
		</section>
	)
}

export default CompaniesPage
