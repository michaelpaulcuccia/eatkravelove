import React, { Fragment } from 'react';
import picOne from '../../images/diamond/picOne.PNG';
import imgThree from '../../images/diamond/imgThree.PNG';
import picThree from '../../images/diamond/picThree.PNG';
import picTwo from '../../images/diamond/picTwo.PNG';
import '../../style/DiamondStyle.css'
import Footer from './landingComponents/Footer';

const Landing = () => {

    return (
        <Fragment>
            <Fragment>
                <div className='diamond_box'>
                    <img src={imgThree} alt="" />
                    <img src={picOne} alt="" />
                    <img src={picThree} alt="" />
                    <img src={picTwo} alt="" />
                </div>
            </Fragment>
            <Fragment>
                <Footer />
            </Fragment>
        </Fragment>
    )
}

export default Landing