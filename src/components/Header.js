import React, { useEffect } from 'react';

const Header = () => {

    useEffect(() => {
        const header = document.getElementById("header");

        const handleScroll = () => {
            if (window.scrollY > 100) {
                header.classList.add("active");
            } else {
                header.classList.remove("active");
            }

            if (window.scrollY > 300) {
                header.classList.add("scroll-head");
            } else {
                header.classList.remove("scroll-head");
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header id='header'>
            <h2>Amine.dev</h2>
            <nav>
                <ul>
                    <li><a href="#presentation">Accueil</a></li>
                    <li><a href="#about">À propos</a></li>
                    <li><a href="#projects">Projets</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;