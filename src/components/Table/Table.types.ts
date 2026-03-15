export interface TableColumn<T> {
	key: keyof T | string
	header: string
	sortable?: boolean
	render?: (row: T) => React.ReactNode
  }

export interface TableProps<T> {
	data: T[]
	columns: TableColumn<T>[]
	page: number
	rowsPerPage: number
  
	toggleSort?: (key: keyof T) => void
	renderSortArrow?: (key: keyof T) => React.ReactNode
  
	onEditClick?: (row: T) => void
	onDeleteClick?: (row: T) => void
  }

