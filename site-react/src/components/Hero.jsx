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

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div id="hero-scrolly">

            <div id="hero-backgrounds">
                <div className="hero-bg active" data-index="0">
                    <img src={import.meta.env.BASE_URL + "image/bannière_carousel-modified.png"} alt="Réalisations" />
                </div>
                <div className="hero-bg" data-index="1">
                    <img src={import.meta.env.BASE_URL + "image/montage_background_caroussel.webp"} alt="Savoir-Faire" />
                </div>
                <div className="hero-bg" data-index="2">
                    <img src={import.meta.env.BASE_URL + "image/iut.jpeg"} alt="Parcours" />
                </div>
            </div>

            <div id="hero-texts">

                <div className="text-section" data-target="0">
                    <div className="text-content">
                        <a href="#projets_experiences" className="hero-link-title" onClick={(e) => scrollToSection(e, 'projets_experiences')}>
                            <h1 className="titre_caroussel">Mes réalisations</h1>
                        </a>

                        <p className="contenu_caroussel">
                            <a href="#projets_experiences" className="link-word" onClick={(e) => scrollToSection(e, 'projets_experiences')}>PROJETS</a>
                            <span className="separator">-</span>
                            <a href="#card_film" className="link-word" onClick={(e) => scrollToSection(e, 'card_film')}>COURT MÉTRAGE</a>
                            <span className="separator">-</span>
                            <a href="#card_arches" className="link-word" onClick={(e) => scrollToSection(e, 'card_arches')}>AFFICHE</a>
                        </p>
                    </div>
                </div>

                <div className="text-section" data-target="1">
                    <div className="text-content">
                        <a href="#savoir_faire" className="hero-link-title" onClick={(e) => scrollToSection(e, 'savoir_faire')}>
                            <h1 className="titre_caroussel">Mon Savoir-faire</h1>
                        </a>

                        <p className="contenu_caroussel">
                            <a href="#card_affinity_grid" className="link-word" onClick={(e) => scrollToSection(e, 'card_affinity_grid')}>AFFINITY</a>
                            <span className="separator">-</span>
                            <a href="#card_davinci_grid" className="link-word" onClick={(e) => scrollToSection(e, 'card_davinci_grid')}>DAVINCI</a>
                            <span className="separator">-</span>
                            <a href="#card_vscode_grid" className="link-word" onClick={(e) => scrollToSection(e, 'card_vscode_grid')}>VSCODE</a>
                        </p>
                    </div>
                </div>

                <div className="text-section" data-target="2">
                    <div className="text-content">
                        <a href="#parcours" className="hero-link-title" onClick={(e) => scrollToSection(e, 'parcours')}>
                            <h1 className="titre_caroussel">Mon Parcours</h1>
                        </a>

                        <p className="contenu_caroussel">
                            <a href="#parcours" className="link-word" onClick={(e) => scrollToSection(e, 'parcours')}>BUT</a>
                            <span className="separator">-</span>
                            <a href="#parcours" className="link-word" onClick={(e) => scrollToSection(e, 'parcours')}>BAC</a>
                            <span className="separator">-</span>
                            <a href="#parcours" className="link-word" onClick={(e) => scrollToSection(e, 'parcours')}>LYCÉE</a>
                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Hero;
