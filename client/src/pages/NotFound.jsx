import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <title>Page non trouvée | Trouve ton artisan</title>
      <meta name="description" content="La page que vous recherchez n'existe pas." />

      <section className="section-404 py-5 text-center">
        <div className="container">
          <h1 className="display-1 fw-bold">404</h1>
          <h2 className="h3 mb-4">Page non trouvée</h2>
          <p className="text-muted mb-5">
            La page que vous avez demandée n'existe pas ou a été déplacée.
          </p>
          <Link to="/" className="btn btn-primary btn-lg">
            Retourner à l'accueil
          </Link>
        </div>
      </section>
    </>
  );
}

export default NotFound;
