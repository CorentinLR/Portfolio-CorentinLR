import React from 'react';
import { motion } from 'framer-motion';

function Parcours() {
    const cardVariants = {
        hidden: (direction) => ({
            x: direction === 'left' ? -50 : 50,
            opacity: 0
        }),
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    return (
        <div className="container-fluid mt-3" id="parcours">
            <h1 id="titre_parcours">PARCOURS</h1>
            <div className="timeline">
                <motion.div
                    className="container_timeline left"
                    custom="left"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={cardVariants}
                >
                    <div className="content">
                        <h2 className="date_timeline" id="date_parcours">2024-2027</h2>
                        <p><b id="bachelor">BUT MMI</b><br />Production audiovisuelle et graphique, communication, Web<br /><em>IUT -
                            Lannion (22)</em></p>
                    </div>
                </motion.div>
                <motion.div
                    className="container_timeline right"
                    custom="right"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={cardVariants}
                >
                    <div className="content">
                        <h2 className="date_timeline" id="date_parcours">2024</h2>
                        <p><b id="bachelor">BUT R&T</b><br /><em>IUT - Lannion (22)</em></p>
                    </div>
                </motion.div>
                <motion.div
                    className="container_timeline left"
                    custom="left"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={cardVariants}
                >
                    <div className="content">
                        <h2 className="date_timeline" id="date_parcours">2023</h2>
                        <p><b id="bachelor">Baccalauréat STI2D</b><br />Option SIN<br /><em>Lycée Chaptal - Saint-Brieuc (22)</em></p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Parcours;
