import React from 'react';
import { Navbar } from "react-bootstrap";
import '../../../style/FooterStyle.css'

const Footer = () => {
    return (
        <div className="bottom_container">
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
    )
}

export default Footer
