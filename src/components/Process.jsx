import React from 'react';
import { processContent } from '../data/content';
import { BlurFade } from './magicui/BlurFade';
import './Process.css';

export default function Process() {
  return (
    <section id="atendimento" className="section process">
      <div className="container">
        {/* Header */}
        <BlurFade inView blur="4px" duration={0.5} delay={0.05} className="process__header">
          <span className="section-tagline">{processContent.tagline}</span>
          <h2 className="section-title process__title">{processContent.title}</h2>
        </BlurFade>

        {/* Steps Grid */}
        <div className="process__grid">
          {processContent.steps.map((step, idx) => (
            <BlurFade 
              key={step.number} 
              inView 
              blur="4px" 
              duration={0.45} 
              delay={0.08 + idx * 0.08}
              className="process-card"
            >
              <span className="process-card__number">{step.number}</span>
              <h3 className="process-card__title">{step.title}</h3>
              <p className="process-card__desc">{step.description}</p>
            </BlurFade>
          ))}
        </div>

        {/* Footnote / Disclaimer */}
        <BlurFade inView blur="4px" duration={0.45} delay={0.25} className="process__disclaimer">
          <p>{processContent.disclaimer}</p>
        </BlurFade>
      </div>
    </section>
  );
}

