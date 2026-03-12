import { Link } from "react-router-dom";



const Sidebar = () => {
    return (
        <div className = 'app-sidebar'>
            <h1 className = 'app-sidebar-title'>App name</h1>
            <nav className = 'app-sidebar-nav'>
                <ul className = 'app-sidebar-nav-list'>
                    <li className = 'app-sidebar-nav-list-item'><Link to="/Companies">Companies</Link></li>
                    <li className = 'app-sidebar-nav-list-item'><Link to="/Orders">Orders</Link></li>
                    <li className = 'app-sidebar-nav-list-item'>Sales summary</li>
                    <li className = 'app-sidebar-nav-list-item'>Employees</li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar