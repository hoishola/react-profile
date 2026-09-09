// App.jsx
// The root component. Holds the dark/light theme state (useState) and
// assembles the portfolio sections in order.

import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Bio from './components/Bio';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {
  // 'dark' or 'light' — this value becomes a class on the wrapper div,
  // and index.css has a `.light` block that overrides the color variables.
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.documentElement.style.backgroundColor = theme === 'light' ? '#ffffff' : '#0f1115';
  }, [theme]);

  return (
    <div className={theme}>
      <div className="container">
        <Hero />
        <Bio />
        <TechStack />
        <Projects />
        <Contact />
        <Footer theme={theme} onToggleTheme={toggleTheme} />
      </div>
    </div>
  );
};

export default App;
