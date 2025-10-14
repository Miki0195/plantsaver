import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import References from './pages/References';
import About from './pages/About';
import WhyUs from './pages/WhyUs';
import Contact from './pages/Contact';

// SEO Component
const SEO: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const path = location.pathname;
    let titleKey = 'seo.home.title';
    let descKey = 'seo.home.description';

    switch (path) {
      case '/services':
        titleKey = 'seo.services.title';
        descKey = 'seo.services.description';
        break;
      case '/references':
        titleKey = 'seo.references.title';
        descKey = 'seo.references.description';
        break;
      case '/about':
        titleKey = 'seo.about.title';
        descKey = 'seo.about.description';
        break;
      case '/why-us':
      case '/contact':
        titleKey = 'seo.contact.title';
        descKey = 'seo.contact.description';
        break;
    }

    document.title = t(titleKey);
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t(descKey));
    }

    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location, t]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <SEO />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="references" element={<References />} />
          <Route path="about" element={<About />} />
          <Route path="why-us" element={<WhyUs />} />
          <Route path="contact" element={<Contact />} />
          {/* Add privacy and terms pages if needed */}
          <Route path="privacy" element={<div className="min-h-screen pt-24 pb-20 container mx-auto px-4"><h1 className="text-4xl font-bold">Adatvédelmi Nyilatkozat</h1></div>} />
          <Route path="terms" element={<div className="min-h-screen pt-24 pb-20 container mx-auto px-4"><h1 className="text-4xl font-bold">Általános Szerződési Feltételek</h1></div>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

