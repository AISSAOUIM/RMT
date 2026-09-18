const fs = require('fs');
const path = require('path');

const scriptPath = path.join(__dirname, 'script.js');
let scriptContent = fs.readFileSync(scriptPath, 'utf8');

const newTerrainsData = [
  {
    name: "Gynécologie Belfort",
    type: "gynécologie",
    specialty: "gynécologie",
    scores: {
      charge: 9,
      toxicite: 8,
      formation: 2,
      liberte: 8,
      ambiance: 3
    },
    highlights: ["Roulement 1S/4", "Gardes très chargées chaque 10j", "ERCF fréquents", "Ambiance toxique", "Chambre avec cafards"],
    review: "Garde hyper chargée, équipe toxique. Seul avantage c'est le roulement (1S/4). Évitez si vous ne supportez pas la charge.",
    epuisement: {
      p1: "1017",
      p2: "827",
      p3: "763",
      p4: "440"
    }
  },
  {
    name: "Gynécologie Zéralda",
    type: "gynécologie",
    specialty: "gynécologie",
    scores: { charge: 6, toxicite: 4, formation: 6, liberte: 9, ambiance: 8 },
    highlights: ["Roulement libre", "Liste garde trinôme (chaque 10j)", "Pas d'ERCF", "Tâches légères", "Présentation de TD"],
    review: "Libre de s'organiser, pas d'ERCF, tâches légères. La responsable vous laisse tranquilles si le travail est fait.",
    epuisement: { p1: "966", p2: "640", p3: "421", p4: "324" }
  },
  {
    name: "Gynécologie Parnet",
    type: "gynécologie",
    specialty: "gynécologie",
    scores: { charge: 6, toxicite: 9, formation: 2, liberte: 9, ambiance: 2 },
    highlights: ["Roulement 1S/4 ou 1S/5", "Garde légère", "ERCF obligés (résidentes)", "Formation nulle", "Ambiance très toxique"],
    review: "Roulement exceptionnel mais équipe extrêmement toxique. On n'apprend rien, on est là pour la tension et les ERCF.",
    epuisement: { p1: "810", p2: "509", p3: "356", p4: "180" }
  },
  {
    name: "Gynécologie Pasteur",
    type: "gynécologie",
    specialty: "gynécologie",
    scores: { charge: 7, toxicite: 4, formation: 5, liberte: 8, ambiance: 7 },
    highlights: ["Roulement 1S/5", "Garde monôme à 13h", "ERCF gérables", "Équipe globalement sympa", "Service propre et climatisé"],
    review: "Plutôt sympa, ERCF mais gérables. Cadre agréable, équipe gentille si vous êtes sérieux.",
    epuisement: { p1: "1038", p2: "848", p3: "841", p4: "526" }
  },
  {
    name: "Gynécologie Ain Taya",
    type: "gynécologie",
    specialty: "gynécologie",
    scores: { charge: 4, toxicite: 5, formation: 6, liberte: 7, ambiance: 7 },
    highlights: ["Roulement 1S/3 ou 1S/4", "Garde chaque 11j", "Pas d'ERCF", "Charge légère", "TD obligatoires"],
    review: "Terrain formateur (PU/Bloc). Pas d'ERCF, charge légère, encadrement variable. Point négatif : la distance.",
    epuisement: { p1: "N/E", p2: "N/E", p3: "1144", p4: "573" }
  },
  {
    name: "Gynécologie Mustapha",
    type: "gynécologie",
    specialty: "gynécologie",
    scores: { charge: 8, toxicite: 4, formation: 7, liberte: 5, ambiance: 8 },
    highlights: ["4 services avec gestion variable", "Garde chargée 24h chaque 8j", "ERCF interdits aux internes", "Gestes possibles", "Non toxique"],
    review: "Expérience dépend du service (roulement variable). Gardes chargées mais on vous laisse faire des gestes et pas d'ERCF.",
    epuisement: { p1: "67", p2: "417", p3: "204", p4: "730" }
  },
  {
    name: "Gynécologie Kouba",
    type: "gynécologie",
    specialty: "gynécologie",
    scores: { charge: 5, toxicite: 8, formation: 1, liberte: 8, ambiance: 3 },
    highlights: ["Roulement 4/jour", "Garde quadrinôme (10j)", "Léger grâce au roulement", "Formation zéro", "Résidents difficiles"],
    review: "Léger niveau charge mais formation inexistante et résidents difficiles (the biggest task is surviving them).",
    epuisement: { p1: "N/E", p2: "1165", p3: "N/E", p4: "700" }
  },
  {
    name: "Gynécologie HMEA",
    type: "gynécologie",
    specialty: "gynécologie",
    scores: { charge: 9, toxicite: 8, formation: 3, liberte: 5, ambiance: 4 },
    highlights: ["Garde très chargée (chaque 8j)", "ERCF++++ et constantes", "Pas de chambre de garde", "Travail fatiguant", "Propre et organisé"],
    review: "Très fatiguant, corvées (ERCF, constantes) et même pas de chambre de garde. Gros points positifs : la propreté.",
    epuisement: { p1: "1136", p2: "1113", p3: "1150", p4: "900" }
  },
  {
    name: "Gynécologie Bologhine (Baineim)",
    type: "gynécologie",
    specialty: "gynécologie",
    scores: { charge: 6, toxicite: 3, formation: 7, liberte: 7, ambiance: 8 },
    highlights: ["Garde trinôme (chaque 6-12j)", "Roulement en fin de stage", "Service peu chargé", "Rapport d'activité obligatoire", "Résidents sympas"],
    review: "Bien passé. Pas beaucoup de travail au service. Résidents sympas, on peut apprendre au bloc.",
    epuisement: { p1: "N/E", p2: "N/E", p3: "N/E", p4: "1182" }
  },
  {
    name: "Gynécologie Thenia",
    type: "gynécologie",
    specialty: "gynécologie",
    scores: { charge: 7, toxicite: 3, formation: 7, liberte: 4, ambiance: 8 },
    highlights: ["Garde chaque 8-9j", "Service chaque jour", "Prof très gentille", "Présentation de TD"],
    review: "Équipe sympa (la prof est un sucre). Gardes gérables mais il faut être présent souvent au service (pas de grand roulement).",
    epuisement: { p1: "N/E", p2: "N/E", p3: "N/E", p4: "863" }
  },
  {
    name: "Gynécologie BM",
    type: "gynécologie",
    specialty: "gynécologie",
    scores: { charge: 7, toxicite: 6, formation: 5, liberte: 4, ambiance: 6 },
    highlights: ["Secrétaire stricte (pointage)", "Pas de roulement semaine", "Garde chaque 9j", "Chill si solidaires", "8 unités dans le service"],
    review: "Pas de roulement semaine à cause de la secrétaire. Terrain chill seulement si les internes sont solidaires entre eux.",
    epuisement: { p1: "818", p2: "479", p3: "243", p4: "150" }
  }
];

// Read existing terrains using eval
const match = scriptContent.match(/const\s+TERRAINS\s*=\s*(\[[\s\S]*?\]);\s*\/\//);
if (!match) {
    console.error("Could not find TERRAINS array.");
    process.exit(1);
}
const arrayStr = match[1];
let TERRAINS = eval(arrayStr);

// Find max id
let maxId = 0;
TERRAINS.forEach(t => {
    if (t.id > maxId) maxId = t.id;
});

// Append new terrains
newTerrainsData.forEach(t => {
    maxId++;
    t.id = maxId;
    TERRAINS.push(t);
});

// Generate new array string
const newArrayStr = JSON.stringify(TERRAINS, null, 2).replace(/"([^"]+)":/g, '$1:');

// Replace in script content
scriptContent = scriptContent.replace(arrayStr, newArrayStr);

fs.writeFileSync(scriptPath, scriptContent, 'utf8');
console.log("Successfully added " + newTerrainsData.length + " gynecology terrains. Total terrains is now " + TERRAINS.length);
