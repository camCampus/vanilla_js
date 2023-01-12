console.log("exo-7");

//console.log(jsonDatas);

let data = jsonDatas;
console.log(data);

data.forEach((e) => {
  console.log(Object.keys(e));
});

let trad = {
  type: "type traduit",
};

data.forEach((e) => {
  e.tradType = "";
});
console.log(data);

let ul = document.getElementById("data");
console.log(ul);

data.forEach((e) => {
  let li = document.createElement("li");
  li.style.fontSize = "15px";
  li.innerHTML = JSON.stringify(e);
  ul.appendChild(li);
});

function showType() {
  let val = document.getElementById("inputType");
}

let tab = [1, 2, 3];

//Ici reduce additione tous les elements de tab en partant de 0 et stock la valeur dans moy
let moy = tab.reduce((acc, items) => acc + items, 0);

//On divise moy par le total des elements du tableau
moy = moy / tab.length;

console.log(moy);
