import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/NavieStyle.css'

export const Navie = props => {

    return (

        <Navbar bg="white" expand="lg">
            <Navbar.Brand><Link to='/'><p className='main_name'>EatKraveLove <p className="little_name">by Chef Sank</p></p></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav style={{ marginLeft: '865px' }}>
                    <Nav.Link><Link style={{ marginRight: '15px', fontSize: '1.5rem' }} to='/register'><p>Register</p></Link></Nav.Link>
                    <Nav.Link><Link style={{ marginRight: '15px', fontSize: '1.5rem' }} to='/login'><p>Login</p></Link></Nav.Link>
                    {props.showTabs &&
                        <NavDropdown style={{ fontSize: '1.5rem', color: 'blue' }} title="User Options" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link style={{ fontSize: '1.5rem' }} to='/orderform'><p>Order</p></Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><Link style={{ fontSize: '1.5rem' }} to='/logout'><p>Logout</p></Link></NavDropdown.Item>
                        </NavDropdown>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default Navie;