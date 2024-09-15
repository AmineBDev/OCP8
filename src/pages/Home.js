import React from 'react';
import Header from '../components/Header';
import Presentation from '../components/Presentation';
import About from '../components/About';
// import Competences from '../components/Competences';
import Technologies from '../components/Technologies';
import Hooks from '../components/Hooks';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


const Home = () => {
    return (
        <>
            <Header />
            <Presentation />
            <Technologies />
            <About />
            <Hooks />
            {/* <Competences /> */}
            <Projects />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;