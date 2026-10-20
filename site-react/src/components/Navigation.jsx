import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

function Navigation({ isHeroVisible: propIsHeroVisible }) {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const [localIsHeroVisible, setLocalIsHeroVisible] = useState(true);

    useEffect(() => {
        const handleShow = () => {
            setLocalIsHeroVisible(true);
        };
        const handleHide = () => {
            setLocalIsHeroVisible(false);
        };

        window.addEventListener('showHero', handleShow);
        window.addEventListener('hideHero', handleHide);

        return () => {
            window.removeEventListener('showHero', handleShow);
            window.removeEventListener('hideHero', handleHide);
        };
    }, []);

    const effectiveHeroVisible = propIsHeroVisible !== undefined ? propIsHeroVisible : localIsHeroVisible;
    const isBlueLogo = !isHomePage || !effectiveHeroVisible;

    return (
        <div id="logo_clr" className={isBlueLogo ? 'logo-blue' : ''}>
            <Link
                to="/"
                onClick={() => {
                    window.dispatchEvent(new CustomEvent('showHero'));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    const hero = document.getElementById('hero-scrolly');
                    if (hero) hero.scrollTo({ top: 0, behavior: 'smooth' });
                }}
            >
                {/* Image Blanche (Visible par défaut) */}
                <img src={import.meta.env.BASE_URL + "image/logo_CLR2_blanc.png"} className="logo-img white" alt="Logo" />
                {/* Image Bleue (Visible quand .logo-blue est actif) */}
                <img src={import.meta.env.BASE_URL + "image/logo_CLR2_blanc.png"} className="logo-img blue" alt="Logo" />
            </Link>
        </div>
    );
}

export default Navigation;
