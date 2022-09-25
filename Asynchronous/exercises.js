"use strict";
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
//exercises  1
/*
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

let res = function () {
  return new Promise((resolve, reject) => {
    //reject(444);
    resolve("start counting ");
  });
};
function counter(val) {
  console.log(val);
}
res()
  .then((e) => {
    counter(e);
    return "one";
  })
  .then((e) => counter(e))
  .catch((r) => console.log(new Error(r)));





let img1 = document.createElement("img");
img1.setAttribute("src", "img/img-1.jpg");
let img2 = document.createElement("img");
img2.setAttribute("src", "img/img-3.jpg");
//EXERCISES 2

let images = document.querySelector(".images");
function createElement(img) {
  return new Promise((resolve) => {
    img.addEventListener("load", function () {
      images.append(img);

      resolve(img);
    });
  });
}
let gg;
createElement(img1).then((img) => {
  setTimeout(() => {
    return createElement(img2);
  }, 5000);
});
//.then(() => //console.log(3));
console.log(gg);
/*
console.log("start");

const promise1 = Promise.resolve().then(() => {
  console.log("promise1");
  const timer2 = setTimeout(() => {
    console.log("timer2");
  }, 0);
});

const timer1 = setTimeout(() => {
  console.log("timer1");
  const promise2 = Promise.resolve().then(() => {
    console.log("promise2");
  });
}, 0);

console.log("end");
Promise.reject(1)
  // skip
  // обработать reject можно только в .catch
  .then((data) => {
    console.log(data);
  })

  // второй аргумент .then вместо .catch
  .then(null, (data) => console.log(data)) // => 1

  // после обработки ошибки попадаем в .then
  // => "ok"
  .then(() => console.log("ok"));

Promise.reject()

  .then(
    (data) => console.log("ok"), 
    (data) => console.log("error")
  );

  Promise.resolve("1")
   
    .then(null)

    .then(data => console.log(data)) 
    

Promise.reject("Api Error")

  .then((data) => console.log("ok"))

  .catch((error) => {
    console.log(error);
    return "1";
  })

  .then((data) => {
    console.log(data);
  });
Promise.reject()

  .catch(() => {
    console.log("error1");
    return Promise.reject();
  })

  .catch(() => {
    console.log("error2");
  });

Promise.resolve()
  .then((data) => {
    throw new Error("Api Error");

    return 1;
  })

  .then((data) => console.log("ok"))

  .catch((error) => {
    console.log(error.message);
    return "2";
  })

  .then((data) => {
    console.log(data);
  });
Promise.resolve().then(() => {
  throw new Error("Api Error");
});

// код будет работать
setTimeout(() => {
  console.log("setTimeout"); // => "setTimeout"
}, 1000);
Promise.resolve()
  .then(() => console.log(1)) // "Первый"
  .then(() => {
    console.log(2);
    throw new Error();
  }) // "Третий"
  .catch(() => console.log(3)) // "Пятый"
  .then(() => console.log(4)); // "Седьмой"

Promise.resolve()
  .then(() => console.log(11)) // "Второй"
  .then(() => {
    console.log(12);
    throw new Error();
  }) // "Четвертый"
  .catch(() => console.log(13)) // "Шестой"
  .then(() => console.log(14));

Promise.reject()
  // обработка Promise.reject
  .catch(() => {
    console.log("error1"); // => "error1"
    return Promise.reject();
    // аналогично
    // return reject();
  })

  // обработка Promise.reject из предыдущего .catch
  .catch(() => {
    console.log("error2"); // => "error2"
  });
let arr = "fgghghfdsf";
//arr = [...new Set(arr)];
console.log(Array.from(new Set(arr)).join(""));
let object = {};
let m = 0;
let m2 = 0;
function times(arr) {
  arr.forEach((el) => {
    object[el] ? (object[el] += 1) : (object[el] = 1);
  });

  for (let [x, y] of Object.entries(object)) {
    if (y > m) {
      m = y;
      m2 = x;
    }
  }
  console.log(m2, m);
}
times(["hello", "hello", "my", "my", "my", "g"]);

function string(x, y) {
  y = y.split("").reverse().join("");
  if (x === y) {
    return true;
  } else {
    return false;
  }
}
console.log(string("mardi", "iram"));

let count;
function sub(x, y) {
  if (x.length < y.length) {
    return false;
  } else {
    y.forEach((el) => {
      if (x.includes(el)) {
      } else {
        count = 1;
      }
    });
    return count !== 1;
  }
}
console.log(sub([1, 1, 1, 3], [1, 3, 3]));
*/
/* 
function doReverse(p1) {
  return p1.split("").reverse().join("");
}
function someFunction(p1, p2, p3) {
  p1 = doReverse(p1);
  p2 = ["1", "2", "3"];
  p3.push("9999");
}
let a = "xyz";
let b = ["123", "567"];
let c = ["abc", "def"];
someFunction(a, b, c);
console.log(a);
console.log(b);
console.log(c);



var number = 10;
var display = function () {
  console.log(number);
  var number = 20;
};
display();


console.log(234 ?? 23);
console.log(0 || 23);
console.log(234 && 23);

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
for (let [i, player] of game.scored.entries())
  console.log(`goal ${i + 1} : ${player}`);

let sum = 0;
let odds = Object.values(game.odds);
for (let value of Object.values(game.odds)) sum += value;
console.log(sum / odds.length);


for (let [team, num] of Object.entries(game.odds)) {
  let str = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`odd with ${str} ${num}`);
}


const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);
let events = [...new Set(gameEvents.values())];
gameEvents.delete(64);
console.log(events);
for (let [num, str] of gameEvents) {
  let half = num < 45 ? "first" : "second";
  console.log(`${half} half ${num}${str}}`);
}
*/
/* 


let num = 0;
function camel(s) {
  s.forEach((str) => {
    num += 1;
    str = str.trim().split("_");
    console.log(
      str[0].toLowerCase() +
        str[1].slice(0, 1).toUpperCase() +
        str[1].slice(1).toLowerCase().padEnd(20),
      "😅".repeat(num)
    );
  });
}
camel([" first_n", "fff_e", "3436_i"]);
*/
/*
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
let arr = flights.split("+");
arr.forEach((el) => {
  let [el1, el2, el3, el4] = el.split(";");
  el1 = el1.split("_");
  el1 = el1.length > 2 ? "🔴" + el1.join(" ") : el1.join(" ");
  el2 = el2.slice(0, 3).toUpperCase();

  el3 = el3.slice(0, 2).toUpperCase();
  el4 = el4.split(":").join("h");
  console.log(`${el1} from ${el2} to ${el3} (${el4})`.padStart(45));
});

// primitives do change but not objects!
let flight = "kh234";
let jonas = {
  name: "jonas",
  age: "34",
};
let checkin = function (flightnum, passenger) {
  flightnum = "he456";
  passenger.name = "mari";
};
checkin(flight, jonas);
console.log(flight);
console.log(jonas.name);


let luftansa = {
  airline: " luftansa",
  code: "lh",
  bookings: [],
  book(flightnum, name) {
    console.log(`${name} ${this.airline}`);
  },
};
luftansa.book("34", "georgia");
let eurowigs = {
  airline: " eurowigs",
  code: "eu",
};
let booked = luftansa.book;
booked.apply(eurowigs, ["45", "tbilisi"]);
booked.call(eurowigs, "45", "tbilisi");
booked.bind(eurowigs, "45", "tbilisi")();

var obj = { num: 2 };
function add(a) {
  console.log(this.num + a);
}
add.bind(obj, 5)();

var person = {
  first: "John",
  last: "Smith",
  full: function () {
    console.log(this.first + " " + this.last);
  },
  personTwo: {
    first: "Allison",
    last: "Jones",
    full: function () {
      console.log(this.first + " " + this.last);
    },
  },
};

person.full();
person.personTwo.full();

let ten = { a: 7, b: 6 };
function add(c, d) {
  console.log(this.a + this.b + c + d);
}
add.call(ten, 3, 4);
var small = {
  a: 1,
  go: function (b, c, d) {
    console.log(this.a + b + c + d);
  },
};
var large = {
  a: 100,
};

small.go(2, 3, 4);
small.go.call(large, 2, 3, 4);

let luftansa = {
  airline: " luftansa",
  code: "lh",
  bookings: [],
  book(flightnum, name) {
    console.log(`${name} ${this.airline}`);
  },
};
luftansa.plane = 3000;
luftansa.buyPlane = function () {
  this.planes++;
};

function addTax(value) {
  return function (rate) {
    console.log(value + value * rate);
  };
}
let addVat = addTax(3);
addVat(4);
addVat(5);
addTax(3)(4);

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  register() {
    let answer = prompt([this.question, this.options.join("\n")]);
    if (typeof Number(answer) === "number" && answer >= 0 && answer <= 3) {
      this.answers[answer] += 1;
    }
    console.log(this.answers);
  },
  displayResults(type = "array") {
    if (type === "string") {
      console.log(`poll results are ${this.answers}`);
    } else {
      console.log(...this.answers);
    }
  },
};
// if we used listener we would need BIND()
poll.register();
poll.displayResults();
//we must add answers!!!(like in displayResults)

poll.displayResults.bind({ answers: [5, 2, 3]},"string" )();
*/
//IIFE
/*
(function () {
  console.log(33);
})();
(() => console.log(7))();
*/
//map/filter/reduce
let j = [3, 1, 2, 12, 5];
j = j
  .map((el) => (el <= 2 ? 2 * el : 16 + el * 4))
  .filter((el) => el > 18)
  .reduce((acc, el, _, arr) => acc + el / arr.length, 0);

console.log(j);
