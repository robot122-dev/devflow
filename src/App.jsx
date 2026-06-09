import { useState } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/CookieBanner';
import PrivacyModal from "./components/PrivacyModal";

import './lib/lenis';

function App() {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  return (
    <>
      <Header />
      <Hero />
      <Features />
      <About />
      <Contacts />
      <Footer />
      <ScrollToTop />
      <CookieBanner
        openPolicy={() => setPrivacyModalOpen(true)}
      />
      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </>
  );
}

export default App;