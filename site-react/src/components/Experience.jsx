import React from 'react';
import { motion } from 'framer-motion';

function Experience() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <div className="container_experience" id="experiences">
            <div className="heading">
                <h1 id="titre_experiences">Expériences Professionnelles</h1>
            </div>
            <motion.div
                className="experiences"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div className="experience-card" variants={itemVariants}>
                    <div className="card-decoration"></div>
                    <div className="date-badge">2026</div>
                    <h2 className="experience-title">Stage professionnel - Startup Aerosolution</h2>
                    <p className="experience-description">Chargé de Communication et Marketing.</p>
                </motion.div>

                <motion.div className="experience-card" variants={itemVariants}>
                    <div className="card-decoration"></div>
                    <div className="date-badge">2026</div>
                    <h2 className="experience-title">Emploi saisonnier - Mediaposte</h2>
                    <p className="experience-description">Agent de production dans un centre de tri.</p>
                </motion.div>

                <motion.div className="experience-card" variants={itemVariants}>
                    <div className="card-decoration"></div>
                    <div className="date-badge">2024</div>
                    <h2 className="experience-title">Emploi saisonnier - Agent de courrier</h2>
                    <p className="experience-description">Tri et livraison de colis. Travail d'équipe.</p>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Experience;
