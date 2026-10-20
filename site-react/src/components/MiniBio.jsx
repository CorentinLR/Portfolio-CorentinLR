import React, { useState, useRef } from 'react';

// Émoji Pyramide stylisé (car non présent officiellement dans le standard Unicode)
const PyramidIcon = () => (
    <svg
        viewBox="0 0 36 36"
        width="1em"
        height="1em"
        style={{ display: 'inline-block', verticalAlign: '-0.12em' }}
        aria-hidden="true"
    >
        <defs>
            <linearGradient id="pyrSun" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FDE68A" />
                <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
            <linearGradient id="pyrShadow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D97706" />
                <stop offset="100%" stopColor="#92400E" />
            </linearGradient>
            <linearGradient id="pyrGround" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#D97706" stopOpacity="0.3" />
            </linearGradient>
        </defs>
        <ellipse cx="18" cy="30" rx="16" ry="4" fill="url(#pyrGround)" />
        <polygon points="26,16 33,28 23,28" fill="#B45309" opacity="0.75" />
        <polygon points="26,16 23,28 19,28" fill="#FBBF24" opacity="0.85" />
        <polygon points="15,6 3,29 17,31" fill="url(#pyrSun)" />
        <polygon points="15,6 17,31 29,27" fill="url(#pyrShadow)" />
        <line x1="7" y1="21" x2="16" y2="23" stroke="#FBBF24" strokeWidth="0.8" opacity="0.6" />
        <line x1="16" y1="23" x2="25" y2="20" stroke="#78350F" strokeWidth="0.8" opacity="0.5" />
        <line x1="10" y1="15" x2="16" y2="16.5" stroke="#FDE68A" strokeWidth="0.8" opacity="0.7" />
        <line x1="16" y1="16.5" x2="22" y2="14.5" stroke="#78350F" strokeWidth="0.8" opacity="0.5" />
        <polygon points="15,6 13,10 16,10.5 17.5,9.5" fill="#FEF08A" />
    </svg>
);

// Émoji Cube 3D isométrique (représentation fidèle pour la modélisation / Blender)
const Cube3DIcon = () => (
    <svg
        viewBox="0 0 36 36"
        width="1em"
        height="1em"
        style={{ display: 'inline-block', verticalAlign: '-0.12em' }}
        aria-hidden="true"
    >
        <defs>
            <linearGradient id="cubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#93C5FD" />
                <stop offset="100%" stopColor="#60A5FA" />
            </linearGradient>
            <linearGradient id="cubeLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
            <linearGradient id="cubeRight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1D4ED8" />
                <stop offset="100%" stopColor="#1E3A8A" />
            </linearGradient>
        </defs>
        <polygon points="18,3 32,11 18,19 4,11" fill="url(#cubeTop)" />
        <polygon points="4,11 18,19 18,33 4,25" fill="url(#cubeLeft)" />
        <polygon points="18,19 32,11 32,25 18,33" fill="url(#cubeRight)" />
        <line x1="18" y1="3" x2="32" y2="11" stroke="#DBEAFE" strokeWidth="0.8" opacity="0.8" />
        <line x1="18" y1="3" x2="4" y2="11" stroke="#DBEAFE" strokeWidth="0.8" opacity="0.8" />
        <line x1="18" y1="3" x2="18" y2="19" stroke="#BFDBFE" strokeWidth="0.8" opacity="0.9" />
        <line x1="4" y1="11" x2="18" y2="19" stroke="#93C5FD" strokeWidth="0.7" opacity="0.7" />
        <line x1="32" y1="11" x2="18" y2="19" stroke="#60A5FA" strokeWidth="0.7" opacity="0.7" />
    </svg>
);

const RANDOM_EMOJIS = [
    { id: 'design', emoji: '🎨', label: 'Graphisme', angle: -140, distance: 215, size: '2.5rem', rot: -14, delay: '0.03s', dur: '3.2s' },
    { id: 'music', emoji: '🎧', label: 'Musique', angle: -170, distance: 225, size: '2.3rem', rot: -12, delay: '0.09s', dur: '3.3s' },
    { id: 'egypt', emoji: <PyramidIcon />, label: 'Egypte', angle: 165, distance: 245, size: '2.4rem', rot: 8, delay: '0.14s', dur: '3.8s' },
    { id: 'web', emoji: '🌐', label: 'Web & Réseau', angle: 140, distance: 220, size: '2.2rem', rot: -10, delay: '0.08s', dur: '4.1s' },
    { id: 'draw', emoji: '🖌️', label: 'Illustration', angle: 115, distance: 210, size: '2.2rem', rot: -15, delay: '0.05s', dur: '2.8s' },
    { id: 'ruler', emoji: '📐', label: 'Design UI', angle: 90, distance: 235, size: '2.0rem', rot: 15, delay: '0.12s', dur: '3.1s' },
    { id: '3d', emoji: <Cube3DIcon />, label: '3D & Rendu', angle: 65, distance: 225, size: '2.5rem', rot: 16, delay: '0.11s', dur: '3.7s' },
    { id: 'cam', emoji: '🎥', label: 'Tournage', angle: 38, distance: 240, size: '2.1rem', rot: -8, delay: '0.07s', dur: '3.3s' },
    { id: 'cinema', emoji: '🍿', label: 'Films & Séries', angle: 12, distance: 215, size: '2.4rem', rot: 12, delay: '0.06s', dur: '3.5s' },
    { id: 'photo', emoji: '📸', label: 'Photographie', angle: -15, distance: 235, size: '2.3rem', rot: -14, delay: '0.13s', dur: '3.6s' },
    { id: 'idea', emoji: '💡', label: 'Idées', angle: -40, distance: 205, size: '2.0rem', rot: 18, delay: '0.04s', dur: '3.5s' },
    { id: 'video', emoji: '🎬', label: 'Montage Vidéo', angle: -65, distance: 235, size: '2.3rem', rot: -10, delay: '0.05s', dur: '3.0s' },
    { id: 'code', emoji: '💻', label: 'Dév Web', angle: -90, distance: 215, size: '2.2rem', rot: 10, delay: '0.07s', dur: '4.0s' },
    { id: 'sparkles', emoji: '✨', label: 'Créativité', angle: -115, distance: 245, size: '1.9rem', rot: 22, delay: '0.15s', dur: '2.6s' }
];

function MiniBio() {
    const [isHovered, setIsHovered] = useState(false);
    const leaveTimerRef = useRef(null);

    const handleMouseEnter = () => {
        if (leaveTimerRef.current) {
            clearTimeout(leaveTimerRef.current);
            leaveTimerRef.current = null;
        }
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
        // Fermeture immédiate dès que la souris quitte le cadre / contour
        leaveTimerRef.current = setTimeout(() => {
            setIsHovered(false);
        }, 120);
    };

    return (
        <div className="container-fluid p-md-5 p-3 text-dark" id="mini_bio">
            <button
                type="button"
                className="hero-reappear-pill"
                onClick={() => window.dispatchEvent(new CustomEvent('showHero'))}
                title="Revoir l'introduction"
            >
                <i className="fa-solid fa-rotate-left"></i>
                <span>Revoir l'introduction</span>
            </button>
            <div className="section-header">
                <div className="section-tag">
                    <span className="section-tag-num">01</span>
                    <span className="section-tag-sep">//</span>
                    <span className="section-tag-name">PROFIL CRÉATIF</span>
                </div>
                <h1 className="section-main-title" id="titre_mini_bio">MINI-BIO</h1>
                <p className="section-description">
                    Passionné par l'image, le design et les technologies interactives, découvrez mon univers et mon approche du multimédia.
                </p>
            </div>

            <div className="bio-card-frame">
                <div className="row">
                <div className="col-md-5 d-flex justify-content-center align-items-center mb-4 mb-md-0">
                    <div
                        className={`bio-photo-wrapper ${isHovered ? 'active' : ''}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => {
                            if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
                            setIsHovered(prev => !prev);
                        }}
                        title="Survolez pour voir mes compétences !"
                    >
                        <img
                            src={import.meta.env.BASE_URL + "image/mini-bio-corentin.jpg"}
                            className="img-fluid bio-photo"
                            alt="Corentin Le Roux"
                            id="photo_mini_bio"
                        />

                        {/* Éléments émojis jaillissants sans fond ni contour */}
                        <div className="bio-emojis-scatter" aria-hidden="true">
                            {RANDOM_EMOJIS.map((item, index) => {
                                const rad = (item.angle * Math.PI) / 180;
                                const tx = Math.round(Math.cos(rad) * item.distance);
                                const ty = Math.round(Math.sin(rad) * item.distance);
                                const txMobile = Math.round(Math.cos(rad) * (item.distance * 0.72));
                                const tyMobile = Math.round(Math.sin(rad) * (item.distance * 0.72));

                                return (
                                    <div
                                        key={item.id}
                                        className={`bio-emoji-item emoji-${item.id}`}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                        style={{
                                            '--tx': `${tx}px`,
                                            '--ty': `${ty}px`,
                                            '--tx-mobile': `${txMobile}px`,
                                            '--ty-mobile': `${tyMobile}px`,
                                            '--rot': `${item.rot}deg`,
                                            '--size': item.size,
                                            '--delay': item.delay,
                                            '--anim-dur': item.dur,
                                            '--anim-delay': `${index * 0.25}s`
                                        }}
                                    >
                                        <span className="emoji-glyph">{item.emoji}</span>
                                        <span className="emoji-tooltip">{item.label}</span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Indication discrète */}
                        <div className="bio-hover-hint">
                            <span>✨ Survolez-moi</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-7 d-flex align-items-center" id="contenu_mini_bio">
                    <div className="bio-text-content">
                        <h2 className="mb-4">Salut ! <span className="wave">👋</span></h2>

                        <p className="bio-paragraph">
                            Moi c'est <b className="highlight-text">Corentin</b>, j’ai 21 ans, je suis un étudiant de <span className="highlight-text">BUT MMI</span> et comme le dit mon nom je suis roux ! Marrant non ?
                        </p>

                        <p className="bio-paragraph">
                            Bon restons sérieux. La formation MMI n’a pas été mon premier choix. En effet, c’est à la suite d'une année en <b className="highlight-text">Réseaux et Télécoms</b> que je suis arrivé ici, en MMI.
                        </p>

                        <p className="bio-paragraph">
                            Et vous savez quoi ? J’adore cette formation ! Les compétences enseignées telles que <span className="highlight-text">le graphisme</span> et <span className="highlight-text">la 3D</span> me rapprochent de plus en plus de mon objectif de devenir <b className="highlight-text">graphiste</b>.
                        </p>

                        <p className="bio-paragraph">
                            Sinon, j’adore écouter de la musique, faire du sport, et bien sûr regarder des films et des séries. Très gros rêveur, j’adorerai traverser l’Egypte pour découvrir son histoire et ces paysages… sans oublier les chameaux ! 🐪
                        </p>

                        <p className="bio-paragraph fst-italic mt-4">
                            Bon laissons les chameaux en Egypte et venez lire la suite de mon portfolio !<br />
                            <b className="highlight-text">Bonne lecture.</b>
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default MiniBio;
