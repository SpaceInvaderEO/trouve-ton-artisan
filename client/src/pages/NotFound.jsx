import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container py-5 text-center">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <img 
            src="/img/404.png" 
            alt="Page non trouvée" 
            className="img-fluid rounded-4 shadow-lg mb-5" 
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
          <h1 className="display-4 fw-bold text-primary mb-3">Oups ! 404</h1>
          <h2 className="h4 text-dark mb-4">La page que vous cherchez n'existe pas.</h2>
          <p className="text-secondary mb-5 fs-5">
            Il semble que l'artisan que vous recherchez ait changé d'atelier ou que l'adresse soit incorrecte.
          </p>
          <Link to="/" className="btn btn-primary btn-lg rounded-pill px-5 fw-bold shadow-sm">
            <i className="bi bi-house-door me-2"></i>
            Retourner à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
