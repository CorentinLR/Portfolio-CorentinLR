import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const HOME_SECTIONS = [
    { id: 'hero-scrolly', name: 'Accueil', icon: 'fa-house' },
    { id: 'mini_bio', name: 'Mini-Bio', icon: 'fa-user' },
    { id: 'projets_experiences', name: 'Réalisations', icon: 'fa-folder-open' },
    { id: 'savoir_faire', name: 'Compétences', icon: 'fa-sliders' },
    { id: 'parcours', name: 'Parcours', icon: 'fa-graduation-cap' },
    { id: 'experiences', name: 'Expériences', icon: 'fa-briefcase' },
    { id: 'contact', name: 'Contact', icon: 'fa-paper-plane' }
];

function ScrollProgress() {
    const location = useLocation();
    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);
    const [activeSectionId, setActiveSectionId] = useState('hero-scrolly');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isIntroActive, setIsIntroActive] = useState(() => {
        return sessionStorage.getItem('introSeen') !== 'true';
    });

    const dockRef = useRef(null);

    // Watch intro overlay status
    useEffect(() => {
        const checkIntro = () => {
            const overlay = document.getElementById('intro-overlay');
            if (!overlay || overlay.classList.contains('fade-out')) {
                setIsIntroActive(false);
            } else {
                setIsIntroActive(true);
            }
        };

        checkIntro();
        const interval = setInterval(checkIntro, 200);
        return () => clearInterval(interval);
    }, []);

    // Handle scroll calculation and active section detection
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const scrollHeight = document.documentElement.scrollHeight;
            const maxScroll = scrollHeight - windowHeight;

            // 1. Calculate percentage
            if (maxScroll <= 0) {
                setProgress(0);
            } else {
                const heroSection = document.getElementById('hero-scrolly');
                if (scrollY === 0 && heroSection) {
                    const heroMax = heroSection.scrollHeight - heroSection.clientHeight;
                    if (heroMax > 0) {
                        const heroRatio = heroSection.scrollTop / heroMax;
                        // Hero internal scroll occupies first 12%
                        setProgress(Math.min(12, Math.round(heroRatio * 12)));
                    } else {
                        setProgress(0);
                    }
                } else if (scrollY + windowHeight >= scrollHeight - 30) {
                    setProgress(100);
                } else {
                    const calculated = Math.round((scrollY / maxScroll) * 100);
                    setProgress(Math.min(100, Math.max(0, calculated)));
                }
            }

            // 2. Detect active section on homepage
            if (location.pathname === '/') {
                if (scrollY + windowHeight >= scrollHeight - 80) {
                    setActiveSectionId('contact');
                    return;
                }

                if (scrollY < 120) {
                    setActiveSectionId('hero-scrolly');
                    return;
                }

                const sectionIds = ['contact', 'experiences', 'parcours', 'savoir_faire', 'projets_experiences', 'mini_bio', 'hero-scrolly'];
                for (const id of sectionIds) {
                    const el = document.getElementById(id);
                    if (el) {
                        const rect = el.getBoundingClientRect();
                        if (rect.top <= windowHeight * 0.45 && rect.bottom >= windowHeight * 0.15) {
                            setActiveSectionId(id);
                            return;
                        }
                    }
                }
            } else {
                setActiveSectionId('projets-page');
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        // Also listen to internal hero carousel scroll
        const heroSection = document.getElementById('hero-scrolly');
        if (heroSection) {
            heroSection.addEventListener('scroll', handleScroll, { passive: true });
        }

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (heroSection) {
                heroSection.removeEventListener('scroll', handleScroll);
            }
        };
    }, [location.pathname]);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dockRef.current && !dockRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    const handleSelectSection = (id) => {
        setIsMenuOpen(false);

        if (location.pathname !== '/') {
            navigate(`/#${id}`);
            return;
        }

        if (id === 'hero-scrolly') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            const hero = document.getElementById('hero-scrolly');
            if (hero) hero.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    // Determine current active section
    const activeIndex = HOME_SECTIONS.findIndex(s => s.id === activeSectionId);
    const safeActiveIndex = activeIndex >= 0 ? activeIndex : 0;
    const currentSection = location.pathname === '/'
        ? (HOME_SECTIONS[safeActiveIndex] || HOME_SECTIONS[0])
        : { id: 'projets-page', name: 'Toutes les Réalisations', icon: 'fa-folder-open' };

    // Calculate the precise vertical position of the active dot along the rail (height: 240px, dot centers from 13px to 227px)
    const activeTagTop = `${(13 + (safeActiveIndex / (HOME_SECTIONS.length - 1)) * 214).toFixed(1)}px`;

    return (
        <div
            ref={dockRef}
            className={`scroll-progress-right-dock ${isIntroActive ? 'hidden-intro' : ''}`}
        >
            {/* Badge Pourcentage cliquable */}
            <button
                type="button"
                className="scroll-progress-right-badge"
                onClick={() => setIsMenuOpen(prev => !prev)}
                title="Cliquer pour afficher toutes les sections"
                aria-label={`Progression : ${progress}%. Cliquez pour voir les sections.`}
            >
                <span className="badge-percent">{progress}%</span>
            </button>

            {/* Rail vertical avec les étapes de sections */}
            <div className="scroll-progress-vertical-rail">
                {/* Piste de fond qui relie les points : ne dépasse ni en haut ni en bas */}
                <div className="scroll-rail-line-track">
                    <div
                        className="scroll-rail-progress-bar"
                        style={{
                            height: `${(safeActiveIndex / (HOME_SECTIONS.length - 1)) * 100}%`
                        }}
                    />
                </div>

                {/* Points de chaque grande section */}
                {location.pathname === '/' && HOME_SECTIONS.map((sec, index) => {
                    const isActive = activeSectionId === sec.id;
                    const isPassed = activeIndex >= index;

                    return (
                        <div
                            key={sec.id}
                            className={`scroll-rail-item ${isActive ? 'active' : ''} ${isPassed ? 'passed' : ''}`}
                            onClick={() => handleSelectSection(sec.id)}
                        >
                            {/* Pastille / Point plein */}
                            <div className="scroll-rail-dot" />

                            {/* Étiquette du grand titre (glisse vers la gauche) */}
                            <div className="scroll-rail-tooltip">
                                <i className={`fa-solid ${sec.icon}`} aria-hidden="true"></i>
                                <span>{sec.name}</span>
                            </div>
                        </div>
                    );
                })}

                {/* Pilule du grand titre actuel (se place dynamiquement à côté du point actif) */}
                <div
                    className={`scroll-progress-active-tag ${isMenuOpen ? 'menu-open' : ''}`}
                    style={{ top: activeTagTop }}
                    onClick={() => setIsMenuOpen(prev => !prev)}
                    title="Section actuelle - Cliquer pour ouvrir le menu des sections"
                >
                    <i className={`fa-solid ${currentSection.icon}`} aria-hidden="true"></i>
                    <span className="tag-text">{currentSection.name}</span>
                    <i className="fa-solid fa-arrow-right active-tag-arrow" aria-hidden="true"></i>
                </div>
            </div>

            {/* Menu déroulant latéral complet des grands titres */}
            {isMenuOpen && (
                <div className="scroll-progress-side-menu">
                    <div className="side-menu-header">
                        <span>SECTIONS DU SITE</span>
                        <span className="side-menu-progress">{progress}% VU</span>
                    </div>
                    <ul className="side-menu-list">
                        {HOME_SECTIONS.map((sec) => {
                            const isActive = activeSectionId === sec.id && location.pathname === '/';
                            return (
                                <li
                                    key={sec.id}
                                    className={`side-menu-item ${isActive ? 'active' : ''}`}
                                    onClick={() => handleSelectSection(sec.id)}
                                >
                                    <div className="side-menu-left">
                                        <i className={`fa-solid ${sec.icon}`} aria-hidden="true"></i>
                                        <span>{sec.name}</span>
                                    </div>
                                    <div className="side-menu-right">
                                        {isActive ? (
                                            <span className="side-menu-active-badge">Actuel</span>
                                        ) : (
                                            <i className="fa-solid fa-chevron-right side-menu-arrow"></i>
                                        )}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default ScrollProgress;
