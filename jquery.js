var mot = [
    'BigMac',
    'CroqueMcdo',
    'Nuggets'
];
var recup;

var numRandom = Math.floor(Math.random() * mot.length);
var motRandom = mot[numRandom];
console.log(motRandom);


// $(document).ready(function () {

$("#motAl").val(motRandom);

// });