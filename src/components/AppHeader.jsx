import { NavLink } from "react-router-dom";

function AppHeader() {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand ms-4" to="/">MY PORTFOLIO</NavLink>
                <div className="d-flex">
                    <NavLink className="nav-link me-4" to="/projects">PROGETTI</NavLink>
                    <NavLink className="nav-link me-4" to="/">HOME</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default AppHeader;