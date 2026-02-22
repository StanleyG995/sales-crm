import { CompaniesProvider } from "./context/CompaniesContext"
import NewCompanyForm from "./components/NewCompanyForm"
import Table from "./components/Table"
import Header from "./components/Header"

function App() {
	return (
		<>
			<CompaniesProvider>
				<Header />
				<div className='app'>
					<NewCompanyForm />
					<Table></Table>
				</div>
			</CompaniesProvider>
		</>
	)
}

export default App
