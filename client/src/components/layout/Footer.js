import React from 'react';
import { Navbar, Container } from "react-bootstrap";

const Footer = () => {
    return (

        <Container>
            <Navbar fixed="bottom">
                <Navbar.Brand>
                    <i className='fab fa-instagram-square'></i>
                    <a
                        href='https://www.instagram.com/eatkravelove/?hl=en'
                        target="_blank"
                        rel="noreferrer"> Follow on Instagram
                </a>
                </Navbar.Brand>

                <Navbar.Brand
                    style={{
                        position: 'absolute', right: "0px"
                    }}
                >
                    <i className='fab fa-linkedin'></i>
                    <a
                        href='https://www.linkedin.com/in/sanketa-jain-86b3222a/'
                        target="_blank"
                        rel="noreferrer"> Follow on LinkedIn
                </a>
                </Navbar.Brand>
            </Navbar>
        </Container>

    )
}

export default Footer;