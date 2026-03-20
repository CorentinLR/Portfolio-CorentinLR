import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Navigation from './Navigation';
import Contact from './Contact';

const allProjects = [
    {
        id: 1,
        title: "Site Web Pokemon",
        category: "DÉVELOPPEMENT WEB",
        type: "dev",
        image: "/image/site_pokemon_accueil-modified.png",
        link: "/projects/pokemon/index.html",
        description: "Création d'un Pokédex interactif complet consommant l'API PokeAPI pour afficher statistiques, types et images. Inclus une gestion de collection et une interface dynamique en JS.",
        tags: ["HTML", "CSS", "JS", "API"]
    },
    {
        id: 3,
        title: "Affiche de Film",
        category: "GRAPHISME",
        type: "graphisme",
        image: "/image/affiche-modified.png",
        link: "/image/affiche.png",
        description: "Conception d'une affiche de cinéma réaliste respectant les codes de l'industrie (billing block, hiérarchie visuelle). Travail de composition complexe et d'étalonnage sous Affinity Photo.",
        tags: ["Affinity Photo", "Retouche", "Composition"]
    },
    {
        id: 4,
        title: "Affiche Festival",
        category: "GRAPHISME",
        type: "graphisme",
        image: "/image/Affiche_SAE103_mod_thumb.jpg",
        link: "/image/Affiche_SAE103.png",
        description: "Création d'une affiche promotionnelle pour le festival MMI 'A l'West Fest'. Travail sur la typographie et la mise en page vectorielle sous Affinity Designer.",
        tags: ["Affinity Designer", "Design", "Affiche"]
    },
    {
        id: 5,
        title: "Logo Streetwear",
        category: "GRAPHISME",
        type: "graphisme",
        image: "/image/Hover_Streetwear_NSB-modified.png",
        link: "/image/Hover_Streetwear_NSB.png",
        description: "Création d'une identité visuelle complète pour une marque de streetwear (Höver). Recherche de logotype et déclinaisons graphiques sous Illustrator.",
        tags: ["Branding", "Logo", "Illustrator"]
    },
    {
        id: 6,
        title: "Audit A l'West Fest",
        category: "COMMUNICATION",
        type: "communication",
        image: "/image/AWF_Background-modified.png",
        link: "/image/pdf/Doc_ALWestFest.pdf",
        teaserLink: "https://youtu.be/0emCXXQGf1o",
        description: "Dossier d'audit de communication et stratégie marketing pour le festival MMI de l'IUT de Lannion. Inclus des recommandations réseaux sociaux, e-mailing et un teaser vidéo.",
        tags: ["Audit", "Marketing", "Analyse"]
    },
    {
        id: 7,
        title: "Audit Arches Papers",
        category: "COMMUNICATION",
        type: "communication",
        image: "/image/Arches-modified.webp",
        link: "/image/pdf/Doc_ArchesPapers.pdf",
        secondaryLink: "/image/pdf/Diapo_ArchesPapers.pdf",
        description: "Analyse stratégique de l'image de marque de l'entreprise Arches Papers. Étude de la communication existante et propositions d'amélioration pour les supports print et digitaux.",
        tags: ["Stratégie", "Communication"]
    },
    {
        id: 9,
        title: "Be Green",
        category: "GESTION DE PROJET",
        type: "gestion",
        image: "/image/affiche_ODD15-modified.png",
        link: "/image/affiche_ODD15.png",
        primaryLabel: "Voir l'affiche",
        extraLinks: [
            { label: "Cahier des charges", url: "/image/pdf/Cahier_des_charges.pdf", icon: "fa-file-invoice" },
            { label: "Résumé du projet", url: "/image/pdf/Resume_projet.pdf", icon: "fa-file-lines" },
            { label: "Fiche état des lieux", url: "/image/pdf/Fiche_etat-des-lieux.pdf", icon: "fa-clipboard-list" },
            { label: "Fiche idée", url: "/image/pdf/Fiche_idee.pdf", icon: "fa-lightbulb" }
        ],
        description: "Campagne de sensibilisation à l'éco-conception (ODD 15). Projet mené en agence avec cahier des charges, gestion de projet agile (Scrum) et création de supports de communication durables.",
        tags: ["Eco-conception", "Management", "Agile"]
    },
    {
        id: 10,
        title: "Mini-Projet Bulma",
        category: "DÉVELOPPEMENT WEB",
        type: "dev",
        image: "/image/mini_projet_bulma-modified.png",
        link: "/projects/bulma/index.html",
        description: "Intégration d'une interface inspirée de Spotify utilisant le framework CSS Bulma. Mise en pratique des composants responsive (cards, hero, navbar).",
        tags: ["HTML", "Bulma", "Intégration"]
    },
    {
        id: 11,
        title: "Mini-Projet JS",
        category: "DÉVELOPPEMENT WEB",
        type: "dev",
        image: "/image/Capture d'écran 2026-03-19 183226-modified.png",
        link: "/projects/js/index.html",
        description: "Développement d'une application de cartographie interactive listant les arbres remarquables des Côtes-d'Armor via l'API Leaflet. Gestion dynamique des données et du DOM.",
        tags: ["JavaScript", "Logique", "DOM"]
    },
    {
        id: 12,
        title: "La Dernière Présence",
        category: "AUDIOVISUEL",
        type: "av",
        image: "/image/la_derniere_presence-modified.png",
        link: "https://youtu.be/kK0-WsOrHQs",
        description: "Court métrage étudiant réalisé de A à Z : scénarisation, tournage au Sony A7 III, montage et colorimétrie sous DaVinci Resolve. Narration visuelle atmosphérique sans dialogue.",
        tags: ["Réalisation", "DaVinci", "Court Métrage"]
    },
    {
        id: 13,
        title: "Article Sport 2050",
        category: "ÉCRITURE",
        type: "ecriture",
        image: "/image/Capture d'écran 2026-03-19 1835498-modified.png",
        link: "/image/pdf/article_sport_2050.pdf",
        primaryLabel: "Voir l'article",
        description: "Rédaction d'un article de prospective imaginant l'évolution de l'IUT d'ici 2050. Travail de recherche, d'écriture journalistique et de mise en page documentaire.",
        tags: ["Rédaction", "Prospective"]
    },
    {
        id: 14,
        title: "Blender (Diorama 3D)",
        category: "CRÉATION 3D",
        type: "3d",
        image: "/image/diorama_3D-modified.png",
        link: "/image/video/animation_blender3D.mp4",
        primaryLabel: "Voir l'animation",
        description: "Modélisation et rendu d'un diorama 3D sous Blender. Création d'un univers miniature avec travail sur les textures, l'éclairage et la composition spatiale.",
        tags: ["3D", "Blender", "Modélisation"]
    },
    {
        id: 15,
        title: "Interviews",
        category: "AUDIOVISUEL",
        type: "av",
        image: "/image/interviews-modified.png",
        link: "https://youtu.be/DNacGt-3G5U",
        description: "Réalisation d'une série d'interviews audiovisuelles pour un concept de bar à thèmes. Travail sur la prise de son, l'éclairage studio et le montage dynamique.",
        tags: ["Interview", "Montage", "Prise de son"]
    },
    {
        id: 17,
        title: "Application de pêche à pied",
        category: "UX/UI",
        type: "uxui",
        image: "/image/Capture d'écran 2026-03-19 185630-modified.png",
        link: "/image/pdf/Application pêche à pied.pdf",
        primaryLabel: "Voir le dossier",
        description: "Conception de l'expérience utilisateur pour une application de pêche à pied. Réalisation de personas, parcours utilisateur (UJM) et prototypage haute fidélité.",
        tags: ["UX Design", "UI Design", "Prototypage"]
    },
    {
        id: 18,
        title: "Poster Datalogie",
        category: "GRAPHISME",
        type: "graphisme",
        image: "/image/Capture d'écran 2026-03-19 185727-modified.png",
        link: "/image/Poster_Satellite.jpg",
        primaryLabel: "Voir le poster",
        description: "Création d'un poster scientifique et esthétique basé sur des données satellites. Analyse de données brutes et retranscription graphique sémantique.",
        tags: ["Data Design", "Affiche", "Sémantique"]
    }
];

function AllProjects() {
    const [filter, setFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = filter === 'all'
        ? allProjects
        : allProjects.filter(p => p.type === filter);

    return (
        <>
            <Navigation />

            <div className="container-fluid" style={{ marginTop: '120px', minHeight: '100vh', paddingBottom: '60px' }}>
                <div className="text-center mb-5">
                    <h1 id="titre_projets">TOUTES MES RÉALISATIONS</h1>
                    <p className="text-muted fs-4">Une collection complète de mes travaux</p>
                </div>

                {/* Filters */}
                <div className="d-flex justify-content-center gap-3 mb-5 flex-wrap">
                    <button
                        className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setFilter('all')}
                        style={{ borderRadius: '50px', padding: '10px 30px' }}
                    >
                        Tout
                    </button>
                    <button
                        className={`btn ${filter === 'dev' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setFilter('dev')}
                        style={{ borderRadius: '50px', padding: '10px 30px' }}
                    >
                        Développement Web
                    </button>
                    <button
                        className={`btn ${filter === 'av' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setFilter('av')}
                        style={{ borderRadius: '50px', padding: '10px 30px' }}
                    >
                        Audiovisuel
                    </button>
                    <button
                        className={`btn ${filter === 'graphisme' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setFilter('graphisme')}
                        style={{ borderRadius: '50px', padding: '10px 30px' }}
                    >
                        Graphisme
                    </button>
                    <button
                        className={`btn ${filter === 'communication' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setFilter('communication')}
                        style={{ borderRadius: '50px', padding: '10px 30px' }}
                    >
                        Communication
                    </button>
                    <button
                        className={`btn ${filter === 'uxui' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setFilter('uxui')}
                        style={{ borderRadius: '50px', padding: '10px 30px' }}
                    >
                        UX/UI
                    </button>
                    <button
                        className={`btn ${filter === '3d' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setFilter('3d')}
                        style={{ borderRadius: '50px', padding: '10px 30px' }}
                    >
                        Création 3D
                    </button>
                    <button
                        className={`btn ${filter === 'ecriture' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setFilter('ecriture')}
                        style={{ borderRadius: '50px', padding: '10px 30px' }}
                    >
                        Écriture
                    </button>
                    <button
                        className={`btn ${filter === 'gestion' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setFilter('gestion')}
                        style={{ borderRadius: '50px', padding: '10px 30px' }}
                    >
                        Gestion de Projet
                    </button>
                </div>

                {/* Grid */}
                <div className="project-grid">
                    {filteredProjects.map(project => (
                        <div
                            key={project.id}
                            className="project-card"
                            data-bs-toggle="modal"
                            data-bs-target="#projectModal"
                            onClick={() => setSelectedProject(project)}
                            style={{ cursor: 'pointer', overflow: 'hidden' }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                loading="lazy"
                                style={{
                                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                    objectFit: 'cover', zIndex: 0
                                }}
                            />

                            <div className="project-overlay" style={{ zIndex: 1 }}>
                                <div className="project-info">
                                    <span className="project-category">{project.category}</span>
                                    <h3>{project.title}</h3>
                                    <div className="mt-2">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="badge bg-white text-dark me-1 opacity-75">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {createPortal(
                <div className="modal fade" id="projectModal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h4 className="modal-title">{selectedProject?.title}</h4>
                                <button type="button" className="btn-close-custom" data-bs-dismiss="modal">
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                            </div>

                            <div className="modal-body">
                                <h5>Le Concept</h5>
                                <p>{selectedProject?.description}</p>

                                <h5>Technologies utilisées</h5>
                                <div className="d-flex flex-wrap mb-4">
                                    {selectedProject?.tags.map((tag, i) => (
                                        <span key={i} className="tech-tag">{tag}</span>
                                    ))}
                                </div>

                                <div className="text-center d-flex flex-wrap justify-content-center gap-2">
                                    {selectedProject?.type === 'dev' && (
                                        <a href={selectedProject?.link || selectedProject?.image} target="_blank" rel="noopener noreferrer" className="btn-modal-action">
                                            Voir le site <i className="fa-solid fa-arrow-up-right-from-square ms-2"></i>
                                        </a>
                                    )}
                                    {selectedProject?.type === 'av' && (
                                        <a href={selectedProject?.link || selectedProject?.image} target="_blank" rel="noopener noreferrer" className="btn-modal-action">
                                            Regarder la vidéo <i className="fa-solid fa-play ms-2"></i>
                                        </a>
                                    )}
                                    {selectedProject?.type === 'graphisme' && (
                                        <>
                                            <a href={selectedProject?.link || selectedProject?.image} target="_blank" rel="noopener noreferrer" className="btn-modal-action">
                                                {selectedProject?.primaryLabel || 'Voir en grand'} <i className={`fa-solid ${selectedProject?.primaryLabel?.toLowerCase().includes('poster') || selectedProject?.primaryLabel?.toLowerCase().includes('affiche') ? 'fa-eye' : 'fa-eye'} ms-2`}></i>
                                            </a>
                                            {selectedProject?.secondaryLink && (
                                                <a href={selectedProject?.secondaryLink} target="_blank" rel="noopener noreferrer" className="btn-modal-action">
                                                    {selectedProject?.secondaryLabel || 'Voir le document'} <i className="fa-solid fa-file-pdf ms-2"></i>
                                                </a>
                                            )}
                                            {selectedProject?.extraLinks?.map((extra, idx) => (
                                                <a key={idx} href={extra.url} target="_blank" rel="noopener noreferrer" className="btn-modal-action">
                                                    {extra.label} <i className={`fa-solid ${extra.icon} ms-2`}></i>
                                                </a>
                                            ))}
                                        </>
                                    )}
                                    {(selectedProject?.type === 'communication' || selectedProject?.type === 'gestion' || selectedProject?.type === 'uxui' || selectedProject?.type === '3d' || selectedProject?.type === 'ecriture') && (
                                        <>
                                            <a href={selectedProject?.link || selectedProject?.image} target="_blank" rel="noopener noreferrer" className="btn-modal-action">
                                                {selectedProject?.primaryLabel || 'Ouvrir le document'} <i className={`fa-solid ${selectedProject?.primaryLabel?.toLowerCase().includes('animation') ? 'fa-play' : 'fa-file-pdf'} ms-2`}></i>
                                            </a>
                                            {selectedProject?.secondaryLink && (
                                                <a href={selectedProject?.secondaryLink} target="_blank" rel="noopener noreferrer" className="btn-modal-action">
                                                    Voir le diaporama <i className="fa-solid fa-file-powerpoint ms-2"></i>
                                                </a>
                                            )}
                                            {selectedProject?.teaserLink && (
                                                <a href={selectedProject?.teaserLink} target="_blank" rel="noopener noreferrer" className="btn-modal-action">
                                                    Regarder le teaser <i className="fa-solid fa-play ms-2"></i>
                                                </a>
                                            )}
                                            {selectedProject?.extraLinks?.map((extra, idx) => (
                                                <a key={idx} href={extra.url} target="_blank" rel="noopener noreferrer" className="btn-modal-action">
                                                    {extra.label} <i className={`fa-solid ${extra.icon} ms-2`}></i>
                                                </a>
                                            ))}
                                        </>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>,
                document.body
            )}

            <Contact />
        </>
    );
}

export default AllProjects;
