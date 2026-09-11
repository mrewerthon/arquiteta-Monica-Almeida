import React from 'react';
import { processContent } from '../data/content';
import './Process.css';

export default function Process() {
  return (
    <section id="atendimento" className="section process">
      <div className="container">
        {/* Header */}
        <div className="process__header">
          <span className="section-tagline">{processContent.tagline}</span>
          <h2 className="section-title process__title">{processContent.title}</h2>
        </div>

        {/* Steps Grid */}
        <div className="process__grid">
          {processContent.steps.map((step) => (
            <div key={step.number} className="process-card">
              <span className="process-card__number">{step.number}</span>
              <h3 className="process-card__title">{step.title}</h3>
              <p className="process-card__desc">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Footnote / Disclaimer */}
        <div className="process__disclaimer">
          <p>{processContent.disclaimer}</p>
        </div>
      </div>
    </section>
  );
}
