import React from 'react';

function MiniBio() {
    return (
        <div className="container-fluid p-5 text-dark" id="mini_bio">
            <div className="row">
                <div className="col-md-5 d-flex justify-content-center align-items-center mb-4 mb-md-0">
                    <div className="bio-photo-wrapper">
                        <img
                            src="/image/mini-bio4.jpg"
                            className="img-fluid bio-photo"
                            alt="Corentin Le Roux"
                            id="photo_mini_bio"
                        />
                    </div>
                </div>
                <div className="col-md-7 d-flex align-items-center" id="contenu_mini_bio">
                    <div className="bio-text-content">
                        <h2 className="mb-4">Salut ! <span className="wave">👋</span></h2>

                        <p className="bio-paragraph">
                            Moi c'est <b>Corentin</b>, j’ai 20 ans, je suis un étudiant de <span className="highlight-text">BUT MMI</span> et comme le dit mon nom je suis roux ! Marrant non ?
                        </p>

                        <p className="bio-paragraph">
                            Bon restons sérieux. La formation MMI n’a pas été mon premier choix. En effet, c’est à la suite d'une année en <b>Réseaux et Télécoms</b> que je suis arrivé ici, en MMI.
                        </p>

                        <p className="bio-paragraph">
                            Et vous savez quoi ? J’adore cette formation ! Les compétences enseignées telles que <span className="highlight-text">le graphisme</span> et <span className="highlight-text">la 3D</span> me rapprochent de plus en plus de mon objectif de devenir <b>graphiste</b>.
                        </p>

                        <p className="bio-paragraph">
                            Sinon, j’adore écouter de la musique, faire du sport, et bien sûr regarder des films et des séries. Très gros rêveur, j’adorerai traverser l’Egypte pour découvrir son histoire et ces paysages… sans oublier les chameaux ! 🐪
                        </p>

                        <p className="bio-paragraph fst-italic mt-4">
                            Bon laissons les chameaux en Egypte et venez lire la suite de mon portfolio !<br />
                            <b>Bonne lecture.</b>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MiniBio;
