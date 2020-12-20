import React from 'react';
import { Navbar } from "react-bootstrap";

const Footer = () => {
    return (
        <div className="bottom_container">
            <Navbar fixed="bottom">
                <Navbar.Brand>
                    <i className='fab fa-instagram-square'></i>
                    <a
                        style={{
                            textDecoration: 'none',
                            fontFamily: 'Architects Daughter, cursive',
                            fontSize: "2.5rem"
                        }}
                        className='footer_anchortag'
                        href='https://www.instagram.com/eatkravelove/?hl=en'
                        target="_blank"
                        rel="noreferrer"> Follow on Instagram
                </a>
                </Navbar.Brand>

                <Navbar.Brand
                    style={{
                        position: 'absolute', right: "0px",
                        fontFamily: 'Architects Daughter, cursive'
                    }}
                >
                    <i className='fab fa-linkedin'></i>
                    <a
                        style={{
                            textDecoration: 'none',
                            fontFamily: 'Architects Daughter, cursive',
                            fontSize: "2.5rem"
                        }}
                        className='footer_anchortag'
                        href='https://www.linkedin.com/in/sanketa-jain-86b3222a/'
                        target="_blank"
                        rel="noreferrer"> Follow on LinkedIn
                </a>
                </Navbar.Brand>

            </Navbar>
        </div>
    )
}

export default Footer;