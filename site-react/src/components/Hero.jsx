import React, { useEffect, useRef } from 'react';

const Hero = () => {
    const heroRef = useRef(null);


    useEffect(() => {
        // === SCROLLYTELLING LOGIC INTEGRATED HERE ===
        const heroSection = document.getElementById('hero-scrolly');
        const textSections = document.querySelectorAll('.text-section');
        const bgImages = document.querySelectorAll('.hero-bg');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = entry.target.getAttribute('data-target');
                    bgImages.forEach(bg => {
                        bg.classList.remove('active');
                        if (bg.getAttribute('data-index') === index) {
                            bg.classList.add('active');
                        }
                    });
                }
            });
        }, { root: null, threshold: 0.5 });

        textSections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <div id="hero-scrolly">

            <div id="hero-backgrounds">
                <div className="hero-bg active" data-index="0">
                    <img src="/image/bannière_carousel-modified.png" alt="Réalisations" />
                </div>
                <div className="hero-bg" data-index="1">
                    <img src="/image/montage_background_caroussel.webp" alt="Savoir-Faire" />
                </div>
                <div className="hero-bg" data-index="2">
                    <img src="/image/iut.jpeg" alt="Parcours" />
                </div>
            </div>

            <div id="hero-texts">

                <div className="text-section" data-target="0">
                    <div className="text-content">
                        <a href="#projets_experiences" className="hero-link-title">
                            <h1 className="titre_caroussel">Mes réalisations</h1>
                        </a>

                        <p className="contenu_caroussel">
                            <a href="#card_projets_pokemon" className="link-word">SITE WEB</a>
                            <span className="separator">-</span>
                            <a href="#card_projets_film" className="link-word">COURT MÉTRAGE</a>
                            <span className="separator">-</span>
                            <a href="#card_projets_affiche" className="link-word">AFFICHE</a>
                        </p>
                    </div>
                </div>

                <div className="text-section" data-target="1">
                    <div className="text-content">
                        <a href="#savoir_faire" className="hero-link-title">
                            <h1 className="titre_caroussel">Mon Savoir-faire</h1>
                        </a>

                        <p className="contenu_caroussel">
                            <a href="#card_affinity_grid" className="link-word">AFFINITY</a>
                            <span className="separator">-</span>
                            <a href="#card_davinci_grid" className="link-word">DAVINCI</a>
                            <span className="separator">-</span>
                            <a href="#card_vscode_grid" className="link-word">VSCODE</a>
                        </p>
                    </div>
                </div>

                <div className="text-section" data-target="2">
                    <div className="text-content">
                        <a href="#parcours" className="hero-link-title">
                            <h1 className="titre_caroussel">Mon Parcours</h1>
                        </a>

                        <p className="contenu_caroussel">
                            <a href="#parcours" className="link-word">BUT</a>
                            <span className="separator">-</span>
                            <a href="#parcours" className="link-word">BAC</a>
                            <span className="separator">-</span>
                            <a href="#parcours" className="link-word">LYCÉE</a>
                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Hero;
