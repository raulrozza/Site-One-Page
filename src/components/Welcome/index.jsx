import React from 'react';

// Boostrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// React Scroll
import { Element, Link } from 'react-scroll';

// Assets
import logo from '../../assets/img/logo_big.png';

import './styles.css';
// This component is renponsible for the first apresentation of the website, with: logo, name of the company and background walpaper
const Welcome = () => {
    return (
        <Element className="welcome-section" name="home">
            <Container>
                <Row>
                    <Col md="12" className="text-center">
                        <div className="header-text">
                            <img src={logo} alt="Raul Rosá" />
                            <p>Raul Rosá</p>
                            <Button>
                                <Link
                                    activeClass="active"
                                    to="services"
                                    spy={true}
                                    smooth={true}
                                    offset={-60}
                                    duration={500}
                                >
                                    Nossas Soluções
                                </Link>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Element>
    );
};

export default Welcome;
