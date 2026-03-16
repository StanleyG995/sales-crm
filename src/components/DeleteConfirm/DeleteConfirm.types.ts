export interface DeleteConfirmProps<T> {
	item: T
	message?: string
	onCancel: () => void
	onConfirm: () => void
}
