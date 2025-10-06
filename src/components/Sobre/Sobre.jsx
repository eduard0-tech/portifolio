import React from 'react';
import './Sobre.css';
import { useInView } from 'react-intersection-observer';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaJava, FaBootstrap } from 'react-icons/fa';
import { SiMongodb, SiTypescript, SiMysql, SiExpress, SiPrisma, SiJest, SiCypress, SiTailwindcss, SiPostgresql, SiSass } from "react-icons/si";
import { TfiCup, TfiLoop } from "react-icons/tfi";


const habilidades = [
    { nome: 'HTML5', icone: <FaHtml5 />, cor: '#E34F26' },
    { nome: 'CSS3', icone: <FaCss3Alt />, cor: '#1572B6' },
    { nome: 'React', icone: <FaReact />, cor: '#61DAFB' },
    { nome: 'NodeJs', icone: <FaNodeJs />, cor: '#339933' },
    { nome: 'Javascript', icone: <FaJsSquare />, cor: '#F7DF1E' },
    { nome: 'Typescript', icone: <SiTypescript />, cor: '#3178C6' },
    { nome: 'Java', icone: <FaJava />, cor: '#007396' },
    { nome: 'Tailwind CSS', icone: <SiTailwindcss />, cor: '#06B6D4' },
    { nome: 'Express', icone: <SiExpress />, cor: 'var(--cor-texto-claro)' },
    { nome: 'Prisma ORM', icone: <SiPrisma />, cor: 'var(--cor-texto-claro)' },
    { nome: 'APIs REST', icone: <TfiLoop />, cor: '#6c757d' },
    { nome: 'MySQL', icone: <SiMysql />, cor: '#4479A1' },
    { nome: 'MongoDB', icone: <SiMongodb />, cor: '#47A248' },
    { nome: 'Git/Github', icone: <FaGitAlt />, cor: '#F05032' },
    { nome: 'Cypress', icone: <SiCypress />, cor: 'var(--cor-texto-claro)' },
    { nome: 'Jest', icone: <SiJest />, cor: '#C21325' },
    { nome: 'Scrum/Kanban', icone: <TfiCup />, cor: '#6c757d' },
];


const Sobre = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="sobre" className={`sobre ${inView ? 'visible' : ''}`} ref={ref}>
            <div className="sobre-container">
                <div className="sobre-texto">
                    <h2>Sobre Mim</h2>
                    <p>
                        Atualmente cursando Análise e Desenvolvimento de Sistemas na UNIFOR, minha jornada na tecnologia é marcada pela proatividade e busca contínua por conhecimento. Tive a oportunidade de ser monitor da disciplina de Raciocínio Lógico, aprimorando minha capacidade de ensinar e resolver problemas de forma estruturada.
                    </p>
                    <p>
                        Com uma formação intensiva em Desenvolvimento Full-Stack pela Digital College, adquiri uma base sólida nas tecnologias mais modernas do mercado. Meu objetivo é utilizar essas habilidades para construir soluções digitais completas, eficientes e que proporcionem uma ótima experiência ao usuário.
                    </p>
                </div>
                <div className="sobre-habilidades">
                    <h3>Minhas Habilidades</h3>
                    <div className="habilidades-grid">
                        {habilidades.map((habilidade, index) => (
                            <div className="habilidade-card" key={index}>
                                <div className="habilidade-icone">{habilidade.icone}</div>
                                <p>{habilidade.nome}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sobre;