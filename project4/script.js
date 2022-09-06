'use strict';

/* //default parametrs
function plane(date = 12, num = 6, country = 'georgia') {
  let data = {
    date,
    num,
    country,
  };
  console.log(data);
}
plane(4556, undefined, 'malibu');
*/

/*//even in fucntion we change object reference
let passport = '34866';
let passanger = {
  name: 'mari',
  country: 'georgia',
};
function check(passport, passanger) {
  passport = '111111';
  passanger.country = 'ukraine';
}

check(passport, passanger);
console.log(passport, passanger.country);
*/

/*//destraction of objects

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
let [players1, players2] = game.players;

let [gk, ...fieldplayers1] = players1;
let [gk2, fieldplayers2] = players2;
let allPlayers = [...players1, ...players2];
let players1Final = ['thiago', 'coutinho', 'perisic', ...players1];
let { team1, x: draw, team2 } = game.odds;
console.log(team1);
function printGoals(...gamers) {
  for (let gamer of gamers.entries()) {
    console.log(gamer);
  }
}
printGoals('mari', 'keti', 'koka');*/

/* string practice
let flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
let get3 = str => str.slice(0, 3).toUpperCase();
for (let flight of flights.split('+')) {
  let [first, second, third, firth] = flight.split(';');

  let output = `${first.startsWith('_Delayed') ? '🔴' : ''}${first.replaceAll(
    '_',
    ' '
  )} from ${get3(second)} to ${get3(third)} (${firth.replace(
    ':',
    'h'
  )})`.padStart(45);
  console.log(output);
}*/

/*//challenge object
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
let obj = {};
for (let [num, player] of Object.entries(game.scored)) {
  obj[player] == undefined ? (obj[player] = 1) : (obj[player] += 1);

  console.log(`Goal ${Number(num) + 1}: ${player}`);
}
//2
let average = 0;
for (let odd of Object.values(game.odds)) {
  average += odd;
}
console.log(average / Object.values(game.odds).length);
//3

for (let [team, odd] of Object.entries(game.odds)) {
  let str = team === 'x' ? 'draw' : `victory ${game[team]}`;

  console.log(`Odd of ${str}: ${odd}`.padEnd(23));
}
*/

/*//new Map / new Set

let map = new Map();
map
  .set('open', 11)
  .set('closed', 23)
  .set(true, 'we are open')
  .set(false, 'we are closed');
let time = 21;
console.log(map.get(map.get('open') < time && time < map.get('closed')));

let arr = [1, 3, 4, 2, 4, 3, 4, 2];
console.log(new Set(arr));

*/

/*//CHALLENGE new Map / new Set
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
let events = [...new Set(gameEvents.values())];
let without = gameEvents.delete(64);
let average = 90 / gameEvents.size;
for (let [key, value] of gameEvents) {
  let half = key <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half}  HALF] ${key}: ${value}`);
}*/

/* //map/filter/reduce
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

/////////////////////////////////////////////////
currencies.forEach((el, key) => {
  console.log(el, key);
});
let set = new Set([1, 2, 34, 5, 6]);
set.forEach((el, ind) => {
  console.log(el, ind);
});
let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
let eur = 1.1;
let move = movements.map(el => el * eur);
console.log(move);
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
let accounts = [account1, account2, account3, account4];

let displayy = function (accounts) {
  accounts.forEach(account => {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(el => el[0])
      .join('');
  });
};
displayy(accounts);
console.log(accounts);

let m = [4,  7, -8];
let n = m.reduce((acc, el) => {
  return acc + el;
}, 0);
console.log(n);

let numbers = [5, -6, 7, 789, 4, -6, 6.87];
let g = numbers.reduce((acc, el) => {
  return acc > el ? acc : el;
});
console.log(g);





let julia = [5, 2, 4, 1, 15, 8, 3];
let kate = [16, 6, 10, 5, 6, 1, 4];
let ages = [...julia, ...kate];
let calculate = function calcAverage(ages) {
  let newAge = ages
    .map(el => (el <= 2 ? 2 * el : 16 + el * 4))
    .filter(el => el >= 18)
    .reduce((acc, el, i, arr) => acc + el / arr.length, 0);
  console.log(newAge);
};

calculate(ages);

let account = accounts.forEach(el => {
  el.owner === 'Jessica Davis' ? console.log(el) : '';
});
let accountf = accounts.find(el => el.owner === 'Jessica Davis');
console.log(accountf);

*/
/* sort
let arr = [2, 4, 9, 644, 7];
arr.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});
console.log(arr);
*/
/* new Array/fill
let n = new Array(3);
console.log(n.fill(9, 0, 1));
  

let n = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(n);
*/

/*let { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sum, el) => {
      sum[el > 0 ? 'deposits' : 'withdrawals'] += el;
      return sum;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);

let convert = function (title) {
  let expect = ['a'];
  let titleCase = title
    .toLowerCase()
    .split(' ')
    .map(el => (expect.includes(el) ? el : el[0].toUpperCase() + el.slice(1)))
    .join(' ');
  return titleCase;
};

console.log(convert('make a nDFce title'));*/

/*// call/apply/bind

let luftansa = {
  airline: 'luftansa',
  code: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} ${this.code}`);
    this.bookings.push({ fl: 34 });
  },
};
console.log(luftansa);
luftansa.book(3, 'jonas');
let euroWings = {
  aitline: 'euroWings',
  code: 'EW',
  bookings: [],
  book() {},
};
let book = luftansa.book;
let bookEW = book.bind(euroWings);
let bookLH = book.bind(luftansa);
bookEW(23, 'koka');
bookLH(456, 'keti');

luftansa.planes = 109;
luftansa.buyPlane = function () {
  console.log(this);
  console.log(this.planes++);
};
document
  .querySelector('.buy')
  .addEventListener('click', luftansa.buyPlane.bind(luftansa));

let addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));*/

/* NEDD TO FINISH

let poll = {
  question: 'what is your favorite language?',
  options: ['0 :js', '1:python', '2:rust', '3:c++'],
  answers: new Array(4).fill(0),
};
poll.registerNewAnswers = prompt('wtah is your favorite language?');
if (poll.registerNewAnswers <= 3) {
  poll.answers[poll.registerNewAnswers] += 1;
}
console.log(poll);
let callpoll = document.querySelector('.poll').addEventListener('click', () => {
  poll.registerNewAnswers = prompt('what is your favorite language?');
  poll.answers[poll.registerNewAnswers] += 1;
  console.log(poll);
});*/
/* IIFE
let iife = function () {
  console.log("not run again");
};
iife();
(function () {
  console.log("not run again");
})();
(() => {
  console.log("arrow not run again");
})();*/
/*
function makeWorker() {
  let name = 'Pete';

  return function () {
    alert(name);
  };
}

let name = 'John';

// create a function
let work = makeWorker();

// call it
work(); // что будет показано? "Pete" (из места создания) или "John" (из места выполнения)


let secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(passengerCount);
  };
};
secureBooking()();
var phrase = 'Hello';

function greeting(name) {
  alert(phrase + ', ' + name);
}

function func() {
  phrase = 'Bye';
  greeting('John');
}

func();
var phrase = 'Hello';

function greeting(name) {
  alert(phrase + ', ' + name);
}

function func() {
  var phrase = 'Bye';
  greeting('John');
}

func();

let f;
let g = function () {
  let a = 23;
  f = function () {
    console.log(a * 2);
  };
};
let h = function () {
  let b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
h();
f();

(function () {
  let header = document.querySelector('h1');
  header.style.color = 'red';
  document.body.addEventListener('click', () => (header.style.color = 'blue'));
})();
*/
//NUMBER
// console.log(typeof -'23');
console.log(typeof Number.parseInt('23FDE'));
console.log(typeof Number.parseFloat('23FDE'));
console.log(Number.isFinite('23'));
console.log(Math.round("3.5"));
