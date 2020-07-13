import React from 'react';

// Bootstrap
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// React Scroll
import { Element } from 'react-scroll';

import './styles.css';

// This function returns mission, vision, values about EJEC
const Enterprise = () => {
    const information = [
        {
            title: 'Missão',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare eget nulla sit amet aliquam.',
        },
        {
            title: 'Visão',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare eget nulla sit amet aliquam.',
        },
        {
            title: 'Valores',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare eget nulla sit amet aliquam.',
        },
    ];
    //  Section to talk about the company
    return (
        <Element name="enterprise" className="enterprise-section">
            <div className="section-heading">
                <h2>A Empresa</h2>
            </div>
            <Container className="enterprise-container">
                <Row noGutters>
                    {/* List information from json  */}
                    {information.map(item => (
                        <Col key={`item-${item.title}`} md={4} sm={12}>
                            <div className="enterprise-info-title">
                                <h2>{item.title}</h2>
                            </div>
                            <div className="enterprise-info-content">
                                <p className="description">{item.content}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Element>
    );
};

export default Enterprise;
