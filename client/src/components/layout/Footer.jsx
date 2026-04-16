import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-auto">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6">
            <h5 className="fw-bold mb-4 text-uppercase border-bottom border-primary border-2 pb-2 d-inline-block">Région Auvergne-Rhône-Alpes</h5>
            <address className="text-light opacity-75">
              <p className="mb-1"><i className="bi bi-geo-alt-fill me-2 text-primary"></i>101 cours Charlemagne</p>
              <p className="mb-1 ms-4">CS 20033</p>
              <p className="mb-1 ms-4">69269 LYON CEDEX 02</p>
              <p className="mb-3 ms-4">France</p>
              <p className="mb-0">
                <i className="bi bi-telephone-fill me-2 text-primary"></i>
                <a href="tel:+33426734000" className="text-light text-decoration-none" aria-label="Téléphone : +33 4 26 73 40 00">
                  +33 (0)4 26 73 40 00
                </a>
              </p>
            </address>
          </div>

          <div className="col-md-6">
            <h5 className="fw-bold mb-4 text-uppercase border-bottom border-primary border-2 pb-2 d-inline-block">Informations légales</h5>
            <nav aria-label="Menu des pages légales">
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/mentions-legales" className="text-light text-decoration-none opacity-75 hover-opacity-100 transition">
                    <i className="bi bi-chevron-right me-2 small"></i>Mentions légales
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/donnees-personnelles" className="text-light text-decoration-none opacity-75 hover-opacity-100 transition">
                    <i className="bi bi-chevron-right me-2 small"></i>Données personnelles
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/accessibilite" className="text-light text-decoration-none opacity-75 hover-opacity-100 transition">
                    <i className="bi bi-chevron-right me-2 small"></i>Accessibilité
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/cookies" className="text-light text-decoration-none opacity-75 hover-opacity-100 transition">
                    <i className="bi bi-chevron-right me-2 small"></i>Cookies
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <hr className="my-4 border-secondary opacity-25" />

        <div className="row">
          <div className="col text-center">
            <p className="small text-light opacity-50 mb-0">
              &copy; {new Date().getFullYear()} Région Auvergne-Rhône-Alpes — Trouve ton artisan. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
