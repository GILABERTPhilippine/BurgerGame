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

var menu = motBurger + " + " + motFrite + " + " + motBoisson

$(document).ready(function () {

    $("#img2").hide();

    // Affichage des mots aléatoire dans l'input
    $("#motAl").val(menu);

    $(".menu").click(function () {
        var recupMenu = $(this).text();
        console.log(recupMenu);

        var target = $(this).data("click");

        if (motBurger == recupMenu) {
            alert("burgerOk")
        }
        if (motFrite == recupMenu) {
            alert("FriteOk")
        }
        if (motBoisson == recupMenu) {
            alert("BoissonOk")
        } else {
            alert("loser")
        }

        $("#valider").click(function () {
            $("#img1").animate({
                right: '300px'
            });
            $("#img2").show();
        }); {

        }

    })

});