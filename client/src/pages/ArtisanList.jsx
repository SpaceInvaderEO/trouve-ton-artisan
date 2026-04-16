import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import ArtisanCard from '../components/ArtisanCard';

function ArtisanList() {
  const { categorie } = useParams();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtisans = async () => {
      setLoading(true);
      try {
        let url = `${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/artisans`;
        if (query) {
          url = `${url}/search?q=${encodeURIComponent(query)}`;
        } else if (categorie) {
          url = `${url}/categorie/${categorie}`;
        }
        const response = await axios.get(url);
        setArtisans(response.data);
      } catch (error) {
        console.error('Erreur fetching artisans:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchArtisans();
  }, [categorie, query]);

  const titre = query
    ? `Résultats pour "${query}"`
    : categorie 
      ? `Artisans : ${categorie.charAt(0).toUpperCase() + categorie.slice(1)}`
      : "Tous les artisans";

  return (
    <div className="container py-5">
      <title>{titre} | Trouve ton artisan</title>
      <meta name="description" content={`Découvrez la liste des artisans ${query ? `pour la recherche "${query}"` : `dans la catégorie ${categorie}`} en région Auvergne-Rhône-Alpes.`} />
      
      <h1 className="mb-5 fw-bold text-dark border-start border-primary border-5 ps-3">{titre}</h1>
      
      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Chargement...</span>
          </div>
        </div>
      ) : (
        <div className="row g-4">
          {artisans.length === 0 ? (
            <div className="col-12 text-center py-5">
              <i className="bi bi-search fs-1 text-muted mb-3 d-block"></i>
              <p className="text-muted fs-5">Aucun artisan ne correspond à votre recherche.</p>
            </div>
          ) : (
            artisans.map((artisan) => (
              <div className="col-sm-6 col-lg-4" key={artisan.id}>
                <ArtisanCard artisan={artisan} />
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default ArtisanList;
