import React from 'react';

function Home() {
  const artisansDuMois = [];

  return (
    <>
      <title>Trouve ton artisan - Auvergne-Rhône-Alpes</title>
      <meta
        name="description"
        content="Trouvez facilement un artisan en Auvergne-Rhône-Alpes. Bâtiment, services, fabrication, alimentation."
      />

      <section className="section-steps py-5" aria-labelledby="steps-title">
        <div className="container">
          <h1 id="steps-title" className="text-center mb-5">
            Comment trouver mon artisan ?
          </h1>
          <div className="row justify-content-center g-4">
            <div className="col-sm-6 col-lg-3">
              <div className="step-card text-center p-4">
                <div className="step-number">1</div>
                <p className="step-text mt-3">Choisir la catégorie d'artisanat dans le menu.</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="step-card text-center p-4">
                <div className="step-number">2</div>
                <p className="step-text mt-3">Choisir un artisan.</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="step-card text-center p-4">
                <div className="step-number">3</div>
                <p className="step-text mt-3">Le contacter via le formulaire de contact.</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="step-card text-center p-4">
                <div className="step-number">4</div>
                <p className="step-text mt-3">Une réponse sera apportée sous 48h.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-featured py-5" aria-labelledby="featured-title">
        <div className="container">
          <h2 id="featured-title" className="text-center mb-5">
            Les artisans du mois
          </h2>
          <div className="row justify-content-center g-4">
            {artisansDuMois.length === 0 ? (
              <p className="text-center text-muted">Chargement des artisans...</p>
            ) : (
              artisansDuMois.map((artisan) => (
                <div className="col-sm-6 col-lg-4" key={artisan.id}>
                  <p>{artisan.nom}</p>
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
