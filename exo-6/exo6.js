// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
  name: "Joe's house",
  rooms: 5,
  garage: false,
  bathrooms: 1 + 2,
  cars: ["Clio", "Van"],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
console.log(joeInfo.cars);
// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
joeInfo.bathrooms = 1;
console.log(joeInfo.bathrooms);
// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information.
joeInfo.garage = true;

console.log(joeInfo);

let team = {
  players: [
    {
      firstName: "pat",
      lastName: "dgd",
      age: 50,
    },
  ],
  games: [
    {
      opponent: "Broncos",
      teamPoints: 42,
      opponentPoints: 27,
    },
  ],

  addPlayer(firstName, lastName, age) {
    let add = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };

    this.players.push(add);
  },

  addGame(opponent, teamPoints, opponentPoints) {
    let add = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    };
    this.games.push(add);
  },
};
team.addPlayer("cam", "zam", 30);
team.addPlayer("zouzou", "toubouret", 250);
team.addPlayer("paf", "pif", 300);
team.addGame("paris", 30, 28);
team.addGame("chambery", 35, 30);
team.addGame("lyon", 32, 25);
console.log(team);

/*
let totalTeamPoints = 0;

team.games.forEach((e) => {
  totalTeamPoints = totalTeamPoints + e.teamPoints;
  console.log(e.teamPoints);
});
*/

let totalTeamPoints = team.games.reduce(
  (accumulator, e) => accumulator + e.teamPoints,
  0
);
console.log(totalTeamPoints);

let moy = team.games.reduce((acc, e) => acc + e.opponentPoints, 0);
moy = Math.floor(moy / team.games.length);
console.log(moy);

function older() {
  let a = 0;
  team.players.forEach((e) => {
    if (e.age > a) {
      a = e.age;
    }
  });
  return a;
}
console.log(older());

team.players.sort((a, b) => {
  if (a.firstName < b.firstName) {
    return -1;
  }
  if (a.firstName > b.firstName) {
    return 1;
  }
  return 0;
});

console.log(team.players);
