import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Concept from './components/Concept';
import Process from './components/Process';
import ContactCta from './components/ContactCta';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';
import './App.css';

function App() {
  return (
    <div className="app-layout">
      {/* Top Header */}
      <Header />

      {/* Main Content */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Sobre / Apresentação */}
        <About />

        {/* 3. Serviços */}
        <Services />

        {/* 4. Portfólio / Projetos Selecionados */}
        <Portfolio />

        {/* 5. Diferencial & Conceito */}
        <Concept />

        {/* 6. Processo de Atendimento */}
        <Process />

        {/* 7. Chamada Final */}
        <ContactCta />
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Conversion Floating Action */}
      <WhatsAppFloating />
    </div>
  );
}

export default App;
