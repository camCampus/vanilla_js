//exo 1
console.log("exo 1");

let num = 255;
let txt = "255";
let bin = true;
let flt = 7.23;

//exo 2
console.log("exo 2");
num++;
console.log(num);
txt = txt + " est ici une chaîne de caractères";
console.log(txt);
bin = false;
console.log(bin);
flt = flt + num;
console.log(flt);

//exo 3
console.log("exo 3");
num = 23;
txt = "33";
console.log(num + txt);
let r = num + Number(txt);
console.log("r: " + r);

//exo 4
let tmp = 0;
tmp = parseInt(txt);
tmp = tmp + num;
console.log(tmp);

// Exercices complémentaires Conditions :
console.log("pat2");
let one = 3;
let two = 3;
let three = 3;
let count = 0;
function check() {
  let arr = [one, two, three];
  arr.forEach((e) => {
    for (i = 0; i < arr.length; i++) {
      if (e === arr[i]) {
        count++;
        console.log(count);
      }
    }
  });
}
check();
