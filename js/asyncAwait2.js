console.log("async await");
console.log("URL: https://pokeapi.co/api/v2/pokemon/{id or name}/");


const input = document.querySelector("input");
const button = document.querySelector("button");
const pokemonContainer = document.querySelector(".pokemon-container");

let mike = document.getElementsByClassName("mike")
console.log("mike", mike);

function traerPokemon() {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu/")
        // .then(resp => console.log(resp));
        .then(resp => resp.json())
        .then(data => {
            console.log("REsultado", data);
            crearPokemon(data);
        })
}

function crearPokemon(pokemon) {
    const img = document.createElement("img");
    img.src = pokemon.sprites.front_default;

    const h3 = document.createElement("h3");
    h3.textContent = pokemon.name;

    const div = document.createElement("div");
    div.appendChild(img);
    div.appendChild(h3);

    console.log(pokemon.sprites.front_default);
    console.log(pokemon.name);
    console.log("div", div);

    // const content = document.createElement('div');
    // content.innerHTML = `
    // <img src="${pokemon.sprites.front_default}"></img>
    // <h3>${pokemon.name}</h3>
    // `;

    // console.log("dddd", content);
    // mike.append(content);

    mike.appendChild(div);
}

traerPokemon();