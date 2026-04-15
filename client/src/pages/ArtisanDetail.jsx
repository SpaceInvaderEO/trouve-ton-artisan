import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function ArtisanDetail() {
  const { id } = useParams();

  const artisan = null;

  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    objet: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setFormStatus('success');
    } catch (error) {
      setFormStatus('error');
    }
  };

  if (!artisan) {
    return (
      <div className="container py-5">
        <p className="text-muted">Chargement de la fiche artisan...</p>
      </div>
    );
  }

  return (
    <>
      <title>{artisan.nom} | Trouve ton artisan</title>
      <meta
        name="description"
        content={`Fiche de l'artisan ${artisan.nom}, spécialité : ${artisan.specialite}, situé à ${artisan.localisation}.`}
      />

      <section className="section-artisan py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-6">
              <h1>{artisan.nom}</h1>
              <p><strong>Spécialité :</strong> {artisan.specialite}</p>
              <p><strong>Localisation :</strong> {artisan.localisation}</p>
              <p><strong>Note :</strong> {artisan.note}/5</p>
              {artisan.siteWeb && (
                <p>
                  <strong>Site web :</strong>{' '}
                  <a href={artisan.siteWeb} target="_blank" rel="noopener noreferrer">
                    {artisan.siteWeb}
                  </a>
                </p>
              )}
              <div className="mt-4">
                <h2 className="h4">À propos</h2>
                <p>{artisan.apropos}</p>
              </div>
            </div>

            <div className="col-md-6">
              <h2 className="h4 mb-4">Contacter {artisan.nom}</h2>
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label htmlFor="nom" className="form-label">Votre nom *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Votre email *</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="objet" className="form-label">Objet *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="objet"
                    name="objet"
                    value={formData.objet}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {formStatus === 'success' && (
                  <div className="alert alert-success" role="alert">
                    Votre message a bien été envoyé. L'artisan vous répondra sous 48h.
                  </div>
                )}
                {formStatus === 'error' && (
                  <div className="alert alert-danger" role="alert">
                    Une erreur est survenue. Veuillez réessayer.
                  </div>
                )}

                <button type="submit" className="btn btn-primary w-100">
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ArtisanDetail;
