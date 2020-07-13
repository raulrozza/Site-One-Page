import React from 'react';

// Bootstrap
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// Icons
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// React Scroll
import { Element } from 'react-scroll';

// Assets
import placeholder from '../../assets/img/placeholder.jpg';

import './styles.css';

// The function returns the section who tell about EJEC
const About = () => {
    return (
        <Element name="about">
            <div className="section-heading">
                <h2>Quem Somos</h2>
            </div>
            <Container className="about-section">
                <Row>
                    <Col sm="6" className="about-text">
                        <h3>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Proin ornare eget nulla sit amet aliquam.
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Proin ornare eget nulla sit amet aliquam.
                            Fusce dictum neque viverra est euismod elementum.
                            Proin vel leo iaculis, semper ante in, vulputate
                            erat. Donec auctor dui purus, ac mollis tortor
                            ullamcorper eu. Curabitur tristique tincidunt
                            finibus.
                        </p>
                    </Col>
                    {/* List Social networks */}
                    <Col sm={{ span: 5, offset: 1 }} className="about-img">
                        <img src={placeholder} alt="about" />
                        <ul className="about-list-icons">
                            <li>
                                <a
                                    target="_blank"
                                    href="https://www.linkedin.com"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    href="https://www.instagram.com"
                                    rel="noopener noreferrer"
                                >
                                    <FaInstagram />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Element>
    );
};

export default About;
