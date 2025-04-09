import { useState, useEffect } from "react";
import axios from "axios";
import AppCard from "../components/AppCard";

function ProjectsPage() {

    // Dati
    const [projects, setProjects] = useState([]);

    // Functions
    /** Prelevo i dati tramite richiesta axios e li assegno alla variabile di stato */
    const getProjects =  () => { 
        axios.get(`${import.meta.env.VITE_API_URL}`).then(resp => {
            const { data } = resp.data;
            setProjects(data);
        })
    }

    // Richiamo la funzione getProjects al caricamento del componente
    useEffect(getProjects, []);

    return (
        <div className="container mt-5">
            <h1 className="mt-5 mb-4 text-center">I MIEI PROGETTI</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {projects && projects.map((project) => (
                    <div className="col mb-4" key={project.id}>
                        <AppCard project={project} isDetailed={false}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectsPage;