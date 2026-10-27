import { Check, LockKeyhole, ShieldCheck, Sparkles } from 'lucide-react';
import { formattedPrice } from '../config';

type OfferProps = { onBuy: () => void; checkoutReady: boolean };

const benefits = [
  'E-book digital em PDF',
  'Acesso após confirmação do pagamento',
  'Conteúdo organizado por etapas',
  'Checklist de preparação',
  'Guia de perguntas frequentes',
];

export function Offer({ onBuy, checkoutReady }: OfferProps) {
  return (
    <section className="section offer-section" id="oferta">
      <div className="page-shell">
        <div className="offer-shell">
          <div className="offer-intro">
            <div className="eyebrow eyebrow-light"><span /> SEU PRÓXIMO PASSO</div>
            <h2>Mais clareza para dar o próximo passo.</h2>
            <p>Em meio a mudanças e informações desencontradas, entenda o processo com um roteiro organizado — e confirme cada requisito nos canais oficiais.</p>
            <div className="offer-trust"><ShieldCheck size={18} /> Estude no seu ritmo. Prepare-se com informação.</div>
          </div>
          <div className="offer-card">
            <div className="offer-label"><Sparkles size={14} /> MATERIAL DIGITAL</div>
            <h3>Guia Completo do<br />Visto Americano 2027</h3>
            <div className="offer-price"><span>{formattedPrice}</span><small>pagamento único</small></div>
            <ul className="benefit-list">
              {benefits.map((benefit) => <li key={benefit}><Check size={16} /> {benefit}</li>)}
            </ul>
            <button type="button" className="button button-primary offer-button" onClick={onBuy} disabled={!checkoutReady}>
              QUERO MEU GUIA POR {formattedPrice.toUpperCase()} <span>→</span>
            </button>
            <div className="secure-note"><LockKeyhole size={14} /> Pagamento processado em ambiente seguro.</div>
            {!checkoutReady && <p className="checkout-warning" role="status">Checkout indisponível no momento. Tente novamente mais tarde.</p>}
            <p className="offer-disclaimer">As taxas oficiais do visto não estão incluídas. A compra do guia não garante aprovação.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
