"use strict";

//https://superheroapi.com/api/access-token/character-id

const SUPERHERO_TOKEN = "650477136803829";
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`;
const btnNewHero = document.getElementById("new-hero");
const heroImageDiv = document.getElementById("hero-img");

const getSuperHero = (id, name) => {
  fetch(`${BASE_URL}/${id}/image`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      heroImageDiv.innerHTML = `<img src=${json.url} height=200 width=200 />`;
    });
};

const generateNewId = () => {
  let randomNumber = Math.floor(Math.random() * 731) + 1;
  return randomNumber;
};

const buttonOnclickChangeHero = () => {
  btnNewHero.onclick = () => getSuperHero(generateNewId());
};

buttonOnclickChangeHero();
