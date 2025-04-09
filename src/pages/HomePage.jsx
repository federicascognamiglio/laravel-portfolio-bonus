import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="container mt-5 d-flex flex-column align-items-center">
            <h1 className="mt-5 mb-2">BENVENUTI NEL MIO PORTFOLIO</h1>
            <p className="mb-4">Qui troverete tutti i miei lavori e progetti personali.</p>
            <Link to="/projects" className="btn btn-outline-primary">Progetti</Link>
        </div>
    )
}

export default HomePage;