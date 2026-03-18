import { useState } from "react"

import Modal from "../components/Modal/Modal"
import { Table } from "../components/Table/Table"
import { orderColumns } from "../features/orders/orders.columns"
import OrderForm from "../components/OrderForm/OrderForm"
import DeleteConfirm from "../components/DeleteConfirm/DeleteConfirm"

import { useModal } from "../components/Modal/useModal"
import { useOrders } from "../features/orders/useOrders"

import { FaSquarePlus } from "react-icons/fa6"

import type { OrderProps } from "../data/Order.type"

const OrdersPage = () => {
	const { isOpen, toggle } = useModal()
	const ordersHook = useOrders()

	const [orderToDelete, setOrderToDelete] = useState<OrderProps | null>(null)
	const [orderToEdit, setOrderToEdit] = useState<OrderProps | null>(null)

	const [page, setPage] = useState(0)
	const [rowsPerPage, setRowsPerPage] = useState(10)

	return (
		<section
			className={
				isOpen
					? "app-main app-main--scroll-disabled"
					: "app-main app-main--scroll-enabled"
			}>
			<h2 className='page-title'>Orders</h2>

			<button
				style={{ marginBottom: "30px" }}
				className='button button--primary'
				onClick={toggle}>
				<FaSquarePlus className='button-icon' /> Add order
			</button>

			<Modal
				isOpen={isOpen}
				onClose={() => {
					toggle()
					setOrderToEdit(null)
				}}>
				<OrderForm
					addOrder={ordersHook.addOrder}
					editOrder={ordersHook.editOrder}
					onSuccess={() => {
						toggle()
						setOrderToEdit(null)
					}}
					editedOrder={orderToEdit}
				/>
			</Modal>

			{orderToDelete && (
				<Modal
					isOpen={!!orderToDelete}
					onClose={() => setOrderToDelete(null)}>
					<DeleteConfirm
						item={orderToDelete.id}
                        message={`Are you sure you want to delete order no. ${orderToDelete.id}`}
						onCancel={() => setOrderToDelete(null)}
						onConfirm={() => {
							ordersHook.deleteOrder(orderToDelete)
							setOrderToDelete(null)
						}}
					/>
				</Modal>
			)}

			<Table
				data={ordersHook.orders}
				columns={orderColumns}
				page={page}
				rowsPerPage={rowsPerPage}
				onDeleteClick={setOrderToDelete}
				onEditClick={order => {
					setOrderToEdit(order)
					toggle()
				}}
				toggleSort={ordersHook.toggleSort}
				renderSortArrow={ordersHook.renderSortArrow}
				setPage={setPage}
				setRowsPerPage={setRowsPerPage}
			/>
		</section>
	)
}

export default OrdersPage