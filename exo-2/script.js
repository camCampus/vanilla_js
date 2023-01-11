// you can write js here
const myDate = new Date();
let semaine = "C'est la semaine";
let wk = "C'est le weekend";
let mercredi = myDate.getDay();
let h = myDate.getHours();
let isTesting = true;

function test(jour, heure) {
  if (isTesting === true) {
    jour = prompt("Tester un jour entre 0 et 6 0=dimanche");
    heure = prompt("Tester l'heure de 0 à 24");
  }
  if (jour < 6 && jour > 0) {
    if ((jour = 5 && heure > 17) || (jour = 1 && heure < 9)) {
      return console.log(wk);
    } else {
      return console.log(semaine);
    }
  } else {
    return console.log(wk);
  }
}
test(mercredi, h);
