import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { formattedPrice } from '../config';

type MobileCtaProps = { onBuy: () => void; checkoutReady: boolean };

export function MobileCta({ onBuy, checkoutReady }: MobileCtaProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('inicio');
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`mobile-cta ${visible ? 'mobile-cta-visible' : ''}`} aria-hidden={!visible}>
      <span>{formattedPrice}</span>
      <button type="button" onClick={onBuy} disabled={!checkoutReady} tabIndex={visible ? 0 : -1}>
        ACESSAR O GUIA <ArrowRight size={16} />
      </button>
    </div>
  );
}
