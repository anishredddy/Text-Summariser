import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
/*import ThemeToggle from './components/ThemeToggle';*/
import React, { useState, useEffect } from 'react';

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
  };


  // Use useEffect to update the body tag when isDarkMode changes
  useEffect(() => {
    document.body.setAttribute('data-bs-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <>
      <NavBar title="Home" toggleTheme={toggleTheme}/>
      <div className="container">
        <TextForm />
      </div>
      {/*<About />/*}
      {/*<ThemeToggle toggleTheme={toggleTheme} />*/}
    </>
  );
}

export default App;
