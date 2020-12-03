import React from 'react';
import { Col, Row, Navbar } from "react-bootstrap";
import Caro from './landingComponents/Caro';
import LandingQuote from './landingComponents/LandingQuote';
import LandingQuoteTwo from './landingComponents/LandingQuoteTwo';

const Landing = () => {


    return (
        <div className='container'>
            <Row>

                <Col sm={2}>
                    <LandingQuote />
                </Col>

                <Col sm={7}>
                    <Caro />
                </Col>

                <Col sm={3}>
                    <LandingQuoteTwo />
                </Col>

            </Row>

            <div className="container">
                <Navbar fixed="bottom">
                    <Navbar.Brand>
                        <i className='fab fa-instagram'></i>
                        <a
                            style={{ textDecoration: 'none' }}
                            className='footer_anchortag'
                            href='https://www.instagram.com/eatkravelove/?hl=en'
                            target="_blank"
                            rel="noreferrer"> Follow on Instagram
                        </a>
                    </Navbar.Brand>
                </Navbar>
            </div>

        </div>
    )
}

export default Landing