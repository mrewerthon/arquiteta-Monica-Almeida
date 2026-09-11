import React from 'react';
import { aboutContent, siteConfig } from '../data/content';
import { BlurFade } from './magicui/BlurFade';
import './About.css';

export default function About() {
  return (
    <section id="sobre" className="section about">
      <div className="container">
        <div className="about__layout">
          {/* Architectural Detail / Editorial Focus */}
          <BlurFade inView blur="4px" duration={0.5} delay={0.05} className="about__visual">
            <div className="about__image-frame">
              <img 
                src={aboutContent.architecturalDetailImage} 
                alt={aboutContent.architecturalDetailAlt}
                className="about__image"
                loading="lazy"
              />
            </div>
            <div className="about__quote-card">
              <p className="about__quote-text">
                “Cada escolha, da distribuição dos ambientes à iluminação, é pensada para acolher e fazer sentido.”
              </p>
              <span className="about__quote-author">{siteConfig.professionalName}</span>
            </div>
          </BlurFade>

          {/* Narrative Column */}
          <BlurFade inView blur="4px" duration={0.5} delay={0.12} className="about__content">
            <span className="section-tagline">{aboutContent.tagline}</span>
            <h2 className="section-title about__title">{aboutContent.title}</h2>

            <div className="about__bio">
              {aboutContent.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="about__paragraph">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Signature Block */}
            <div className="about__signature-block">
              <span className="about__signature-name">{siteConfig.professionalName}</span>
              <span className="about__signature-role">{siteConfig.role}</span>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}

