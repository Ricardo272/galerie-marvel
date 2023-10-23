class personnage {
    constructor(univers, nom, image, identité, pouvoir, ville, équipe) {
        this.univers = univers
        this.nom = nom
        this.image = image
        this.identité = identité
        this.pouvoir = pouvoir
        this.ville = ville
        this.équipe = équipe
    }
}

let spiderM = new personnage("Marvel", "Spider-Man", "spidermanmaguire-imgprofil-1.jpg", "Peter Parker", "Homme Araignée", "New York", "Avengers")
let groot = new personnage("Marvel", "Baby Groot", "groot-gotg-v3-imgprofil.jpg", "Groot", "Flora colossus", "Inconnu", "Gardien de la Galaxy")
let rocket = new personnage("Marvel", "Rocket Raccoon", "rocket-gotg-v3-imgprofil.jpg", "89P13", "Aucun", "Inconnu")
let cosmo = new personnage("Marvel", "Cosmo", "cosmo-gotg-v3-imgprofil.jpg", "Cosmo le chien de l'espace", "capacités psioniques", "Inconnu", "Gardien de la Galaxy")
let drax = new personnage("Marvel", "Drax Le Descructeur", "drax-gotg-v3-imgprofil.jpg", "Drax ", "Force surhumaine", "inconnue", "Gardien de la Galaxy")
let thor = new personnage("Marvel", "Thor", "thor-tlat-v2-imgprofil.jpg", "Thor Odinson", "Dieu du Tonnerre", "Asgard", "Avenger et Gardien de la galaxy")
let batman = new personnage("DC Comics", "Batman", "OIP.jpg", "Bruce Wayne", "Super riche", "Gotman", "Bat Family")
let arrow = new personnage("DC Comics", "Green Arrow", "télécharger.jpg", "Oliver Queen", "Super riche", "Starling City", "Team Arrow")
let flash = new personnage("DC Comics", "Flash", "flash.jpg", "Barry Allen", "Speed Force", "Central City", "Team FLash")
let deadpool = new personnage("DC Comics", "Deadpool", "Deadpool.webp", "Wade Wilson", "Immortel", "New York", "X-Men")
let rasAlGhul = new personnage("DC Comics", "Ra's Al Ghul", "RAS-AL-GHUL.jpg", "Inconnu", "Inconnu", "Inconnu", "Ligue des Assassins")
let lexLuthor = new personnage("DC Comics", "Lex Luthor", "lex-luthor.jpg", "Alexander Joseph Luthor", "Aucun", "Smallvile", "Aucune")
let joker = new personnage(" DC Comics", "Joker", "joker.jpg", "Inconnu", "Aucun", "Gotham City", "Duo X Harleen Quinzel")

const tableau = [spiderM, groot, rocket, cosmo, drax, thor, batman, arrow, flash, deadpool, rasAlGhul, lexLuthor, joker]

for (let i = 0; i <= 12; i++) {
    tableaux.innerHTML += `

    <div id="affiche">

    <p class="univers">
        Univers : ${tableau[i].univers}
    </p>

    <img src="img/${tableau[i].image}">

    <div id="info">
        <p class="nom">
            Nom : ${tableau[i].nom}
        </p>

        <p class="identité">
            Identité : ${tableau[i].identité}
        </p>

        <p class="pouvoir">
            Pouvoir : ${tableau[i].pouvoir}
        </p>

        <p class="ville">
            Ville : ${tableau[i].ville}
        </p>

        <p class="équipe">
            Equipe :${tableau[i].équipe}
        </p>
    </div>

`
}