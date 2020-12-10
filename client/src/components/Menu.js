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
    const [indoChineseMenu, setIndoChineseMenu] = useState([]);
    const [indoEuropeanMenu, setIndoEuropeanMenu] = useState([]);
    const [indoMexicanMenu, setIndoMexicanMenu] = useState([]);
    const [middleEasternMenu, setMiddleEasternMenu] = useState([]);
    const [sssMenu, setSSSMenu] = useState([]);

    const fetchData = async () => {
        const indian = await axios.get('/api/indian');
        setIndianMenu(indian.data);
        const indoChinese = await axios.get('/api/indochinese');
        setIndoChineseMenu(indoChinese.data);
        const indoEuropean = await axios.get('/api/indoeuropean');
        setIndoEuropeanMenu(indoEuropean.data);
        const indoMexican = await axios.get('/api/indomexican');
        setIndoMexicanMenu(indoMexican.data);
        const middleEastern = await axios.get('/api/middleeastern');
        setMiddleEasternMenu(middleEastern.data);
        const sss = await axios.get('/api/sandwichessoupssalads');
        setSSSMenu(sss.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    //arrays for display
    let indianDisplay = [];
    let indoChineseDisplay = [];
    let indoEuropeanDisplay = [];
    let indoMexicanDisplay = [];
    let middleEasternDisplay = [];
    let sssDisplay = [];

    //function to cleanUp *Menu for display
    const cleanUp = (arr, newArr) => {

        arr.forEach(element => {

            let name = element.name;
            let price = element.price;
            let type = element.type;

            let string = `${name} $${price} ${type}`;
            newArr.push(string);
        })
    };

    cleanUp(indianMenu, indianDisplay);
    cleanUp(indoChineseMenu, indoChineseDisplay);
    cleanUp(indoEuropeanMenu, indoEuropeanDisplay);
    cleanUp(indoMexicanMenu, indoMexicanDisplay);
    cleanUp(middleEasternMenu, middleEasternDisplay);
    cleanUp(sssMenu, sssDisplay);

    return (

        <div className='container'>

            <div className='flex_container'>

                <div className='menu_box'>
                    <p className='head'><strong><img className='image' src={india} alt="india" /> Indo-Mexican  <img className='image' src={mex} alt="mex" /></strong></p>
                    {indoMexicanDisplay.map((item, i) => <p key={i}>{item} </p>)}
                </div>

                <div className='menu_box'>
                    <p className='head'><strong><img className='image' src={india} alt="india" /> Indo-Chinese <img className='image' src={china} alt="china" /> /  <img className='image' src={thai} alt="thai" /> Thai Inspired</strong></p>
                    {indoChineseDisplay.map((item, i) => <p key={i}>{item} </p>)}
                </div>

                <div className='menu_box'>
                    <p className='head'><strong> <img className='image' src={india} alt="india" /> Indo-European <img className='image' src={euro} alt="euro" /></strong></p>
                    {indoEuropeanDisplay.map((item, i) => <p key={i}>{item} </p>)}
                </div>

                <div className='menu_box'>
                    <p className='head'><strong><img className='image' src={mideast} alt="mideast" /> Middle Eastern</strong></p>
                    {middleEasternDisplay.map((item, i) => <p key={i}>{item} </p>)}
                </div>

                <div className='menu_box'>
                    <p className='head'><strong>Sandwiches/ Soups/ Salads</strong></p>
                    {sssDisplay.map((item, i) => <p key={i}>{item} </p>)}
                </div>

                <div className='menu_box'>
                    <p className='head'><strong><img className='image' src={india} alt="india" /> Indian</strong></p>
                    {indianDisplay.map((item, i) => <p key={i}>{item} </p>)}
                </div>

            </div>

            <br></br>
            <br></br>
            <br></br>

        </div>
    )
}

export default Menu