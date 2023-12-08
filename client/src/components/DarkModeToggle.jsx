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
        <button 
            onClick={toggleDarkMode} 
        >
            Toggle Dark Mode
        </button>
    );
};

export default DarkModeToggle;