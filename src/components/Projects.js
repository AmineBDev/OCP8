import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Projects = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {

        axios.get("./projets.json").then((res) => {
            setData(res.data)
            setLoading(false)
        }).catch((err) => {
            console.error('Erreur lors de la récupération des données : ', err)
            setLoading(false)
        })


    }, [])

    const handleCloseModal = (e) => {
        if (e.target.classList.contains('modal-main')) {
            setIsModalOpen(false);
        }
    };

    return (
        <section className='projects'>
            <div className="projects-container">
                <h3>MES PROJETS</h3>
                <h2>Chaque projet est une création unique en développement 🧩</h2>
                {loading ? <div className="loading-project">
                    <i class="fa-solid fa-spinner fa-spin-pulse"></i>
                </div> :
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
                {!loading && (
                    <div className="btn-project">
                        <button onClick={() => setIsModalOpen(true)}>Voir plus</button>
                    </div>
                )}
            </div>
            {/* Modale */}
            {isModalOpen && (
                <div className="modal-main" onClick={handleCloseModal}>
                    <div className="modal-main-container">
                        <div className="header-modal">
                            <i onClick={() => setIsModalOpen(false)} className="fa-solid fa-xmark"></i>
                        </div>
                        <div className="projects-modal">
                            {data
                                .slice(3, data.length)
                                .map((projet) => (
                                    <div key={projet.title} className="project-modal">
                                        <div className="img-project-modal">
                                            <img src={projet.image} alt={"Photo du projet " + projet.title} />
                                        </div>
                                        <div className="description-project-modal">
                                            <h3>{projet.title}</h3>
                                            <p className='descr-project-modal'>Contexte : {projet.description}</p>
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
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;