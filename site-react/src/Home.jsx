import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import MiniBio from './components/MiniBio';
import Parcours from './components/Parcours';
import SavoirFaire from './components/SavoirFaire';
import Projets from './components/Projets';
import Experience from './components/Experience';
import Contact from './components/Contact';

function Home() {
    const [introVisible, setIntroVisible] = useState(() => {
        return sessionStorage.getItem('introSeen') !== 'true';
    });
    const [isHeroVisible, setIsHeroVisible] = useState(true);
    const [isBtnVisible, setIsBtnVisible] = useState(false);
    const [typingText, setTypingText] = useState('');
    const fullText = "CORENTIN LE ROUX";

    // Global custom events to show/hide hero (only triggered via button or explicit action)
    useEffect(() => {
        const handleShowHero = () => {
            setIsHeroVisible(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            const hero = document.getElementById('hero-scrolly');
            if (hero) hero.scrollTo({ top: 0, behavior: 'smooth' });
        };
        const handleHideHero = () => setIsHeroVisible(false);

        window.addEventListener('showHero', handleShowHero);
        window.addEventListener('hideHero', handleHideHero);

        return () => {
            window.removeEventListener('showHero', handleShowHero);
            window.removeEventListener('hideHero', handleHideHero);
        };
    }, []);

    // Typing effect
    useEffect(() => {
        if (!introVisible) {
            return;
        }

        let index = 0;
        const interval = setInterval(() => {
            if (index <= fullText.length) {
                setTypingText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [introVisible]);

    // Handle Scroll to Top Click: scrolls back to Mini-Bio section
    const handleScrollToTop = () => {
        const miniBio = document.getElementById('mini_bio');
        if (miniBio) {
            miniBio.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // Scroll listener for "Scroll to Top" button visibility
    useEffect(() => {
        const handleScroll = () => {
            if (introVisible || isHeroVisible) {
                setIsBtnVisible(false);
                return;
            }

            const miniBio = document.getElementById('mini_bio');
            const threshold = miniBio ? (miniBio.offsetTop + miniBio.clientHeight * 0.35) : 300;

            // Show button once the user scrolls past mini-bio
            if (window.scrollY > threshold) {
                setIsBtnVisible(true);
            } else {
                setIsBtnVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [introVisible, isHeroVisible]);

    // Handle Enter Site
    const handleEnterSite = (e) => {
        e.preventDefault();
        const content = document.querySelector('.intro-content');
        const overlay = document.getElementById('intro-overlay');

        if (content) content.classList.add('content-disappear');

        setTimeout(() => {
            if (overlay) overlay.classList.add('fade-out');
        }, 200);

        setTimeout(() => {
            setIntroVisible(false);
            sessionStorage.setItem('introSeen', 'true');
            document.body.style.overflow = 'auto';
            setIsHeroVisible(true);
        }, 1400);
    };

    useEffect(() => {
        if (introVisible) {
            document.body.style.overflow = 'hidden';
            setIsBtnVisible(false);
        }
    }, [introVisible]);

    return (
        <>
            {introVisible && (
                <section id="intro-overlay">
                    <div className="intro-content">
                        <h2 className="intro-subtitle">PORTFOLIO</h2>
                        <h1 className="intro-title" id="typing-title">{typingText}</h1>
                        <button id="enter-site-btn" onClick={handleEnterSite}>
                            DÉCOUVRIR <i className="fa-solid fa-arrow-right-long"></i>
                        </button>
                    </div>
                </section>
            )}

            <Navigation isHeroVisible={isHeroVisible} />
            <Hero isHeroVisible={isHeroVisible} onHideHero={() => setIsHeroVisible(false)} />
            <MiniBio />

            {/* Reordered to match index_test.html order: Projets, SavoirFaire, Parcours, Experience, Contact */}
            <div id="projets_experiences">
                <Projets />
            </div>

            <SavoirFaire />
            <Parcours />
            <Experience />
            <Contact />

            {/* Bouton pour remonter à la section Mini-Bio */}
            <button
                type="button"
                className={`btn-scroll-up ${isBtnVisible ? '' : 'hidden'}`}
                onClick={handleScrollToTop}
                style={{ border: 'none', cursor: 'pointer' }}
                aria-label="Remonter à la section Mini-Bio"
                title="Remonter à la Mini-Bio"
            >
                <i className="fa-solid fa-arrow-up"></i>
            </button>
        </>
    );
}

export default Home;
