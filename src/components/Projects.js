import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Projects = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        axios.get("./projets.json").then((res) => {
            setData(res.data)
            setLoading(false)
        }).catch((err) => {
            console.error('Erreur lors de la récupération des données : ', err)
            setLoading(false)
        })


    }, [])

    return (
        <section className='projects'>
            <div className="projects-container">
                <h3>MES PROJETS</h3>
                <h2>Chaque projet est une création unique en développement 🧩</h2>
                {loading ? <i class="fa-solid fa-spinner fa-spin-pulse"></i> :
                    data.slice(0, 3)
                        .map((projet) => (
                            <div key={projet.title} className="project">
                                <div className="img-project">
                                    <img src={projet.image} alt={"Photo du projet " + projet.title} />
                                </div>
                                <div className="description-project">
                                    <h3>{projet.title}</h3>
                                    <p className='descr-project'>Contexte : {projet.description}</p>
                                    <p>{projet.type}</p>
                                    <ul>
                                        {projet.tech.map((tech, techIndex) => (
                                            <li key={techIndex}>{tech}</li>
                                        ))}
                                    </ul>
                                    <ul>
                                        <li><a href={projet.git} target="_blank" rel="noopener noreferrer">Code <span><i class="fa-brands fa-github"></i></span></a></li>
                                        <li><a href={projet.link} target="_blank" rel="noopener noreferrer">Live Demo <span><i class="fa-solid fa-arrow-up-right-from-square"></i></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                <button>Voir plus</button>
            </div>
        </section>
    );
};

export default Projects;