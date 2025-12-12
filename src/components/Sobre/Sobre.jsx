import './Sobre.css';
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
    { nome: 'Tailwind CSS', icone: <SiTailwindcss />, cor: '#06B6D4' },
    { nome: 'Bootstrap', icone: <SiBootstrap />, cor: '#7952B3' },

    { nome: 'JavaScript', icone: <SiJavascript />, cor: '#F7DF1E' },
    { nome: 'TypeScript', icone: <SiTypescript />, cor: '#3178C6' },
    { nome: 'Java', icone: <FaJava />, cor: '#007396' },

    { nome: 'React', icone: <FaReact />, cor: '#61DAFB' },
    { nome: 'Next.js', icone: <TbBrandNextjs />, cor: '#000000' },

    { nome: 'Node.js', icone: <FaNodeJs />, cor: '#339933' },
    { nome: 'Express', icone: <SiExpress />, cor: '#000000' },
    { nome: 'Prisma', icone: <SiPrisma />, cor: '#2D3748' },
    { nome: 'FastAPI', icone: <SiFastapi />, cor: '#009688' },

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

    return (
        <section id="sobre" className={`sobre ${inView ? 'visible' : ''}`} ref={ref}>
            <div className="sobre-container">
                
                <div className="sobre-texto">
                    <h2>Sobre Mim</h2>
                    <p>
                        Atualmente cursando Análise e Desenvolvimento de Sistemas na UNIFOR, minha jornada na tecnologia é marcada pela proatividade e pela busca constante por conhecimento.
                        Tive a oportunidade de ser monitor da disciplina de Raciocínio Lógico, aprimorando minha didática e minha capacidade de resolver problemas de forma estruturada.
                    </p>
                    <p>
                        Concluí uma formação intensiva em Desenvolvimento Full-Stack pela Digital College, onde desenvolvi projetos completos utilizando tecnologias modernas do mercado.
                        Hoje, foco em criar soluções eficientes, escaláveis e que proporcionam uma ótima experiência ao usuário.
                    </p>
                </div>

                <div className="sobre-habilidades">
                    <h3>Minhas Habilidades</h3>
                    <div className="habilidades-grid">
                        {habilidades.map((habilidade, index) => (
                            <div 
                                className="habilidade-card"
                                key={index}
                                style={{ borderColor: habilidade.cor }}
                            >
                                <div 
                                    className="habilidade-icone"
                                    style={{ color: habilidade.cor }}
                                >
                                    {habilidade.icone}
                                </div>
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