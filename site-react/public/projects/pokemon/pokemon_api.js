function listPokemonDetail(domElementId, pokemonData) {
    const params = new URLSearchParams(document.location.search);
    const pokName = params.get("pokemonName");
    const pokId = getPokemonIdByName(pokName, pokemonData);
    const pokemon = pokemonData[pokId];
    const domElement = document.getElementById(domElementId);
    const backgroundColor = getBackgroundColorByType(pokemon.type[0]);

    domElement.innerHTML = `
        <div class="box_creature" id="${pokemon.collection_id}">
            <div class="container_image">
                <img class="image_detail" src="img/full/${getPokemonIdByName(pokemon.identifier, pokemonData)}.png" />
            </div>
            <div class="container_texte" style="background-color: ${backgroundColor};">
                <p class="nom_box_creature" style="background-color: ${backgroundColor};">${pokemon.identifier}</p>
                <p class="texte_box_creature">Height: ${pokemon.height}</p>
                <p class="texte_box_creature">Weight: ${pokemon.weight}</p>
                <p class="texte_box_creature">Base Experience: ${pokemon.base_experience}</p>
            </div>
        </div>
    `;
}

function getPokemonIdByName(name, pokemonData) {
    for (key in pokemonData){
        if (name == pokemonData[key]["identifier"]){
            return key;
        }
    }
}

function createPokemonDropdown(domElementId, pokemonData) {
    const domElement = document.getElementById(domElementId);

    const selectElement = document.createElement('select');
    selectElement.id = 'pokemonDropdown';

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'SÃ©lectionner un pokemon';
    selectElement.appendChild(defaultOption);

    Object.values(pokemonData).forEach(pokemon => {
        const option = document.createElement('option');
        option.value = pokemon.identifier;
        option.textContent = pokemon.identifier.charAt(0).toUpperCase() + pokemon.identifier.slice(1); // Capitalise le premier caractÃ¨re (oui ca ne sert a rien)
        selectElement.appendChild(option);
    });

    domElement.appendChild(selectElement);
}


function listAllPokemon(domElementId, pokemonData) {
    const domElement = document.getElementById(domElementId);
    domElement.innerHTML = Object.values(pokemonData).map(pokemon => `
        <div class="box_catalogue" style="background-color: ${getBackgroundColorByType(pokemon.type[0])};">
            <img onclick="window.location.href='creature.html?pokemonName=${pokemon.identifier}'" class="image_catalogue" src="img/96px/${getPokemonIdByName(pokemon.identifier, pokemonData)}.png" />
            <p class="texte_box_catalogue">${pokemon.identifier}</p>
            <button onclick="addPokemonToCollection('test', Math.floor(Math.random()*199+1),pokemonData)" class="button_add">Ajouter</button>
        </div>
    `).join('');
}


function listAllPokemonFromCollection(domElementId, collectionData, pokemonData) {
    const domElement = document.getElementById(domElementId);
    const pokemons = collectionData.map(assoc => {
        const pokemon = pokemonData[assoc.pokemon_id];
        return {
            ...pokemon,
            pokemon_nickname: assoc.pokemon_nickname,
            collection_id: assoc.collection_id
        };
    });
    domElement.innerHTML = pokemons.map(pokemon => `
        <div class="box_collection" id="${pokemon.collection_id}">
            <img  onclick="window.location.href='creature.html?pokemonName=${pokemon.identifier}'" class="image_collection" src="img/96px/${getPokemonIdByName(pokemon.identifier, pokemonData)}.png" />
            <p class="texte_box_collection">${pokemon.identifier}</p>
            <p class="texte_box_collection pokemon_nickname">Nom: ${pokemon.pokemon_nickname}</p>
            <div class="button_container">
                <button onclick="changePokemonNickname('${pokemon.collection_id}')" class="button_modify">Modifier</button>
                <button onclick="deletePokemonFromCollection('${pokemon.collection_id}')" class="button_delete">Supprimer</button>
            </div>
        </div>
    `).join('');
}


/*
function addPokemonToCollection(domElementId, pokemonId, pokemonData) {
    const domElement = document.getElementById(domElementId);

    const pokemon = pokemonData[pokemonId];

    const pokemonElement = document.createElement('div');
    pokemonElement.classList.add('pokemon');    
    pokemonElement.id = 0; // On peut remplacer l'id par un id gÃ©nÃ©rÃ© unique (un nombre de milisecondes) avec l'objet Date() => voir la doc !
    // Stocker l'id gÃ©nÃ©rÃ© avec la date pourrait servir pour crÃ©er un bouton de suppression
    pokemonElement.innerHTML = `
        <p>Pokemon: ${pokemon.identifier}</p>
        <p>Surnom: -----</p>
    `;

    domElement.appendChild(pokemonElement);
}*/

function addPokemonToCollection(domElementId, pokemonId, pokemonData) {
    const domElement = document.getElementById(domElementId);

    const pokemon = pokemonData[pokemonId];
    const collectionId = `pokemon-${Date.now()}`;

    const pokemonElement = document.createElement('div');
    pokemonElement.classList.add('pokemon');    
    pokemonElement.id = collectionId;
    pokemonElement.innerHTML = `
        <p>Pokemon: ${pokemon.identifier}</p>
        <p class="pokemon_nickname">Nom: -----</p>
    `;

    domElement.appendChild(pokemonElement);
    addPokemonToCollectionData(collectionId, pokemonId);
}




function deletePokemonFromCollection(domElementId) {
    const pokemonElement = document.getElementById(domElementId);
    
    if (pokemonElement) {
        pokemonElement.remove();
    }
}


function changePokemonNickname(collectionId) { 
    const newNickname = prompt("Veuillez saisir un nouveau surnom pour le Pokémon:");
    if (newNickname) {
        const domElement = document.getElementById(collectionId);
        const nicknameElement = domElement.querySelector('.pokemon_nickname');
        if (nicknameElement) {
            nicknameElement.textContent = `Nom: ${newNickname}`;
        }
    }
}



