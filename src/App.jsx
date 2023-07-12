import './App.css';
import { Navbar } from './components';
import sections from './assets/sections';
import { useState } from 'react';

function App() {
  const [currSection, setCurrSection] = useState(sections[0]);

  return (
    <>
      <Navbar
        sections={sections}
        currSection={currSection}
        setCurrSection={setCurrSection}
      />
      <p>Current section: {currSection.name}</p>
    </>
  );
}

export default App;
