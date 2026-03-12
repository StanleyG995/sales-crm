import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";
import CompaniesPage from "./pages/CompaniesPage";
import OrdersPage from "./pages/OrdersPage";
import EmployeesPage from "./pages/EmployeesPage";
import DashboardPage from "./pages/DashboardPage";

function AppWrapper() {
	return (
		<BrowserRouter>
			<div className="app">
				<Sidebar />

				<Routes>
					<Route path="/companies" element={<CompaniesPage />} />
					<Route path="/orders" element={<OrdersPage />} />
					<Route path="/employees" element={<EmployeesPage />} />
					<Route path="/dashboard" element={<DashboardPage />} />
				</Routes>

			</div>
		</BrowserRouter>
	);
}

export default AppWrapper;