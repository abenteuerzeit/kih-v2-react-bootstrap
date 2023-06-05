import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import ArticlePage from './components/ArticlePage/ArticlePage';
import AuthorGuidelinesPage from './components/AuthorGuidelinesPage/AuthorGuidelinesPage';
import ContactPage from './components/ContactPage/ContactPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="App"> 
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles" element={<ArticlePage />} />
            <Route path="/author-guidelines" element={<AuthorGuidelinesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
