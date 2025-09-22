// Sélection des éléments
const buttons = document.querySelectorAll('.Btn');
const resultDisplay = document.getElementById('result-display');
const victoireDisplay = document.getElementById('victoire');
const egalDisplay = document.getElementById('egal');
const defaiteDisplay = document.getElementById('defaite');
const resetButton = document.getElementById('reset');

// Données du jeu
const choix = ['Pierre', 'Feuille', 'Ciseaux'];
const score = { victoire: 0, egal: 0, defaite: 0 };

// Fonction d'aide pour l'affichage pluriel
function pluralize(count, singular, plural) {
  return count + ' ' + (count === 1 ? singular : plural);
}

// Attacher les événements aux boutons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const choixJoueur = button.textContent.trim(); // "Pierre", "Feuille" ou "Ciseaux"
    const choixRobot = choix[Math.floor(Math.random() * choix.length)];
    let outcome;

    if (choixJoueur === choixRobot) {
      outcome = 'egal';
    } else if (
      (choixJoueur === 'Pierre' && choixRobot === 'Ciseaux') ||
      (choixJoueur === 'Ciseaux' && choixRobot === 'Feuille') ||
      (choixJoueur === 'Feuille' && choixRobot === 'Pierre')
    ) {
      outcome = 'victoire';
    } else {
      outcome = 'defaite';
    }

    // Incrémenter le score correctement
    score[outcome]++;

    // Mettre à jour l'affichage
    updateScore();
    const outcomeText = outcome === 'egal' ? 'égalité' : (outcome === 'victoire' ? 'victoire' : 'défaite');

    resultDisplay.innerHTML = `
      J'ai joué : <strong>${choixJoueur}</strong><br>
      Le robot a joué : <strong>${choixRobot}</strong><br>
      C'est une <strong>${outcomeText}</strong>
    `;
  });
});

// Mettre à jour l'affichage des compteurs
function updateScore() {
  victoireDisplay.textContent = pluralize(score.victoire, 'victoire', 'victoires');
  egalDisplay.textContent = pluralize(score.egal, 'égalité', 'égalités');
  defaiteDisplay.textContent = pluralize(score.defaite, 'défaite', 'défaites');
}

// Reset
resetButton.addEventListener('click', () => {
  score.victoire = 0;
  score.egal = 0;
  score.defaite = 0;
  updateScore();
  resultDisplay.textContent = '';
});

// afficher scores initiaux
updateScore();
