import React from 'react';
import { motion } from 'framer-motion';
import './Projetos.css';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLink, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaJava, FaBootstrap, FaRobot } from 'react-icons/fa';
import { SiMongodb, SiTypescript, SiMysql, SiExpress, SiPrisma, SiJest, SiCypress, SiTailwindcss, SiPostgresql, SiSass, SiNextdotjs } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import projeto1Img from '../../assets/projeto1.png';
import projeto2Img from '../../assets/projeto2.png';
import projeto3Img from '../../assets/projeto3.png';

const habilidades = [
    { nome: 'HTML5', icone: <FaHtml5 />, cor: '#E34F26' },
    { nome: 'CSS', icone: <FaCss3Alt />, cor: '#1572B6' },
    { nome: 'SASS', icone: <SiSass />, cor: '#CC6699' },
    { nome: 'Tailwind CSS', icone: <SiTailwindcss />, cor: '#06B6D4' },
    { nome: 'Bootstrap', icone: <FaBootstrap />, cor: '#7952B3' },
    { nome: 'JavaScript', icone: <FaJsSquare />, cor: '#F7DF1E' },
    { nome: 'Java', icone: <FaJava />, cor: '#007396' },
    { nome: 'React', icone: <FaReact />, cor: '#61DAFB' },
    { nome: 'Node.js', icone: <FaNodeJs />, cor: '#339933' },
    { nome: 'Express', icone: <SiExpress />, cor: '#000000' },
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
    {
        titulo: 'Referreal System',
        descricao: 'Desenvolvi esta SPA (Single Page Application) completa com React e CSS puro no front-end e uma API REST com Node.js/Express e MongoDB no back-end. A solução implementa um sistema de indicação de usuários, foi validada com testes E2E no Cypress e hospedada na nuvem, demonstrando o ciclo de desenvolvimento completo.',
        imagem: projeto3Img,
        tecnologias: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Cypress'],
        link: 'https://sistema-de-indicacao-front-end.onrender.com',
        repo: 'https://github.com/eduard0-tech/Referral-System.git'
    },
];

const Projetos = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
        hover: {
            y: -10,
            boxShadow: '0 20px 40px rgba(0, 212, 255, 0.3)',
            transition: {
                duration: 0.3,
            },
        },
    };

    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
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
                duration: 0.4,
            },
        },
        hover: {
            scale: 1.1,
            color: '#00d4ff',
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <section id="projetos" className="projetos" ref={ref}>
            <motion.h2
                className="projetos-titulo"
                variants={titleVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
            >
                Meus Projetos
            </motion.h2>
            <motion.div
                className="projetos-grid"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
            >
                {projetos.map((projeto, index) => (
                    <motion.div
                        className="projeto-card"
                        key={index}
                        variants={cardVariants}
                        whileHover="hover"
                    >
                        <div className="projeto-imagem-container">
                            <motion.img
                                src={projeto.imagem}
                                alt={projeto.titulo}
                                className="projeto-imagem"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                        <div className="projeto-conteudo">
                            <motion.h3
                                className="projeto-titulo-card"
                                initial={{ opacity: 0 }}
                                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                {projeto.titulo}
                            </motion.h3>
                            <motion.p
                                className="projeto-descricao"
                                initial={{ opacity: 0 }}
                                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                {projeto.descricao}
                            </motion.p>
                            <div className="projeto-tecnologias">
                                {projeto.tecnologias.map((techNome, i) => {
                                    const habilidade = habilidades.find(h => h.nome === techNome);
                                    if (!habilidade) return null;
                                    const corFinal = ['#000000', '#2D3748', '#17202C', '#555555'].includes(habilidade.cor)
                                        ? 'var(--cor-texto-claro)'
                                        : habilidade.cor;
                                    return (
                                        <motion.div
                                            key={i}
                                            className="tech-tag"
                                            style={{ '--tech-cor': corFinal }}
                                            variants={linkVariants}
                                            initial="hidden"
                                            animate={inView ? 'visible' : 'hidden'}
                                            transition={{ delay: 0.4 + i * 0.05 }}
                                            whileHover="hover"
                                        >
                                            {habilidade.icone}
                                            <span>{habilidade.nome}</span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                            <motion.div className="projeto-links">
                                <motion.a
                                    href={projeto.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="projeto-link"
                                    variants={linkVariants}
                                    initial="hidden"
                                    animate={inView ? 'visible' : 'hidden'}
                                    whileHover="hover"
                                >
                                    <FaLink /> <span>Ver Site</span>
                                </motion.a>
                                <motion.a
                                    href={projeto.repo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="projeto-link"
                                    variants={linkVariants}
                                    initial="hidden"
                                    animate={inView ? 'visible' : 'hidden'}
                                    transition={{ delay: 0.1 }}
                                    whileHover="hover"
                                >
                                    <FaGithub /> <span>GitHub</span>
                                </motion.a>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projetos;