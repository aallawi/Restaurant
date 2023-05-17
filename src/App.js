import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Navbar } from './components';
import './App.css';

// import { HomePage, AboutPage, MenuPage, ContactPage, NotFound } from './Pages/index';
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage';
import MenuPage from './Pages/MenuPage/MenuPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import NotFound from './Pages/NotFound/NotFound';
 

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="AboutPage" element={<AboutPage />} />
      <Route path="MenuPage" element={<MenuPage />} />
      <Route path="ContactPage" element={<ContactPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);

export default App;
