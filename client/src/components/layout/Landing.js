import React, { Fragment } from 'react';
import Diamond from './landingComponents/diamond/Diamond';
import Footer from './landingComponents/Footer';
import '../../style/LandingStyle.css';

const Landing = () => {

    return (
        <Fragment>
            <Fragment>
                <Diamond />
            </Fragment>
            <Fragment>
                <Footer />
            </Fragment>
        </Fragment>
    )
}

export default Landing