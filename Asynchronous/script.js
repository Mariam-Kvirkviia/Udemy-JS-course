"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
/*
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



console.log(33);
setTimeout(() => console.log(44), 0);
console.log(44);

console.log(3);
setTimeout(() => console.log(4), 0);
Promise.resolve(5).then((e) => {
  console.log(e);
});

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

let notOK = function (x) {
  if (!x) {
    throw new Error("your make a mistake");
  }
};

function whereAmI(position) {
  let lng = position.coords.longitude;
  let lat = position.coords.latitude;
  console.log(lat, lng);
  fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=494236196032854532700x110203`
  )
    .then(function (response) {
      notOK(response.ok);

      return response.json();
    })
    .then(function (data) {
      console.log(`you are in ${data.city}`);
      return fetch(
        `https://restcountries.com/v3.1/alpha/${data.prov.toLowerCase()}`
      );
    })
    .then((response) => {
      return response.json();
    })
    .then((data2) => {
      renderCountry(data2[0]);
    })
    .catch(() => console.log("error"));
}

navigator.geolocation.getCurrentPosition(whereAmI);

let o = { n: "333", m: "999" };
let { n: first, m: second } = o;
console.log(first, second);
console.log(o);
console.log(o.n);



const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

let images = document.querySelector(".images");

let show = function (path) {
  return new Promise(function (resolve, reject) {
    let img = document.createElement("img");
    img.src = path;
    img.addEventListener("load", () => {
      images.append(img);
      resolve(img);
    });
    img.addEventListener("error", () => {
      reject(new Error("error"));
    });
  });
};
let current;
show("img/img-1.jpg")
  .then((img) => {
    current = img;
    return wait(2);
  })
  .then(() => {
    current.style.display = "none";
    return show("img/img-2.jpg");
  })
  .then((e) => {
    current = e;
    return wait(2);
  })
  .then((e) => {
    current.style.display = "none";
  })
  .catch((a) => console.error(a));

let delay = function (ms) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(`i waited ${ms / 1000}sec`), ms);
  });
};
delay(5000)
  .then(function (e) {
    console.log(e);
    return delay(4000);
  })
  .then(function (e) {
    console.log(e);
  });

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

let where = async function (country) {
  try {
    let res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    if (!res.ok) throw new Error("error");
    //res.json().then((data) => console.log(data));
    let data = await res.json();
    renderCountry(data[0]);
  } catch (err) {
    console.log(err);
  }
};
where("portugal");
console.log("first");

async function fn() {
  return "hello";
}
fn().then((e) => console.log(e));
async function foo() {
  throw Error("bar");
}

foo().catch(console.log);

async function f() {
  return 1;
}

f().then(alert);
async function f() {
  return Promise.resolve(5);
}

f().then(alert);

async function f() {
  let result = await 1; // SyntaxError
  return result;
}
f().then((e) => console.log(e));
*/
