import Header from "./Header"
import Main from "./Main"
import Sidebar from './Sidebar'
import { useContext } from "react"
import { CompaniesContext } from "../context/CompaniesContext"

function AppWrapper() {
	const context = useContext(CompaniesContext)
	if (!context) return null
	const { isModalOpen } = context

	return (
		<>
			<div
				className={
					isModalOpen ? "app app-scroll--disabled" : "app app-scroll--enabled"
				}>
				<Header />
				<Main />
			</div>
		</>
	)
}

export default AppWrapper
