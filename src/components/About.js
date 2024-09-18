import React, { useEffect, useRef, useState } from 'react';

const About = () => {
    const [isVisibleAnim, setIsVisibleAnim] = useState(false)
    const animRef = useRef(null)

    useEffect(() => {
        const scrollAnim = () => {
            if (animRef.current) {
                const top = animRef.current.getBoundingClientRect().top
                const windowHeight = window.innerHeight

                if (top < windowHeight - 250) {
                    setIsVisibleAnim(true)
                }
            }
        }

        window.addEventListener('scroll', scrollAnim)

        return () => {
            window.removeEventListener('scroll', scrollAnim)
        }

    }, [])

    return (
        <section id='about' ref={animRef}>
            <div className="about-container">

                <div className={`left-about ${isVisibleAnim ? 'visible' : ''}`}>
                    <img src="./assets/img/desk.webp" alt="Illustration d'un ordinateur / conçue par fullvector" />
                    <div className="circle-dev">
                        <img className='circleword' src="./assets/img/circledev.jpg" alt="Inscription de la phrase : Développeur front-end en cercle" />
                        <img className='emoji' src="./assets/img/emoji-dev.png" alt="Emoji informaticien iPhone" />
                    </div>
                </div>
                <div className={`right-about ${isVisibleAnim ? 'visible' : ''}`}>
                    <h3>À propos de moi</h3>
                    <h2>Développeur Front-End basé à Nantes, France 📍</h2>
                    <p>Salut, je m'appelle Amine, j'ai 23 ans et j'ai fraîchement été diplômé d'un BAC+2 en développement web chez <a href="https://openclassrooms.com/fr" target="_blank" rel="noopener noreferrer">OpenClassrooms</a> 🎓. Passionné, j'aime créer des sites et des applications qui allient design et fonctionnalité.
                        <br />
                        <br />
                        Ma stack principale est actuellement composée de React, combiné avec Sass pour un design élégant, je possède également de solides bases en Node.js pour le backend.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;