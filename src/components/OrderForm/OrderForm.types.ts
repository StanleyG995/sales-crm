import type { OrderProps } from '../../data/Order.type'

export interface OrderFormProps {
    addOrder: (corder: OrderProps) => void
	editOrder: (company: OrderProps) => void
	onSuccess: () => void
	editedOrder?: null | OrderProps
}