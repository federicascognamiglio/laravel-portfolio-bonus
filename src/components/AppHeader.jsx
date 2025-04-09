import { NavLink } from "react-router-dom";

function AppHeader() {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand ms-4" to="/">MY PORTFOLIO</NavLink>
                <NavLink className="nav-link me-4" to="/projects">PROGETTI</NavLink>
            </div>
        </nav>
    )
}

export default AppHeader;