import { NavLink } from "react-router-dom"
import { FaBuilding, FaBox, FaUser, FaChartLine } from "react-icons/fa6"

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<h1 className='sidebar-title'>App name</h1>
			<nav className='sidebar-nav'>
				<ul className='sidebar-menu'>
					<li className='sidebar-menu-item'>
						<NavLink
							to='/Dashboard'
							className={({ isActive }) =>
								isActive ? "sidebar-menu-link sidebar-menu-link--active" : "sidebar-menu-link"
							}>
							<FaChartLine className='sidebar-menu-icon' />
							Dashboard
						</NavLink>
					</li>

					<li className='sidebar-menu-item'>
						<NavLink
							to='/Companies'
							className={({ isActive }) =>
								isActive ? "sidebar-menu-link sidebar-menu-link--active" : "sidebar-menu-link"
							}>
							<FaBuilding className='sidebar-menu-icon' />
							Companies
						</NavLink>
					</li>

					<li className='sidebar-menu-item'>
						<NavLink
							to='/Orders'
							className={({ isActive }) =>
								isActive ? "sidebar-menu-link sidebar-menu-link--active" : "sidebar-menu-link"
							}>
							<FaBox className='sidebar-menu-icon' />
							Orders
						</NavLink>
					</li>

					<li className='sidebar-menu-item'>
						<NavLink
							to='/Employees'
							className={({ isActive }) =>
								isActive ? "sidebar-menu-link sidebar-menu-link--active" : "sidebar-menu-link"
							}>
							<FaUser className='sidebar-menu-icon' />
							Employees
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Sidebar
