import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer mt-auto py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3">
            <h2 className="h5 fw-bold mb-3">Région Auvergne-Rhône-Alpes</h2>
            <address>
              <p className="mb-1">101 cours Charlemagne</p>
              <p className="mb-1">CS 20033</p>
              <p className="mb-1">69269 LYON CEDEX 02</p>
              <p className="mb-1">France</p>
              <p className="mb-0">
                <a href="tel:+33426734000" aria-label="Téléphone : +33 4 26 73 40 00">
                  +33 (0)4 26 73 40 00
                </a>
              </p>
            </address>
          </div>

          <div className="col-md-6 mb-3">
            <h3 className="h5 fw-bold mb-3">Informations légales</h3>
            <nav aria-label="Menu des pages légales">
              <ul className="list-unstyled">
                <li><Link to="/mentions-legales">Mentions légales</Link></li>
                <li><Link to="/donnees-personnelles">Données personnelles</Link></li>
                <li><Link to="/accessibilite">Accessibilité</Link></li>
                <li><Link to="/cookies">Cookies</Link></li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col text-center">
            <small>
              &copy; {new Date().getFullYear()} Région Auvergne-Rhône-Alpes — Trouve ton artisan
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
