# Memo JS

Calculer une moyenne avec Array.prototype.reduce()
```js
let tab = [1, 2, 3];

array.reduce((accumulator, arrayItems) => accumulator + arrayItems, initialValue)

//Ici reduce additione tous les elements de tab en partant de 0 et stock la valeur dans moy
let moy = tab.reduce((acc, items) => acc +  items , 0);

//On divise moy par le total des elements du tableau
moy = moy / tab.length
// moy = 6 / 3
console.log(moy);
```
Resultat en console

```js
2
```

Affiche toutes les keys d'un objet js

```js
Object.keys(Mon_Objet_JS)

let obj = {
    name: "test",
    price: 10
}

console.log(Object.keys(obj));

```
Resultat en console
```js
Array(2) ["name", "price"]
```

