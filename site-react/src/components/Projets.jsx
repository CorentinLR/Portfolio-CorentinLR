import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

function Projets() {
    const [activeFilter, setActiveFilter] = useState('ALL');

    const projectsList = [
        {
            id: 'card_arches',
            modalId: '#modalArches',
            img: "image/Arches-modified.webp",
            alt: "Audit Arches Papers",
            category: "COMMUNICATION",
            catFilter: "COMMUNICATION",
            role: "Analyse & Stratégie de marque",
            title: "Audit Arches Papers",
            icon: "fa-file-lines"
        },
        {
            id: 'card_film',
            modalId: '#modalFilm',
            img: "image/la_derniere_presence-modified.png",
            alt: "Court-métrage La Dernière Présence",
            category: "AUDIOVISUEL",
            catFilter: "AUDIOVISUEL",
            role: "Réalisation & Montage DaVinci",
            title: "La Dernière Présence",
            icon: "fa-play"
        },
        {
            id: 'card_begreen',
            modalId: '#modalBeGreen',
            img: "image/affiche_ODD15-modified.png",
            alt: "Campagne Be Green",
            category: "GESTION DE PROJET",
            catFilter: "GESTION",
            role: "Direction Artistique & Sensibilisation",
            title: "Be Green",
            icon: "fa-leaf"
        }
    ];

    const filteredProjects = activeFilter === 'ALL'
        ? projectsList
        : projectsList.filter(p => p.catFilter === activeFilter);

    return (
        <>
            <div className="container-fluid" id="projets_experiences">
                <div className="section-header">
                    <div className="section-tag">
                        <span className="section-tag-num">02</span>
                        <span className="section-tag-sep">//</span>
                        <span className="section-tag-name">TRAVAUX SÉLECTIONNÉS</span>
                    </div>
                    <h1 className="section-main-title" id="titre_projets">MES RÉALISATIONS</h1>
                    <p className="section-description">
                        Une sélection de créations mêlant réalisation audiovisuelle, communication visuelle et gestion de projet multimédia.
                    </p>
                </div>

                {/* Filtres par discipline */}
                <div className="project-filter-bar">
                    <button
                        type="button"
                        className={`project-filter-btn ${activeFilter === 'ALL' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('ALL')}
                    >
                        Tous les projets
                    </button>
                    <button
                        type="button"
                        className={`project-filter-btn ${activeFilter === 'AUDIOVISUEL' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('AUDIOVISUEL')}
                    >
                        Audiovisuel
                    </button>
                    <button
                        type="button"
                        className={`project-filter-btn ${activeFilter === 'COMMUNICATION' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('COMMUNICATION')}
                    >
                        Communication
                    </button>
                    <button
                        type="button"
                        className={`project-filter-btn ${activeFilter === 'GESTION' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('GESTION')}
                    >
                        Gestion de Projet
                    </button>
                </div>

                <div className="project-grid">
                    {filteredProjects.map((proj) => (
                        <a
                            key={proj.id}
                            href="javascript:void(0)"
                            id={proj.id}
                            className="project-card"
                            data-bs-toggle="modal"
                            data-bs-target={proj.modalId}
                        >
                            <img
                                src={import.meta.env.BASE_URL + proj.img}
                                alt={proj.alt}
                                loading="lazy"
                                className="project-card-img"
                            />
                            <div className="project-overlay">
                                <div className="project-info">
                                    <div className="project-meta-row">
                                        <span className="project-category">{proj.category}</span>
                                        <span className="project-role-tag">{proj.role}</span>
                                    </div>
                                    <h3>{proj.title}</h3>
                                </div>
                                <div className="project-icon-badge">
                                    <i className={`fa-solid ${proj.icon}`}></i>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="see-more-container">
                    <Link to="/projets" className="btn-see-more">
                        <span>VOIR TOUTES MES RÉALISATIONS</span>
                        <i className="fa-solid fa-arrow-right-long"></i>
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
                                        <a href={import.meta.env.BASE_URL + "image/pdf/Doc_ArchesPapers.pdf"} target="_blank" rel="noopener noreferrer" className="btn-modal-action">
                                            Ouvrir le document <i className="fa-solid fa-file-pdf ms-2"></i>
                                        </a>
                                        <a href={import.meta.env.BASE_URL + "image/pdf/Diapo_ArchesPapers.pdf"} target="_blank" rel="noopener noreferrer" className="btn-modal-action">
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
                                        <a href={import.meta.env.BASE_URL + "image/affiche_ODD15.png"} target="_blank" rel="noopener noreferrer" className="btn-modal-action">
                                            Voir l'affiche <i className="fa-solid fa-image ms-2"></i>
                                        </a>
                                        <a href={import.meta.env.BASE_URL + "image/pdf/Cahier_des_charges.pdf"} target="_blank" rel="noopener noreferrer" className="btn-modal-action">
                                            Cahier des charges <i className="fa-solid fa-file-invoice ms-2"></i>
                                        </a>
                                        <a href={import.meta.env.BASE_URL + "image/pdf/Resume_projet.pdf"} target="_blank" rel="noopener noreferrer" className="btn-modal-action">
                                            Résumé du projet <i className="fa-solid fa-file-lines ms-2"></i>
                                        </a>
                                        <a href={import.meta.env.BASE_URL + "image/pdf/Fiche_etat-des-lieux.pdf"} target="_blank" rel="noopener noreferrer" className="btn-modal-action">
                                            Fiche état des lieux <i className="fa-solid fa-clipboard-list ms-2"></i>
                                        </a>
                                        <a href={import.meta.env.BASE_URL + "image/pdf/Fiche_idee.pdf"} target="_blank" rel="noopener noreferrer" className="btn-modal-action">
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
