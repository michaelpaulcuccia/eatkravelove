import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/NavieStyle.css'

export const Navie = props => {

    return (

        <Navbar bg="white" expand="lg">
            <Navbar.Brand><Link to='/'><p className='main_name'>EatKraveLove <small className="little_name">by Chef Sank</small></p></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav style={{ marginLeft: '800px' }}>
                    {props.hideRegisterLogin &&
                        <Fragment>
                            <Nav.Link as={Link} to='/register' style={{ marginRight: '15px', fontSize: '1.5rem' }}>Register</Nav.Link>
                            <Nav.Link as={Link} to='/login' style={{ marginRight: '15px', fontSize: '1.5rem' }}>Login</Nav.Link>
                        </Fragment>
                    }
                    {props.showTabs &&
                        <NavDropdown style={{ fontSize: '1.5rem', color: 'blue' }} title="User Options" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to='/orderform' style={{ fontSize: '1.5rem' }}>Order</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/testimonials' style={{ fontSize: '1.5rem' }}>Testimonials</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to='/logout' style={{ fontSize: '1.5rem' }}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    }
                    {props.admin &&
                        <Nav.Link as={Link} to='/admin' style={{ marginRight: '15px', fontSize: '1.5rem' }}>Admin</Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default Navie;