import React from 'react';
import { finalCtaContent, siteConfig } from '../data/content';
import { BlurFade } from './magicui/BlurFade';
import { MessageCircle } from 'lucide-react';
import './ContactCta.css';

function InstagramIcon({ size = 18 }) {
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
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

export default function ContactCta() {
  return (
    <section id="contato" className="contact-cta">
      <div className="container contact-cta__container">
        <BlurFade inView blur="4px" duration={0.5} delay={0.05} className="contact-cta__card">
          <h2 className="contact-cta__title">{finalCtaContent.title}</h2>
          <p className="contact-cta__description">{finalCtaContent.description}</p>

          <div className="contact-cta__actions">
            <a 
              href={siteConfig.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary contact-cta__main-btn"
              aria-label="Falar com Monica Almeida no WhatsApp"
            >
              <MessageCircle size={20} />
              <span>{finalCtaContent.buttonText}</span>
            </a>

            <a 
              href={siteConfig.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary contact-cta__insta-btn"
              aria-label="Acompanhe Monica Almeida no Instagram"
            >
              <InstagramIcon size={18} />
              <span>{siteConfig.instagramHandle}</span>
            </a>
          </div>

          <div className="contact-cta__meta">
            <span>{siteConfig.location}</span>
            <span className="contact-cta__bullet">•</span>
            <span>{siteConfig.phoneDisplay}</span>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

