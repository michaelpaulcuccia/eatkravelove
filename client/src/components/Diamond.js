import React from 'react';
import one from '../images/food/one.PNG';
import two from '../images/food/two.PNG';
import three from '../images/food/three.PNG';
import four from '../images/food/four.PNG';
import '../style/DiamondStyle.css';

const Diamond = () => {
    return (
        <div className='main_div'>
            <div className='diamond_container'>
                <img className='diamond_img' src={one} alt="one" />
                <img className='diamond_img' src={two} alt="two" />
                <img className='diamond_img' src={three} alt="three" />
                <img className='diamond_img' src={four} alt="four" />
            </div>
        </div>

    )
}

export default Diamond
