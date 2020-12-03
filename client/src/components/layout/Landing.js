import React from 'react';
import Caro from './landingComponents/Caro';
import Footer from './landingComponents/Footer';
import '../../style/LandingStyle.css';

const Landing = () => {

    return (
        <div className='container'>
            <Caro />
            <Footer />
        </div>
    )
}

export default Landing