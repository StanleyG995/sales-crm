import { BrowserRouter, Routes, Route } from "react-router-dom";

import CompaniesPage from "./pages/CompaniesPage";
import OrdersPage from "./pages/OrdersPage";
import Sidebar from "./components/Sidebar";

function AppWrapper() {
	return (
		<BrowserRouter>
			<div className="app">
				<Sidebar />

				<Routes>
					<Route path="/companies" element={<CompaniesPage />} />
					<Route path="/orders" element={<OrdersPage />} />
				</Routes>

			</div>
		</BrowserRouter>
	);
}

export default AppWrapper;