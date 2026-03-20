import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
    return (
        <div className="container-fluid mt-5 mb-5 space-y-20">
            {/* Contact Card Block */}
            <motion.div
                className="contact-card-block"
                id="contact"
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="contact-header">
                    <h1 id="contact_h1">ME CONTACTER</h1>
                    <p className="contact-subtitle">Un projet ? Une question ? N'hésitez pas !</p>
                </div>

                <div className="contact-content">
                    <a href="mailto:corentinlr10@gmail.com" className="contact-email-btn">
                        <i className="fa-solid fa-envelope"></i>
                        <span>corentinlr10@gmail.com</span>
                    </a>

                    <div className="contact-divider">
                        <span>OU</span>
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
                            <h4>Télécharger mon CV</h4>
                            <span>PDF, 2 Mo</span>
                        </div>
                        <i className="fa-solid fa-arrow-right-long arrow-icon"></i>
                    </a>
                </div>
            </motion.div>

            <div className="text-center text-muted mt-5 pb-4">
                <small>© {new Date().getFullYear()} Corentin Le Roux. Tous droits réservés.</small>
            </div>
        </div>
    );
}

export default Contact;
