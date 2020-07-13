import React from 'react';

// Bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// Icons
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// React Scroll
import { Element } from 'react-scroll';

// Assets
import logo from '../../assets/img/logo_nav.png';

import './styles.css';

// The function returns the section with the EJEC contacts
const Contact = () => {
    return (
        <Element name="contact" className="contact-section">
            <div className="section-heading">
                {/* Contact form */}
                <h2>Entre em Contato</h2>
            </div>
            <Container>
                <Row>
                    <Col sm="6" md={{ offset: 1, span: 5 }}>
                        <Form>
                            <Form.Row>
                                <Col sm="6">
                                    <Form.Group>
                                        <Form.Control placeholder="Nome" />
                                    </Form.Group>
                                </Col>
                                <Col sm="6">
                                    <Form.Group>
                                        <Form.Control placeholder="Email" />
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Control placeholder="Assunto" />
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Control
                                            as="textarea"
                                            rows="8"
                                            placeholder="Mensagem"
                                        />
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Button>Enviar</Button>
                            </Form.Row>
                        </Form>
                    </Col>
                    {/* Contact info */}
                    <Col sm="6" md={{ offset: 1, span: 5 }}>
                        <div className="section-box">
                            <h3>
                                <img src={logo} alt="logo" />
                            </h3>
                            <p>
                                Nome da Empresa
                                <br />
                                Empresa de negócios
                            </p>
                        </div>
                        <div className="section-box contact-info">
                            <h3>telefone</h3>
                            <p> (48) XXXXX-XXX</p>
                            <h3>email</h3>
                            <p>email@email.br</p>
                        </div>
                        <div>
                            {/* Social networks */}
                            <ul>
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
                        </div>
                    </Col>
                </Row>
            </Container>
        </Element>
    );
};

export default Contact;
