const buttons = document.querySelector('.Btn');
const victoireDisplay = document.getElementById('victoire');
const egalDisplay = document.getElementById('egal');
const defaiteDisplay = document.getElementById('defaite');
const resetDisplay = document.getElementById('reset');


const choix = ['Piere','Feuille','Ciseaux'];
const score ={victoire: 0, egal: 0, deafite:0};

buttons.forEach(button => {
    button.addEventListener('click', () => {

   
    const choixJouer = button.textContent;
    const choixRobot = choix[Math.floor(Math.random * 3)];
    let outcome;

    if(choixJouer === choixRobot ){
        outcome = 'egal';
    }else if(
    (choixJouer === 'Pierre' && choixRobot === 'Ciseaux') ||
    (choixJouer === 'Ciseaux' && choixRobot === 'Feuille') ||
    (choixJouer === 'Feuille' && choixRobot === 'Pierre')
        )
    {
        outcome ='vitoire';
    }else{
        outcome = 'defaite';
    }
    score[outcome]++;
    updateScore();
    });
});

function updateScore(){

}