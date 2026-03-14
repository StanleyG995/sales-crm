import type { TableProps } from "./Table.types"
import { FaTrashCan, FaPencil } from "react-icons/fa6"

import { formatDate } from '../../utils/helpers/formatDate'

const Table = ({ companies, onDeleteClick, onEditClick, toggleSort, renderSortArrow }: TableProps) => {

	return (
		<table className='table' style={{ width: "100%" }}>
			<thead>
				<tr>
					<th className='table-header--button' onClick={() => toggleSort("id")}>
						ID {renderSortArrow("id")}
					</th>
					<th
						className='table-header--button'
						onClick={() => toggleSort("companyName")}>
						Name {renderSortArrow("companyName")}
					</th>
					<th>Industry</th>
					<th>Email</th>
					<th>Phone number</th>
					<th
						className='table-header--button'
						onClick={() => toggleSort("totalSales")}>
						Total (PLN) {renderSortArrow("totalSales")}
					</th>
					<th>Employee</th>
					<th
						className='table-header--button'
						onClick={() => toggleSort("createdAt")}>
						Date {renderSortArrow("createdAt")}
					</th>
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
						<td>{formatDate(company.createdAt)}</td>
						<td>
						<button
								className='button'
								onClick={() => onEditClick(company)}>
								<FaPencil className='button-icon' />
								Edit
							</button>
						</td>
						<td>
							<button
								className='button button--danger--text'
								onClick={() => onDeleteClick(company)}>
								<FaTrashCan className='button-icon' />
								Delete
							</button>
						</td>
						
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default Table
