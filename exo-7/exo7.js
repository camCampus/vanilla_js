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
    li.style.fontSize = "15px";
    li.innerHTML = JSON.stringify(e);
    ul.appendChild(li);
  });
}

//Permet de filtrer les produits par types et rupture de stock
function showType() {
  let val = document.getElementById("inputType").value;
  let check = document.getElementById("checkBox");
  let ulCHild = ul.children;

  //Reset affichage pour une autre recherche
  for (i = 0; i < ulCHild.length; i++) {
    ulCHild[i].style.display = "block";
  }
  data.forEach((e, i) => {
    if (val === e.type) {
      if (check.checked === true && e.quantity === 0) {
        ulCHild[i].style.display = "none";
      }
    } else {
      ulCHild[i].style.display = "none";
    }
  });
}

function sort(val, keys, operator) {
  ul.innerHTML = "";
  val.sort((a, b) => {
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
  init();
}

// function sortDescAlpha(val) {
//   val.sort((a, b) => {
//     if (a.name > b.name) {
//       return -1;
//     }
//     if (a.name < b.name) {
//       return 1;
//     }
//     return 0;
//   });
// }

function productFilter() {
  let option = document.getElementById("filter");
  let ascdesc = document.getElementById("ascdesc");

  let fil = option.addEventListener("change", (event) => {
    fil = event.target.value;
    sort(data, fil, AD);
  });
  let AD = ascdesc.addEventListener("change", (event) => {
    AD = event.target.value;
    sort(data, fil, AD);
  });

  //   option.addEventListener("change", (event) => {
  //     if (event.target.value === "name") {
  //       ascdesc.addEventListener("change", (filter) => {

  //         if (filter.target.value === "asc") {
  //           sort(data, parm1, "asc");
  //         } else if (filter.target.value === "desc") {
  //           sort(data, parm1, "desc");
  //         }
  //       });
  //     }
  //   });
}

init();
productFilter();
