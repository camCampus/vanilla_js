//Section avant de reformater json
console.log("exo-7");

//Récupération des données
let data = jsonDatas;

//Récupération des ul pour affichage
let ul = document.getElementById("data");
let ulSection2 = document.getElementById("uLSection2");

//Objet pour la traduction
let trad = {
  car: "voiture",
  house: "maison",
  videoGame: "Jeux Vidéos",
  show: "activité",
};

// Ajoute une key traduction type et en value la bonne traduction stocker dans l'objet trad
//Pour chaque obj de data creation d'un li pour affficher l'ojt dans le DOM
function init(array, domElement) {
  array.forEach((e) => {
    Object.keys(trad).forEach((a) => {
      if (e.type === a) {
        e.traductionType = trad[a];
      }
    });
  });

  array.forEach((e) => {
    let li = document.createElement("li");
    li.style.display = "block";
    li.innerHTML = JSON.stringify(e);
    domElement.appendChild(li);
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

//Fonction pour filtrer les objets en fonction de le clefs, pour operator c'est ascendant ou descendant
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
      operator = "asc";
      newDisplay = sortDisplayObj(key, operator);
      ul.innerHTML = "";
      init(newDisplay, ul);
    } else {
      newDisplay = sortDisplayObj(key, operator);
      ul.innerHTML = "";
      init(newDisplay, ul);
    }
  });

  let operator = filterOption2.addEventListener("change", (event) => {
    operator = event.target.value;
    newDisplay = sortDisplayObj(key, operator);
    ul.innerHTML = "";
    init(newDisplay, ul);
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
  init(data, ul);
});

init(data, ul);
productFilter();

// Section les datas JSON sont reformatées

const newFormatData = [];

// Fonction qui fait une requete api et return un tableau d'objets pour simuler des données.
function fakeData(array, callback) {
  let quantity = array.length;
  let contactArray = [];
  // Appel à l'api et selection des données
  return fetch("https://fakerapi.it/api/v1/persons?_quantity=" + quantity)
    .then((response) => response.json())
    .then((logRes) => {
      logRes.data.forEach((e) => {
        let contact = {
          lastName: e.lastname,
          firstName: e.firstname,
          address:
            `${e.address.street} ` +
            `${e.address.zipcode} ` +
            `${e.address.city}`,
        };
        contactArray.push(contact);
      });
      callback(contactArray);
    });
}

function rebaseJson(array) {
  data.forEach((obj, i) => {
    obj = {
      type: obj.type,
      items: [
        {
          name: obj.name,
          description: obj.description,
          price: obj.price,
          quantity: obj.quantity,
          contact: array[i],
        },
      ],
    };
    newFormatData.push(obj);
  });
}

fakeData(data, function (tab) {
  rebaseJson(tab);
  console.log("Log array newFormatData async loop", newFormatData);
  init(newFormatData, ulSection2);
  let a = getDisplayObject();
  console.log("Log getDisplayObject() async loop", a);
});
console.log("Log array newFormatData", newFormatData);
// fetchForm().then((r) => console.log(r));
