import React from 'react';
import { useInView } from 'react-intersection-observer'; // hook
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import './Contato.css';

const Contato = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section id="contato" className="contato" ref={ref}>
            <div className={`contato-container ${inView ? 'visible' : ''}`}>
                <h2>Vamos Construir o Futuro da Web?</h2>
                <p>
                    Acredito que a colaboração é a chave para criar produtos digitais excepcionais. Estou disponível para discutir projetos inovadores e oportunidades de carreira onde a tecnologia e a criatividade se encontram. Sinta-se à vontade para me contatar.
                </p>
                <div className="contato-links">
                    <a href="mailto:luiseduardocbft@gmail.com" className="contato-link">
                        <FaEnvelope className="icon" />
                        E-mail
                    </a>
                    <a href="https://www.linkedin.com/in/Luis-Eduardo-Teófilo-Castelo-Branco/" className="contato-link">
                        <FaLinkedin className="icon" />
                        LinkedIn
                    </a>
                    <a href="https://github.com/eduard0-tech" className="contato-link">
                        <FaGithub className="icon" />
                        GitHub
                    </a>
                    <a href="https://wa.me/5585999215978" className="contato-link">
                        <FaWhatsapp className="icon" />
                        WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contato;