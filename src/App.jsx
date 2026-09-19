import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import FAQSection from './components/FAQSection';
import ContactFeedback from './components/ContactFeedback';
import Footer from './components/Footer';
import ClickToCallBar from './components/ClickToCallBar';
import RekeningPage from './pages/RekeningPage';

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#rekening' || hash === '#/rekening') {
        setCurrentView('rekening');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentView('home');
      }
    };

    // Check initial route on load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToHome = () => {
    window.location.hash = '#beranda';
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-brand-teal selection:text-white pb-14 lg:pb-0">
      {/* Navigation */}
      <Navbar currentView={currentView} />

      {/* Main Content */}
      <main className="flex-grow">
        {currentView === 'rekening' ? (
          <RekeningPage onNavigateHome={navigateToHome} />
        ) : (
          <>
            <Hero />
            <ServicesSection />
            <WhyChooseUs />
            <FAQSection />
            <ContactFeedback />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Action Items for Mobile */}
      <ClickToCallBar />
    </div>
  );
}
