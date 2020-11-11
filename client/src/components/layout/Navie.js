import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Navie = props => {
    return (

        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">EatKraveLove</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to='/register'>Register</Link>
                    <Link to='/login'>Login</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default Navie;