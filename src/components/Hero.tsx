import { ArrowDown, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { BookMockup } from './BookMockup';

type HeroProps = {
  onBuy: () => void;
  checkoutReady: boolean;
};

export function Hero({ onBuy, checkoutReady }: HeroProps) {
  return (
    <section className="hero" id="inicio">
      <div className="hero-photo" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Guia Visto Americano, início">
          <span className="brand-mark">US</span>
          <span>GUIA VISTO<br /><b>AMERICANO</b></span>
        </a>
        <a className="header-link" href="#conteudo">Conheça o guia <ArrowRight size={15} /></a>
      </header>
      <div className="hero-inner page-shell">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <div className="eyebrow eyebrow-light"><span /> BRASIL <b>→</b> ESTADOS UNIDOS</div>
          <h1>Não comece no escuro: prepare-se para o <em>visto americano.</em> 🇺🇸</h1>
          <p className="hero-product-subtitle">Guia completo passo a passo para brasileiros</p>
          <p className="hero-description">
            Com regras e orientações que podem mudar, informação confiável faz diferença. Entenda o DS-160,
            organize seus documentos e saiba o que esperar da entrevista consular.
          </p>
          <div className="hero-actions">
            <button type="button" className="button button-primary" onClick={onBuy} disabled={!checkoutReady}>
              QUERO ACESSAR O GUIA COMPLETO <ArrowRight size={18} />
            </button>
            <a className="hero-secondary" href="#conteudo">Descubra o que você vai aprender <ArrowDown size={16} /></a>
          </div>
          <div className="hero-assurance"><ShieldCheck size={17} /> E-book em PDF <span>•</span> Acesso após confirmação do pagamento</div>
        </motion.div>
        <motion.div
          className="hero-product"
          initial={{ opacity: 0, y: 24, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
        >
          <BookMockup />
          <p className="image-disclaimer">Arte ilustrativa. As pessoas retratadas não endossam este guia.</p>
        </motion.div>
      </div>
      <div className="hero-bottom-line" />
    </section>
  );
}
