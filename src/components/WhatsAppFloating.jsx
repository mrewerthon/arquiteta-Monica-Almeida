import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/content';
import { MessageCircle } from 'lucide-react';
import './WhatsAppFloating.css';

export default function WhatsAppFloating() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Exibe o atalho flutuante de forma discreta após rolagem
      if (window.scrollY > 220) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside 
      className={`wa-floating ${isVisible ? 'wa-floating--visible' : ''}`}
      aria-label="Atalho para contato no WhatsApp"
    >
      <a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-floating__btn"
        aria-label="Falar com a arquiteta Monica Almeida no WhatsApp"
      >
        <div className="wa-floating__icon-wrap">
          <MessageCircle size={20} className="wa-floating__icon" />
        </div>
        <span className="wa-floating__text">Falar com Monica</span>
      </a>
    </aside>
  );
}
