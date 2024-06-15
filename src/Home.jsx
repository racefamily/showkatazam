import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Sai from './Sai';
import Freeclass from './Freeclass';
import Leader from './Leader';
import Certificate from './Certificate';
import PreviousJobs from './PreviousJobs';

const Home = () => {
    return (
        <>
            <NavBar />
            <br />
            <Sai />
            <br />
            <Certificate />
            <PreviousJobs></PreviousJobs>
            <br />
            <Leader />
            <br />
            <Footer />
        </>
    );
};

export default Home;