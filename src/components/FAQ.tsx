import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { config } from '../config';

const questions = [
  {
    question: 'O material é físico ou digital?',
    answer: 'É um e-book digital em PDF. Nenhum produto físico será enviado.',
  },
  {
    question: 'Como recebo meu e-book?',
    answer: 'O acesso é disponibilizado após a confirmação do pagamento, conforme as instruções apresentadas no checkout.',
  },
  {
    question: 'Ele garante a aprovação?',
    answer: 'Não. A decisão sobre o visto é exclusiva das autoridades consulares. O guia é educativo e não garante concessão ou resultado.',
  },
  {
    question: 'As taxas consulares estão incluídas no preço?',
    answer: 'Não. O valor informado é somente pelo material digital. Taxas consulares e outros custos do processo são pagos separadamente.',
  },
  {
    question: 'Posso solicitar reembolso?',
    answer: config.refundUrl
      ? 'Consulte a política de reembolso vigente antes de concluir sua compra.'
      : 'As condições de reembolso não foram informadas nesta página. Consulte a política apresentada pelo vendedor e pelo checkout antes de comprar; não presumimos prazos ou garantias.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section faq-section" id="duvidas">
      <div className="page-shell faq-layout">
        <div className="faq-heading">
          <div className="eyebrow"><span /> ANTES DE COMPRAR</div>
          <h2>Dúvidas rápidas</h2>
          <p>Informação transparente para decidir com segurança.</p>
        </div>
        <div className="faq-list">
          {questions.map((item, index) => (
            <div className={`faq-item ${open === index ? 'is-open' : ''}`} key={item.question}>
              <h3>
                <button
                  type="button"
                  aria-expanded={open === index}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpen(open === index ? null : index)}
                >
                  {item.question}
                  <ChevronDown size={19} />
                </button>
              </h3>
              <div className="faq-answer" id={`faq-answer-${index}`} hidden={open !== index}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
