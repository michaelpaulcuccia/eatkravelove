import React from 'react';
import Caro from './landingComponents/Caro';
import Footer from './landingComponents/Footer';
import '../../style/LandingStyle.css';

const Landing = () => {

    return (
        <div className='container'>
            <Caro />
            <div>Bringing inventive fusion cuisine to your special event using the freshest ingredients and taking you a flavorful and healthy adventure.</div>
            <Footer />
        </div>
    )
}

export default Landing