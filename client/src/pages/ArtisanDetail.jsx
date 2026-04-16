import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ArtisanDetail() {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    objet: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState(null);

  useEffect(() => {
    const fetchArtisan = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/artisans/${id}`);
        setArtisan(response.data);
      } catch (error) {
        console.error('Erreur fetching artisan:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchArtisan();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('loading');
    try {
      await axios.post(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/artisans/contact`, formData);
      setFormStatus('success');
      setFormData({ nom: '', email: '', objet: '', message: '' });
    } catch (error) {
      setFormStatus('error');
    }
  };

  const renderStars = (note) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i key={i} className={`bi bi-star${i <= Math.floor(note) ? '-fill' : ''} text-warning fs-5`}></i>
      );
    }
    return stars;
  };

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Chargement...</span>
        </div>
      </div>
    );
  }

  if (!artisan) {
    return (
      <div className="container py-5 text-center">
        <h2 className="text-muted">Artisan non trouvé</h2>
      </div>
    );
  }

  const categorySlug = artisan.specialite?.categorie?.slug || 'default';
  const imageUrl = `/img/artisans/${categorySlug}.png`;

  return (
    <div className="container py-5">
      <title>{artisan.nom} - {artisan.specialite?.nom} à {artisan.localisation}</title>
      <meta name="description" content={`Consultez le profil de ${artisan.nom}, artisan ${artisan.specialite?.nom} à ${artisan.localisation}. Consultez ses avis et contactez-le directement.`} />
      
      <div className="row g-5">
        <div className="col-lg-7">
          <div className="card border-0 shadow-sm overflow-hidden mb-4 rounded-4">
            <img 
              src={imageUrl} 
              alt={artisan.nom} 
              className="w-100" 
              style={{ maxHeight: '400px', objectFit: 'cover' }}
              onError={(e) => { e.target.src = 'https://via.placeholder.com/800x400?text=Trouve+ton+artisan'; }}
            />
            <div className="card-body p-4">
              <div className="d-flex flex-wrap align-items-center mb-4 gap-3">
                <h1 className="fw-bold mb-0">{artisan.nom}</h1>
                <div className="d-flex align-items-center bg-light px-3 py-1 rounded-pill">
                  {renderStars(artisan.note)}
                  <span className="ms-2 fw-bold text-dark">{artisan.note}/5</span>
                </div>
              </div>

              <div className="row mb-5 g-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center p-3 bg-light rounded-3 h-100">
                    <div className="bg-primary text-white rounded-circle p-3 me-3">
                      <i className="bi bi-briefcase fs-4"></i>
                    </div>
                    <div>
                      <h6 className="text-muted mb-0 small uppercase fw-bold">Spécialité</h6>
                      <p className="fw-bold mb-0 fs-5">{artisan.specialite?.nom}</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center p-3 bg-light rounded-3 h-100">
                    <div className="bg-danger text-white rounded-circle p-3 me-3">
                      <i className="bi bi-geo-alt fs-4"></i>
                    </div>
                    <div>
                      <h6 className="text-muted mb-0 small uppercase fw-bold">Localisation</h6>
                      <p className="fw-bold mb-0 fs-5">{artisan.localisation}</p>
                    </div>
                  </div>
                </div>
              </div>

              {artisan.site_web && (
                <div className="mb-5">
                  <h6 className="text-muted mb-3 small uppercase fw-bold">Site internet officiel</h6>
                  <a href={artisan.site_web} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary px-4 py-2 rounded-pill fw-bold">
                    <i className="bi bi-globe me-2"></i>
                    Consulter le site web
                  </a>
                </div>
              )}

              <div className="mt-2">
                <h2 className="h4 fw-bold mb-4 border-start border-primary border-4 ps-3">À propos de l'artisan</h2>
                <div className="text-secondary fs-5" style={{ whiteSpace: 'pre-wrap', lineHeight: '1.8' }}>
                  {artisan.apropos || "Cet artisan n'a pas encore renseigné de description détaillée."}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="card border-0 shadow-lg sticky-top rounded-4 border-top border-primary border-5" style={{ top: '100px', zIndex: 10 }}>
            <div className="card-body p-4 p-xl-5">
              <h2 className="h4 fw-bold mb-4 text-center">Envoyer un message</h2>
              <p className="text-muted text-center small mb-4">Une question sur une prestation ? Besoin d'un devis ? Remplissez le formulaire ci-dessous.</p>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="nom" className="form-label small fw-bold text-muted uppercase">Votre nom complet</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0"><i className="bi bi-person"></i></span>
                    <input
                      type="text"
                      className="form-control bg-light border-start-0"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      placeholder="Jean Dupont"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label small fw-bold text-muted uppercase">Adresse E-mail</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0"><i className="bi bi-envelope"></i></span>
                    <input
                      type="email"
                      className="form-control bg-light border-start-0"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jean.dupont@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="objet" className="form-label small fw-bold text-muted uppercase">Objet de la demande</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0"><i className="bi bi-chat-dots"></i></span>
                    <input
                      type="text"
                      className="form-control bg-light border-start-0"
                      id="objet"
                      name="objet"
                      value={formData.objet}
                      onChange={handleChange}
                      placeholder="Ex: Demande de tarifs"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="form-label small fw-bold text-muted uppercase">Votre message</label>
                  <textarea
                    className="form-control bg-light"
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Précisez votre demande ici..."
                    required
                  />
                </div>

                {formStatus === 'success' && (
                  <div className="alert alert-success d-flex align-items-center shadow-sm mb-4 animate__animated animate__fadeIn" role="alert">
                    <i className="bi bi-check-circle-fill me-3 fs-3"></i>
                    <div>
                      <strong>Succès !</strong> Votre message a été transmis. Une réponse vous parviendra sous 48h.
                    </div>
                  </div>
                )}
                {formStatus === 'error' && (
                  <div className="alert alert-danger mb-4 shadow-sm" role="alert">
                    <i className="bi bi-exclamation-triangle-fill me-2"></i>
                    Échec de l'envoi. Veuillez vérifier vos informations.
                  </div>
                )}

                <button 
                  type="submit" 
                  className={`btn btn-primary w-100 py-3 rounded-pill fw-bold shadow ${formStatus === 'loading' ? 'disabled' : ''}`}
                >
                  {formStatus === 'loading' ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-send-fill me-2"></i>
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtisanDetail;
