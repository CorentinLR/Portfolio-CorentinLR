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
            <h1 id="titre_savoir_faire">SAVOIR FAIRE</h1>
            <motion.div
                className="bento-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div className="bento-card" id="card_affinity_grid" variants={itemVariants}>
                    <div className="icon-wrapper"><img src="/image/affinity designer logo.png" alt="Affinity Designer" /></div>
                    <div className="text-wrapper">
                        <h3>Affinity Designer</h3>
                        <p>Création graphique</p>
                    </div>
                </motion.div>
                <motion.div className="bento-card" id="card_vscode_grid" variants={itemVariants}>
                    <div className="icon-wrapper"><img src="/image/visual_studio_code.png" alt="VS Code" /></div>
                    <div className="text-wrapper">
                        <h3>VS Code</h3>
                        <p>Développement Web</p>
                    </div>
                </motion.div>
                <motion.div className="bento-card" id="card_davinci_grid" variants={itemVariants}>
                    <div className="icon-wrapper"><img src="/image/DaVinci_Resolve_Studio.png" alt="DaVinci" /></div>
                    <div className="text-wrapper">
                        <h3>DaVinci Resolve</h3>
                        <p>Montage Vidéo</p>
                    </div>
                </motion.div>
                <motion.div className="bento-card" id="card_photo_grid" variants={itemVariants}>
                    <div className="icon-wrapper"><img src="/image/logo_affinity_photo.png" alt="Affinity Photo" /></div>
                    <div className="text-wrapper">
                        <h3>Affinity Photo</h3>
                        <p>Retouche photo</p>
                    </div>
                </motion.div>
                <motion.div className="bento-card wide" id="card_camera_grid" variants={itemVariants}>
                    <div className="icon-wrapper"><img src="/image/appareil_photo.png" alt="Photo" /></div>
                    <div className="text-wrapper">
                        <h3>Photographie</h3>
                        <p>Prise de vues</p>
                    </div>
                </motion.div>
                <motion.div className="bento-card wide" id="card_video_grid" variants={itemVariants}>
                    <div className="icon-wrapper"><img src="/image/caméra-Photoroom.png" alt="Vidéo" /></div>
                    <div className="text-wrapper">
                        <h3>Vidéo</h3>
                        <p>Prise de plans vidéo</p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default SavoirFaire;
