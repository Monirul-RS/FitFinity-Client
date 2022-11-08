import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Mission from '../Mission/Mission';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Mission></Mission>
            
        </div>
    );
};

export default Home;