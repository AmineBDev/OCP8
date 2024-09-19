import React, { useEffect, useState } from 'react';

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [activeLi, setActiveLi] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const header = document.getElementById("header");

            if (window.scrollY > 20) {
                header.classList.add("active");
            } else {
                header.classList.remove("active");
            }

            if (window.scrollY > 400) {
                header.classList.add("scroll-head");
            } else {
                header.classList.remove("scroll-head");
            }
        };

        const liActive = () => {
            const sections = document.querySelectorAll('section');

            sections.forEach((section) => {
                const top = section.offsetTop - 250;

                if (window.scrollY >= top) {
                    setActiveLi(section.getAttribute('id'))
                }
            })
        }

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', liActive);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', liActive);
        };
    }, []);

    return (
        <>
            <header id='header'>
                <h2>Amine.dev</h2>
                <nav>
                    <i class="fa-solid fa-bars" onClick={() => setOpenMenu(true)}></i>
                    <ul>
                        <li><a href="#presentation">Accueil</a></li>
                        <li><a href="#about" className={activeLi === 'about' ? 'active' : ''}>À propos</a></li>
                        <li><a href="#projects" className={activeLi === 'projects' ? 'active' : ''}>Projets</a></li>
                        <li><a href="#contact" className={activeLi === 'contact' ? 'active' : ''}>Contact</a></li>
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