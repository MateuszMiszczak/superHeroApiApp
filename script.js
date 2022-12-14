"use strict";

//https://superheroapi.com/api/access-token/character-id

const SUPERHERO_TOKEN = "650477136803829";
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`;
const btnNewHero = document.getElementById("newHero");
const heroImageDiv = document.getElementById("heroImgDiv");
const searchButton = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const statsDiv = document.getElementById("stats");
const heroImg = document.getElementsByClassName("heroImg");
const allImgs = document.querySelectorAll("img");

const changeBorderOfImgsToNone = () => {
  allImgs.forEach((img) => {
    img.style.border = "none";
  });
};

const getRandomSuperHero = (id) => {
  fetch(`${BASE_URL}/${id}/image`)
    .then((response) => response.json())
    .then((json) => {
      const name = `<h2> ${json.name} </h2>`;
      heroImageDiv.innerHTML = `${name}<img src=${json.url} height=200 width=200 />`;
      getHeroStats(id);
    });
};

const generateNewId = () => {
  let randomNumber = Math.floor(Math.random() * 731) + 1;
  return randomNumber;
};

const getSearchSuperHero = (name) => {
  fetch(`${BASE_URL}/search/${name}`)
    .then((response) => response.json())
    .then((json) => {
      const hero = json.results[0];
      const name = `<h2> ${hero.name} </h2>`;
      const int = `<h3>Intelligence: ${hero.powerstats.intelligence} </h3>`;
      const combat = `<h3>Combat: ${hero.powerstats.combat} </h3>`;
      const dur = `<h3>Durability: ${hero.powerstats.durability} </h3>`;
      const power = `<h3>Power: ${hero.powerstats.power} </h3>`;
      const speed = `<h3>Speed: ${hero.powerstats.speed} </h3>`;
      const strength = `<h3>Strength: ${hero.powerstats.strength} </h3>`;

      heroImageDiv.innerHTML = `${name} <img src=${hero.image.url} height=200 width=200 /> `;
      statsDiv.innerHTML = `${int} ${combat} ${dur} ${power} ${speed} ${strength} `;
    });
};

const getHeroStats = (id) => {
  fetch(`${BASE_URL}/${id}/powerstats`)
    .then((response) => response.json())
    .then((json) => {
      const int = `<h3>Intelligence: ${json.intelligence} </h3>`;
      console.log(int);
      const combat = `<h3>Combat: ${json.combat} </h3>`;
      const dur = `<h3>Durability: ${json.durability} </h3>`;
      const power = `<h3>Power: ${json.power} </h3>`;
      const speed = `<h3>Speed: ${json.speed} </h3>`;
      const strength = `<h3>Strength: ${json.strength} </h3>`;

      statsDiv.innerHTML = `${int} ${combat} ${dur} ${power} ${speed} ${strength} `;
    });
};

const runApp = () => {
  changeBorderOfImgsToNone();
  btnNewHero.onclick = () => getRandomSuperHero(generateNewId());
  searchButton.onclick = () => getSearchSuperHero(searchInput.value);
};

runApp();
