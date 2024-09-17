import React, { useEffect, useState } from 'react';

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

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
        <>
            <header id='header'>
                <h2>Amine.dev</h2>
                <nav>
                    <i class="fa-solid fa-bars" onClick={() => setOpenMenu(true)}></i>
                    <ul>
                        <li><a href="#presentation">Accueil</a></li>
                        <li><a href="#about">À propos</a></li>
                        <li><a href="#projects">Projets</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <div className={`header-mobile ${openMenu ? 'open' : 'close'}`}>
                <nav>
                    <i class="fa-solid fa-times" onClick={() => setOpenMenu(false)}></i>
                    <ul>
                        <li><a href="#presentation" onClick={() => setOpenMenu(false)}>Accueil</a></li>
                        <li><a href="#about" onClick={() => setOpenMenu(false)}>À propos</a></li>
                        <li><a href="#projects" onClick={() => setOpenMenu(false)}>Projets</a></li>
                        <li><a href="#contact" onClick={() => setOpenMenu(false)}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Header;