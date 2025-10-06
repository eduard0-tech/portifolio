import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMobileMenu = () => {
        if (isOpen) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <Link to="hero" smooth={true} duration={500} className="nav-logo">
                    LE
                </Link>

                <div className="hamburger" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="sobre" spy={true} smooth={true} duration={500} className="nav-link" onClick={closeMobileMenu}>
                            Sobre
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="projetos" spy={true} smooth={true} duration={500} className="nav-link" onClick={closeMobileMenu}>
                            Projetos
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="contato" spy={true} smooth={true} duration={500} className="nav-link" onClick={closeMobileMenu}>
                            Contato
                        </Link>
                    </li>
                </ul>
                {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
            </div>
        </nav>
    );
};

export default Navbar;