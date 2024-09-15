import React from 'react';

const Footer = () => {

    return (
        <footer>
            <div className="footer-container">
                <h3>Amine Bensaoucha © 2024. Tous droits réservés.</h3>
                <div className="social-footer">
                    <a href="https://www.linkedin.com/in/amine-b-117010225/" target="_blank" rel="noopener noreferrer">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/AmineBDev" target="_blank" rel="noopener noreferrer">
                        <i class="fa-brands fa-github"></i>
                    </a>
                    <a href="mailto:bensaoucha84@gmail.com" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-envelope"></i></a>
                </div>
                <i class="fa-solid fa-circle-chevron-up" onClick={() => window.scrollTo(0, 0)}></i>
            </div>
        </footer>
    );
};

export default Footer;