var burger = [
    'BigMac',
    'CroqueMcdo',
    'Nuggets'
];

var frite = [
    'Frite',
    'Potatoes'
]

var boisson = [
    'Ice tea',
    'Fanta Orange',
    'Coca cola'
]

// Recupération des tableaux
var numBurger = Math.floor(Math.random() * burger.length);
var motBurger = burger[numBurger];
console.log(motBurger);

var numFrite = Math.floor(Math.random() * frite.length);
var motFrite = frite[numFrite];
console.log(motFrite);

var numBoisson = Math.floor(Math.random() * boisson.length);
var motBoisson = boisson[numBoisson];
console.log(motBoisson);

var menu = motBurger + " + " + motFrite + " + " + motBoisson;


// Cache mon image2 et mes checks
$("#img2").hide();
$(".check").hide();

// Affichage des mots aléatoire dans l'input
$("#motAl").val(menu);


// Recupere le text de mon menu
$(".menuBurger").click(function () {
    var recupBurger = $(this).text();
    console.log(recupBurger);
})

$(".menuFrite").click(function () {
    var recupFrite = $(this).text();
    console.log(recupFrite);
})

$(".menuBoisson").click(function () {
    var recupBoisson = $(this).text();
    console.log(recupBoisson);
})

// Animation sur mon bouton valider
$("#valider").click(function () {
    $("#img1").animate({
        right: '800px'
    }).hide(1000);
    $("#img2").show();

});

// Toggle sur mes boutons menu 
$(".btn").click(function () {
    $(this).next().toggle();
});