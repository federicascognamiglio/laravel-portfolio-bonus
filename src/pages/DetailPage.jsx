import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AppCard from "../components/AppCard";

function DetailPage() {

    // Dati
    const { id } = useParams();
    const [project, setProject] = useState({});

    // Functions
    /** Prelevo il progetto tramite richiesta axios e li assegno alla variabile di stato **/
    const getProject = () => {
        axios.get(`${import.meta.env.VITE_API_URL}/${id}`).then(resp => {
            const { data } = resp.data;
            setProject(data);
        })
    }

    // Richiamo la funzione getProject al caricamento del componente
    useEffect(getProject, []);

    return (
        <div className="container mt-5 d-flex flex-column align-items-center">
            {project && <h2 className="mt-5 mb-2">{project.nome}</h2>}
            <div className="div">
                {project.technologies && project.technologies.map(tech => <span key={tech.id} className="badge me-2 mb-5" style={{ backgroundColor: tech.colore }}>{tech.nome}</span>)}
            </div>
            {project && <AppCard project={project} isDetailed={true} />}
        </div>
    )
}

export default DetailPage;