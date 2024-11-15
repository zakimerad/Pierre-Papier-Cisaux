const choixUtilisateurDiv = document.querySelector("#choixUtilisateurImg");
const choixOrdinateurDiv = document.querySelector("#choixOrdinateurImg");
let boutons = document.querySelectorAll("button");
let resultat = document.querySelector("#resultat");
let scoreUtilisateurDiv = document.querySelector("#scoreUtilisateur");
let scoreOrdinateurDiv = document.querySelector("#scoreOrdinateur");

choixOrdinateurDiv.style.display = "none";
choixUtilisateurDiv.style.display = "none";

let scoreUtilisateur = 0;
let scoreOrdinateur = 0;

boutons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const choixUtilisateur = e.target.textContent;
        choixUtilisateurDiv.src = `${choixUtilisateur}.png`;
        choixUtilisateurDiv.style.display = "flex";
        
        ChoixPrc();
        choixOrdinateurDiv.style.display = "flex";
        verification();
    });
});

function ChoixPrc() {
    let random = Math.floor(Math.random() * 3 + 1);
    if (random === 1) {
        choixOrdinateurDiv.src = "Pierre.png";
    } else if (random === 2) {
        choixOrdinateurDiv.src = "Papier.png";
    } else if (random === 3) {
        choixOrdinateurDiv.src = "Ciseaux.png";
    }
}

function getNomImage(src) {
    return src.split('/').pop().replace('.png', '');
}

function verification() {
    const choixUtilisateur = getNomImage(choixUtilisateurDiv.src);
    const choixOrdinateur = getNomImage(choixOrdinateurDiv.src);

    if (choixUtilisateur === choixOrdinateur) {
        resultat.textContent = "ÉGALITÉ !";
    } else if (
        (choixUtilisateur === 'Pierre' && choixOrdinateur === 'Ciseaux') ||
        (choixUtilisateur === 'Papier' && choixOrdinateur === 'Pierre') ||
        (choixUtilisateur === 'Ciseaux' && choixOrdinateur === 'Papier')
    ) {
        resultat.textContent = "GAGNÉ !";
        scoreUtilisateur++;
        scoreUtilisateurDiv.textContent = scoreUtilisateur;
    } else {
        resultat.textContent = "PERDU !";
        scoreOrdinateur++;
        scoreOrdinateurDiv.textContent = scoreOrdinateur;
    }
}
