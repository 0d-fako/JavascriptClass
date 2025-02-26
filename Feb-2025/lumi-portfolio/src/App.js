import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
