import { Link } from "react-router-dom";

import { FaBuilding, FaBox, FaUser, FaChartLine } from 'react-icons/fa6'

const Sidebar = () => {
    return (
        <div className = 'app-sidebar'>
            <h1 className = 'app-sidebar-title'>App name</h1>
            <nav className = 'app-sidebar-nav'>
                <ul className = 'app-sidebar-nav-list'>
                    <li className = 'app-sidebar-nav-list-item'><FaBuilding/><Link to="/Companies">Companies</Link></li>
                    <li className = 'app-sidebar-nav-list-item'><FaBox/><Link to="/Orders">Orders</Link></li>
                    <li className = 'app-sidebar-nav-list-item'><FaUser/><Link to="/Orders">Employees</Link></li>
                    <li className = 'app-sidebar-nav-list-item'><FaChartLine/><Link to="/Orders">Sales summary</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar