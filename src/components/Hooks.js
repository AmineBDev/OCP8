import React from 'react';
import CustomSlider from './CustomSlider';

const Hooks = () => {

    const hooks = [
        { icon: "bx bxl-visual-studio", title: "Visual Studio Code" },
        { icon: "fa-brands fa-git-alt", title: "GIT" },
        { icon: "fa-brands fa-github", title: "GitHub" },
        { icon: "fa-brands fa-figma", title: "Figma" },
        { icon: "fa-brands fa-trello", title: "Trello" },
        { img: "./assets/img/Notion-logo.svg", title: 'Notion' },
    ]

    return (
        <section className='hooks'>
            <div className="hooks-container">
                <h3>Outils</h3>
                <CustomSlider items={hooks} />
            </div>
        </section>
    );
};

export default Hooks;