import React, { useState } from 'react';
import Background from './components/Background';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Preloader from './components/Preloader';
import DarkModeToggle from './components/DarkModeToggle';
import CustomCursor from './components/CustomCursor';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Preloader onComplete={() => setLoading(false)} />
      <CustomCursor />
      <DarkModeToggle />
      
      {!loading && (
        <div className="relative text-gray-900 selection:bg-gray-300">
          <Background />
          <NavBar />
          
          <main className="flex flex-col w-full">
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
        </div>
      )}
    </>
  );
}

export default App;
