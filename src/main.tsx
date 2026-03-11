import Modal from "./components/Modal/Modal"
import Table from "./components/Table/Table"
import NewCompanyForm from "./components/CompanyForm/CompanyForm"

import { useModal } from './components/Modal/useModal'

import { FaSquarePlus } from "react-icons/fa6";


function Main() {

	const {isOpen, toggle } = useModal()

	return (
		<section className = { isOpen ? "app-main app-main--scroll-disabled" : "app-main app-main--scroll-enabled" }>
			<button style= {{marginBottom: '30px'}}className = 'button button--primary' onClick = { toggle }><FaSquarePlus className = 'button-icon'/> Add company</button>
            <Modal isOpen = {isOpen} onClose = { toggle }>
				<NewCompanyForm />
			</Modal>
			<Table></Table>
		</section>
	)
}

export default Main
