import { Link } from "react-router-dom";

function AppCard({ project, isDetailed }) {

    // Se non è dettagliato, accorcia il riassunto a 80 caratteri
    const shortenText = project.riassunto.length > 80 ? `${project.riassunto.slice(0, 80)}...` : project.riassunto;

    // Funzione per formattare la data in gg-mm-yyyy
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0'); // Aggiunge uno zero iniziale se necessario
        const month = String(date.getMonth() + 1).padStart(2, '0'); // I mesi partono da 0, quindi aggiungi 1
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    return (
        <>
            {project &&
                <div className="card h-100">
                    <div className="card-header">
                        {!isDetailed ? <h5 className="card-title mt-2 mb-3">{project.nome}</h5> : <h5 className="card-title mb-3">Cliente: {project.cliente}</h5>}
                        <h6 className="card-subtitle mb-1 text-muted">Tipologia: {project.type.nome}</h6>
                    </div>
                    <div className="card-body">
                        <p className="card-text">
                            {!isDetailed ? shortenText : project.riassunto}
                        </p>
                    </div>
                    <div className="card-footer">
                        { !isDetailed ?
                            <Link to={`/projects/${project.id}`} className="btn btn-primary">Dettagli</Link>
                            : <p className="text-muted">Dal: {formatDate(project.data_inizio)} Al: {formatDate(project.data_fine)}</p>
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default AppCard;