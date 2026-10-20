import React, { useEffect, useRef } from 'react';

const Hero = ({ isHeroVisible = true, onHideHero }) => {
    const heroRef = useRef(null);

    useEffect(() => {
        // === SCROLLYTELLING LOGIC INTEGRATED HERE ===
        const heroSection = heroRef.current;
        if (!heroSection) return;

        const textSections = heroSection.querySelectorAll('.text-section');
        const bgImages = heroSection.querySelectorAll('.hero-bg');

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

    // Scroll down to leave hero when at bottom of carousel
    useEffect(() => {
        const heroSection = heroRef.current;
        if (!heroSection) return;

        let touchStartY = 0;

        const handleHeroWheel = (e) => {
            const isAtBottom = heroSection.scrollTop + heroSection.clientHeight >= heroSection.scrollHeight - 30;
            if (e.deltaY > 15 && isAtBottom) {
                if (onHideHero) onHideHero();
            }
        };

        const handleHeroTouchStart = (e) => {
            touchStartY = e.touches[0].clientY;
        };

        const handleHeroTouchMove = (e) => {
            const touchY = e.touches[0].clientY;
            const diff = touchStartY - touchY; // positive = swipe up (scroll down)
            const isAtBottom = heroSection.scrollTop + heroSection.clientHeight >= heroSection.scrollHeight - 30;
            if (diff > 40 && isAtBottom) {
                if (onHideHero) onHideHero();
            }
        };

        heroSection.addEventListener('wheel', handleHeroWheel, { passive: true });
        heroSection.addEventListener('touchstart', handleHeroTouchStart, { passive: true });
        heroSection.addEventListener('touchmove', handleHeroTouchMove, { passive: true });

        return () => {
            heroSection.removeEventListener('wheel', handleHeroWheel);
            heroSection.removeEventListener('touchstart', handleHeroTouchStart);
            heroSection.removeEventListener('touchmove', handleHeroTouchMove);
        };
    }, [onHideHero]);

    const scrollToSection = (e, id) => {
        e.preventDefault();
        if (onHideHero) onHideHero();
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 120);
    };

    return (
        <div
            id="hero-scrolly"
            ref={heroRef}
            className={isHeroVisible ? '' : 'hero-hidden'}
        >
            <div id="hero-backgrounds">
                <div className="hero-bg active" data-index="0">
                    <img src={import.meta.env.BASE_URL + "image/bannière_carousel-modified.png"} alt="Réalisations" />
                </div>
                <div className="hero-bg" data-index="1">
                    <img src={import.meta.env.BASE_URL + "image/montage_background_caroussel.webp"} alt="Compétences" />
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
                            <h1 className="titre_caroussel">Mes compétences</h1>
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
};

export default Hero;
