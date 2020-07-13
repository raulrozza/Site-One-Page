import React from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';

// Carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Assets
import placeholder from '../../assets/img/placeholder-squared.jpg';

import './styles.css';

// Configs for the carousel
const responsive = {
    desktop: {
        breakpoint: { max: 4000, min: 991 },
        items: 8,
    },
    bigTablet: {
        breakpoint: { max: 991, min: 768 },
        items: 6,
    },
    tablet: {
        breakpoint: { max: 768, min: 464 },
        items: 4,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3,
    },
};
// This function returns the information about ejec's partners
const Partners = () => {
    const brands = [
        {
            href: 'https://google.com',
            img: placeholder,
            alt: 'brand',
        },
        {
            href: 'https://google.com',
            img: placeholder,
            alt: 'brand',
        },
        {
            href: 'https://google.com',
            img: placeholder,
            alt: 'brand',
        },
        {
            href: 'https://google.com',
            img: placeholder,
            alt: 'brand',
        },
    ];

    return (
        <section>
            <div className="section-heading">
                <h2>Nossos Parceiros</h2>
            </div>
            <Container className="partners-container">
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    showDots={false}
                >
                    {brands.map((brand, index) => (
                        <div
                            className="partners-carousel-item"
                            key={`${brand.alt}-${index}`}
                        >
                            <a
                                target="_blank"
                                href={brand.href}
                                rel="noopener noreferrer"
                            >
                                <img src={brand.img} alt={brand.alt} />
                            </a>
                        </div>
                    ))}
                </Carousel>
            </Container>
        </section>
    );
};

export default Partners;
