import {
  AlertCircle, BadgeCheck, BookOpen, CalendarDays, Check, ClipboardList, CreditCard,
  FileText, Fingerprint, Plane, ShieldCheck, ShieldQuestion, UserRoundCheck,
} from 'lucide-react';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

const concerns = [
  'Não sabe por onde começar?',
  'Tem medo de preencher o DS-160 errado?',
  'Não sabe quais documentos preparar?',
  'Fica inseguro com a entrevista?',
  'Não entende as taxas e o agendamento?',
  'Tem dúvidas sobre os motivos de recusa?',
];

const chapters: { title: string; description: string; icon: ReactNode }[] = [
  { title: 'Tipos de visto', description: 'Entenda as categorias e o propósito do B1/B2.', icon: <Plane /> },
  { title: 'Passaporte e documentos', description: 'Saiba o que revisar e organizar antes de começar.', icon: <ClipboardList /> },
  { title: 'Formulário DS-160', description: 'Conheça o formulário e os cuidados no preenchimento.', icon: <FileText /> },
  { title: 'Taxas e pagamentos', description: 'Veja como funcionam as taxas oficiais do processo.', icon: <CreditCard /> },
  { title: 'Agendamento', description: 'Entenda as etapas para marcar seus atendimentos.', icon: <CalendarDays /> },
  { title: 'Biometria', description: 'Prepare-se para a coleta de dados biométricos.', icon: <Fingerprint /> },
  { title: 'Entrevista consular', description: 'Conheça a dinâmica e organize suas informações.', icon: <UserRoundCheck /> },
  { title: 'Perguntas frequentes', description: 'Encontre respostas para dúvidas comuns de iniciantes.', icon: <BookOpen /> },
  { title: 'Possíveis motivos de recusa', description: 'Entenda fatores que podem influenciar a decisão.', icon: <ShieldQuestion /> },
  { title: 'Etapas após a entrevista', description: 'Saiba o que pode acontecer depois do atendimento.', icon: <BadgeCheck /> },
];

const steps = [
  { title: 'Adquira o guia', text: 'Realize sua compra pelo checkout seguro.' },
  { title: 'Receba o acesso', text: 'Após a confirmação do pagamento, obtenha o material digital.' },
  { title: 'Estude o passo a passo', text: 'Leia os capítulos, revise os documentos e compreenda o processo.' },
  { title: 'Prepare sua solicitação', text: 'Use as orientações como apoio e confirme os requisitos nos sites oficiais.' },
];

function SectionHeading({ label, title, description }: { label: string; title: string; description?: string }) {
  return (
    <div className="section-heading">
      <div className="eyebrow"><span /> {label}</div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export function Concerns() {
  return (
    <section className="section concerns-section">
      <div className="page-shell">
        <SectionHeading label="VOCÊ NÃO ESTÁ SÓ" title="Tirar o visto americano parece complicado?" />
        <div className="concern-grid">
          {concerns.map((item, index) => (
            <motion.div
              className="concern-card"
              key={item}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
            >
              <span className="concern-icon"><AlertCircle size={19} /></span>
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
        <p className="concern-conclusion">
          Com informação organizada e fontes confiáveis, você pode entender cada etapa antes de iniciar sua solicitação.
        </p>
      </div>
    </section>
  );
}

export function GuideContent() {
  return (
    <section className="section guide-section" id="conteudo">
      <div className="page-shell guide-layout">
        <div className="guide-visual">
          <img
            className="guide-photo"
            src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=900&q=80"
            alt="Vista da Estátua da Liberdade e do porto de Nova York"
            loading="lazy"
            decoding="async"
          />
          <div className="guide-paper">
            <div className="paper-top"><span>SEU GUIA DE PREPARAÇÃO</span><span>2027</span></div>
            <h3>Da ideia à<br /><em>entrevista.</em></h3>
            <p>As etapas explicadas com clareza para você estudar no seu ritmo.</p>
            <div className="paper-check"><Check size={14} /> Checklist de preparação</div>
          </div>
          <div className="guide-photo-caption">INFORMAÇÃO PARA PLANEJAR COM MAIS CLAREZA</div>
        </div>
        <div className="guide-copy">
          <SectionHeading
            label="POR DENTRO DO GUIA"
            title="Um guia completo para entender cada etapa do seu visto americano."
            description="Conteúdo direto ao ponto, pensado para brasileiros que querem conhecer o processo antes de iniciar."
          />
          <div className="chapter-grid">
            {chapters.map((chapter, index) => (
              <motion.article
                className="chapter-card"
                key={chapter.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: (index % 5) * 0.04 }}
              >
                <span className="chapter-icon">{chapter.icon}</span>
                <span className="chapter-number">{String(index + 1).padStart(2, '0')}</span>
                <h3>{chapter.title}</h3>
                <p>{chapter.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Timeline() {
  return (
    <section className="section timeline-section">
      <div className="page-shell">
        <SectionHeading label="SIMPLES DE ACOMPANHAR" title="Como funciona" description="Um caminho claro para estudar e se preparar." />
        <div className="timeline">
          {steps.map((step, index) => (
            <div className="timeline-step" key={step.title}>
              <div className="timeline-marker"><span>{String(index + 1).padStart(2, '0')}</span></div>
              <div className="timeline-copy"><h3>{step.title}</h3><p>{step.text}</p></div>
            </div>
          ))}
        </div>
        <div className="timeline-note"><ShieldCheck size={17} /> O guia é educativo. Sempre confirme regras e orientações nos canais oficiais.</div>
      </div>
    </section>
  );
}
