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
    'Ice Tea',
    'Fanta Orange',
    'Coca Cola'
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
$("#img3").hide();
$(".check").hide();

// Affichage des mots aléatoire dans l'input
$("#motAl").val(menu);


$(".menu").click(function() {
    var recupMenu = $(this).text();
    console.log(recupMenu);

    var target = $(this).data("click");

    if (motBurger == recupMenu) {
        alert("1")
    }
    if (motFrite == recupMenu) {
        alert("2")
    }
    if (motBoisson == recupMenu) {
        alert("3")
    } else {
        // $(".client").addClass("fadeOutLeftBig")
    }

    // switch (recupMenu) {
    //     case  $(this).data(".menuBurger"):
    //     case  $(this).data(".menuFrite"):
    //     case  $(this).data(".menuBoisson"):

    //     break;
    // }

    if (target == "valider") {
        if (menu == recupMenu) {
            $("#img1").addClass("fadeOutLeftBig").hide(900);
            $("#img2").show(1000).addClass("fadeInRightBig");
        } else {
            $(".client").addClass("shake");
        }
    }

});

// Toggle sur mes boutons menu 
$(".btn").click(function() {
    $(this).next().toggle();
});


// // Recupere le text de mon menu
// $(".menuBurger").click(function() {
//     var recupBurger = $(this).text();
//     console.log(recupBurger);
// })

// $(".menuFrite").click(function() {
//     var recupFrite = $(this).text();
//     console.log(recupFrite);
// })

// $(".menuBoisson").click(function() {
//     var recupBoisson = $(this).text();
//     console.log(recupBoisson);
// })

// // Animation sur mon bouton valider
// $("#valider").click(function() {
//     $("#img1").animate({
//         right: '800px'
//     }).hide(1000);
//     $("#img2").show();

// });