import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { DemoSection } from './components/DemoSection';
import { BetaBenefits } from './components/BetaBenefits';
import { Pricing } from './components/Pricing';
import { PrivacyPolicySection } from './components/PrivacyPolicySection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-brand-200 selection:text-brand-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <DemoSection />
        <BetaBenefits />
        <Pricing />
        <PrivacyPolicySection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
