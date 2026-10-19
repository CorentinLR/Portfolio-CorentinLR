import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText('corentinlr10@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
    };

    return (
        <div className="container-fluid mt-5 mb-5 space-y-20">
            {/* Contact Card Block */}
            <motion.div
                className="contact-card-block"
                id="contact"
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="section-header contact-card-header">
                    <div className="section-tag">
                        <span className="section-tag-num">06</span>
                        <span className="section-tag-sep">//</span>
                        <span className="section-tag-name">CONTACT & ÉCHANGE</span>
                    </div>
                    <h1 className="section-main-title" id="contact_h1">ME CONTACTER</h1>
                    <p className="section-description">
                        Une opportunité de stage, d'alternance ou un projet créatif à concrétiser ? Mes canaux de contact sont ouverts !
                    </p>
                </div>

                <div className="contact-status-wrapper">
                    <span className="contact-status-dot"></span>
                    <span>Disponible pour stage & alternance 2026</span>
                </div>

                <div className="contact-content">
                    <div className="contact-email-group">
                        <a href="mailto:corentinlr10@gmail.com" className="contact-email-btn" title="M'envoyer un e-mail">
                            <i className="fa-solid fa-envelope"></i>
                            <span>corentinlr10@gmail.com</span>
                        </a>

                        <button
                            type="button"
                            className={`contact-copy-btn ${copied ? 'copied' : ''}`}
                            onClick={handleCopyEmail}
                            title="Copier l'adresse e-mail"
                            aria-label="Copier l'adresse email"
                        >
                            <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'}`}></i>
                            <span>{copied ? 'Copié !' : 'Copier'}</span>
                        </button>
                    </div>

                    <div className="contact-divider">
                        <span>OU RETROUVEZ-MOI SUR</span>
                    </div>

                    <div id="reseaux_sociaux">
                        <a href="https://www.linkedin.com/in/corentin-le-roux-79219a33b/" target="_blank" rel="noreferrer" className="social-btn linkedin">
                            <i className="fa-brands fa-linkedin"></i>
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://www.instagram.com/corentin__lrx/" target="_blank" rel="noreferrer" className="social-btn instagram">
                            <i className="fa-brands fa-instagram"></i>
                            <span>Instagram</span>
                        </a>
                    </div>
                </div>

                <div className="contact-footer">
                    <a href="https://drive.google.com/file/d/1GArw7--xSFdr-I7m4fUVSI7iL61BOvqT/view?usp=sharing" target="_blank" rel="noreferrer" className="cv-btn">
                        <div className="cv-icon"><i className="fa-solid fa-file-pdf"></i></div>
                        <div className="cv-text">
                            <h4>Télécharger mon CV complet</h4>
                            <span>Format PDF • Mis à jour 2026</span>
                        </div>
                        <i className="fa-solid fa-arrow-right-long arrow-icon"></i>
                    </a>
                </div>
            </motion.div>

            <div className="text-center text-muted mt-5 pb-4 footer-legal">
                <small>© {new Date().getFullYear()} Corentin Le Roux • Portfolio Créatif MMI. Tous droits réservés.</small>
            </div>
        </div>
    );
}

export default Contact;
