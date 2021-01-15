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
                        <Link to='/' style={{ fontSize: '2rem' }}>
                            EatKraveLove
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            {props.hideRegisterLogin &&
                                <>
                                    <Nav.Link as={Link} to='/register' style={{ fontSize: '1.35rem' }}>
                                        Register
                                </Nav.Link>
                                    <Nav.Link as={Link} to='/login' style={{ fontSize: '1.35rem' }}>
                                        Login
                                </Nav.Link>
                                </>
                            }
                            <Nav.Link as={Link} to='/menu' style={{ fontSize: '1.35rem' }}>
                                Menu
                                </Nav.Link>
                            <Nav.Link as={Link} to='/about' style={{ fontSize: '1.35rem' }}>
                                About
                              </Nav.Link>
                            {props.showHiddenTabs &&
                                <NavDropdown title="User Options" id="basic-nav-dropdown" style={{ fontSize: '1.35rem' }}>
                                    <NavDropdown.Item as={Link} to='/orderform' style={{ fontSize: '1.35rem' }}>
                                        Catering
                                </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item as={Link} to='/logout' style={{ fontSize: '1.35rem' }}>
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