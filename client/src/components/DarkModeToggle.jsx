import React, { useState, useEffect } from 'react';
import '../App.css';

const DarkModeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleDarkMode = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="dark-mode-toggle-container">
      <label className="switch">
        <input type="checkbox" checked={theme === 'dark'} onChange={toggleDarkMode} />
        <span className="slider"></span>
        <div>
          <h6>Dark Mode</h6>
        </div>
      </label>
    </div>
  );
};

export default DarkModeToggle;
