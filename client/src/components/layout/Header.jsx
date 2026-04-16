import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Header() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/categories`);
        setCategories(response.data);
      } catch (error) {
        console.error('Erreur fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value.trim();
    if (query) {
      navigate(`/recherche?q=${encodeURIComponent(query)}`);
      e.target.reset();
    }
  };

  return (
    <header className="sticky-top bg-white border-bottom shadow-sm">
      <nav className="navbar navbar-expand-lg py-3">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/" aria-label="Trouve ton artisan - Accueil">
            <img src="/logo.png" alt="Logo" height="50" className="me-2" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMain"
            aria-controls="navbarMain"
            aria-expanded="false"
            aria-label="Ouvrir le menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {categories.map((cat) => (
                <li className="nav-item" key={cat.id}>
                  <NavLink
                    className={({ isActive }) => `nav-link px-3 ${isActive ? 'active text-primary fw-bold' : ''}`}
                    to={`/categorie/${cat.slug}`}
                  >
                    {cat.nom}
                  </NavLink>
                </li>
              ))}
            </ul>

            <form className="d-flex position-relative" role="search" onSubmit={handleSearch}>
              <input
                className="form-control rounded-pill ps-4 pe-5"
                type="search"
                name="search"
                placeholder="Rechercher par nom..."
                aria-label="Rechercher un artisan"
                style={{ width: '250px' }}
              />
              <button className="btn btn-primary rounded-circle position-absolute end-0 top-0 h-100" type="submit" style={{ borderRadius: '0 50px 50px 0' }}>
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
