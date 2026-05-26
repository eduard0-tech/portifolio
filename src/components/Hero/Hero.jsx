import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import './Hero.css';
import minhaFoto from '../../assets/foto-perfil.jpg';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8, x: 50 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    };

    const buttonVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
        },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.3,
            },
        },
    };

    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <motion.div
                    className="hero-text"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 className="hero-title" variants={itemVariants}>
                        Olá, eu sou Luis Eduardo
                    </motion.h1>
                    <motion.div variants={itemVariants}>
                        <TypeAnimation
                            sequence={[
                                'Desenvolvedor Full-Stack', 2000,
                                'Especialista em React & Node.js', 2000,
                                'Apaixonado por Automação', 2000,
                            ]}
                            wrapper="h2"
                            speed={50}
                            className="hero-subtitle"
                            repeat={Infinity}
                        />
                    </motion.div>
                    <motion.p className="hero-description" variants={itemVariants}>
                        Graduando em Análise e Desenvolvimento de Sistemas com foco na criação de soluções web robustas e escaláveis, transformando desafios em produtos digitais eficientes e intuitivos.
                    </motion.p>
                    <motion.div className="hero-buttons" variants={itemVariants}>
                        <motion.a
                            href="#projetos"
                            className="btn btn-primary"
                            variants={buttonVariants}
                            whileHover="hover"
                        >
                            Ver Projetos
                        </motion.a>
                        <motion.a
                            href="/CV_Geral.pdf"
                            download="CV_Geral.pdf"
                            className="btn btn-secondary"
                            variants={buttonVariants}
                            whileHover="hover"
                        >
                            Download CV
                        </motion.a>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="hero-image-container"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <img src={minhaFoto} alt="Luis Eduardo Teófilo Castelo Branco" className="hero-image" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;