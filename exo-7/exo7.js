console.log("exo-7");

let data = jsonDatas;
let ul = document.getElementById("data");
let trad = {
  car: "voiture",
  house: "maison",
  videoGame: "Jeux Vidéos",
  show: "activité",
};

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

// async function main() {
//   let aw = await fakeData(data);
//   let reb = rebaseJson(aw);
//   reb.forEach((e) => {
//     console.log(e);
//     newFormatData.push(e);
//   });
// }

function init(array) {
  // Ajoute une key traduction type et en value la bonne traduction stocker dans l'objet trad
  array.forEach((e) => {
    Object.keys(trad).forEach((a) => {
      if (e.type === a) {
        e.traductionType = trad[a];
      }
    });
  });

  //Pour chaque obj de data creation d'un li pour affficher l'ojt dans le DOM
  array.forEach((e) => {
    let li = document.createElement("li");
    li.style.display = "line";
    li.innerHTML = JSON.stringify(e);
    ul.appendChild(li);
  });
}

//Retourne un tableau des objets affichés
function getDisplayObject() {
  let k = Array.from(ul.children);
  let objDisplay = [];

  k.forEach((e) => {
    if (e.getAttribute("style") === "display: line;") {
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
      operator = "asc";
      newDisplay = sortDisplayObj(key, operator);
      ul.innerHTML = "";
      init(newDisplay);
    } else {
      newDisplay = sortDisplayObj(key, operator);
      ul.innerHTML = "";
      init(newDisplay);
    }
  });

  let operator = filterOption2.addEventListener("change", (event) => {
    operator = event.target.value;
    newDisplay = sortDisplayObj(key, operator);
    ul.innerHTML = "";
    init(newDisplay);
  });
}

// function pour récupérer les data du form et ajouter un obj à la liste
function getForm() {
  let myForm = document.getElementById("myForm");

  myForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let formData = new FormData(myForm); // Recupère les datas
    let newObj = Object.fromEntries(formData.entries()); // Stock

    data.push(newObj);
    ul.innerHTML = "";
    init(newFormatData);
  });
}

fakeData(data, function (tab) {
  rebaseJson(tab);
  console.log(newFormatData);
  init(newFormatData);
  let a = getDisplayObject();
  console.log(a);
});

// fetchForm().then((r) => console.log(r));
