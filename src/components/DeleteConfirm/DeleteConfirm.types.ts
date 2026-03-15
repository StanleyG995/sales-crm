import type { CompanyProps } from "../../data/Company.type"

export interface DeleteConfirmProps {
	company: CompanyProps
	onCancel: () => void
	onConfirm: () => void
}
