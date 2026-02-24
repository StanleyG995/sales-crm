import Main from "./Main"
import Sidebar from './Sidebar'
import { useContext } from "react"
import { CompaniesContext } from "../context/CompaniesContext"

function AppWrapper() {

	return (
		<>
			<div
				className={
					"app"
				}>
				<Sidebar />
				<Main />
			</div>
		</>
	)
}

export default AppWrapper
