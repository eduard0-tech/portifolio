import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import './Contato.css';

const Contato = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    const linkVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
            },
        },
        hover: {
            scale: 1.1,
            y: -5,
            transition: {
                duration: 0.3,
            },
        },
        tap: {
            scale: 0.95,
        },
    };

    return (
        <section id="contato" className="contato" ref={ref}>
            <motion.div
                className="contato-container"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
            >
                <motion.h2 variants={itemVariants}>
                    Vamos Construir o Futuro da Web?
                </motion.h2>
                <motion.p variants={itemVariants}>
                    Acredito que a colaboração é a chave para criar produtos digitais excepcionais. Estou disponível para discutir projetos inovadores e oportunidades de carreira onde a tecnologia e a criatividade se encontram. Sinta-se à vontade para me contatar.
                </motion.p>
                <motion.div
                    className="contato-links"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <motion.a
                        href="mailto:luiseduardocbft@gmail.com"
                        className="contato-link"
                        variants={linkVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <FaEnvelope className="icon" />
                        E-mail
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/Luis-Eduardo-Teófilo-Castelo-Branco/"
                        className="contato-link"
                        variants={linkVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <FaLinkedin className="icon" />
                        LinkedIn
                    </motion.a>
                    <motion.a
                        href="https://github.com/eduard0-tech"
                        className="contato-link"
                        variants={linkVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <FaGithub className="icon" />
                        GitHub
                    </motion.a>
                    <motion.a
                        href="https://wa.me/5585999215978"
                        className="contato-link"
                        variants={linkVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <FaWhatsapp className="icon" />
                        WhatsApp
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Contato;