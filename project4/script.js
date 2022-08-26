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
