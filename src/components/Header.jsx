import React, { useState, useEffect } from 'react';
import { siteConfig, navLinks } from '../data/content';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__container">
        {/* Brand Logo / Text */}
        <a href="#inicio" className="header__brand" onClick={(e) => handleNavClick(e, '#inicio')}>
          <span className="header__brand-name">{siteConfig.brandName}</span>
          <span className="header__brand-subtitle">{siteConfig.brandSubtitle}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="header__nav" aria-label="Navegação principal">
          <ul className="header__nav-list">
            {navLinks.map((link) => (
              <li key={link.href} className="header__nav-item">
                <a 
                  href={link.href} 
                  className="header__nav-link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="header__cta-wrapper">
          <a 
            href={siteConfig.whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary header__cta-btn"
            aria-label="Fale com a Monica no WhatsApp"
          >
            <span>Fale com a Monica</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="header__hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`header__drawer ${mobileMenuOpen ? 'header__drawer--open' : ''}`}>
        <div className="header__drawer-content">
          <div className="header__drawer-header">
            <div className="header__brand">
              <span className="header__brand-name">{siteConfig.brandName}</span>
              <span className="header__brand-subtitle">{siteConfig.brandSubtitle}</span>
            </div>
          </div>
          
          <nav className="header__drawer-nav" aria-label="Navegação mobile">
            <ul className="header__drawer-list">
              {navLinks.map((link) => (
                <li key={link.href} className="header__drawer-item">
                  <a 
                    href={link.href} 
                    className="header__drawer-link"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__drawer-footer">
            <a 
              href={siteConfig.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary header__drawer-whatsapp-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              <MessageCircle size={18} />
              <span>Falar no WhatsApp</span>
            </a>
            <div className="header__drawer-location">
              <p>{siteConfig.location} • {siteConfig.experience}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
