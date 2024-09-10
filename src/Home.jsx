import React from 'react';
import NavBar from './NavBar';
import Banner from './Banner';
import Footer from './Footer';
import Leader from './Leader';
import Admin from './Admin';

const Home = () => {
    return (
        <>
            <NavBar />
            <Banner />
            <br />
            <Admin /> 
            <br />
            <Leader />
            <br />
            <Footer />
        </>
    );
};

export default Home;