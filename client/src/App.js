import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ArticlePage from './components/ArticlePage';
import AuthorGuidelinesPage from './components/AuthorGuidelinesPage';
import ContactPage from './components/ContactPage';
import ArchivesPage from './components/ArchivesPage'; // import ArchivesPage
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeContext } from './components/ThemeContext';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(window.matchMedia(" (prefers-color-scheme: dark)").matches);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("data-bs-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-bs-theme", "light");
    }
  }, [darkMode]);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider
      value={{ darkMode, toggleDarkMode: handleDarkModeToggle }}
    >
      <Router>
        <Header />
        <div className="App"> 
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/articles" element={<ArticlePage />} />
              <Route path="/author-guidelines" element={<AuthorGuidelinesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/archives" element={<ArchivesPage />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
