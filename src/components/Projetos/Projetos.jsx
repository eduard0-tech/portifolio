import React from 'react';
import './Projetos.css';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLink, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaJava, FaBootstrap } from 'react-icons/fa';
import { SiMongodb, SiTypescript, SiMysql, SiExpress, SiPrisma, SiJest, SiCypress, SiTailwindcss, SiPostgresql, SiSass, SiNextdotjs, SiShadcnui } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import projeto1Img from '../../assets/projeto1.png';
import projeto2Img from '../../assets/projeto2.png';

const habilidades = [
    { nome: 'HTML5', icone: <FaHtml5 />, cor: '#E34F26' },
    { nome: 'CSS', icone: <FaCss3Alt />, cor: '#1572B6' },
    { nome: 'SASS', icone: <SiSass />, cor: '#CC6699' },
    { nome: 'Tailwind CSS', icone: <SiTailwindcss />, cor: '#06B6D4' },
    { nome: 'Bootstrap', icone: <FaBootstrap />, cor: '#7952B3' },
    { nome: 'JavaScript', icone: <FaJsSquare />, cor: '#F7DF1E' },
    { nome: 'TypeScript', icone: <SiTypescript />, cor: '#3178C6' },
    { nome: 'Java', icone: <FaJava />, cor: '#007396' },
    { nome: 'React', icone: <FaReact />, cor: '#61DAFB' },
    { nome: 'Next.js', icone: <SiNextdotjs />, cor: '#000000' }, 
    { nome: 'Node.js', icone: <FaNodeJs />, cor: '#339933' },
    { nome: 'Express', icone: <SiExpress />, cor: '#000000' }, 
    { nome: 'Prisma', icone: <SiPrisma />, cor: '#2D3748' },
    { nome: 'shadcn/ui', icone: <SiShadcnui />, cor: '#000000' }, 
    { nome: 'MySQL', icone: <SiMysql />, cor: '#4479A1' },
    { nome: 'PostgreSQL', icone: <SiPostgresql />, cor: '#336791' },
    { nome: 'MongoDB', icone: <SiMongodb />, cor: '#47A248' },
    { nome: 'Jest', icone: <SiJest />, cor: '#C21325' },
    { nome: 'Cypress', icone: <SiCypress />, cor: '#17202C' }, 
    { nome: 'Git', icone: <FaGitAlt />, cor: '#F05032' },
    { nome: 'API REST', icone: <TbApi />, cor: '#495057' },
];

const projetos = [
    {
        titulo: 'Diário Pop',
        descricao: 'Desenvolvido com TypeScript, o Diario Pop foi um projeto criado para oferecer uma experiência de conteúdo unificada e imersiva para uma fã de universos distintos. A aplicação agrega e organiza informações sobre o grupo de K-Pop ENHYPEN, o RPG Ordem Paranormal e o anime One Piece em uma interface coesa e intuitiva.',
        imagem: projeto1Img,
        tecnologias: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'shadcn/ui'],
        link: 'https://presente-ester.vercel.app',
        repo: 'https://github.com/eduard0-tech/presente',
    },
    {
        titulo: 'PetCompare',
        descricao: 'Facilitando a vida dos donos de pets, este projeto centraliza informações de vários pet shops em um só lugar. O objetivo é permitir que os usuários tomem decisões informadas, comparando serviços com base em duas métricas principais: avaliações da comunidade e custo-benefício, garantindo o melhor cuidado para seus animais de estimação.',
        imagem: projeto2Img,
        tecnologias: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'shadcn/ui'],
        link: 'https://pet-shop-faxn.vercel.app',
        repo: 'https://github.com/eduard0-tech/pet-shop',
    },
];

const Projetos = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="projetos" className="projetos" ref={ref}>
            <h2 className="projetos-titulo">Meus Projetos</h2>
            <div className={`projetos-grid ${inView ? 'visible' : ''}`}>
                {projetos.map((projeto, index) => (
                    <div className="projeto-card" key={index}>
                        <div className="projeto-imagem-container">
                            <img src={projeto.imagem} alt={projeto.titulo} className="projeto-imagem" />
                        </div>
                        <div className="projeto-conteudo">
                            <h3 className="projeto-titulo-card">{projeto.titulo}</h3>
                            <p className="projeto-descricao">{projeto.descricao}</p>
                            <div className="projeto-tecnologias">
                                {projeto.tecnologias.map((techNome, i) => {
                                    const habilidade = habilidades.find(h => h.nome === techNome);
                                    if (!habilidade) return null;
                                    const corFinal = ['#000000', '#2D3748', '#17202C'].includes(habilidade.cor)
                                        ? 'var(--cor-texto-claro)'
                                        : habilidade.cor;
                                    return (
                                        <div
                                            key={i}
                                            className="tech-tag"
                                            style={{ '--tech-cor': corFinal }}
                                        >
                                            {habilidade.icone}
                                            <span>{habilidade.nome}</span>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="projeto-links">
                                <a href={projeto.link} target="_blank" rel="noopener noreferrer" className="projeto-link">
                                    <FaLink /> <span>Ver Site</span>
                                </a>
                                <a href={projeto.repo} target="_blank" rel="noopener noreferrer" className="projeto-link">
                                    <FaGithub /> <span>GitHub</span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projetos;