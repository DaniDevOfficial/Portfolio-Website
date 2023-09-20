import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Homepage from './Homepage';
import Aboutme from './AboutMe';
import Navbar from '../Components/Navbar';
import { Projects } from './Projects'; 
import { Footer } from '../Components/Footer';
import { PrivacyPolicy } from './PrivacyPolicy';

export function WrapperPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/AboutMe" element={<Aboutme />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </div>
  );
}
