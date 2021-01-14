import React from 'react';
import { Navbar, Container } from "react-bootstrap";

const Footer = () => {
    return (


        <Navbar fixed="bottom">
            <Container>
                <Navbar.Brand>
                    <i className='fab fa-instagram-square'></i>
                    <a
                        href='https://www.instagram.com/eatkravelove/?hl=en'
                        target="_blank"
                        rel="noreferrer"
                        style={{ fontSize: '20px' }}
                    > Follow on Instagram
                </a>
                </Navbar.Brand>

                <Navbar.Brand
                >
                    <i className='fab fa-linkedin'></i>
                    <a
                        href='https://www.linkedin.com/in/sanketa-jain-86b3222a/'
                        target="_blank"
                        rel="noreferrer"
                        style={{ fontSize: '20px' }}
                    > Follow on LinkedIn
                </a>
                </Navbar.Brand>
            </Container>
        </Navbar>


    )
}

export default Footer;