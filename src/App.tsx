import { CompaniesProvider } from "./context/CompaniesContext"
import NewCompanyForm from "./components/NewCompanyForm"
import Table from "./components/Table"


function App() {

	return (
		<>
			<CompaniesProvider>
				<NewCompanyForm />
				<Table></Table>
			</CompaniesProvider>
		</>
	)
}

export default App
