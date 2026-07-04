import { useState } from 'react';
import AccessGate from './components/AccessGate';
import Hero from './components/Hero';
import StoryLayout from './components/StoryLayout';
import Process from './components/Process';
import FamilyTree from './components/FamilyTree';
import Downloads from './components/Downloads';
import InteractiveMindMap from './components/InteractiveMindMap';
import Quiz from './components/Quiz';
import FullVersion from './components/FullVersion';
import Contact from './components/Contact';

function App() {
  const [isUnlocked, setIsUnlocked] = useState(() => {
    return localStorage.getItem('marie-claude-access') === 'granted';
  });

  return (
    <div className="font-sans antialiased text-dark-green bg-white">
      {!isUnlocked && <AccessGate onUnlock={() => setIsUnlocked(true)} />}

      <div
        className={`transition-opacity duration-1000 ${
          isUnlocked ? 'opacity-100 h-auto' : 'opacity-0 h-0 overflow-hidden'
        }`}
      >
        <Hero />
        <StoryLayout />
        <Process />
        <FamilyTree />
        <Downloads />
        <InteractiveMindMap />
        <Quiz />
        <FullVersion />
        <Contact />
      </div>
    </div>
  );
}

export default App;
