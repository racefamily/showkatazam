import React from 'react';
import HNavBar from './HNavBar';
import Footer from './Footer';
import Sai from './Sai';
import Freeclass from './Freeclass';
import Leader from './Leader';

const Home = () => {
    return (
        <div>
            <HNavBar></HNavBar>
            <Sai></Sai>
            <Leader></Leader>
            <Footer></Footer>
        </div>
    );
};

export default Home;