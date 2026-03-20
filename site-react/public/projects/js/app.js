/* =================== */
/* GET DATA */
/* =================== */

// Reference : https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
// Request : https://datarmor.cotesdarmor.fr/datasets/arbres-remarquables-des-cotes-d'armor/api-doc

/*
Call The API an return the remarquable trees of Côtes-d'Armor
*/
async function getTrees() {
    const requestURL =
        "https://datarmor.cotesdarmor.fr/data-fair/api/v1/datasets/arbres-remarquables-des-cotes-d'armor/lines?size=1000&q=typearbre=remarquable"; // Fournir l'url
    const request = new Request(requestURL)

    const response = await fetch(request)
    const respJSON = await response.json() // Fournir la fonction jusque-là ?

    const trees = respJSON.results

    return trees
}

/* The trees from the API */
const TREES =  await getTrees()




var map = L.map('map').setView([48.6, -2.8], 9);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);




var markerIcon = L.icon({
    iconUrl: 'images/marker.png',
    iconSize: [38, 60],
    iconAnchor: [19, 60],
    popupAnchor: [0, -62]
});

var activeMarkerIcon = L.icon({
    iconUrl: 'images/marker-red.png',
    iconSize: [38, 60],
    iconAnchor: [19, 60],
    popupAnchor: [0, -62]
});

let activeMarker = null;

TREES.forEach((tree, index) => {  
    if (tree._geopoint == null) {
        return;
    }

    let coordonnees = tree._geopoint.split(",");

    let placeMarker = L.marker([coordonnees[0], coordonnees[1]], { icon: markerIcon }).addTo(map);

    placeMarker.bindPopup(
        "Nom : " + tree.Essence + "<br>" +
        "Commune : " + tree.Commune + "<br>" +
        "Circonférence : " + tree.Dimensioncirconference + " m" + "<br>" +
        "Envergure : " + tree.dimensionenvergure + " m"
    );

    placeMarker.on('click', () => {
        if (activeMarker) {
            activeMarker.setIcon(markerIcon);
        }

        placeMarker.setIcon(activeMarkerIcon);
        activeMarker = placeMarker;

    });
    
    infosArbre(index);

});

function infosArbre(id) {
    const infos = TREES[id];

    const container = document.querySelector(".tree-focus");
    container.innerHTML = "";

    const arbre = document.createElement("h3");
    arbre.className = "tree-name";
    arbre.innerHTML = infos.Essence;

    const commune = document.createElement("p");
    commune.className = "commune-name";
    commune.innerHTML = "Commune : " + infos.Commune;

    const circonference = document.createElement("p");
    circonference.className = "circonference-name";
    circonference.innerHTML = "Circonférence : " + infos.Dimensioncirconference + " m";

    const envergure = document.createElement("p");
    envergure.className = "envergure-name";
    envergure.innerHTML = "Envergure : " + infos.dimensionenvergure + " m";
  
    container.appendChild(arbre);
    container.appendChild(commune);
    container.appendChild(circonference);
    container.appendChild(envergure);
}
console.log(TREES);