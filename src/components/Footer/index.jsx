import React, { useState, useEffect } from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';

// Icons
import { FaAngleUp } from 'react-icons/fa';

// React Scroll
import { animateScroll } from 'react-scroll';

import './styles.css';

// Setting states to scrool back to the top of the website
const Footer = () => {
    const [atTop, setAtTop] = useState(true);

    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset < 600) setAtTop(true);
            else setAtTop(false);
        };
    }, []);
    // This function returns the website footer
    return (
        <footer className="footer">
            <Container>
                <div className="text-center">
                    <p>
                        &copy; 2020
                        <br />
                        desenvolvido por Raul Rosá
                    </p>
                </div>
            </Container>

            {!atTop && (
                <div
                    className="to-top-btn"
                    onClick={() => animateScroll.scrollToTop()}
                >
                    <FaAngleUp />
                </div>
            )}
        </footer>
    );
};

export default Footer;
