// you can write js here

let kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");

//Convertion des kelvins en celsius
let celsius = kelvins - 273;
console.log("cel= " + celsius);
//Convertion des celsius en fahrenheits et arrondis inferieur ac MAth.floor()
let fahrenheits = celsius * (9 / 5) + 32;
fahrenheits = Math.floor(fahrenheits);
console.log("far= " + fahrenheits);
