import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
