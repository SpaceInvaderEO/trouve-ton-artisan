import React from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';

function ArtisanList() {
  const { categorie } = useParams();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  const artisans = [];

  const titre = query
    ? `Résultats pour "${query}"`
    : `Artisans - ${categorie?.charAt(0).toUpperCase() + categorie?.slice(1)}`;

  return (
    <>
      <title>{titre} | Trouve ton artisan</title>
      <meta
        name="description"
        content={`Liste des artisans ${query ? `pour la recherche "${query}"` : `dans la catégorie ${categorie}`} en Auvergne-Rhône-Alpes.`}
      />

      <section className="section-list py-5">
        <div className="container">
          <h1 className="mb-5">{titre}</h1>
          <div className="row g-4">
            {artisans.length === 0 ? (
              <p className="text-muted">Aucun artisan trouvé.</p>
            ) : (
              artisans.map((artisan) => (
                <div className="col-sm-6 col-lg-4" key={artisan.id}>
                  <Link to={`/artisan/${artisan.id}`}>
                    <p>{artisan.nom}</p>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default ArtisanList;
