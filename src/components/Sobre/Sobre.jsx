import './Sobre.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava, FaGitAlt } from 'react-icons/fa';
import {
    SiSass, SiTailwindcss, SiBootstrap, SiJavascript, SiTypescript,
    SiExpress, SiPrisma, SiMysql, SiPostgresql, SiMongodb, SiJest,
    SiCypress, SiFastapi, SiSupabase, SiN8N
} from "react-icons/si";
import { TbBrandNextjs, TbApi } from "react-icons/tb";
import { RiRobotLine, RiBrainLine } from "react-icons/ri";

const habilidades = [
    { nome: 'HTML5', icone: <FaHtml5 />, cor: '#E34F26' },
    { nome: 'CSS3', icone: <FaCss3Alt />, cor: '#1572B6' },
    { nome: 'SASS', icone: <SiSass />, cor: '#CC6699' },
    { nome: 'Bootstrap', icone: <SiBootstrap />, cor: '#7952B3' },

    { nome: 'JavaScript', icone: <SiJavascript />, cor: '#F7DF1E' },
    { nome: 'Java', icone: <FaJava />, cor: '#007396' },

    { nome: 'React', icone: <FaReact />, cor: '#61DAFB' },

    { nome: 'Node.js', icone: <FaNodeJs />, cor: '#339933' },
    { nome: 'Express', icone: <SiExpress />, cor: '#000000' },
    { nome: 'Prisma', icone: <SiPrisma />, cor: '#2D3748' },

    { nome: 'MySQL', icone: <SiMysql />, cor: '#4479A1' },
    { nome: 'PostgreSQL', icone: <SiPostgresql />, cor: '#336791' },
    { nome: 'MongoDB', icone: <SiMongodb />, cor: '#47A248' },

    { nome: 'Jest', icone: <SiJest />, cor: '#C21325' },
    { nome: 'Cypress', icone: <SiCypress />, cor: '#17202C' },

    { nome: 'Git', icone: <FaGitAlt />, cor: '#F05032' },

    { nome: 'API REST', icone: <TbApi />, cor: '#495057' },

    { nome: 'n8n', icone: <SiN8N />, cor: '#EA4B71' },
    { nome: 'Supabase', icone: <SiSupabase />, cor: '#3ECF8E' },
    { nome: 'Automação', icone: <RiRobotLine />, cor: '#555555' },
    { nome: 'Inteligência Artificial', icone: <RiBrainLine />, cor: '#7C3AED' },
];

const Sobre = () => {
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
                delayChildren: 0.1,
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

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.3,
            },
        },
    };

    return (
        <section id="sobre" className="sobre" ref={ref}>
            <motion.div
                className="sobre-container"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
            >
                <motion.div className="sobre-texto" variants={itemVariants}>
                    <motion.h2 variants={itemVariants}>Sobre Mim</motion.h2>
                    <motion.p variants={itemVariants}>
                        Atualmente cursando Análise e Desenvolvimento de Sistemas na UNIFOR, minha jornada na tecnologia é marcada pela proatividade e pela busca constante por conhecimento.
                        Tive a oportunidade de ser monitor da disciplina de Raciocínio Lógico, aprimorando minha didática e minha capacidade de resolver problemas de forma estruturada.
                    </motion.p>
                    <motion.p variants={itemVariants}>
                        Concluí uma formação intensiva em Desenvolvimento Full-Stack pela Digital College, onde desenvolvi projetos completos utilizando tecnologias modernas do mercado.
                        Hoje, foco em criar soluções eficientes, escaláveis e que proporcionem uma ótima experiência ao usuário.
                    </motion.p>
                </motion.div>

                <motion.div className="sobre-habilidades" variants={itemVariants}>
                    <motion.h3 variants={itemVariants}>Minhas Habilidades</motion.h3>
                    <motion.div
                        className="habilidades-grid"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.05,
                                },
                            },
                        }}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                    >
                        {habilidades.map((habilidade, index) => (
                            <motion.div
                                className="habilidade-card"
                                key={index}
                                style={{ borderColor: habilidade.cor }}
                                variants={cardVariants}
                                whileHover="hover"
                            >
                                <div
                                    className="habilidade-icone"
                                    style={{ color: habilidade.cor }}
                                >
                                    {habilidade.icone}
                                </div>
                                <p>{habilidade.nome}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

            </motion.div>
        </section>
    );
};

export default Sobre;