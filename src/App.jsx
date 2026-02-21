import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Company from './components/Company';
import Services from './components/Services';
import Suppliers from './components/Suppliers';
import Quote from './components/Quote';
import Footer from './components/Footer';



function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      <Company />
      <Services />
      <Suppliers />
      <Quote />
      <Footer />
    </div>
  );
}

export default App;
