import React from 'react';
import { motion } from 'framer-motion';

function SavoirFaire() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <div className="container-fluid" id="savoir_faire">
            <div className="section-header">
                <div className="section-tag">
                    <span className="section-tag-num">03</span>
                    <span className="section-tag-sep">//</span>
                    <span className="section-tag-name">TECHNIQUE</span>
                </div>
                <h1 className="section-main-title" id="titre_savoir_faire">COMPÉTENCES</h1>
                <p className="section-description">
                    Les logiciels et outils créatifs que je maîtrise au quotidien pour concevoir, réaliser et développer des projets multimédias complets.
                </p>
            </div>

            <motion.div
                className="bento-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div className="bento-card" id="card_affinity_grid" variants={itemVariants}>
                    <span className="bento-cat-tag">Design Vectoriel</span>
                    <div className="icon-wrapper">
                        <img src={import.meta.env.BASE_URL + "image/affinity designer logo.png"} alt="Affinity Designer" />
                    </div>
                    <div className="text-wrapper">
                        <h3>Affinity Designer</h3>
                        <p className="bento-subtitle">Création graphique & vectorielle</p>
                        <div className="bento-skill-pills">
                            <span>Logos</span>
                            <span>Affiches</span>
                            <span>Charte graphique</span>
                            <span>PAO</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div className="bento-card" id="card_vscode_grid" variants={itemVariants}>
                    <span className="bento-cat-tag">Développement Web</span>
                    <div className="icon-wrapper">
                        <img src={import.meta.env.BASE_URL + "image/visual_studio_code.png"} alt="VS Code" />
                    </div>
                    <div className="text-wrapper">
                        <h3>VS Code</h3>
                        <p className="bento-subtitle">Code front-end & interactif</p>
                        <div className="bento-skill-pills">
                            <span>HTML5 / CSS3</span>
                            <span>JavaScript</span>
                            <span>React</span>
                            <span>Responsive</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div className="bento-card" id="card_davinci_grid" variants={itemVariants}>
                    <span className="bento-cat-tag">Post-Production</span>
                    <div className="icon-wrapper">
                        <img src={import.meta.env.BASE_URL + "image/DaVinci_Resolve_Studio.png"} alt="DaVinci" />
                    </div>
                    <div className="text-wrapper">
                        <h3>DaVinci Resolve</h3>
                        <p className="bento-subtitle">Montage vidéo & étalonnage</p>
                        <div className="bento-skill-pills">
                            <span>Montage Cut</span>
                            <span>Colorimétrie</span>
                            <span>Sound Design</span>
                            <span>Export Master</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div className="bento-card" id="card_photo_grid" variants={itemVariants}>
                    <span className="bento-cat-tag">Image & Retouche</span>
                    <div className="icon-wrapper">
                        <img src={import.meta.env.BASE_URL + "image/logo_affinity_photo.png"} alt="Affinity Photo" />
                    </div>
                    <div className="text-wrapper">
                        <h3>Affinity Photo</h3>
                        <p className="bento-subtitle">Traitement photo & compositing</p>
                        <div className="bento-skill-pills">
                            <span>Détourage</span>
                            <span>Correction couleur</span>
                            <span>Retouche HD</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div className="bento-card wide" id="card_camera_grid" variants={itemVariants}>
                    <span className="bento-cat-tag">Prise de Vue</span>
                    <div className="icon-wrapper">
                        <img src={import.meta.env.BASE_URL + "image/appareil_photo.png"} alt="Photo" />
                    </div>
                    <div className="text-wrapper">
                        <h3>Photographie</h3>
                        <p className="bento-subtitle">Cadrage, lumière & composition</p>
                        <div className="bento-skill-pills">
                            <span>Boîtier Reflex</span>
                            <span>Gestion exposition</span>
                            <span>Photo studio</span>
                            <span>Reportage</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div className="bento-card wide" id="card_video_grid" variants={itemVariants}>
                    <span className="bento-cat-tag">Audiovisuel</span>
                    <div className="icon-wrapper">
                        <img src={import.meta.env.BASE_URL + "image/caméra-Photoroom.png"} alt="Vidéo" />
                    </div>
                    <div className="text-wrapper">
                        <h3>Tournage Vidéo</h3>
                        <p className="bento-subtitle">Captation & mise en scène</p>
                        <div className="bento-skill-pills">
                            <span>Plans cinématiques</span>
                            <span>Prise de son</span>
                            <span>Scénarisation</span>
                            <span>Court-métrage</span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default SavoirFaire;
