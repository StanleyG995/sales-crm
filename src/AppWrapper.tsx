import CompaniesPage from "./pages/CompaniesPage"
import Sidebar from "./components/Sidebar"

function AppWrapper() {
	return (
		<>
			<div className={"app"}>
				<Sidebar />
				<CompaniesPage />
			</div>
		</>
	)
}

export default AppWrapper
