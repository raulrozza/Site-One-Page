import React from 'react';

// Bootstrap
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// Icons
import { FaChartLine, FaMousePointer, FaCode } from 'react-icons/fa';

// React Scroll
import { Element } from 'react-scroll';

import './styles.css';

const Services = () => {
    const services = [
        {
            id: 'service-1',
            title: 'Serviço 1',
            Icon: FaChartLine,
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare eget nulla sit amet aliquam.',
        },
        {
            id: 'service-2',
            title: 'Serviço 2',
            Icon: FaMousePointer,
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare eget nulla sit amet aliquam.',
        },
        {
            id: 'service-3',
            title: 'Serviço 3',
            Icon: FaCode,
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare eget nulla sit amet aliquam.',
        },
    ];

    return (
        <Element name="services">
            <div className="section-heading">
                <h2>Serviços</h2>
            </div>
            <Container>
                {/* Listing partners */}
                <Row className="justify-content-around">
                    {services.map(service => (
                        <Col
                            sm="12"
                            md="6"
                            lg="4"
                            key={service.id}
                            className="service-item"
                        >
                            <div>
                                <div className="service-icon-holder">
                                    <div>
                                        <service.Icon />
                                    </div>
                                </div>
                                <h4>{service.title}</h4>
                                <p>{service.content}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Element>
    );
};

export default Services;
