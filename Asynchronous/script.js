"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
/*let country = function (c) {
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
*/
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
/*
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
let country = function (c) {
  fetch(`https://restcountries.com/v3.1/name/${c}`)
    .then(function (response) {
      if (!response.ok) {
        throw new Error(333333);
      }
      return response.json();
    })
    .then(function (data) {
      renderCountry(data[0]);
      let sosed = data[0]?.borders[0];
      return fetch(
        `https://restcountries.com/v3.1/alpha/${sosed.toLowerCase()}`
      );
    })
    .then(function (response2) {
      return response2.json();
    })
    .then(function (data2) {
      renderCountry(data2[0]);
      let sosed = data2[0]?.borders[0];
      return fetch(
        `https://restcountries.com/v3.1/alpha/${sosed.toLowerCase()}`
      );
    })
    .catch((err) => alert("error"));
};
country("porgfhfhfhf");

//exercises  1
let whereAmI = function (lon, lat) {
  fetch(
    `https://geocode.xyz/${lon},${lat}?geoit=json&auth=494236196032854532700x110203}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("error");
      }
      return response.json();
    })
    .then((data) => {
      let d = data.prov.toLowerCase();
      console.log(`Yo're in ${data.city} , ${data.country}`);
      return fetch(`https://restcountries.com/v3.1/alpha/${d}`);
    })
    .then((response2) => {
      if (!response2.ok) {
        throw new Error("error");
      }
      return response2.json();
    })
    .then((data2) => {
      renderCountry(data2[0]);
    })
    .catch((error) => console.log("error"));
};
whereAmI(48.864716, 2.349014);
whereAmI(4716, 2.349014);

console.log(33);
setTimeout(() => console.log(44), 0);
console.log(44);

console.log(3);
setTimeout(() => console.log(4), 0);
Promise.resolve(5).then((e) => {
  console.log(e);
});
*/
let p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve(6669);
    } else {
      reject(new Error("error"));
    }
  }, 1000);
})
  .then((e) => {
    console.log(e);
  })
  .catch((e) => console.error(e));
