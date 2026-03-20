import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

function Navigation() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [isBlueLogo, setIsBlueLogo] = useState(location.pathname !== '/');

    useEffect(() => {
        if (location.pathname !== '/') {
            setIsBlueLogo(true);
            return;
        }

        setIsBlueLogo(false);

        const heroSection = document.getElementById('hero-scrolly');
        if (!heroSection) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // If hero is NOT intersecting (or mostly out of view), turn logo blue
                // Adjust threshold as needed. 0.1 means if 10% is visible.
                // We want blue when we leave the hero.
                setIsBlueLogo(!entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        observer.observe(heroSection);

        return () => {
            if (heroSection) observer.unobserve(heroSection);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            {/* Offcanvas Menu */}
            <div
                className={`offcanvas offcanvas-top bg_dark text-light ${isOpen ? 'show' : ''}`}
                id="demo"
                tabIndex="-1"
                style={{
                    height: '100vh',
                    visibility: isOpen ? 'visible' : 'hidden',
                    transition: 'transform 0.4s ease-in-out, visibility 0.4s ease-in-out'
                }}
            >
                <div className="offcanvas-body">
                    <Link className="menu fs-1 fs-md-2 fs-sm-3" to="/" onClick={() => { window.scrollTo(0, 0); closeMenu(); }}>
                        <h1>ACCUEIL</h1>
                    </Link>
                    <Link className="menu fs-1 fs-md-2 fs-sm-3" to="/#mini_bio" onClick={closeMenu}>
                        <h1>MINI-BIO</h1>
                    </Link>
                    <Link className="menu fs-1 fs-md-2 fs-sm-3" to="/#projets_experiences" onClick={closeMenu}>
                        <h1>RÉALISATIONS</h1>
                    </Link>
                    <Link className="menu fs-1 fs-md-2 fs-sm-3" to="/#savoir_faire" onClick={closeMenu}>
                        <h1>SAVOIR FAIRE</h1>
                    </Link>
                    <Link className="menu fs-1 fs-md-2 fs-sm-3" to="/#parcours" onClick={closeMenu}>
                        <h1>PARCOURS</h1>
                    </Link>
                    <Link className="menu fs-1 fs-md-2 fs-sm-3" to="/#contact" onClick={closeMenu}>
                        <h1>CONTACT</h1>
                    </Link>
                </div>
                <button
                    type="button"
                    className="btn-close btn-close-white"
                    onClick={closeMenu}
                    id="bouton_close_offcanvas"
                    style={{ border: 'none' }}
                ></button>
            </div>

            {/* Burger Button */}
            <div id="menu_burger">
                <button
                    type="button"
                    className={`btn ${isOpen ? 'is-open' : ''}`}
                    onClick={toggleMenu}
                    style={{ border: 'none' }}
                >
                    <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} fa-2xl`}></i>
                </button>
            </div>

            {/* Logo */}
            <div id="logo_clr" className={`${isBlueLogo ? 'logo-blue' : ''} ${isOpen ? 'menu-open' : ''}`}>
                <Link to="/" onClick={() => { window.scrollTo(0, 0); closeMenu(); }}>
                    {/* Image Blanche (Visible par défaut) */}
                    <img src="/image/logo_CLR2_blanc.png" className="logo-img white" alt="Logo" />
                    {/* Image Bleue (Visible quand .logo-blue est actif) */}
                    <img src="/image/logo_CLR2_blanc.png" className="logo-img blue" alt="Logo" />
                </Link>
            </div>
        </>
    );
}

export default Navigation;
