import { BookOpen, Check } from 'lucide-react';

export function BookMockup() {
  return (
    <div className="book-stage" aria-label="Mockup ilustrativo da capa do e-book">
      <div className="book-shadow" />
      <div className="book">
        <div className="book-cover">
          <div className="book-cover-photo" />
          <div className="book-cover-content">
            <span className="book-kicker">GUIA DIGITAL • EDIÇÃO 2027</span>
            <div className="book-rule" />
            <h2>COMO TIRAR SEU<br />VISTO AMERICANO<br /><em>EM 2027</em></h2>
            <p>Guia completo passo a passo para brasileiros</p>
            <div className="book-stamp"><BookOpen size={16} /> GUIA COMPLETO</div>
            <span className="book-flag" aria-label="Bandeira dos Estados Unidos">🇺🇸</span>
          </div>
          <div className="book-cover-spine" />
        </div>
      </div>
      <div className="book-note"><Check size={14} /> Prático e organizado por etapas</div>
    </div>
  );
}
