import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: 'easeOut',
            },
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.2,
            },
        },
    };

    const menuItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.3,
            },
        }),
    };

    const linkHoverVariants = {
        hover: {
            color: '#00d4ff',
            transition: { duration: 0.3 },
        },
    };

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <div className="navbar-container">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link to="hero" smooth={true} duration={500} className="nav-logo">
                        LE
                    </Link>
                </motion.div>

                <motion.div
                    className="hamburger"
                    onClick={toggleMenu}
                    whileTap={{ scale: 0.9 }}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={isOpen ? 'times' : 'bars'}
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                            transition={{ duration: 0.2 }}
                        >
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>

                <motion.ul
                    className={isOpen ? 'nav-menu active' : 'nav-menu'}
                    variants={menuVariants}
                    initial="hidden"
                    animate={isOpen ? 'visible' : 'hidden'}
                >
                    {['Sobre', 'Projetos', 'Contato'].map((item, i) => (
                        <motion.li
                            key={item}
                            className="nav-item"
                            custom={i}
                            variants={menuItemVariants}
                            initial="hidden"
                            animate={isOpen ? 'visible' : 'hidden'}
                        >
                            <motion.div
                                variants={linkHoverVariants}
                                whileHover="hover"
                            >
                                <Link
                                    to={item.toLowerCase()}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    className="nav-link"
                                    onClick={closeMobileMenu}
                                >
                                    {item}
                                </Link>
                            </motion.div>
                        </motion.li>
                    ))}
                </motion.ul>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="overlay"
                            onClick={toggleMenu}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        ></motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;