import './N8n.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SiN8N } from 'react-icons/si';
import {
    FiZap,
    FiRefreshCw,
    FiActivity,
    FiShield,
    FiLayers
} from 'react-icons/fi';

import { SiDocker } from 'react-icons/si';
const N8n = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

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

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
        hover: {
            scale: 1.05,
            y: -10,
            boxShadow: '0 15px 30px rgba(234, 75, 113, 0.3)',
            transition: {
                duration: 0.3,
            },
        },
    };

    const tagVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
            },
        },
        hover: {
            scale: 1.05,
            backgroundColor: '#EA4B71',
            color: '#fff',
        },
    };

    return (
        <section id="n8n" className="n8n" ref={ref}>
            <motion.div
                className="n8n-container"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
            >
                <motion.div className="n8n-header" variants={itemVariants}>
                    <motion.div
                        className="n8n-icon"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <SiN8N />
                    </motion.div>
                    <motion.h2 variants={itemVariants}>n8n — Automação</motion.h2>
                </motion.div>

                <motion.div className="n8n-content" variants={containerVariants}>
                    <motion.p className="n8n-description" variants={itemVariants}>
                        Atuo no desenho, implementação e manutenção de automações com n8n focadas
                        em ambientes reais de produção. Crio workflows resilientes para eliminar
                        tarefas manuais, integrar sistemas e garantir consistência de dados entre
                        APIs, bancos de dados e ferramentas SaaS.
                    </motion.p>

                    <motion.p className="n8n-description" variants={itemVariants}>
                        Trabalho com fluxos orientados a eventos, execuções agendadas (cron) e
                        webhooks, sempre priorizando idempotência, controle de falhas, observabilidade
                        e fácil manutenção a longo prazo.
                    </motion.p>

                    <motion.div
                        className="n8n-grid"
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
                        <motion.div className="n8n-card" variants={cardVariants} whileHover="hover">
                            <motion.h4 className="n8n-card-title">
                                <FiZap className="icon-leads" />
                                Pipeline de Leads em Tempo Real
                            </motion.h4>

                            <p>
                                Webhooks para captura de leads, validação e normalização de dados,
                                enriquecimento via APIs externas e persistência em CRMs.
                                Implementação de deduplicação, retries com backoff e logs estruturados.
                            </p>
                        </motion.div>

                        <motion.div className="n8n-card" variants={cardVariants} whileHover="hover">
                            <motion.h4 className="n8n-card-title">
                                <FiRefreshCw className="icon-sync" />
                                Sincronização Incremental de Dados
                            </motion.h4>

                            <p>
                                Sincronização contínua entre Postgres, MySQL e ferramentas como
                                Google Sheets e Airtable. Uso de marcadores incrementais para
                                evitar leituras completas, reduzir custo e garantir consistência.
                            </p>
                        </motion.div>

                        <motion.div className="n8n-card" variants={cardVariants} whileHover="hover">
                            <motion.h4 className="n8n-card-title">
                                <FiActivity className="icon-monitor" />
                                Monitoramento e Observabilidade
                            </motion.h4>

                            <p>
                                Health checks automatizados, agregação de métricas por workflow,
                                alertas inteligentes e notificações via Slack ou Email
                                em casos de falha ou degradação.
                            </p>
                        </motion.div>

                        <motion.div className="n8n-card" variants={cardVariants} whileHover="hover">
                            <motion.h4 className="n8n-card-title">
                                <FiShield className="icon-security" />
                                Segurança e Gestão de Credenciais
                            </motion.h4>

                            <p>
                                Configuração segura de OAuth2 e API Keys, segregação de ambientes
                                (dev/prod) e controle de acesso para garantir segurança
                                nas integrações e nos dados trafegados.
                            </p>
                        </motion.div>

                        <motion.div className="n8n-card" variants={cardVariants} whileHover="hover">
                            <motion.h4 className="n8n-card-title">
                                <FiLayers className="icon-patterns" />
                                Padrões de Engenharia de Workflows
                            </motion.h4>

                            <p>
                                Uso intensivo de Webhook, HTTP Request, Function (JavaScript),
                                IF, SplitInBatches e nodes SQL. Aplicação de padrões de retry,
                                checkpoints, idempotência e versionamento de workflows.
                            </p>
                        </motion.div>

                        <motion.div className="n8n-card" variants={cardVariants} whileHover="hover">
                            <motion.h4 className="n8n-card-title">
                                <SiDocker className="icon-deploy" />
                                Deploy e Operação
                            </motion.h4>

                            <p>
                                Deploy de automações em n8n Cloud ou ambientes self-hosted
                                (Docker), testes locais, validação em staging e documentação
                                básica para operação e manutenção.
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="n8n-tags"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.08,
                                },
                            },
                        }}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                    >
                        {['Automação', 'n8n', 'Webhooks', 'JavaScript (Function)', 'SQL / Databases', 'APIs REST', 'Docker'].map((tag) => (
                            <motion.span
                                key={tag}
                                className="tag"
                                variants={tagVariants}
                                whileHover="hover"
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default N8n;