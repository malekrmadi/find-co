import React from 'react';
import '../styles/global.css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import Map from '../components/Map';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Index: React.FC = () => {
  useScrollAnimation();

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Services />
        <WhyUs />
        <Process />
        <FAQ />
        <Map />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
