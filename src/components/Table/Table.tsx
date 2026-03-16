import type { TableProps } from "./Table.types"
import {
	FaTrashCan,
	FaPencil,
	FaArrowLeft,
	FaArrowRight,
} from "react-icons/fa6"

export function Table<T extends { id: number }>({
	data,
	columns,
	page,
	rowsPerPage,
	onDeleteClick,
	onEditClick,
	toggleSort,
	renderSortArrow,
	setPage,
	setRowsPerPage
}: TableProps<T>) {
	
	const totalPages = Math.ceil(data.length / rowsPerPage)

	const handlePageClick = (newPage: number) => {
		if (newPage >= 0 && newPage < totalPages) setPage?.(newPage)
	}
	const renderPageNumbers = () => {
		const pages = []

		for (let i = 0; i < totalPages; i++) {
			if (i === 0 || i === totalPages - 1 || (i >= page - 1 && i <= page + 1)) {
				pages.push(
					<li key={i}>
						<button
							className={
								i === page
									? "table-pagination-control table-pagination-control--active"
									: "table-pagination-control"
							}
							onClick={() => handlePageClick(i)}>
							{i + 1}
						</button>
					</li>
				)
			} else if (
				(i === page - 2 && page > 2) ||
				(i === page + 2 && page < totalPages - 3)
			) {
				pages.push(
					<li key={i} className='table-pagination-control'>
						...
					</li>
				)
			}
		}

		return pages
	}

	return (
		<>
			<table className='table' style={{ width: "100%" }}>
				<thead>
					<tr>
						{columns.map(col => (
							<th
								key={String(col.key)}
								className={col.sortable ? "table-header--button" : ""}
								onClick={() =>
									col.sortable && toggleSort?.(col.key as keyof T)
								}>
								{col.header}
								{col.sortable && renderSortArrow?.(col.key as keyof T)}
							</th>
						))}

						{(onEditClick || onDeleteClick) && <th />}
					</tr>
				</thead>

				<tbody>
					{data
						.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
						.map(row => (
							<tr key={row.id} className='table-row'>
								{columns.map(col => (
									<td key={String(col.key)}>
										{col.render
											? col.render(row)
											: (row[col.key as keyof T] as React.ReactNode)}
									</td>
								))}

								{(onEditClick || onDeleteClick) && (
									<td>
										{onEditClick && (
											<button
												className='button button-text'
												onClick={() => onEditClick(row)}>
												<FaPencil className='button-icon' />
												Edit
											</button>
										)}

										{onDeleteClick && (
											<button
												className='button button-text--danger'
												onClick={() => onDeleteClick(row)}>
												<FaTrashCan className='button-icon' />
												Delete
											</button>
										)}
									</td>
								)}
							</tr>
						))}
				</tbody>
			</table>

			<div className='table-controls'>
				<nav aria-label='table pagination' className='table-pagination'>
					<button
						className='table-pagination-control'
						onClick={() => handlePageClick(page - 1)}
						disabled={page === 0}>
						<FaArrowLeft />
					</button>

					<ul className='table-pagination-numbers'>{renderPageNumbers()}</ul>

					<button
						className='table-pagination-control'
						onClick={() => handlePageClick(page + 1)}
						disabled={page === totalPages - 1}>
						<FaArrowRight />
					</button>
				</nav>

       <p>Rows per page:</p>
	   <select
	   className='table-rows-control'
	value={rowsPerPage}
	onChange={e => {
		setRowsPerPage?.(Number(e.target.value))
		setPage?.(0)
	}}
>
					<option value={5}>5</option>
					<option value={10}>10</option>
					<option value={20}>20</option>
				</select>
			</div>
		</>
	)
}
