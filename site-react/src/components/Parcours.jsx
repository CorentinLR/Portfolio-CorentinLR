import React from 'react';
import { motion } from 'framer-motion';

function Parcours() {
    const timelineData = [
        {
            period: "2024 — 2027",
            status: "En cours",
            degree: "BUT Métiers du Multimédia et de l'Internet (MMI)",
            institution: "IUT de Lannion (22)",
            description: "Formation polyvalente axée sur la production audiovisuelle et cinématographique, le design graphique vectoriel et le développement d'interfaces web interactives.",
            skills: ["Audiovisuel", "Graphisme & DA", "Web & React", "Stratégie de communication"]
        },
        {
            period: "2024",
            status: "1ère année validée",
            degree: "BUT Réseaux & Télécommunications (R&T)",
            institution: "IUT de Lannion (22)",
            description: "Fondations solides en infrastructure réseau, télécoms, logique système et protocoles numériques avant ma réorientation passion vers le multimédia.",
            skills: ["Réseaux IP", "Systèmes", "Logique de communication"]
        },
        {
            period: "2023",
            status: "Diplômé",
            degree: "Baccalauréat STI2D (Option SIN)",
            institution: "Lycée Chaptal — Saint-Brieuc (22)",
            description: "Systèmes d'Information et Numérique : première découverte approfondie de la programmation, de la logique logicielle et des technologies du numérique.",
            skills: ["Informatique", "Électronique", "Projets numériques"]
        }
    ];

    return (
        <div className="container-fluid mt-3" id="parcours">
            <div className="section-header">
                <div className="section-tag">
                    <span className="section-tag-num">04</span>
                    <span className="section-tag-sep">//</span>
                    <span className="section-tag-name">PARCOURS ACADÉMIQUE</span>
                </div>
                <h1 className="section-main-title" id="titre_parcours">PARCOURS</h1>
                <p className="section-description">
                    Un cursus alliant rigueur technique, culture du numérique et créativité multimédia.
                </p>
            </div>

            <div className="studio-timeline">
                {timelineData.map((item, index) => (
                    <motion.div
                        key={index}
                        className="timeline-item-studio"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                    >
                        <div className="timeline-aside">
                            <span className="timeline-date-bold">{item.period}</span>
                            <span className="timeline-status-badge">{item.status}</span>
                        </div>

                        <div className="timeline-spine">
                            <div className="timeline-dot-studio"></div>
                            <div className="timeline-line-studio"></div>
                        </div>

                        <div className="timeline-body-studio">
                            <h3 className="timeline-degree">{item.degree}</h3>
                            <div className="timeline-institution">
                                <i className="fa-solid fa-location-dot"></i>
                                <span>{item.institution}</span>
                            </div>
                            <p className="timeline-desc">{item.description}</p>
                            <div className="timeline-skills-row">
                                {item.skills.map((s, idx) => (
                                    <span key={idx} className="timeline-skill-pill">{s}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Parcours;
