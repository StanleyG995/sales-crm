import { useContext } from "react"
import { CompaniesContext } from "../context/CompaniesContext"

import { FaTrashCan } from "react-icons/fa6";


const Table = () => {
	const context = useContext(CompaniesContext)
	if (!context) return null
	const { companies, deleteCompany, sortByDate, sortedCompanies } = context

	return (
		<table className='table' style={{ width: "100%" }}>
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Industry</th>
					<th>Email</th>
					<th>Phone number</th>
					<th>Total (PLN)</th>
					<th>Employee</th>
					<th className = 'table-header--button' onClick = {sortByDate}>Date</th>
				</tr>
			</thead>
			<tbody>
				{sortedCompanies.map(company => (
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
							<button className='button button--danger' onClick={() => deleteCompany(company.id)}><FaTrashCan className='button-icon'/>Delete</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default Table
