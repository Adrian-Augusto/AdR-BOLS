import { Mail, ShieldAlert } from 'lucide-react';
import { config } from '../config';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell">
        <div className="footer-main">
          <div>
            <a className="brand footer-brand" href="#inicio">
              <span className="brand-mark">US</span>
              <span>GUIA VISTO<br /><b>AMERICANO</b></span>
            </a>
            <p className="footer-company">{config.companyName}</p>
          </div>
          <div className="footer-links">
            <a href={config.privacyUrl || '#privacidade'}>Política de Privacidade</a>
            <a href={config.termsUrl || '#termos'}>Termos de Uso</a>
            <a href={config.refundUrl || '#politica-reembolso'}>Política de Reembolso</a>
            {config.supportEmail ? (
              <a href={`mailto:${config.supportEmail}`}><Mail size={15} /> {config.supportEmail}</a>
            ) : (
              <span><Mail size={15} /> Contato de suporte a configurar</span>
            )}
          </div>
        </div>
        <div className="footer-notice">
          <ShieldAlert size={18} />
          <p>Este é um produto educacional independente, sem vínculo com a Embaixada dos Estados Unidos, consulados ou órgãos governamentais. A compra do material não garante a concessão de visto.</p>
        </div>
        <div className="footer-legal">
          <p>© {new Date().getFullYear()} {config.companyName}. Todos os direitos reservados.</p>
          <p id="privacidade"><b>Privacidade:</b> os dados enviados a serviços externos seguem as políticas do checkout e das ferramentas de análise configuradas pelo responsável.</p>
          <p id="termos"><b>Termos:</b> material informativo, sujeito a alterações nas regras oficiais. Consulte fontes governamentais atualizadas.</p>
          <p id="politica-reembolso"><b>Reembolso:</b> consulte as condições vigentes informadas pelo vendedor e pelo checkout antes da compra. Nenhuma condição específica foi fornecida para esta página.</p>
        </div>
      </div>
    </footer>
  );
}
