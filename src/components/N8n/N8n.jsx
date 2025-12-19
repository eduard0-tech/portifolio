import './N8n.css';
import { useInView } from 'react-intersection-observer';
import { SiN8N, SiJavascript, SiMysql } from 'react-icons/si';
import { RiRobotLine } from 'react-icons/ri';

const N8n = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="n8n" className={`n8n ${inView ? 'visible' : ''}`} ref={ref}>
            <div className="n8n-container">
                <div className="n8n-header">
                    <div className="n8n-icon"><SiN8N /></div>
                    <h2>n8n — Automação</h2>
                </div>

                <div className="n8n-content">
                    <p className="n8n-description">
                        Atuo no desenho, implementação e manutenção de automações com n8n focadas
                        em ambientes reais de produção. Crio workflows resilientes para eliminar
                        tarefas manuais, integrar sistemas e garantir consistência de dados entre
                        APIs, bancos de dados e ferramentas SaaS.
                    </p>

                    <p className="n8n-description">
                        Trabalho com fluxos orientados a eventos, execuções agendadas (cron) e
                        webhooks, sempre priorizando idempotência, controle de falhas, observabilidade
                        e fácil manutenção a longo prazo.
                    </p>

                    <div className="n8n-grid">
                        <div className="n8n-card">
                            <h4>🚀 Pipeline de Leads em Tempo Real</h4>
                            <p>
                                Webhooks para captura de leads, validação e normalização de dados,
                                enriquecimento via APIs externas e persistência em CRMs.
                                Implementação de deduplicação, retries com backoff e logs estruturados.
                            </p>
                        </div>

                        <div className="n8n-card">
                            <h4>🔄 Sincronização Incremental de Dados</h4>
                            <p>
                                Sincronização contínua entre Postgres, MySQL e ferramentas como
                                Google Sheets e Airtable. Uso de marcadores incrementais para
                                evitar leituras completas, reduzir custo e garantir consistência.
                            </p>
                        </div>

                        <div className="n8n-card">
                            <h4>📡 Monitoramento e Observabilidade</h4>
                            <p>
                                Health checks automatizados, agregação de métricas por workflow,
                                alertas inteligentes e notificações via Slack ou Email
                                em casos de falha ou degradação.
                            </p>
                        </div>

                        <div className="n8n-card">
                            <h4>🔐 Segurança e Gestão de Credenciais</h4>
                            <p>
                                Configuração segura de OAuth2 e API Keys, segregação de ambientes
                                (dev/prod) e controle de acesso para garantir segurança
                                nas integrações e nos dados trafegados.
                            </p>
                        </div>

                        <div className="n8n-card">
                            <h4>🧩 Padrões de Engenharia de Workflows</h4>
                            <p>
                                Uso intensivo de Webhook, HTTP Request, Function (JavaScript),
                                IF, SplitInBatches e nodes SQL. Aplicação de padrões de retry,
                                checkpoints, idempotência e versionamento de workflows.
                            </p>
                        </div>

                        <div className="n8n-card">
                            <h4>🚢 Deploy e Operação</h4>
                            <p>
                                Deploy de automações em n8n Cloud ou ambientes self-hosted
                                (Docker), testes locais, validação em staging e documentação
                                básica para operação e manutenção.
                            </p>
                        </div>
                    </div>

                    <div className="n8n-tags">
                        <span className="tag">Automação</span>
                        <span className="tag">n8n</span>
                        <span className="tag">Webhooks</span>
                        <span className="tag">JavaScript (Function)</span>
                        <span className="tag">SQL / Databases</span>
                        <span className="tag">APIs REST</span>
                        <span className="tag">Docker</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default N8n;
