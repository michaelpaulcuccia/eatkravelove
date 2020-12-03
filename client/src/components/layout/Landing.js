import React, { Fragment } from 'react';
import { Col, Row } from "react-bootstrap";
import Caro from './landingComponents/Caro';
import LandingQuote from './landingComponents/LandingQuote';
import LandingQuoteTwo from './landingComponents/LandingQuoteTwo';

const Landing = () => {


    return (

        <Fragment>
            <Row>

                <Col sm={1}>
                    <LandingQuote />
                </Col>

                <Col sm={7}>
                    <Caro />
                </Col>

                <Col sm={4}>
                    <LandingQuoteTwo />
                </Col>

            </Row>
        </Fragment>






    )
}

export default Landing