import { useEffect, useState } from 'react';
import { config, getCheckoutUrl } from './config';
import { trackEvent } from './analytics';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { MobileCta } from './components/MobileCta';
import { Offer } from './components/Offer';

export default function App() {
  const [checkoutError, setCheckoutError] = useState('');
  const checkoutReady = Boolean(getCheckoutUrl());

  useEffect(() => {
    trackEvent('ViewContent');

    const price = config.price.toFixed(2);
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Guia Completo do Visto Americano 2027',
      description: 'E-book digital educativo sobre as etapas do processo do visto americano B1/B2.',
      category: 'E-book',
      offers: {
        '@type': 'Offer',
        price,
        priceCurrency: 'BRL',
        availability: 'https://schema.org/InStock',
      },
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
    return () => script.remove();
  }, []);

  function handleBuy() {
    const url = getCheckoutUrl();
    if (!url) {
      setCheckoutError('O checkout não está configurado ou a URL informada é inválida. Entre em contato com o suporte.');
      return;
    }
    setCheckoutError('');
    trackEvent('InitiateCheckout');
    window.location.assign(url);
  }

  return (
    <>
      <a className="skip-link" href="#conteudo-principal">Pular para o conteúdo</a>
      <Hero onBuy={handleBuy} checkoutReady={checkoutReady} />
      <main id="conteudo-principal">
        {checkoutError && (
          <div className="checkout-error" role="alert">
            <span>{checkoutError}</span>
            <button type="button" aria-label="Fechar aviso" onClick={() => setCheckoutError('')}>×</button>
          </div>
        )}
        <section className="quick-guide" id="conteudo">
          <div className="page-shell quick-guide-inner">
            <p className="quick-guide-label">UM GUIA, AS ETAPAS ESSENCIAIS</p>
            <h2>Saiba o que esperar antes de iniciar sua solicitação.</h2>
            <div className="quick-guide-points">
              <span><b>01</b> DS-160 e documentos</span>
              <span><b>02</b> Taxas, agendamento e biometria</span>
              <span><b>03</b> Entrevista e próximos passos</span>
            </div>
            <p className="quick-guide-note">Material educativo para ajudar você a entender o processo — não substitui as orientações oficiais nem garante aprovação.</p>
          </div>
        </section>
        <Offer onBuy={handleBuy} checkoutReady={checkoutReady} />
        <FAQ />
      </main>
      <Footer />
      <MobileCta onBuy={handleBuy} checkoutReady={checkoutReady} />
    </>
  );
}
