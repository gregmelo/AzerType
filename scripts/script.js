let motUtilisateur;

function afficherResultat(score, nbMotsProposes) {
  console.log("Votre score est de " + score + " sur " + nbMotsProposes);
}

function choisirPhraseOuMot() {
  let choix = prompt(
    "Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?"
  );

  while (choix !== "mots" && choix !== "phrases") {
    choix = prompt("Veuillez entrer 'mots' ou 'phrases' : ");
  }
  return choix;
}

function lancerBoucleDeJeu(listePropositions) {
  let score = 0;
  for (let i = 0; i < listePropositions.length; i++) {
    motUtilisateur = prompt("Entrez le mot : " + listePropositions[i]);
    if (motUtilisateur === listePropositions[i]) {
      score++;
    }
  }
  return score;
}

function lancerJeu() {
  let choix = choisirPhraseOuMot();
  let score = 0;
  let nbMotsProposes = 0;
  if (choix === "mots") {
    score = lancerBoucleDeJeu(listeMots);
    nbMotsProposes = listeMots.length;
  } else {
    lancerBoucleDeJeu(listePhrases);
    score = nbMotsProposes = listePhrases.length;
  }
  afficherResultat(score, nbMotsProposes);
}

lancerJeu();
