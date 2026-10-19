import React from 'react';
import { motion } from 'framer-motion';

function Experience() {
    const experiencesList = [
        {
            year: "2026",
            type: "Stage Professionnel",
            company: "Startup Aerosolution",
            role: "Chargé de Communication et Marketing",
            description: "Conception de supports graphiques, stratégie de communication multicanale et valorisation de l'identité de marque.",
            skills: ["Stratégie digitale", "Création graphique", "Marketing B2B", "Contenus visuels"]
        },
        {
            year: "2026",
            type: "Emploi Saisonnier",
            company: "Mediaposte",
            role: "Agent de production en centre de tri",
            description: "Gestion du flux logistique, tri mécanisé et manuel à cadence soutenue avec respect strict des procédures de qualité.",
            skills: ["Organisation", "Rigueur", "Travail en équipe", "Gestion du rythme"]
        },
        {
            year: "2024",
            type: "Emploi Saisonnier",
            company: "Agent de courrier & logistique",
            role: "Tri et livraison de colis",
            description: "Distribution autonome et contact usager, respect des délais de livraison et sens des responsabilités sur le terrain.",
            skills: ["Autonomie", "Sens du service", "Efficacité opérationnelle"]
        }
    ];

    return (
        <div className="container_experience" id="experiences">
            <div className="section-header">
                <div className="section-tag">
                    <span className="section-tag-num">05</span>
                    <span className="section-tag-sep">//</span>
                    <span className="section-tag-name">MONDE DU TRAVAIL</span>
                </div>
                <h1 className="section-main-title" id="titre_experiences">EXPÉRIENCES PROFESSIONNELLES</h1>
                <p className="section-description">
                    Des missions et engagements concrets qui ont forgé mon autonomie, ma rigueur et mon sens de l'organisation.
                </p>
            </div>

            <div className="studio-experience-grid">
                {experiencesList.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="studio-experience-card"
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                    >
                        <div className="exp-card-header">
                            <span className="exp-year-badge">{exp.year}</span>
                            <span className="exp-type-tag">{exp.type}</span>
                        </div>
                        <h3 className="exp-company">{exp.company}</h3>
                        <h4 className="exp-role">{exp.role}</h4>
                        <p className="exp-description">{exp.description}</p>
                        <div className="exp-skills-row">
                            {exp.skills.map((s, idx) => (
                                <span key={idx} className="exp-skill-pill">{s}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
