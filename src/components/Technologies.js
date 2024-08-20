import React from 'react';
import CustomSlider from './CustomSlider';

const Technologies = () => {

    const competences = [
        { icon: "fa-brands fa-html5", title: "HTML" },
        { icon: "fa-brands fa-css3-alt", title: "CSS" },
        { icon: "fa-brands fa-sass", title: "Sass" },
        { icon: "fa-brands fa-js", title: "JavaScript" },
        { icon: "fa-brands fa-react", title: "React" },
        { icon: "bx bxl-redux", title: "Redux" },
        { icon: "fa-brands fa-node-js", title: "NodeJS" },
        { icon: 'bx bxl-mongodb', title: "MongoDB" },
    ]

    return (
        <section className='competences'>
            <div className="competences-container">
                <h3>Technologies</h3>
                <CustomSlider items={competences} />
            </div>
        </section>
    );
};

export default Technologies;