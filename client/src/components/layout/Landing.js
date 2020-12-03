import React from 'react';
import { Col, Row } from "react-bootstrap";
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

        </div>
    )
}

export default Landing