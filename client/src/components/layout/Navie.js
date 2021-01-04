import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Navie = props => {

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <Link to='/'>
                            <p>EatKraveLove <small>by Chef Sank</small></p>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            {props.hideRegisterLogin &&
                                <>
                                    <Nav.Link as={Link} to='/register' className='little_linkies' >
                                        Register
                                </Nav.Link>
                                    <Nav.Link as={Link} to='/login' className='little_linkies' >
                                        Login
                                </Nav.Link>
                                </>
                            }
                            <Nav.Link as={Link} to='/menu'  >
                                Menu
                                </Nav.Link>
                            <Nav.Link as={Link} to='/about'  >
                                About
                              </Nav.Link>
                            {props.showHiddenTabs &&
                                <NavDropdown title="User Options" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to='/orderform'>
                                        Catering
                                </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item as={Link} to='/logout'>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navie;