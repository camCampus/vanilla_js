console.log("exo-7");

let data = jsonDatas;
let ul = document.getElementById("data");

let trad = {
  car: "voiture",
  house: "maison",
  videoGame: "Jeux Vidéos",
  show: "activité",
};

function init() {
  // Ajoute une key traduction type et en value la bonne traduction stocker dans l'objet trad
  data.forEach((e) => {
    Object.keys(trad).forEach((a) => {
      if (e.type === a) {
        e.traductionType = trad[a];
      }
    });
  });

  //Pour chaque obj de data creation d'un li pour affficher l'ojt dans le DOM
  data.forEach((e) => {
    let li = document.createElement("li");
    li.style.display = "block";
    li.innerHTML = JSON.stringify(e);
    ul.appendChild(li);
  });
}

//Retourne un tableau des objets affichés
function getDisplayObject() {
  let k = Array.from(ul.children);
  let objDisplay = [];
  k.forEach((e) => {
    if (e.getAttribute("style") === "display: block;") {
      let txt = JSON.parse(e.textContent);
      objDisplay.push(txt);
    }
  });
  return objDisplay;
}

//Permet de filtrer les produits par types et rupture de stock
function showType() {
  let val = document.getElementById("inputType").value;
  let check = document.getElementById("checkBox");
  let k = Array.from(ul.children);
  let show = [];
  let displayObj = getDisplayObject();

  //Reset affichage pour une autre recherche
  k.forEach((e) => {
    e.style.display = "block";
  });

  //Affiche les objets en fonction du type
  displayObj.forEach((e, i) => {
    if (val != e.type) {
      show.push(k[i]);
    }
    if (check.checked === true) {
      if (e.quantity === 0) {
        show.push(k[i]);
      }
    }
  });
  show.forEach((e) => {
    e.style.display = "none";
  });
}

//Fonction pour filtrer les objets en fonction de le clefs, de la valeur et pour operator c'est ascendant ou descendant
function sortDisplayObj(keys, operator) {
  let data = getDisplayObject();
  data.sort((a, b) => {
    switch (operator) {
      case "asc":
        if (a[keys] < b[keys]) return -1;
        if (a[keys] > b[keys]) return 1;
        break;
      case "desc":
        if (a[keys] > b[keys]) return -1;
        if (a[keys] < b[keys]) return 1;
        break;
      default:
        return 0;
    }
  });
  return data;
}

//Function pour recuperer les options de filtres de l'utilisateur et les passer à la fonction de trie
function productFilter() {
  let filterOption1 = document.getElementById("filter");
  let filterOption2 = document.getElementById("ascdesc");
  let key;
  let newDisplay;

  filterOption1.addEventListener("change", (event) => {
    key = event.target.value;
    if (operator === undefined) {
    } else {
      newDisplay = sortDisplayObj(key, operator);
      ul.innerHTML = "";
      newDisplay.forEach((e) => {
        let li = document.createElement("li");
        li.innerHTML = JSON.stringify(e);
        li.style.display = "block";
        ul.appendChild(li);
      });
    }
  });

  let operator = filterOption2.addEventListener("change", (event) => {
    operator = event.target.value;
    newDisplay = sortDisplayObj(key, operator);
    ul.innerHTML = "";
    newDisplay.forEach((e) => {
      let li = document.createElement("li");
      li.innerHTML = JSON.stringify(e);
      li.style.display = "block";
      ul.appendChild(li);
    });
  });
}
// Bloc de code pour récupérer les data du form et ajouter un obj à la liste
let myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let formData = new FormData(myForm); // Recupère les datas
  let newObj = Object.fromEntries(formData.entries()); // Stock

  data.push(newObj);
  ul.innerHTML = "";
  init();
});

init();
productFilter();

// fetchForm().then((r) => console.log(r));
