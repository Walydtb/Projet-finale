let panier = [];

const Panier = document.getElementById("btnPanier");
const panneauPanier = document.getElementById("panier");
const listePanier = document.getElementById("listePanier");
const totalPanier = document.getElementById("totalPanier");
const nombrePanier = document.getElementById("nombrePanier");

Panier.addEventListener("click", () => {
  panneauPanier.classList.toggle("actif");
});

function ajouterAuPanier(nom, prix) {
  panier.push({ nom: nom, prix: prix });
  mettreAJourPanier();
}

function mettreAJourPanier() {
  listePanier.innerHTML = "";
  let total = 0;

  panier.forEach((item) => {
    const ligne = document.createElement("li");
    ligne.textContent = item.nom + " - " + item.prix + " DA";
    listePanier.appendChild(ligne);
    total += item.prix;
  });

  nombrePanier.textContent = panier.length;
  totalPanier.textContent = "Total : " + total + " DA";
}