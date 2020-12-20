import React, { Fragment } from 'react';
import one from '../../images/landing/one.PNG';
import two from '../../images/landing/two.PNG';
import three from '../../images/landing/three.PNG';
import four from '../../images/landing/four.PNG';
import '../../style/PicBox.css'
import Footer from './landingComponents/Footer';

const Landing = () => {

    return (
        <Fragment>
            <Fragment>
                <div className='pic_holder'>
                    <img className="pic" src={one} alt="" />
                    <img className="pic" src={two} alt="" />
                    <img className="pic" src={three} alt="" />
                    <img className="pic" src={four} alt="" />
                </div>
            </Fragment>
            <Fragment>
                <Footer />
            </Fragment>
        </Fragment>
    )
}

export default Landing