import Main from "./Main"
import Sidebar from "./components/Sidebar"

function AppWrapper() {
	return (
		<>
			<div className={"app"}>
				<Sidebar />
				<Main />
			</div>
		</>
	)
}

export default AppWrapper
