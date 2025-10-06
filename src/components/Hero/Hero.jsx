import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Hero.css';
import minhaFoto from '../../assets/foto-perfil.jpg';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">Olá, eu sou Luis Eduardo</h1>
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
                    <p className="hero-description">
                        Graduando em Análise e Desenvolvimento de Sistemas com foco na criação de soluções web robustas e escaláveis, transformando desafios em produtos digitais eficientes e intuitivos.
                    </p>
                    <div className="hero-buttons">
                        <a href="#projetos" className="btn btn-primary">
                            Ver Projetos
                        </a>
                        <a href="/Luis_Eduardo_CV.pdf" download="Luis_Eduardo_CV.pdf" className="btn btn-secondary">
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="hero-image-container">
                    <img src={minhaFoto} alt="Luis Eduardo Teófilo Castelo Branco" className="hero-image" />
                </div>
            </div>
        </section>
    );
};

export default Hero;