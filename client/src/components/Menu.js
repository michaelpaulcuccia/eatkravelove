import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Image, ListGroup } from 'react-bootstrap';
import '../style/MenuStyle.css';
import china from '../images/flags/china.png';
import euro from '../images/flags/euro.jpg';
import india from '../images/flags/india.jpg';
import mex from '../images/flags/mex.jpg';
import mideast from '../images/flags/mideast.png';
import thai from '../images/flags/thai.png';

const Menu = ({ imageStyle }) => {

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
        <Container className="main_cont">
            <Row md={3} sm={2}>
                <Col className='menu_col'>
                    <Card
                        className="py-3"
                    >
                        <div style={{ margin: 'auto' }}>
                            <h4 className='menu_title'><strong><img className='img_menu' src={india} alt="india" /> Indo-Mexican  <img className='img_menu' src={mex} alt="mex" /></strong></h4>
                        </div>
                        <ListGroup>
                            {indoMexicanDisplay.map((item, i) => <ListGroup.Item key={i}>{item} </ListGroup.Item>)}
                        </ListGroup>
                    </Card>
                </Col>
                <Col className='menu_col'>
                    <Card
                        className="py-3"
                    >
                        <div style={{ margin: 'auto' }}>
                            <h4 className='menu_title'><strong><img className='img_menu' src={india} alt="india" /> Indo-Chinese  <img className='img_menu' src={china} alt="china" /></strong></h4>
                        </div>
                        <ListGroup>
                            {indoChineseDisplay.map((item, i) => <ListGroup.Item key={i}>{item} </ListGroup.Item>)}
                        </ListGroup>
                    </Card>
                </Col>
                <Col className='menu_col'>
                    <Card
                        className="px-1 py-1"
                    >
                        <div style={{ margin: 'auto' }}>
                            <h4 className='menu_title'><strong><img className='img_menu' src={india} alt="india" /> Indo-European  <img className='img_menu' src={euro} alt="euro" /></strong></h4>
                        </div>
                        <ListGroup>
                            {indoEuropeanDisplay.map((item, i) => <ListGroup.Item key={i}>{item} </ListGroup.Item>)}
                        </ListGroup>
                    </Card>
                </Col>
                <Col className='menu_col'>
                    <Card
                        className="py-3"
                    >
                        <div style={{ margin: 'auto' }}>
                            <h4 className='menu_title'><strong><img className='img_menu' src={mideast} alt="mideast" /> Middle Eastern </strong></h4>
                        </div>
                        <ListGroup>
                            {middleEasternDisplay.map((item, i) => <ListGroup.Item key={i}>{item} </ListGroup.Item>)}
                        </ListGroup>
                    </Card>
                </Col>
                <Col className='menu_col'>
                    <Card
                        className="py-3"
                    >
                        <div style={{ margin: 'auto' }}>
                            <h4 className='menu_title'><strong>Soups and Salads</strong></h4>
                        </div>
                        <ListGroup>
                            {sssDisplay.map((item, i) => <ListGroup.Item key={i}>{item} </ListGroup.Item>)}
                        </ListGroup>
                    </Card>
                </Col>
                <Col className='menu_col'>
                    <Card
                        className="py-3"
                    >
                        <div style={{ margin: 'auto' }}>
                            <h4 className='menu_title'><strong><img className='img_menu' src={india} alt="india" /> Indian </strong></h4>
                        </div>
                        <ListGroup>
                            {indianDisplay.map((item, i) => <ListGroup.Item key={i}>{item} </ListGroup.Item>)}
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>


    )
}

export default Menu