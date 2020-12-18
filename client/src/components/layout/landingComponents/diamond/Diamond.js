import React from 'react';
import picOne from './images/picOne.PNG';
import imgThree from './images/imgThree.PNG';
import picThree from './images/picThree.PNG';
import picTwo from './images/picTwo.PNG';
import '../../../../style/DiamondStyle.css'

const Diamond = () => {
    return (
        <div className='diamond_box'>
            <img src={imgThree} alt="" />
            <img src={picOne} alt="" />
            <img src={picThree} alt="" />
            <img src={picTwo} alt="" />
        </div>
    )
}

export default Diamond
