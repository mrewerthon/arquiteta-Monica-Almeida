import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/content';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import './WhatsAppFloating.css';

export default function WhatsAppFloating() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating button after user scrolls past 150px
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Floating Button */}
      <aside 
        className={`wa-floating-desktop ${isVisible ? 'wa-floating-desktop--visible' : ''}`}
        aria-label="Atendimento rápido via WhatsApp"
      >
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="wa-floating-btn"
          aria-label="Iniciar conversa com a arquiteta Monica Almeida no WhatsApp"
        >
          <div className="wa-floating-badge">
            <span className="wa-floating-badge-text">Falar com a arquiteta</span>
            <ArrowUpRight size={14} />
          </div>
          <div className="wa-floating-icon-wrap">
            <MessageCircle size={28} className="wa-floating-icon" />
            <span className="wa-pulse"></span>
          </div>
        </a>
      </aside>

      {/* Mobile Fixed Action Bar */}
      <aside 
        className={`wa-mobile-bar ${isVisible ? 'wa-mobile-bar--visible' : ''}`}
        aria-label="Barra de contato rápido via WhatsApp"
      >
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="wa-mobile-link"
          aria-label="Conversar pelo WhatsApp com Monica Almeida"
        >
          <MessageCircle size={20} className="wa-mobile-icon" />
          <span className="wa-mobile-text">Conversar pelo WhatsApp</span>
          <ArrowUpRight size={16} />
        </a>
      </aside>
    </>
  );
}
