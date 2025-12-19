import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Sobre from './components/Sobre/Sobre';
import N8n from './components/N8n/N8n';
import Projetos from './components/Projetos/Projetos';
import Contato from './components/Contato/Contato';
import CursorGlow from './components/CursorGlow/CursorGlow';

function App() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <N8n />
        <Projetos />
        <Contato />
      </main>
    </>
  );
}

export default App;