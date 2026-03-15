import type { CompanyProps } from "../../data/Company.type"

export interface CompanyFormProps {
	addCompany: (company: CompanyProps) => void
	editCompany: (company: CompanyProps) => void
	onSuccess: () => void
	editedCompany?: null | CompanyProps
}
