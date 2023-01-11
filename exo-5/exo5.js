// you can write js here

let input = prompt("Traduire en baleine");
let vowels = ["a", "e", "i", "o", "u", "y"];
let resultArray = [];

let t = input.split("");
t.forEach((e, index) => {
  for (i = 0; i < vowels.length; i++) {
    if (e === vowels[i]) {
      resultArray.push(e);
    }
  }
});
let res = resultArray.join().toUpperCase();
console.log(res);
