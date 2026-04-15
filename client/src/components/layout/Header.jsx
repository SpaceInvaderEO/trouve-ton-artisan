import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const categories = [
    { id: 1, nom: 'Bâtiment', slug: 'batiment' },
    { id: 2, nom: 'Services', slug: 'services' },
    { id: 3, nom: 'Fabrication', slug: 'fabrication' },
    { id: 4, nom: 'Alimentation', slug: 'alimentation' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value.trim();
    if (query) {
      navigate(`/recherche?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/" aria-label="Trouve ton artisan - Accueil">
            <span className="fw-bold">Trouve ton artisan</span>
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
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    to={`/categorie/${cat.slug}`}
                  >
                    {cat.nom}
                  </NavLink>
                </li>
              ))}
            </ul>

            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                name="search"
                placeholder="Rechercher un artisan..."
                aria-label="Rechercher un artisan"
              />
              <button className="btn btn-primary" type="submit">
                Rechercher
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
