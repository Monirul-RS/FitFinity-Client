import React from 'react';
import useTitle from '../../../hooks/useTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Claim from '../Claim/Claim';
import Mission from '../Mission/Mission';
import Services from '../Services/Services';

const Home = () => {
    useTitle('Home');
    
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Mission></Mission>
            <Claim></Claim>
            
        </div>
    );
};

export default Home;