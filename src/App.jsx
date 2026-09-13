import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import BankAccounts from './components/BankAccounts';
import FAQSection from './components/FAQSection';
import ContactFeedback from './components/ContactFeedback';
import Footer from './components/Footer';
import ClickToCallBar from './components/ClickToCallBar';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-brand-teal selection:text-white pb-14 lg:pb-0">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero />
        <ServicesSection />
        <WhyChooseUs />
        <BankAccounts />
        <FAQSection />
        <ContactFeedback />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Action Items for Mobile */}
      <ClickToCallBar />
    </div>
  );
}
