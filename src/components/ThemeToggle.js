import React from 'react';

function ThemeToggle({ isDarkMode, toggleTheme }) {
  
  return (
    <button className="btn btn-primary" onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
}

export default ThemeToggle;
