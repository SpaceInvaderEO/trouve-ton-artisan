import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArtisanCard from '../components/ArtisanCard';

function Home() {
  const [artisansDuMois, setArtisansDuMois] = useState([]);

  useEffect(() => {
    const fetchTopArtisans = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/artisans/top`);
        setArtisansDuMois(response.data);
      } catch (error) {
        console.error('Erreur fetching top artisans:', error);
      }
    };
    fetchTopArtisans();
  }, []);

  return (
    <>
      <title>Trouve ton artisan - Auvergne-Rhône-Alpes</title>
      <meta name="description" content="Découvrez les meilleurs artisans de la région Auvergne-Rhône-Alpes. Trouvez un boucher, boulanger, menuisier ou électricien proche de chez vous." />
      
      <section className="bg-light py-5 shadow-sm mb-5" aria-labelledby="steps-title">
        <div className="container">
          <h1 id="steps-title" className="text-center mb-5 fw-bold text-primary">
            Comment trouver mon artisan ?
          </h1>
          <div className="row justify-content-center g-4">
            {[
              { num: 1, text: "Choisir la catégorie d'artisanat dans le menu." },
              { num: 2, text: "Choisir un artisan." },
              { num: 3, text: "Le contacter via le formulaire de contact." },
              { num: 4, text: "Une réponse sera apportée sous 48h." },
            ].map((step) => (
              <div className="col-sm-6 col-lg-3" key={step.num}>
                <div className="card h-100 text-center border-0 shadow-sm p-4">
                  <div className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle mx-auto mb-3" style={{ width: '50px', height: '50px', fontSize: '1.5rem', fontWeight: 'bold' }}>
                    {step.num}
                  </div>
                  <p className="mb-0 fw-semibold">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5" aria-labelledby="featured-title">
        <div className="container">
          <h2 id="featured-title" className="text-center mb-5 fw-bold">
            Les artisans du mois
          </h2>
          <div className="row justify-content-center g-4">
            {artisansDuMois.length === 0 ? (
              <div className="col-12 text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Chargement...</span>
                </div>
              </div>
            ) : (
              artisansDuMois.map((artisan) => (
                <div className="col-sm-6 col-lg-4" key={artisan.id}>
                  <ArtisanCard artisan={artisan} />
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
