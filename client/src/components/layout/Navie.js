import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/NavieStyle.css'

export const Navie = props => {

    return (

        <div
        // className='container'
        >
            <Navbar bg="white" expand="lg">
                <Navbar.Brand>
                    <Link to='/' className='home_link' style={{ textDecoration: 'none' }}>
                        <p className='main_name'>EatKraveLove <small className="little_name">by Chef Sank</small></p>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='right_navlinks' >
                        {props.hideRegisterLogin &&
                            <Fragment>
                                <Nav.Link as={Link} to='/register' className='little_linkies' >
                                    Register
                                </Nav.Link>
                                <Nav.Link as={Link} to='/login' className='little_linkies' >
                                    Login
                                </Nav.Link>
                            </Fragment>
                        }
                        <Nav.Link as={Link} to='/menu' className='little_linkies' >
                            Menu
                                </Nav.Link>
                        {props.showHiddenTabs &&
                            <NavDropdown className='useroptions_dropdown' title="User Options" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to='/orderform' className='little_linkies' >
                                    Order
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/testimonials' className='little_linkies' >
                                    Testimonials
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to='/logout' className='little_linkies' >
                                    Logout
                                    </NavDropdown.Item>
                            </NavDropdown>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>
    )
}

export default Navie;