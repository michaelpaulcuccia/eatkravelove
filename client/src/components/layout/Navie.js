import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Navie = props => {
    return (

        <Navbar bg="light" expand="lg">
            <Navbar.Brand><Link to='/'><h1>EatKraveLove</h1></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav style={{ marginLeft: '865px' }}>
                    <Link style={{ marginRight: '15px' }} to='/register'><h4>Register</h4></Link>
                    <Link style={{ marginRight: '15px' }} to='/login'><h4>Login</h4></Link>
                    {props.showTabs &&
                        <Fragment>
                            <Link style={{ marginRight: '15px' }} to='/logout'><h4>Logout</h4></Link>
                            <Link to='/orderform'><h4>Order</h4></Link>
                        </Fragment>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default Navie;