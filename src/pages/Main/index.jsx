import React from 'react';

// Custom Components
import About from '../../components/About';
import Contact from '../../components/Contact';
import Enterprise from '../../components/Enterprise';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import Partners from '../../components/Partners';
import Services from '../../components/Services';
import Welcome from '../../components/Welcome';

// This componente is resposible for get together all the website components
const Main = () => {
    return (
        <>
            <NavBar />
            <Welcome />
            <About />
            <Enterprise />
            <Services />
            <Partners />
            <Contact />
            <Footer />
        </>
    );
};

export default Main;
