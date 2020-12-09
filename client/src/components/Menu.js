import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/MenuStyle.css';
import china from '../images/flags/china.png';
import euro from '../images/flags/euro.jpg';
import india from '../images/flags/india.jpg';
import mex from '../images/flags/mex.jpg';
import mideast from '../images/flags/mideast.png';
import thai from '../images/flags/thai.png';

const Menu = () => {

    const [indianMenu, setIndianMenu] = useState([]);

    const fetchData = async () => {
        const indian = await axios.get('/api/indian');
        setIndianMenu(indian.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    let indianNames = [];
    indianMenu.forEach(meal => {
        indianNames.push(meal.name)
    });


    return (

        <div className='container'>


            <div className='flex_container'>


                <div className='menu_box'>
                    <p className='head'><strong><img className='image' src={india} alt="india" /> Indo-Mexican  <img className='image' src={mex} alt="mex" /></strong></p>

                </div>

                <div className='menu_box'>
                    <p className='head'><strong><img className='image' src={india} alt="india" /> Indo-Chinese <img className='image' src={china} alt="china" /> /  <img className='image' src={thai} alt="thai" /> Thai Inspired</strong></p>

                </div>

                <div className='menu_box'>
                    <p className='head'><strong> <img className='image' src={india} alt="india" /> Indo-European <img className='image' src={euro} alt="euro" /></strong></p>

                </div>

                <div className='menu_box'>
                    <p className='head'><strong><img className='image' src={mideast} alt="mideast" /> Middle Eastern</strong></p>

                </div>

                <div className='menu_box'>
                    <p className='head'><strong>Sandwiches/ Soups/ Salads</strong></p>

                </div>

                <div className='menu_box'>
                    <p className='head'><strong><img className='image' src={india} alt="india" /> Indian</strong></p>
                    <div>{indianNames.map((name, i) => <li style={{ listStyleType: 'none' }} key={i}>{name}, </li>)}</div>
                </div>

            </div>

            <br></br>
            <br></br>
            <br></br>

        </div>
    )
}

export default Menu
