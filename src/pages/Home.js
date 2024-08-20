import React from 'react';
import Header from '../components/Header';
import Presentation from '../components/Presentation';
import About from '../components/About';
// import Competences from '../components/Competences';
import Technologies from '../components/Technologies';
import Hooks from '../components/Hooks';


const Home = () => {
    return (
        <>
            <Header />
            <Presentation />
            <Technologies />
            <About />
            <Hooks />
            {/* <Competences /> */}
        </>
    );
};

export default Home;