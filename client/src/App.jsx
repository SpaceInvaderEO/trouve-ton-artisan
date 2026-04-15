import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ArtisanList from './pages/ArtisanList';
import ArtisanDetail from './pages/ArtisanDetail';
import NotFound from './pages/NotFound';
import MentionsLegales from './pages/legal/MentionsLegales';
import DonneesPersonnelles from './pages/legal/DonneesPersonnelles';
import Accessibilite from './pages/legal/Accessibilite';
import Cookies from './pages/legal/Cookies';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import './styles/main.scss';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorie/:categorie" element={<ArtisanList />} />
          <Route path="/recherche" element={<ArtisanList />} />
          <Route path="/artisan/:id" element={<ArtisanDetail />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/donnees-personnelles" element={<DonneesPersonnelles />} />
          <Route path="/accessibilite" element={<Accessibilite />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
