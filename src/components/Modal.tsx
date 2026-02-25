import { useContext } from 'react'
import type { ModalProps } from "../types/ModalProps"
import { CompaniesContext } from "../context/CompaniesContext"

const Modal: React.FC<ModalProps> = ({ isOpen, children, onClose, footer }) => {

    const context = useContext(CompaniesContext)
	if (!context) return null
	const { isModalOpen, toggleModalVisibility } = context

    isOpen = isModalOpen

	return (
		<div className= {isModalOpen ? "overlay overlay--visible" : "overlay overlay--hidden"} onClick={onClose}>
			<div
				className='modal'
				role='dialog'
				aria-modal='true'
				aria-labelledby='modal-title'
				onClick={e => e.stopPropagation()}>
				{children}
                {footer}
			</div>
		</div>
	)
}

export default Modal
