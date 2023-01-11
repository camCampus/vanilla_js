// you can write js here

console.log("exo-4");

var secretMessage = [
  "Learning",
  "isn't",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it's",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

let last = secretMessage.pop();
console.log(secretMessage);

let addTo = secretMessage.push("to");
let addProgram = secretMessage.push("program");
console.log(secretMessage);

/*
for (i = 0; i < secretMessage.length; i++) {
  if (secretMessage[i] === "easily") {
    secretMessage[i] = "rigth";
  }
}
*/
secretMessage.forEach((item, index) => {
  if (item === "easily") {
    secretMessage[index] = "rigth";
  }
});
console.log(secretMessage);

let first = secretMessage.shift();
console.log(secretMessage);

let f = secretMessage.unshift("Programming");
console.log(secretMessage);

secretMessage = secretMessage.map((element) =>
  element.replace(/get|right|the|first|time/g, "know")
);
console.log(secretMessage);
console.log(secretMessage.join());
