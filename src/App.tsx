import { CompaniesProvider } from "./context/CompaniesContext"
import AppWrapper  from './components/AppWrapper'

function App() {
	return (
		<>
			<CompaniesProvider>
				<AppWrapper/>
			</CompaniesProvider>
		</>
	)
}

export default App
