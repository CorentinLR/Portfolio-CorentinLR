import React, { useState, useRef } from 'react';

const RANDOM_EMOJIS = [
    { id: 'design', emoji: '🎨', label: 'Graphisme', angle: -135, distance: 210, size: '2.5rem', rot: -14, delay: '0.03s', dur: '3.2s' },
    { id: 'code', emoji: '💻', label: 'Dév Web', angle: -95, distance: 235, size: '2.2rem', rot: 12, delay: '0.08s', dur: '4.0s' },
    { id: 'video', emoji: '🎬', label: 'Montage Vidéo', angle: -60, distance: 200, size: '2.4rem', rot: -8, delay: '0.05s', dur: '2.9s' },
    { id: 'photo', emoji: '📸', label: 'Photographie', angle: -20, distance: 230, size: '2.3rem', rot: 18, delay: '0.12s', dur: '3.6s' },
    { id: 'cam', emoji: '🎥', label: 'Tournage', angle: 25, distance: 205, size: '2.1rem', rot: -10, delay: '0.07s', dur: '3.4s' },
    { id: '3d', emoji: '🧊', label: '3D & Rendu', angle: 65, distance: 240, size: '2.6rem', rot: 20, delay: '0.14s', dur: '3.8s' },
    { id: 'draw', emoji: '🖌️', label: 'Illustration', angle: 110, distance: 205, size: '2.2rem', rot: -14, delay: '0.06s', dur: '2.7s' },
    { id: 'web', emoji: '🌐', label: 'Web & Réseau', angle: 145, distance: 230, size: '2.2rem', rot: 8, delay: '0.11s', dur: '4.2s' },
    { id: 'sound', emoji: '🎧', label: 'Audio', angle: -175, distance: 200, size: '2.3rem', rot: -18, delay: '0.09s', dur: '3.1s' },
    { id: 'sparkles', emoji: '✨', label: 'Créativité', angle: -115, distance: 250, size: '1.9rem', rot: 25, delay: '0.15s', dur: '2.5s' },
    { id: 'idea', emoji: '💡', label: 'Idées', angle: -40, distance: 245, size: '2.0rem', rot: -20, delay: '0.13s', dur: '3.5s' },
    { id: 'ruler', emoji: '📐', label: 'Design UI', angle: 90, distance: 200, size: '2.0rem', rot: 15, delay: '0.08s', dur: '3.0s' },
    { id: 'camel', emoji: '🐪', label: 'Chameaux !', angle: 168, distance: 245, size: '2.2rem', rot: 10, delay: '0.16s', dur: '3.9s' }
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
        <div className="container-fluid p-5 text-dark" id="mini_bio">
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
                            Moi c'est <b>Corentin</b>, j’ai 21 ans, je suis un étudiant de <span className="highlight-text">BUT MMI</span> et comme le dit mon nom je suis roux ! Marrant non ?
                        </p>

                        <p className="bio-paragraph">
                            Bon restons sérieux. La formation MMI n’a pas été mon premier choix. En effet, c’est à la suite d'une année en <b>Réseaux et Télécoms</b> que je suis arrivé ici, en MMI.
                        </p>

                        <p className="bio-paragraph">
                            Et vous savez quoi ? J’adore cette formation ! Les compétences enseignées telles que <span className="highlight-text">le graphisme</span> et <span className="highlight-text">la 3D</span> me rapprochent de plus en plus de mon objectif de devenir <b>graphiste</b>.
                        </p>

                        <p className="bio-paragraph">
                            Sinon, j’adore écouter de la musique, faire du sport, et bien sûr regarder des films et des séries. Très gros rêveur, j’adorerai traverser l’Egypte pour découvrir son histoire et ces paysages… sans oublier les chameaux ! 🐪
                        </p>

                        <p className="bio-paragraph fst-italic mt-4">
                            Bon laissons les chameaux en Egypte et venez lire la suite de mon portfolio !<br />
                            <b>Bonne lecture.</b>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MiniBio;
