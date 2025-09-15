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

// _____________exo 3______________

function concatenation_deux_variable(){
   var prenom = "juju";
   var nom = "kiala" 
   return prenom  + " "+ nom ;
}
console.log(concatenation_deux_variable())

// _____________exo 4______________
function calcul_de_TTC(HT){
   const TVA = 0.2;
   var montaTVA = HT * TVA;
   console.log(" montant HT est "+HT)
   console.log("montant de la TVA "+montaTVA)
   return "montant TTC est " + montaTVA + HT;
}
console.log(calcul_de_TTC(130)+"€")

// _____________exo 5______________
if(((4 >= 6) || ("herbe" != "verte")) && !(((12 * 2) == 144) && true)){
 console.log("true")
}else{
    console.log("false")
}

/* _____________exo 6______________*/

function calcul_IMC(poids, taille){
    var calcul =  poids / (taille * taille)
    var imc = calcul.toFixed(2)
    return "le IMC est de "+ imc;
}
console.log(calcul_IMC(74,85))

/* _____________exo 7______________*/

const min_comande = 10;
var valeur_total_comande = 15;
if(valeur_total_comande >= min_comande){
    console.log("livraison gratuite !")
} else{
    console.log("Frais de livraison 5 euros")
}

/* _____________exo 8______________*/
let binary = 1;
let conversion = parseInt(binary);
console.log(conversion)