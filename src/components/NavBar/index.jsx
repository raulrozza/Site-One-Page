import React from 'react';

// Image
import logo from '../../assets/img/logo_nav.png';

// Icons
import { FaBars } from 'react-icons/fa';

// Scroll
import { Link } from 'react-scroll';

// Bootstrap
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

// CSS
import './styles.css';

/*
    This component defines the site's top navbar.
*/
const NavBar = () => {
    return (
        <Navbar fixed="top" className="top-navbar" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="Modelo de Site" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                    <FaBars />
                </Navbar.Toggle>

                <Navbar.Collapse
                    id="responsive-navbar-nav"
                    className="justify-content-end"
                >
                    <Nav>
                        <Nav.Link as="span">
                            <Link
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                Página Inicial
                            </Link>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-60}
                                duration={500}
                            >
                                Quem Somos
                            </Link>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <Link
                                activeClass="active"
                                to="enterprise"
                                spy={true}
                                smooth={true}
                                offset={-60}
                                duration={500}
                            >
                                A Empresa
                            </Link>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <Link
                                activeClass="active"
                                to="services"
                                spy={true}
                                smooth={true}
                                offset={-60}
                                duration={500}
                            >
                                Serviços
                            </Link>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-60}
                                duration={500}
                            >
                                Contato
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
