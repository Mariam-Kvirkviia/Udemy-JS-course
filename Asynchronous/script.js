"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
let country = function (c) {
  let request = new XMLHttpRequest();

  request.open("GET", `https://restcountries.com/v3.1/name/${c}`);
  request.send();
  request.addEventListener("load", function () {
    //destruction
    let [data] = JSON.parse(this.responseText);

    let html = ` <article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.altSpellings[1]}</h3>
            <h4 class="country__region">${data.continents}</h4>
            <p class="country__row"><span>👫</span>${data.population}</p>
           
            
          </div>
        </article>`;
    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
};
//country("georgia");
//country("ukraine");
let renderCountry = function (data) {
  let html = ` <article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.altSpellings[1]}</h3>
            <h4 class="country__region">${data.continents}</h4>
            <p class="country__row"><span>👫</span>${data.population}</p>
           
            
          </div>
        </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};
let countryNaibour = function (c) {
  let request = fetch(`https://restcountries.com/v3.1/name/${c}`);
  console.log(request);
  request.addEventListener("load", function () {
    //destruction
    let request2 = new XMLHttpRequest();
    let [data] = JSON.parse(this.responseText);

    renderCountry(data);
    let countryBorder = data.borders?.[0];
    request2.open(
      "GET",
      `https://restcountries.com/v3.1/alpha/${countryBorder.toLowerCase()}`
    );
    request2.send();
    request2.addEventListener("load", function () {
      let [data2] = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2);
    });
  });
};
countryNaibour("ukraine");
