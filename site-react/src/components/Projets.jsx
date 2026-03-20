import React from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

function Projets() {
    return (
        <>
            <div className="container-fluid" id="projets_experiences">
                <h1 id="titre_projets">MES RÉALISATIONS</h1>

                <div className="project-grid">
                    <a href="javascript:void(0)" className="project-card" data-bs-toggle="modal" data-bs-target="#modalArches">
                        <img src="/image/Arches-modified.webp" alt="Arches" loading="lazy" className="project-card-img" />
                        <div className="project-overlay">
                            <div className="project-info">
                                <span className="project-category">COMMUNICATION</span>
                                <h3>Audit Arches Papers</h3>
                            </div>
                            <i className="fa-solid fa-file-lines project-icon"></i>
                        </div>
                    </a>
                    <a href="javascript:void(0)" className="project-card" data-bs-toggle="modal" data-bs-target="#modalFilm">
                        <img src="/image/la_derniere_presence-modified.png" alt="Film" loading="lazy" className="project-card-img" />
                        <div className="project-overlay">
                            <div className="project-info">
                                <span className="project-category">AUDIOVISUEL</span>
                                <h3>La Dernière Présence</h3>
                            </div>
                            <i className="fa-solid fa-play project-icon"></i>
                        </div>
                    </a>
                    <a href="javascript:void(0)" className="project-card" data-bs-toggle="modal" data-bs-target="#modalBeGreen">
                        <img src="/image/affiche_ODD15-modified.png" alt="Be Green" loading="lazy" className="project-card-img" />
                        <div className="project-overlay">
                            <div className="project-info">
                                <span className="project-category">GESTION DE PROJET</span>
                                <h3>Be Green</h3>
                            </div>
                            <i className="fa-solid fa-leaf project-icon"></i>
                        </div>
                    </a>
                </div>

                <div className="see-more-container">
                    <Link to="/projets" className="btn-see-more">
                        VOIR TOUTES MES RÉALISATIONS <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                </div>

            </div>

            {createPortal(
                <>
                    {/* Modal Arches */}
                    <div className="modal fade" id="modalArches">
                        <div className="modal-dialog modal-dialog-centered modal-lg">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h4 className="modal-title">Audit Arches Papers</h4>
                                    <button type="button" className="btn-close-custom" data-bs-dismiss="modal">
                                        <i className="fa-solid fa-xmark"></i>
                                    </button>
                                </div>

                                <div className="modal-body">
                                    <h5>Le Concept</h5>
                                    <p>
                                        Analyse stratégique de l'image de marque de l'entreprise Arches Papers. 
                                        Étude de la communication existante et propositions d'amélioration pour les supports print et digitaux.
                                    </p>

                                    <h5>Compétences & Outils</h5>
                                    <div className="d-flex flex-wrap">
                                        <span className="tech-tag">Audit Stratégique</span>
                                        <span className="tech-tag">Communication</span>
                                        <span className="tech-tag">Marketing</span>
                                        <span className="tech-tag">Analyse</span>
                                    </div>

                                    <div className="text-center d-flex flex-wrap justify-content-center gap-2">
                                        <a href="/image/pdf/Doc_ArchesPapers.pdf" target="_blank" rel="noopener noreferrer" className="btn-modal-action">
                                            Ouvrir le document <i className="fa-solid fa-file-pdf ms-2"></i>
                                        </a>
                                        <a href="/image/pdf/Diapo_ArchesPapers.pdf" target="_blank" rel="noopener noreferrer" className="btn-modal-action">
                                            Voir le diaporama <i className="fa-solid fa-file-powerpoint ms-2"></i>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Modal Film */}
                    <div className="modal fade" id="modalFilm">
                        <div className="modal-dialog modal-dialog-centered modal-lg">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h4 className="modal-title">La Dernière Présence</h4>
                                    <button type="button" className="btn-close-custom" data-bs-dismiss="modal">
                                        <i className="fa-solid fa-xmark"></i>
                                    </button>
                                </div>

                                <div className="modal-body">
                                    <h5>Le Pitch</h5>
                                    <p>
                                        Court métrage étudiant réalisé de A à Z : scénarisation, tournage au Sony A7 III, montage et colorimétrie sous DaVinci Resolve. Narration visuelle atmosphérique sans dialogue.
                                    </p>

                                    <h5>Compétences</h5>
                                    <div className="d-flex flex-wrap">
                                        <span className="tech-tag">Scénarisation</span>
                                        <span className="tech-tag">Réalisation</span>
                                        <span className="tech-tag">DaVinci Resolve</span>
                                        <span className="tech-tag">Montage & Vidéo</span>
                                    </div>

                                    <div className="text-center">
                                        <a href="https://youtu.be/kK0-WsOrHQs" target="_blank" rel="noopener noreferrer" className="btn-modal-action">
                                            Regarder la vidéo <i className="fa-solid fa-play ms-2"></i>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Modal Be Green */}
                    <div className="modal fade" id="modalBeGreen">
                        <div className="modal-dialog modal-dialog-centered modal-lg">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h4 className="modal-title">Be Green</h4>
                                    <button type="button" className="btn-close-custom" data-bs-dismiss="modal">
                                        <i className="fa-solid fa-xmark"></i>
                                    </button>
                                </div>

                                <div className="modal-body">
                                    <h5>Le Concept</h5>
                                    <p>
                                        Campagne de sensibilisation à l'éco-conception (ODD 15). 
                                        Projet mené en agence avec cahier des charges, gestion de projet agile (Scrum) et création de supports de communication durables.
                                    </p>

                                    <h5>Compétences & Outils</h5>
                                    <div className="d-flex flex-wrap">
                                        <span className="tech-tag">Eco-conception</span>
                                        <span className="tech-tag">Gestion de Projet</span>
                                        <span className="tech-tag">Agile (Scrum)</span>
                                        <span className="tech-tag">Design Durable</span>
                                    </div>

                                    <div className="text-center d-flex flex-wrap justify-content-center gap-2">
                                        <a href="/image/affiche_ODD15.png" target="_blank" rel="noopener noreferrer" className="btn-modal-action">
                                            Voir l'affiche <i className="fa-solid fa-image ms-2"></i>
                                        </a>
                                        <a href="/image/pdf/Cahier_des_charges.pdf" target="_blank" rel="noopener noreferrer" className="btn-modal-action">
                                            Cahier des charges <i className="fa-solid fa-file-invoice ms-2"></i>
                                        </a>
                                        <a href="/image/pdf/Resume_projet.pdf" target="_blank" rel="noopener noreferrer" className="btn-modal-action">
                                            Résumé du projet <i className="fa-solid fa-file-lines ms-2"></i>
                                        </a>
                                        <a href="/image/pdf/Fiche_etat-des-lieux.pdf" target="_blank" rel="noopener noreferrer" className="btn-modal-action">
                                            Fiche état des lieux <i className="fa-solid fa-clipboard-list ms-2"></i>
                                        </a>
                                        <a href="/image/pdf/Fiche_idee.pdf" target="_blank" rel="noopener noreferrer" className="btn-modal-action">
                                            Fiche idée <i className="fa-solid fa-lightbulb ms-2"></i>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </>, document.body
            )}
        </>
    );
}

export default Projets;
