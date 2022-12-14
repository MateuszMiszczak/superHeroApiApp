"use strict";

//https://superheroapi.com/api/access-token/character-id

const SUPERHERO_TOKEN = "650477136803829";
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`;
const btnNewHero = document.getElementById("newHero");
const heroImageDiv = document.getElementById("heroImg");
const searchButton = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const heroNameDiv = document.getElementById("heroName");
const statsDiv = document.getElementById("stats");

const getRandomSuperHero = (id) => {
  fetch(`${BASE_URL}/${id}/image`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      heroNameDiv.innerHTML = `${json.name}`;
      heroImageDiv.innerHTML = `<img src=${json.url} height=200 width=200 />`;
    });
};

const generateNewId = () => {
  let randomNumber = Math.floor(Math.random() * 731) + 1;
  return randomNumber;
};

const getSearchSuperHero = (name) => {
  console.log(searchInput.value);
  fetch(`${BASE_URL}/search/${name}`)
    .then((response) => response.json())
    .then((json) => {
      const hero = json.results[0];
      console.log(hero);
      heroNameDiv.innerHTML = `${hero.name}`;
      heroImageDiv.innerHTML = `<img src=${hero.image.url} height=200 width=200 />`;
      statsDiv.innerHTML = `Intelligence: ${hero.powerstats.intelligence}
      Combat: ${hero.powerstats.combat}
      Durability: ${hero.powerstats.durability}
      Power: ${hero.powerstats.power}
      Speed: ${hero.powerstats.speed}
      Strength: ${hero.powerstats.strength}`;
    });
};

btnNewHero.onclick = () => getRandomSuperHero(generateNewId());
searchButton.onclick = () => getSearchSuperHero(searchInput.value);
