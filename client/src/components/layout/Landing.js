import React from 'react';
import Caro from './landingComponents/Caro';
import Footer from './landingComponents/Footer';
import '../../style/LandingStyle.css';

const Landing = () => {

    return (

        <div>
            <div className='container'
                style={{ marginTop: '10px' }}
            >
                <Caro />
                <Footer />

            </div>

            {/* Weird Styling Going On Here... */}

            <div
                style={{
                    fontFamily: 'Architects Daughter, cursive',
                    fontSize: '1.5rem',
                    textAlign: 'center',
                    marginTop: '20px',
                }}
            >
                Bringing inventive fusion cuisine to your special event using the freshest ingredients and taking you a flavorful and healthy adventure.
            </div>

        </div>
    )
}

export default Landing