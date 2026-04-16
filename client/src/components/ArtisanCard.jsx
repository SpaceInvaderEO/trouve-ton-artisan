import React from 'react';
import { Link } from 'react-router-dom';

const ArtisanCard = ({ artisan }) => {
  const categorySlug = artisan.specialite?.categorie?.slug || 'default';
  const imageUrl = `/img/artisans/${categorySlug}.png`;

  const renderStars = (note) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className={`bi bi-star${i <= Math.floor(note) ? '-fill' : ''} text-warning`}
        ></i>
      );
    }
    return stars;
  };

  return (
    <div className="card h-100 artisan-card shadow-sm border-0 overflow-hidden">
      <img 
        src={imageUrl} 
        className="card-img-top" 
        alt={artisan.nom} 
        style={{ height: '200px', objectFit: 'cover' }}
        onError={(e) => { e.target.src = 'https://via.placeholder.com/400x200?text=Trouve+ton+artisan'; }}
      />
      <div className="card-body">
        <h5 className="card-title fw-bold text-primary">{artisan.nom}</h5>
        <div className="mb-2">
          {renderStars(artisan.note)}
          <span className="ms-2 text-muted small">({artisan.note}/5)</span>
        </div>
        <p className="card-text mb-1 text-dark">
          <i className="bi bi-briefcase me-2 text-primary"></i>
          {artisan.specialite?.nom}
        </p>
        <p className="card-text text-muted small">
          <i className="bi bi-geo-alt me-2 text-danger"></i>
          {artisan.localisation}
        </p>
        <Link to={`/artisan/${artisan.id}`} className="btn btn-primary w-100 mt-3 rounded-pill fw-bold">
          Voir la fiche
        </Link>
      </div>
    </div>
  );
};

export default ArtisanCard;
