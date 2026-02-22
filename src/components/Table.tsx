import { useContext } from "react"
import { CompaniesContext } from "../context/CompaniesContext"

const Table = () => {
	const context = useContext(CompaniesContext)
	if (!context) return null
	const { companies, deleteCompany, isModalOpen, toggleModalVisibility } = context

	return (
		<table style={{ width: "100%" }}>
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Industry</th>
					<th>Email</th>
					<th>Phone number</th>
					<th>Total (PLN)</th>
					<th>Employee</th>
					<th>Date</th>
				</tr>
			</thead>
			<tbody>
				{companies.map(company => (
					<tr key={company.id} className='table-row'>
						<td>{company.id}</td>
						<td>{company.companyName}</td>
						<td>{company.industry}</td>
						<td>{company.email}</td>
						<td>{company.phone}</td>
						<td>{company.totalSales.toLocaleString("pl-PL")}</td>
						<td>{company.assignedEmployee}</td>
						<td>{company.createdAt}</td>
						<td>
							<button onClick={() => deleteCompany(company.id)}>Delete</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default Table
