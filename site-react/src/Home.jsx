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
    const [isBtnVisible, setIsBtnVisible] = useState(false);
    const [typingText, setTypingText] = useState('');
    const fullText = "CORENTIN LE ROUX";

    // Typing effect
    useEffect(() => {
        if (!introVisible) {
            // Once intro is gone, show the button
            setIsBtnVisible(true);
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

    // Handle Scroll Button Click
    const handleScrollBtnClick = () => {
        const heroSection = document.getElementById('hero-scrolly');
        if (heroSection) {
            const isAtHeroBottom = heroSection.scrollTop + heroSection.clientHeight >= heroSection.scrollHeight - 10;

            if (!isAtHeroBottom) {
                // Stage 1: Scroll carousel to bottom
                heroSection.scrollTo({
                    top: heroSection.scrollHeight,
                    behavior: 'smooth'
                });
                return;
            }
        }

        // Stage 2: Scroll page to contact
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Global scroll listener for button visibility
    useEffect(() => {
        const handleWindowScroll = () => {
            const scrolled = window.scrollY;
            const windowHeight = window.innerHeight;
            const totalHeight = document.documentElement.scrollHeight;

            // Hide if we reached the bottom of the page (contact)
            if (scrolled + windowHeight >= totalHeight - 50) {
                setIsBtnVisible(false);
            } else if (!introVisible) {
                setIsBtnVisible(true);
            }
        };

        window.addEventListener('scroll', handleWindowScroll);
        return () => window.removeEventListener('scroll', handleWindowScroll);
    }, [introVisible]);

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
            // Show button after intro
            setIsBtnVisible(true);
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

            <Navigation />
            <Hero />
            <MiniBio />

            {/* Reordered to match index_test.html order: Projets, SavoirFaire, Parcours, Experience, Contact */}
            <div id="projets_experiences">
                <Projets />
            </div>

            <SavoirFaire />
            <Parcours />
            <Experience />
            <Contact />

            {/* Global Scroll Down Button */}
            <button
                type="button"
                className={`btn-scroll-down ${isBtnVisible ? '' : 'hidden'}`}
                onClick={handleScrollBtnClick}
                style={{ border: 'none', cursor: 'pointer' }}
            >
                <i className="fa-solid fa-arrow-down"></i>
            </button>
        </>
    );
}

export default Home;
