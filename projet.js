let panier = [];
const btnMenu = document.getElementById("btnMenu");
const btnPanier = document.getElementById("btnPanier");
const panneauPanier = document.getElementById("panier");
const listePanier = document.getElementById("listePanier");
const totalPanier = document.getElementById("totalPanier");
const nombrePanier = document.getElementById("nombrePanier");
const btnVider = document.getElementById("btnVider");
const modalSuppression = document.getElementById("modalSuppression");
const btnOui = document.getElementById("btnOui");
const btnNon = document.getElementById("btnNon");
const formCommande = document.getElementById("formCommande");

function afficherPage(nomPage) {
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("page-active");
  });
  document.getElementById("page-" + nomPage).classList.add("page-active");
  window.scrollTo(0, 0);
}

btnMenu.addEventListener("click", () => {
  alert("Menu simple pour montrer l'interaction.");
});

btnPanier.addEventListener("click", () => {
  panneauPanier.classList.toggle("actif");
});

function ajouterAuPanier(nom, prix) {
  const produitExistant = panier.find((item) => item.nom === nom);

  if (produitExistant) {
    produitExistant.quantite++;
  } else {
    panier.push({ nom: nom, prix: prix, quantite: 1 });
  }

  mettreAJourPanier();
}

function augmenterQuantite(nom) {
  const produit = panier.find((item) => item.nom === nom);
  produit.quantite++;
  mettreAJourPanier();
}

function diminuerQuantite(nom) {
  const produit = panier.find((item) => item.nom === nom);
  produit.quantite--;

  if (produit.quantite <= 0) {
    panier = panier.filter((item) => item.nom !== nom);
  }

  mettreAJourPanier();
}
function mettreAJourPanier() {
  listePanier.innerHTML = "";
  let total = 0;
  let quantiteTotale = 0;
  panier.forEach((item) => {
    total += item.prix * item.quantite;
    quantiteTotale += item.quantite;
    const li = document.createElement("li");
    li.innerHTML =
      "<span>" + item.nom + " - " + item.prix + " DA</span>" +
      "<div class='quantite-controls'>" +
      "<button onclick=\"diminuerQuantite('" + item.nom + "')\">-</button>" +
      "<span>" + item.quantite + "</span>" +
      "<button onclick=\"augmenterQuantite('" + item.nom + "')\">+</button>" +
      "</div>";

    listePanier.appendChild(li);
  });
  nombrePanier.textContent = quantiteTotale;
  totalPanier.textContent = "Total : " + total + " DA";
}
btnVider.addEventListener("click", () => {
  modalSuppression.classList.add("actif");
});
btnOui.addEventListener("click", () => {
  panier = [];
  mettreAJourPanier();
  modalSuppression.classList.remove("actif");
});
btnNon.addEventListener("click", () => {
  modalSuppression.classList.remove("actif");
});
formCommande.addEventListener("submit", (e) => {
  e.preventDefault();
  panier = [];
  mettreAJourPanier();
  alert("Merci ! Votre commande a été envoyée.");
  afficherPage('accueil');
});