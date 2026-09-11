import React from 'react';
import { siteConfig, navLinks } from '../data/content';
import { MessageCircle, ArrowUp } from 'lucide-react';
import './Footer.css';

function InstagramIcon({ size = 18, className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container footer__container">
        {/* Top Footer */}
        <div className="footer__top">
          {/* Brand Col */}
          <div className="footer__brand-col">
            <a href="#inicio" className="footer__brand" onClick={scrollToTop}>
              <span className="footer__brand-name">{siteConfig.fullName}</span>
              <span className="footer__brand-sub">{siteConfig.brandSubtitle}</span>
            </a>
            <p className="footer__tagline">
              {siteConfig.tagline}
            </p>
            <div className="footer__location">
              <span>{siteConfig.location}</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="footer__nav-col">
            <h4 className="footer__col-title">Navegação</h4>
            <ul className="footer__nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="footer__nav-link"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="footer__contact-col">
            <h4 className="footer__col-title">Contato Direto</h4>
            <ul className="footer__contact-list">
              <li>
                <a 
                  href={siteConfig.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label="WhatsApp da arquiteta Monica Almeida"
                >
                  <MessageCircle size={18} className="footer__link-icon" />
                  <span>{siteConfig.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a 
                  href={siteConfig.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label="Instagram da arquiteta Monica Almeida"
                >
                  <InstagramIcon size={18} className="footer__link-icon" />
                  <span>{siteConfig.instagramHandle}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Back to top button */}
          <div className="footer__back-top-col">
            <button 
              onClick={scrollToTop} 
              className="footer__back-top-btn"
              aria-label="Voltar ao início da página"
            >
              <ArrowUp size={20} />
              <span>Voltar ao topo</span>
            </button>
          </div>
        </div>

        {/* Bottom Footer with Demonstrative Notice */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {siteConfig.currentYear} {siteConfig.fullName}. Todos os direitos reservados.
          </p>

          <p className="footer__notice">
            {siteConfig.demonstrativeNotice}
          </p>
        </div>
      </div>
    </footer>
  );
}
