console.log("Hello World");

// _____________exo 1______________
let temp = 10;
temp = temp * (9/5) +32;
console.log(" la temperartue en degrés Fahrenheit est de "+ temp);

function convertion_en_Fahrenheit(temp){
    return temp * (9/5) + 32;
}
let resultat = convertion_en_Fahrenheit(10)
console.log(resultat)

// _____________exo 2______________

function calcul_air_rectangle(longueur,largeur){

    return " l'aire du rectangle est "+ longueur * largeur;
}
console.log(calcul_air_rectangle(5,3))

