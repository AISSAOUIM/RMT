// ============================================================
//  TERRAIN DATA — Rated from real intern reviews (7e med)
//  Scale: 1–10
//  Charge    : 10 = maximum workload
//  Toxicité  : 10 = very toxic team / environment
//  Formation : 10 = exceptional learning
//  Liberté   : 10 = maximum schedule freedom
//  Ambiance  : 10 = best team atmosphere
// ============================================================

const TERRAINS = [
  {
    "id": 1,
    "name": "REA Médicale",
    "hospital": "Beni Messous",
    "specialty": "réanimation",
    "icon": "🫀",
    "color": "#FF4D6D",
    "period": "Multi",
    "effectif": 6,
    "gardes": true,
    "gardeFreq": "Chaque 6j",
    "roulement": false,
    "scores": {
      "charge": 9,
      "toxicite": 1,
      "formation": 10,
      "liberte": 2,
      "ambiance": 10
    },
    "highlights": [
      "Garde toutes les 6 nuits (24h)",
      "5/5 — 9h → 13h30",
      "Intubation, voie centrale, CAT",
      "Équipe hayline — 9/10",
      "Gazométrie chaque jour",
      "Terrain des vrais médecins"
    ],
    "badge": "🏆 Best Formation",
    "summary": "Terrain ultra-formateur, équipe exceptionnelle mais très chargé. Le rythme intense en fait la meilleure école de la médecine pratique.",
    "type": "médecine",
    "epuisement": {
      "p1": "301",
      "p2": "479",
      "p3": "806",
      "p4": "544"
    }
  },
  {
    "id": 2,
    "name": "Cardio A2",
    "hospital": "Mustapha Basha",
    "specialty": "cardiologie",
    "icon": "❤️",
    "color": "#FF6B35",
    "period": "P3",
    "effectif": 5,
    "gardes": true,
    "gardeFreq": "Chaque 10j",
    "roulement": true,
    "scores": {
      "charge": 6,
      "toxicite": 3,
      "formation": 8,
      "liberte": 6,
      "ambiance": 8
    },
    "highlights": [
      "Gardes 24h (sem: 9h / WE: 10h)",
      "Roulement 1 sur 3 pour le service",
      "Coronographie et rythmologie",
      "Colloques de cas du mercredi",
      "Salle d'écho-cœurs disponible",
      "Service en travaux — évolution future"
    ],
    "badge": "📈 Bon Équilibre",
    "summary": "Bon terrain cardiologique avec accès aux gestes techniques. Équipe sympa, roulement 1/3 pour le service. Gardes formatives.",
    "type": "médecine",
    "epuisement": {
      "p1": "278",
      "p2": "104",
      "p3": "204",
      "p4": "324"
    }
  },
  {
    "id": 3,
    "name": "Cardio",
    "hospital": "Parnet",
    "specialty": "cardiologie",
    "icon": "💓",
    "color": "#FF8C42",
    "period": "P3",
    "effectif": 10,
    "gardes": true,
    "gardeFreq": "Chaque 10j",
    "roulement": true,
    "scores": {
      "charge": 7,
      "toxicite": 2,
      "formation": 8,
      "liberte": 6,
      "ambiance": 9
    },
    "highlights": [
      "10 internes — gardes 24h",
      "Roulement service 1 sur 5",
      "2 à 10 avis par jour en ambulance",
      "Chambre de garde disponible",
      "CDS strict mais correct",
      "Équipe résidents hayline"
    ],
    "badge": "🌟 Super Ambiance",
    "summary": "Stage inoubliable selon les internes. Équipe exceptionnelle, gardes bénéfiques. La charge ambulances peut être lourde.",
    "type": "médecine",
    "epuisement": {
      "p1": "695",
      "p2": "735",
      "p3": "509",
      "p4": "634"
    }
  },
  {
    "id": 4,
    "name": "Gastro",
    "hospital": "Beni Messous",
    "specialty": "gastroentérologie",
    "icon": "🫁",
    "color": "#FFBE0B",
    "period": "P4",
    "effectif": 11,
    "gardes": false,
    "gardeFreq": "Aucune",
    "roulement": true,
    "scores": {
      "charge": 6,
      "toxicite": 3,
      "formation": 6,
      "liberte": 7,
      "ambiance": 6
    },
    "highlights": [
      "Pas de gardes",
      "Roulement 15j travail / 15j repos",
      "HDJ très chargé — jusqu'à 16h",
      "Service léger — sortie 12h",
      "Roulement service / HDJ",
      "CDS a demandé 6 internes par jour"
    ],
    "badge": "⚖️ Roulement Idéal",
    "summary": "Excellent roulement négocié (15j/15j). Service léger mais HDJ exigeant. Pas de gardes. Équipe mixte selon les unités.",
    "type": "médecine",
    "epuisement": {
      "p1": "230",
      "p2": "50",
      "p3": "40",
      "p4": "150"
    }
  },
  {
    "id": 5,
    "name": "Gastro",
    "hospital": "BEO",
    "specialty": "gastroentérologie",
    "icon": "🫁",
    "color": "#8AC926",
    "period": "P3",
    "effectif": 8,
    "gardes": false,
    "gardeFreq": "Aucune",
    "roulement": true,
    "scores": {
      "charge": 5,
      "toxicite": 1,
      "formation": 8,
      "liberte": 6,
      "ambiance": 10
    },
    "highlights": [
      "8 internes en binômes sur 4 unités",
      "5/5 matinée 9h → 12h",
      "Roulement officieux 1s/2 possible",
      "Équipe exceptionnelle (très bien classés)",
      "Ponctions d'ascite, endoscopies",
      "Responsable internes exemplaire"
    ],
    "badge": "💎 Meilleure Équipe",
    "summary": "Terrain équilibré entre formation et légèreté. Équipe exceptionnelle, responsable idéale. Recommandé si vous aimez la gastro.",
    "type": "médecine",
    "epuisement": {
      "p1": "499",
      "p2": "112",
      "p3": "85",
      "p4": "197"
    }
  },
  {
    "id": 6,
    "name": "Rhumato",
    "hospital": "Beni Messous",
    "specialty": "rhumatologie",
    "icon": "🦴",
    "color": "#1982C4",
    "period": "P4",
    "effectif": 5,
    "gardes": false,
    "gardeFreq": "Aucune",
    "roulement": false,
    "scores": {
      "charge": 4,
      "toxicite": 1,
      "formation": 7,
      "liberte": 4,
      "ambiance": 9
    },
    "highlights": [
      "5/5 pointage 9h–15h",
      "Pas de gardes, week-end libre",
      "Consulte, HDJ, DMO, écho, capillaro",
      "Infiltrations et gestes",
      "Présence obligatoire — pas de roulement",
      "Équipe très gentille"
    ],
    "badge": "☀️ Terrain Calme",
    "summary": "Terrain léger avec bonne formation rhumatologique. Pas de gardes, WE libres. La présence obligatoire sans roulement peut peser sur 3 mois.",
    "type": "médecine",
    "epuisement": {
      "p1": "N/E",
      "p2": "N/E",
      "p3": "N/E",
      "p4": "N/E"
    }
  },
  {
    "id": 7,
    "name": "Endocrino",
    "hospital": "BEO",
    "specialty": "endocrinologie",
    "icon": "🧬",
    "color": "#6A4C93",
    "period": "P3",
    "effectif": 6,
    "gardes": false,
    "gardeFreq": "Aucune",
    "roulement": true,
    "scores": {
      "charge": 4,
      "toxicite": 5,
      "formation": 5,
      "liberte": 6,
      "ambiance": 5
    },
    "highlights": [
      "Instable selon le responsable",
      "P3 : Pr Si Youcef strict (TDs, pointage)",
      "Premier mois stressant",
      "2e mois : 1–2 j/semaine",
      "3e mois : congés + 2j/semaine",
      "Avis multiples (ophtalmo, radio, ORL...)"
    ],
    "badge": "⚠️ Variable",
    "summary": "Terrain très variable selon la période et le responsable. Peut aller de 4–5 j/semaine à 2 j/semaine. Instabilité potentielle.",
    "type": "médecine",
    "epuisement": {
      "p1": "257",
      "p2": "74",
      "p3": "20",
      "p4": "127"
    }
  },
  {
    "id": 8,
    "name": "Onco",
    "hospital": "Rouiba",
    "specialty": "oncologie",
    "icon": "🎗️",
    "color": "#06D6A0",
    "period": "P1",
    "effectif": 8,
    "gardes": false,
    "gardeFreq": "Astreinte 8j",
    "roulement": true,
    "scores": {
      "charge": 4,
      "toxicite": 2,
      "formation": 5,
      "liberte": 7,
      "ambiance": 8
    },
    "highlights": [
      "Pas de gardes formelles",
      "8h30 → 12–14h (max 15h)",
      "Astreinte 9–16h (8 jours/stage)",
      "Rapport de stage obligatoire (120 patients)",
      "Soutenance obligatoire en P1",
      "La plupart des médecins très gentils"
    ],
    "badge": "📝 Rapport Lourd",
    "summary": "Terrain léger en termes de présence mais le rapport de stage (étude 120 patients + soutenance) représente une charge intellectuelle importante.",
    "type": "médecine"
  },
  {
    "id": 9,
    "name": "Med Interne",
    "hospital": "Ain Taya",
    "specialty": "médecine interne",
    "icon": "🏥",
    "color": "#118AB2",
    "period": "P3",
    "effectif": 7,
    "gardes": true,
    "gardeFreq": "Chaque 9–10j",
    "roulement": true,
    "scores": {
      "charge": 4,
      "toxicite": 2,
      "formation": 7,
      "liberte": 7,
      "ambiance": 8
    },
    "highlights": [
      "Roulement 1/4 à 1/3",
      "Gardes avec UMC — libération à minuit",
      "Visite dimanche pédagogique",
      "Planchage lundi",
      "Cas variés : MICI, AI, auto-inflammation",
      "Liberté à 12h hors admissions"
    ],
    "badge": "🎓 Pédagogique",
    "summary": "Bon terrain avec cas variés et équipe disponible. Roulement confortable, gardes légères (minuit libération). Idéal pour apprendre tout en restant flexible.",
    "type": "médecine"
  },
  {
    "id": 10,
    "name": "Med Légale",
    "hospital": "Beni Messous",
    "specialty": "médecine légale",
    "icon": "⚖️",
    "color": "#4CC9F0",
    "period": "Multi",
    "effectif": 4,
    "gardes": false,
    "gardeFreq": "Aucune",
    "roulement": true,
    "scores": {
      "charge": 2,
      "toxicite": 1,
      "formation": 2,
      "liberte": 9,
      "ambiance": 9
    },
    "highlights": [
      "Consultation, autopsie, unité pénitentiaire",
      "Présence non vraiment obligatoire",
      "Autopsies optionnelles",
      "Colloque mardi 14h–16h30",
      "Roulement demi-journée/semaine en P2",
      "Astreinte jusqu'à 16h (sortie souvent plus tôt)"
    ],
    "badge": "😴 Ultra Léger",
    "summary": "Le terrain le plus light de l'internat. Quasi aucune toxicité, équipe super, mais quasi aucune formation médicale clinique. Pour récupérer ou préparer le concours.",
    "type": "médecine"
  },
  {
    "id": 11,
    "name": "Hémato",
    "hospital": "CPMC",
    "specialty": "hématologie",
    "icon": "🩸",
    "color": "#EF476F",
    "period": "P4",
    "effectif": 5,
    "gardes": false,
    "gardeFreq": "Aucune",
    "roulement": false,
    "scores": {
      "charge": 7,
      "toxicite": 2,
      "formation": 8,
      "liberte": 2,
      "ambiance": 8
    },
    "highlights": [
      "Tous les jours — pas de roulement",
      "1.5 mois HDJ + PU greffe de moelle",
      "1.5 mois service unité stérile",
      "Imagerie interne (écho/scanner/IRM)",
      "Greffe de moelle unique à CPMC et Blida",
      "9h → 14h (dialyse = plus long)"
    ],
    "badge": "🔬 Rare et Unique",
    "summary": "Expérience unique avec la greffe de moelle osseuse. Équipe gentille et terrain très formateur en hémato. Le manque total de roulement est le principal inconvénient.",
    "type": "médecine"
  },
  {
    "id": 12,
    "name": "Med Interne",
    "hospital": "Beni Messous",
    "specialty": "médecine interne",
    "icon": "🏥",
    "color": "#6366f1",
    "period": "Multi",
    "effectif": 6,
    "gardes": false,
    "gardeFreq": "Aucune",
    "roulement": false,
    "scores": {
      "charge": 7,
      "toxicite": 6,
      "formation": 3,
      "liberte": 2,
      "ambiance": 4
    },
    "highlights": [
      "Pointage 8h30, présence tous les jours",
      "Service maladies de système — pas de PU",
      "Évacuations ++ bête noire des internes",
      "Ambulancier part sans vous — débrouillard",
      "Quelques gestes : BGSA, capillaroscopie",
      "2 TDs à présenter par interne"
    ],
    "badge": "😤 Évacs Cauchemar",
    "summary": "Terrain décrié pour l'utilisation des internes comme agents d'évacuation sans soutien. Peu formateur cliniquement. Résidents mixtes. À éviter si vous habitez loin.",
    "type": "médecine"
  },
  {
    "id": 13,
    "name": "Endocrino",
    "hospital": "Beni Messous",
    "specialty": "endocrinologie",
    "icon": "🧬",
    "color": "#a78bfa",
    "period": "P1",
    "effectif": 5,
    "gardes": false,
    "gardeFreq": "Aucune",
    "roulement": true,
    "scores": {
      "charge": 3,
      "toxicite": 1,
      "formation": 3,
      "liberte": 7,
      "ambiance": 8
    },
    "highlights": [
      "Roulement 2sem/3 (P1 = 5 internes)",
      "Avis uniquement — fin max 12h",
      "Pas de pointage ni d'astreinte",
      "Rapport de stage signé avant fin P1",
      "CDS très gentille et protectrice",
      "Surtout diabétologie, peu d'endocrino rare"
    ],
    "badge": "☀️ Ultra Léger",
    "summary": "Terrain médical très léger. CDS exemplaire. Résidents pédagogues. Peu de cas rares d'endocrino. La P2/P3/P4 est encore plus espacée avec plus d'internes.",
    "type": "médecine",
    "epuisement": {
      "p1": "192",
      "p2": "46",
      "p3": "20",
      "p4": "112"
    }
  },
  {
    "id": 14,
    "name": "Diabeto",
    "hospital": "BEO",
    "specialty": "diabétologie",
    "icon": "🩺",
    "color": "#f0abfc",
    "period": "P4",
    "effectif": 3,
    "gardes": false,
    "gardeFreq": "Aucune",
    "roulement": false,
    "scores": {
      "charge": 5,
      "toxicite": 4,
      "formation": 4,
      "liberte": 5,
      "ambiance": 6
    },
    "highlights": [
      "Pointage & dépointage (P4 seulement)",
      "Admissions, avis, radio + FO ophtalmo",
      "Roulement 1s/2 à 1s/3 autres périodes",
      "Visite 9h–15h (longue)",
      "Sortie 12h–12h30 si roulement",
      "Formation résidente-dépendante"
    ],
    "badge": "⚠️ Pointage Strict",
    "summary": "Terrain correct si roulement bien géré (autres périodes). Le pointage en P4 et la secrétaire sont les points noirs. Formation possible si vous posez des questions.",
    "type": "médecine",
    "epuisement": {
      "p1": "479",
      "p2": "257",
      "p3": "168",
      "p4": "235"
    }
  },
  {
    "id": 15,
    "name": "REA",
    "hospital": "Bainem",
    "specialty": "réanimation",
    "icon": "🫀",
    "color": "#fb7185",
    "period": "P4",
    "effectif": 5,
    "gardes": true,
    "gardeFreq": "Effectif dépendant",
    "roulement": true,
    "scores": {
      "charge": 3,
      "toxicite": 1,
      "formation": 6,
      "liberte": 9,
      "ambiance": 10
    },
    "highlights": [
      "Que des gardes — aucune tâche service",
      "Accès REA, bloc, décochage, bronchoscopie",
      "Suivez juste les résidents",
      "Chambre de garde disponible",
      "0 toxicité — tout le monde gentil",
      "Meilleur terrain pour se reposer"
    ],
    "badge": "🌴 Vider l'Internat",
    "summary": "Le meilleur terrain pour souffler. Que des gardes, aucune obligation service. Accès passif à des gestes techniques importants. 0 toxicité. Vivement recommandé pour récupérer.",
    "type": "médecine",
    "epuisement": {
      "p1": "612",
      "p2": "407",
      "p3": "329",
      "p4": "360"
    }
  },
  {
    "id": 16,
    "name": "Cardio A1",
    "hospital": "Mustapha Basha",
    "specialty": "cardiologie",
    "icon": "❤️",
    "color": "#f97316",
    "period": "P1",
    "effectif": 8,
    "gardes": true,
    "gardeFreq": "Chaque 16j (→14j)",
    "roulement": true,
    "scores": {
      "charge": 5,
      "toxicite": 2,
      "formation": 8,
      "liberte": 7,
      "ambiance": 9
    },
    "highlights": [
      "Roulement 1 sem/4 (service en travaux)",
      "Gardes monomes — chaque 16j puis 14j",
      "Travail fini 11h–12h, astreinte max 14h",
      "ECG ++ formation très solide",
      "Accès bloc rythmologie",
      "Toute l'équipe explique très bien"
    ],
    "badge": "📈 ECG Expert",
    "summary": "Très bon terrain cardiologique malgré les travaux. Roulement 1/4, gardes espacées, équipe pédagogue et très sympa. Formation ECG et prise en charge CV solide.",
    "type": "médecine",
    "epuisement": {
      "p1": "479",
      "p2": "555",
      "p3": "516",
      "p4": "345"
    }
  },
  {
    "id": 17,
    "name": "Urologie",
    "hospital": "Mustapha Basha",
    "specialty": "urologie",
    "icon": "🔬",
    "color": "#0ea5e9",
    "period": "P2",
    "effectif": 7,
    "gardes": true,
    "gardeFreq": "Chaque 6j (PU 24h)",
    "roulement": false,
    "scores": {
      "charge": 7,
      "toxicite": 2,
      "formation": 7,
      "liberte": 5,
      "ambiance": 7
    },
    "highlights": [
      "Gardes 24h au PU — 30-40 patients/garde",
      "Sondage urinaire — vous devenez experts",
      "Colloque mardi avec TDs des assistants",
      "Pas de service (travaux)",
      "Examen clinique + prescriptions",
      "⚠️ Déconseillé aux femmes (إحراج)"
    ],
    "badge": "🔱 Chirurgie Pratique",
    "summary": "Bon terrain urologique avec gardes actives (30-40 patients). Cas variés : RVA, coliques, infections, torsions. Service en travaux. NB : déconseillé aux étudiantes selon les témoignages.",
    "type": "chirurgie",
    "epuisement": {
      "p1": "1010",
      "p2": "927",
      "p3": "1022",
      "p4": "N/E"
    }
  },
  {
    "id": 18,
    "name": "Pneumo (Pr Khlaf)",
    "hospital": "Beni Messous",
    "specialty": "pneumologie",
    "icon": "🫁",
    "color": "#38bdf8",
    "period": "P3",
    "effectif": 6,
    "gardes": false,
    "gardeFreq": "Aucune",
    "roulement": true,
    "scores": {
      "charge": 3,
      "toxicite": 2,
      "formation": 3,
      "liberte": 8,
      "ambiance": 9
    },
    "highlights": [
      "Service léger — sortie 11h ou avant",
      "Roulement possible entre internes",
      "Avis principalement cardio + radio + écho",
      "Résidents TRÈS gentils (Dr Khelfellah)",
      "Majors défendaient les internes",
      "P4 : responsable changée → quasi absents"
    ],
    "badge": "🌿 Équipe en Or",
    "summary": "Terrain léger avec une équipe de résidents exceptionnelle. Peu formateur cliniquement mais idéal pour se reposer. Roulement possible. Ambiance excellente.",
    "type": "médecine",
    "epuisement": {
      "p1": "885",
      "p2": "664",
      "p3": "655",
      "p4": "398"
    }
  },
  {
    "id": 19,
    "name": "Med Interne",
    "hospital": "Birtraria",
    "specialty": "médecine interne",
    "icon": "🏥",
    "color": "#84cc16",
    "period": "P3",
    "effectif": 5,
    "gardes": true,
    "gardeFreq": "Monome (fréq. variable)",
    "roulement": false,
    "scores": {
      "charge": 7,
      "toxicite": 4,
      "formation": 5,
      "liberte": 3,
      "ambiance": 6
    },
    "highlights": [
      "Présence 8h30–13h30 + astreinte 16h",
      "Gardes monomes — équipe résident dépendant",
      "Évacuations +++ : bête noire du terrain",
      "RDG obligatoire, TD en anglais à présenter",
      "Cas variés service + gardes formateurs",
      "Internes utilisés pour les évacs"
    ],
    "badge": "🚑 Évacs Redoutées",
    "summary": "Terrain avec de bons cas mais les évacuations à répétition démotivent les internes. Résidents gentils. Bonne formation potentielle si on ne se laisse pas décourager.",
    "type": "médecine"
  },
  {
    "id": 20,
    "name": "Néphro",
    "hospital": "BEO",
    "specialty": "néphrologie",
    "icon": "💧",
    "color": "#22d3ee",
    "period": "Multi",
    "effectif": 5,
    "gardes": true,
    "gardeFreq": "WE (prof-imposées)",
    "roulement": false,
    "scores": {
      "charge": 6,
      "toxicite": 3,
      "formation": 6,
      "liberte": 3,
      "ambiance": 7
    },
    "highlights": [
      "Présence chaque jour, pas de roulement",
      "RDG 8h30 quotidien (parfois skippé)",
      "Fin vers 14h",
      "Astreintes + gardes WE ajoutées par prof",
      "1 observation + 1 TD par interne",
      "Pas de pointage mais très surveillé"
    ],
    "badge": "👁️ Très Surveillé",
    "summary": "Terrain correct mais strict. Le prof a ajouté des gardes le weekend. Pas de pointage officiel mais les absences sont très remarquées. Formation convenable.",
    "type": "médecine"
  },
  {
    "id": 21,
    "name": "Rhumato",
    "hospital": "Benaknoun",
    "specialty": "rhumatologie",
    "icon": "🦴",
    "color": "#a3e635",
    "period": "P4",
    "effectif": 4,
    "gardes": false,
    "gardeFreq": "Aucune",
    "roulement": true,
    "scores": {
      "charge": 2,
      "toxicite": 2,
      "formation": 2,
      "liberte": 9,
      "ambiance": 8
    },
    "highlights": [
      "Roulement 1s/2, pas de jeudi",
      "9h30 → 12h–13h max",
      "Pas de présence obligatoire",
      "Détachement et transfert acceptés",
      "Résidents proches et gentils",
      "Formation quasi nulle (hammouda matt3alam walou)"
    ],
    "badge": "😴 Repos Total",
    "summary": "Le terrain idéal pour souffler. Roulement 1s/2, aucune garde, horaires très courts, pas de présence obligatoire. Mais attention : pratiquement rien à apprendre.",
    "type": "médecine",
    "epuisement": {
      "p1": "705",
      "p2": "421",
      "p3": "536",
      "p4": "235"
    }
  },
  {
    "id": 22,
    "name": "ORL",
    "hospital": "Mustapha Basha",
    "specialty": "ORL",
    "icon": "👂",
    "color": "#fb923c",
    "period": "P3",
    "effectif": 7,
    "gardes": true,
    "gardeFreq": "1 interne/service",
    "roulement": true,
    "scores": {
      "charge": 6,
      "toxicite": 3,
      "formation": 7,
      "liberte": 6,
      "ambiance": 6
    },
    "highlights": [
      "2 services + urgences",
      "Roulement 1 interne/service (officieux)",
      "Gardes avec R1 (monomes)",
      "Chirurgie = formation solide",
      "R1 haylin, R2 corrects, majors peu contactés",
      "Responsable aware mais ferme les yeux"
    ],
    "badge": "🏥 Chirurgie Utile",
    "summary": "Bon terrain chirurgical ORL. Gardes monomes actives. Roulement officieux 1/interne/service. Formation chirurgicale intéressante. Équipe mixte selon les niveaux.",
    "type": "chirurgie",
    "epuisement": {
      "p1": "615",
      "p2": "705",
      "p3": "660",
      "p4": "566"
    }
  },
  {
    "id": 23,
    "name": "Néphro",
    "hospital": "Mustapha Basha",
    "specialty": "néphrologie",
    "icon": "💧",
    "color": "#06b6d4",
    "period": "Multi",
    "effectif": 5,
    "gardes": true,
    "gardeFreq": "J0/J1/J2 (greffe) + Sam",
    "roulement": true,
    "scores": {
      "charge": 6,
      "toxicite": 3,
      "formation": 7,
      "liberte": 4,
      "ambiance": 6
    },
    "highlights": [
      "8h30 → 14h tous les jours",
      "3 unités : service, dialyse, greffe, DP",
      "Gardes J0/J1/J2 si greffe + astreintes sam",
      "Avis + accompagnement radio",
      "Dialyse péritonéale unique",
      "Gardes : juste assister les résidents"
    ],
    "badge": "🔬 Greffe & Dialyse",
    "summary": "Terrain néphro complet avec 4 unités. Greffe et dialyse péritonéale offrent une expérience rare. Gardes légères (assister résidents). Charge quotidienne sans roulement.",
    "type": "médecine"
  },
  {
    "id": 24,
    "name": "Rhumato",
    "hospital": "BEO",
    "specialty": "rhumatologie",
    "icon": "🦴",
    "color": "#4ade80",
    "period": "Multi",
    "effectif": 5,
    "gardes": false,
    "gardeFreq": "Aucune",
    "roulement": true,
    "scores": {
      "charge": 3,
      "toxicite": 1,
      "formation": 5,
      "liberte": 8,
      "ambiance": 9
    },
    "highlights": [
      "5/5 officiel → roulement officieux 2/5",
      "Consultations avec professeurs",
      "Avis de service principalement",
      "Aucune toxicité",
      "Résidents tous très gentils",
      "Apprentissage diagnostique en consultation"
    ],
    "badge": "✨ Zéro Toxicité",
    "summary": "Terrain très agréable avec un roulement officieux 2/5. Aucune toxicité, équipe au top. Formation correcte en consultation rhumatologique. Idéal pour un équilibre serein.",
    "type": "médecine",
    "epuisement": {
      "p1": "235",
      "p2": "104",
      "p3": "74",
      "p4": "192"
    }
  },
  {
    "id": 25,
    "name": "Med Interne",
    "hospital": "BEO",
    "specialty": "médecine interne",
    "icon": "🏥",
    "color": "#818cf8",
    "period": "P1",
    "effectif": 6,
    "gardes": false,
    "gardeFreq": "Aucune",
    "roulement": false,
    "scores": {
      "charge": 5,
      "toxicite": 2,
      "formation": 6,
      "liberte": 5,
      "ambiance": 8
    },
    "highlights": [
      "9h → 12h tous les jours (CDS strict)",
      "Services H/F — 1.5 mois chacun",
      "Colloque lundi + visites lundi & jeudi",
      "Constantes, avis ORL/ophtalmo, examen clinique",
      "Pas de travail de coursier",
      "TD programme + présentation patients"
    ],
    "badge": "📚 Formation Correcte",
    "summary": "Terrain équilibré, matériel disponible, équipe sympa et pédagogue. Pas de roulement mais horaires courts (9-12h). CDS strict sur la présence mais correct. Bon pour la P1.",
    "type": "médecine"
  },
  {
    "id": 26,
    "name": "Hépatologie",
    "hospital": "Mustapha Basha",
    "specialty": "hépatologie",
    "icon": "🫀",
    "color": "#fbbf24",
    "period": "P4",
    "effectif": 5,
    "gardes": false,
    "gardeFreq": "Aucune",
    "roulement": false,
    "scores": {
      "charge": 7,
      "toxicite": 3,
      "formation": 6,
      "liberte": 3,
      "ambiance": 7
    },
    "highlights": [
      "5/5 — 3 unités : HDJ, service, USC",
      "8h30 → 14h–15h (service/USC plus tard)",
      "Pas de gardes, pas de roulement",
      "1 mois par unité",
      "CDS très gentille, accorde jours libres",
      "Fatigant l'été"
    ],
    "badge": "☀️ Fatiguant l'Été",
    "summary": "Terrain sans gardes mais 5/5 sans roulement. CDS bienveillante. 3 unités variées. Quelques résidents toxiques selon les cas. Charge élevée l'été. Pas de détachement possible.",
    "type": "médecine"
  },
  {
    "id": 27,
    "name": "Gastro",
    "hospital": "Mustapha Basha",
    "specialty": "gastroentérologie",
    "icon": "🫁",
    "color": "#d97706",
    "period": "P3",
    "effectif": 6,
    "gardes": false,
    "gardeFreq": "Aucune",
    "roulement": false,
    "scores": {
      "charge": 5,
      "toxicite": 2,
      "formation": 4,
      "liberte": 5,
      "ambiance": 7
    },
    "highlights": [
      "5/5 à 8h30 + RDG",
      "Avis anti-TNF (stomato, dermato, anesthésie)",
      "RCP dimanche, colloque jeudi",
      "Focus médicaments nouveaux mercredi",
      "TDs faits par les assistants",
      "Peu formateur — proactivité requise"
    ],
    "badge": "📋 Proactivité Requise",
    "summary": "Terrain peu formateur si vous attendez qu'on vienne vous enseigner. Mais si vous posez des questions, les résidents (non toxiques) peuvent vous apprendre. RDG quotidien obligatoire.",
    "type": "médecine",
    "epuisement": {
      "p1": "N/E",
      "p2": "N/E",
      "p3": "N/E",
      "p4": "1000"
    }
  },
  {
    "id": 28,
    "name": "ORL",
    "hospital": "BEO",
    "specialty": "ORL",
    "icon": "👂",
    "color": "#f59e0b",
    "period": "P1",
    "effectif": 5,
    "gardes": true,
    "gardeFreq": "Chaque 6j (P1)",
    "roulement": true,
    "scores": {
      "charge": 8,
      "toxicite": 2,
      "formation": 8,
      "liberte": 4,
      "ambiance": 7
    },
    "highlights": [
      "P1 : garde/6 — P2 : /9 — P3 : /12 — P4 : /15",
      "Post-garde uniquement (léger)",
      "Rapport de stage : binôme, stats archives",
      "Gardes progressivement espacées",
      "CDS très accessible et protecteur",
      "Résidents majoritairement gentils"
    ],
    "badge": "📉 Gardes Progressives",
    "summary": "La charge en P1 est élevée (garde/6j) mais elle diminue fortement chaque période. Terrain formateur avec des gardes actives. Rapport de stage avec stats d'archives. CDS de côté des internes.",
    "type": "chirurgie",
    "epuisement": {
      "p1": "150",
      "p2": "69",
      "p3": "85-97",
      "p4": "230"
    }
  },
  {
    "id": 29,
    "name": "REA Polyvalente",
    "hospital": "BEO",
    "specialty": "réanimation",
    "icon": "🫀",
    "color": "#e11d48",
    "period": "P2",
    "effectif": 5,
    "gardes": true,
    "gardeFreq": "Chaque 5j",
    "roulement": false,
    "scores": {
      "charge": 9,
      "toxicite": 4,
      "formation": 9,
      "liberte": 2,
      "ambiance": 6
    },
    "highlights": [
      "5/5 + garde chaque 5j + RDG obligatoire",
      "RDG 9h — discussions très riches",
      "Planchage mardi jusqu'à 16h–17h",
      "Pas de chambre internes (dortoir précaire)",
      "Pas de gestes directs pour internes",
      "CDS très stricte — équipe féminine à 100%"
    ],
    "badge": "🧠 Max Formation BEO",
    "summary": "Le terrain le plus formateur de BEO selon les témoignages. Raisonnement clinique développé via les RDGs. Mais très chargé, gardes tous les 5j sans chambre d'internes. CDS stricte.",
    "type": "médecine",
    "epuisement": {
      "p1": "660",
      "p2": "756",
      "p3": "751",
      "p4": "765"
    }
  },
  {
    "id": 30,
    "name": "Med Légale",
    "hospital": "Mustapha Basha",
    "specialty": "médecine légale",
    "icon": "⚖️",
    "color": "#94a3b8",
    "period": "Multi",
    "effectif": 4,
    "gardes": false,
    "gardeFreq": "Aucune",
    "roulement": true,
    "scores": {
      "charge": 2,
      "toxicite": 1,
      "formation": 3,
      "liberte": 8,
      "ambiance": 9
    },
    "highlights": [
      "1.5 mois pinel + 1.5 mois consultation",
      "Roulement selon effectif (1 interne/sem consulte)",
      "Avis principalement — équipe hayline",
      "Pinel : variété de cas psychiatrico-légaux",
      "CDS accessible et de côté des internes",
      "Très léger — idéal pour préparer le concours"
    ],
    "badge": "📚 Préparez le Concours",
    "summary": "Terrain très light, 0 toxicité. Le pinel offre une variété de cas intéressants. La consultation reste légère. Équipe hayline. Idéal pour réviser tout en assurant un minimum clinique.",
    "type": "médecine"
  },
  {
    "id": 31,
    "name": "Cardiologie",
    "hospital": "Beni Messous",
    "specialty": "cardiologie",
    "icon": "❤️",
    "color": "#f97316",
    "period": "P3",
    "effectif": 4,
    "gardes": false,
    "gardeFreq": "Aucune (travaux)",
    "roulement": true,
    "scores": {
      "charge": 4,
      "toxicite": 2,
      "formation": 6,
      "liberte": 7,
      "ambiance": 8
    },
    "highlights": [
      "4 unités : consult, PU, hospi, USIC",
      "Sortie max à midi",
      "ECG matin + accompagnement patients",
      "Formation ++ si l'interne s'implique",
      "Pas de gardes (chambre en travaux)",
      "P4 un peu plus chargé"
    ],
    "badge": "☀️ Matinée Légère",
    "summary": "Terrain agréable et peu chargé, avec une sortie vers midi. La formation est bonne si vous êtes proactif. Les gardes étaient suspendues pour cause de travaux.",
    "type": "médecine",
    "epuisement": {
      "p1": "718",
      "p2": "910",
      "p3": "789",
      "p4": "705"
    }
  },
  {
    "id": 32,
    "name": "Endocrino",
    "hospital": "CPMC",
    "specialty": "endocrinologie",
    "icon": "🧬",
    "color": "#a78bfa",
    "period": "P3",
    "effectif": 5,
    "gardes": false,
    "gardeFreq": "Aucune",
    "roulement": false,
    "scores": {
      "charge": 5,
      "toxicite": 6,
      "formation": 8,
      "liberte": 4,
      "ambiance": 6
    },
    "highlights": [
      "Pointage strict 9h tous les jours",
      "Irathérapie (dim/mar) - papiers et ordo",
      "Visites longues (Pr Kesri jusqu'à 13h+)",
      "Très intéressant (pathologies thyroïdiennes variées)",
      "Secrétaire stricte sur la présence",
      "Rapport de stage long et exigeant"
    ],
    "badge": "📚 Visites Longues",
    "summary": "Excellent terrain pour la théorie et les pathologies rares, mais présence obligatoire avec une secrétaire stricte. Les visites de professeurs sont très instructives mais longues.",
    "type": "médecine",
    "epuisement": {
      "p1": "544",
      "p2": "383",
      "p3": "112",
      "p4": "301"
    }
  },
  {
    "id": 33,
    "name": "REA Polyvalente",
    "hospital": "Mustapha Basha",
    "specialty": "réanimation",
    "icon": "🫀",
    "color": "#e11d48",
    "period": "P2",
    "effectif": 6,
    "gardes": true,
    "gardeFreq": "Semaine + Astreinte WE",
    "roulement": false,
    "scores": {
      "charge": 7,
      "toxicite": 3,
      "formation": 8,
      "liberte": 4,
      "ambiance": 7
    },
    "highlights": [
      "Gardes en monôme, pas de roulement",
      "Vous faites des gestes (gazo, intubation, sondage)",
      "Astreintes le weekend jusqu'à 17h",
      "TD, TP et planchage des résidents mardi",
      "On se déplace avec l'équipe (urgences)"
    ],
    "badge": "💉 Gestes Techniques",
    "summary": "Terrain de réanimation très formateur où on vous laisse pratiquer des gestes. Chargé en gardes et astreintes le week-end, mais l'apprentissage au contact des résidents est riche.",
    "type": "médecine",
    "epuisement": {
      "p1": "573",
      "p2": "875",
      "p3": "725",
      "p4": "526"
    }
  },
  {
    "id": 34,
    "name": "ORL",
    "hospital": "Kouba",
    "specialty": "ORL",
    "icon": "👂",
    "color": "#f59e0b",
    "period": "P1",
    "effectif": 5,
    "gardes": true,
    "gardeFreq": "Garde / 6 jours",
    "roulement": false,
    "scores": {
      "charge": 4,
      "toxicite": 2,
      "formation": 8,
      "liberte": 7,
      "ambiance": 9
    },
    "highlights": [
      "Service 5/5 mais souvent libéré à 10h",
      "Équipe très chill et gentille",
      "Participation au bloc opératoire !",
      "Pas d'évacuations, peu d'avis",
      "Endoscopie le mercredi (jusqu'à 15h)"
    ],
    "badge": "🔪 Accès au Bloc",
    "summary": "Super terrain ORL, très intéressant avec accès au bloc opératoire. L'équipe est gentille et le service est globalement léger avec des sorties parfois très tôt.",
    "type": "chirurgie",
    "epuisement": {
      "p1": "580",
      "p2": "690",
      "p3": "675",
      "p4": "700"
    }
  },
  {
    "id": 35,
    "name": "Med Interne",
    "hospital": "Kouba",
    "specialty": "médecine interne",
    "icon": "🏥",
    "color": "#6366f1",
    "period": "Multi",
    "effectif": 6,
    "gardes": true,
    "gardeFreq": "Garde / 9 jours (monôme)",
    "roulement": false,
    "scores": {
      "charge": 8,
      "toxicite": 3,
      "formation": 8,
      "liberte": 2,
      "ambiance": 8
    },
    "highlights": [
      "Pointage et dépointage obligatoires (8h30-15h)",
      "Beaucoup d'évacuations (bête noire)",
      "Très riche et formateur si on s'implique",
      "Résidents et Professeur très compétents",
      "Colloque obligatoire et long (jeudi)",
      "Chambre de garde de luxe"
    ],
    "badge": "🚑 Évacuations ++",
    "summary": "Un service organisé et très formateur avec une excellente équipe médicale. Bémols : charge horaire stricte (8h30-15h) et beaucoup d'évacuations fatigantes.",
    "type": "médecine"
  },
  {
    "id": 36,
    "name": "Réa / UMC",
    "hospital": "Zmirli",
    "specialty": "réanimation",
    "icon": "🫀",
    "color": "#be123c",
    "period": "P3",
    "effectif": 5,
    "gardes": true,
    "gardeFreq": "Effectif dépendant",
    "roulement": true,
    "scores": {
      "charge": 9,
      "toxicite": 4,
      "formation": 9,
      "liberte": 2,
      "ambiance": 6
    },
    "highlights": [
      "1.5 mois service / 1.5 mois déchoc chir",
      "Tous les gestes : intubation, gazo, VVP, PDP",
      "Extrêmement chargé surtout en P3",
      "2 TDs à présenter",
      "Système un peu plus souple en P4"
    ],
    "badge": "🚨 Extrême Urgence",
    "summary": "Pour ceux qui veulent apprendre l'extrême urgence et la réanimation pure. Extrêmement chargé et fatigant, mais formation technique incomparable.",
    "type": "médecine",
    "epuisement": {
      "p1": "920",
      "p2": "936",
      "p3": "978",
      "p4": "675"
    }
  },
  {
    "id": 37,
    "name": "Néphro",
    "hospital": "Beni Messous",
    "specialty": "néphrologie",
    "icon": "💧",
    "color": "#0ea5e9",
    "period": "P1",
    "effectif": 6,
    "gardes": true,
    "gardeFreq": "Variable (selon R1)",
    "roulement": false,
    "scores": {
      "charge": 7,
      "toxicite": 3,
      "formation": 8,
      "liberte": 4,
      "ambiance": 8
    },
    "highlights": [
      "2 unités (Hospitalisation et Greffe)",
      "Hospi : très chargée en avis",
      "Greffe : très léger, sortie rapide",
      "RDG très intéressant",
      "Des résidents exceptionnels"
    ],
    "badge": "📖 RDG Instructif",
    "summary": "Terrain néphro solide. L'unité d'hospitalisation demande beaucoup de travail (avis), mais compensé par une super équipe et des moments d'enseignement de qualité.",
    "type": "médecine"
  },
  {
    "id": 38,
    "name": "Urologie",
    "hospital": "BEO",
    "specialty": "urologie",
    "icon": "🔬",
    "color": "#0284c7",
    "period": "P4",
    "effectif": 5,
    "gardes": true,
    "gardeFreq": "Garde de 24h / 6",
    "roulement": false,
    "scores": {
      "charge": 8,
      "toxicite": 2,
      "formation": 8,
      "liberte": 6,
      "ambiance": 8
    },
    "highlights": [
      "Pas de service, QUE des gardes (24h)",
      "Très chargé (40 à 80 patients / nuit)",
      "Coliques, RVA, pyélonéphrites",
      "Tu examines et tu traites les cas simples",
      "Équipe très sympa (non toxique)"
    ],
    "badge": "🌙 Nuits Blanches",
    "summary": "Rythme particulier : uniquement des gardes très actives. Excellent pour gérer les urgences urologiques simples de façon autonome. Équipe bienveillante.",
    "type": "chirurgie",
    "epuisement": {
      "p1": "941",
      "p2": "885",
      "p3": "915",
      "p4": "730"
    }
  },
  {
    "id": 39,
    "name": "Néphro",
    "hospital": "Parnet",
    "specialty": "néphrologie",
    "icon": "💧",
    "color": "#38bdf8",
    "period": "P2",
    "effectif": 5,
    "gardes": true,
    "gardeFreq": "Garde / 6",
    "roulement": true,
    "scores": {
      "charge": 3,
      "toxicite": 2,
      "formation": 4,
      "liberte": 8,
      "ambiance": 8
    },
    "highlights": [
      "Roulement 1 sem / 2",
      "Sortie à midi",
      "Très peu de tâches (scanners, qlq avis)",
      "Gardes légères où on dort bien",
      "Terrain idéal pour préparer un concours"
    ],
    "badge": "💤 Sommeil Garanti",
    "summary": "Un terrain extrêmement calme. Avec un roulement 1 semaine sur 2 et des gardes tranquilles, c'est l'endroit parfait si vous avez besoin de temps libre pour étudier.",
    "type": "médecine"
  },
  {
    "id": 40,
    "name": "Pneumo",
    "hospital": "BEO",
    "specialty": "pneumologie",
    "icon": "🫁",
    "color": "#bae6fd",
    "period": "P1",
    "effectif": 6,
    "gardes": false,
    "gardeFreq": "Aucune",
    "roulement": false,
    "scores": {
      "charge": 4,
      "toxicite": 2,
      "formation": 5,
      "liberte": 6,
      "ambiance": 8
    },
    "highlights": [
      "Présence tous les jours 9h - 14h",
      "Pas de gardes ni d'astreintes",
      "Pas d'évacuations",
      "Résidentes et cheffe de service sympas",
      "Tâches classiques (constantes, cliniques, avis interne)"
    ],
    "badge": "🌬️ Respirable",
    "summary": "Un terrain de pneumo serein sans gardes, sans évacuations et avec une bonne équipe. Idéal pour une P1 sans trop de pression.",
    "type": "médecine",
    "epuisement": {
      "p1": "N/E",
      "p2": "1027",
      "p3": "1005",
      "p4": "589"
    }
  },
  {
    "id": 41,
    "name": "Pneumo (Pr Khlaf)",
    "hospital": "Beni Messous",
    "specialty": "pneumologie",
    "icon": "🫁",
    "color": "#7dd3fc",
    "period": "P3",
    "effectif": 5,
    "gardes": false,
    "gardeFreq": "Aucune",
    "roulement": false,
    "scores": {
      "charge": 4,
      "toxicite": 3,
      "formation": 5,
      "liberte": 7,
      "ambiance": 7
    },
    "highlights": [
      "5/5 jours, sortie vers 13h/14h max",
      "Tâches : Avis, constantes, biopsies, gazo",
      "Personnel globalement bienveillant",
      "La direction voulait imposer des gardes (à vérifier)",
      "Validation de stage facile si on est discipliné"
    ],
    "badge": "📋 Routine Légère",
    "summary": "Terrain stable sans mauvaise surprise (pour le moment pas de gardes). L'équipe est correcte et on sort assez tôt l'après-midi.",
    "type": "médecine",
    "epuisement": {
      "p1": "885",
      "p2": "664",
      "p3": "655",
      "p4": "398"
    }
  },
  {
    "id": 42,
    "name": "Med Interne",
    "hospital": "Rouiba",
    "specialty": "médecine interne",
    "icon": "🏥",
    "color": "#818cf8",
    "period": "P2",
    "effectif": 5,
    "gardes": false,
    "gardeFreq": "Astreintes (17h)",
    "roulement": false,
    "scores": {
      "charge": 5,
      "toxicite": 5,
      "formation": 5,
      "liberte": 3,
      "ambiance": 5
    },
    "highlights": [
      "Pointage strict 9h-14h (Roulement impossible)",
      "Très riche (Maladies système, onco, hémato)",
      "Internes peu impliqués (tâches administratives)",
      "Attention : Chef de service très stricte",
      "Astreintes PU inutiles et non formatives"
    ],
    "badge": "⚠️ CDS Stricte",
    "summary": "Un terrain riche en cas médicaux rares, mais on vous laisse souvent un rôle de spectateur/secrétaire. Il ne faut surtout pas énerver le chef de service.",
    "type": "médecine"
  },
  {
    "id": 43,
    "name": "Med Interne",
    "hospital": "Zmirli",
    "specialty": "médecine interne",
    "icon": "🏥",
    "color": "#4f46e5",
    "period": "Multi",
    "effectif": 5,
    "gardes": true,
    "gardeFreq": "Monomes (16h Sem, 10h WE)",
    "roulement": true,
    "scores": {
      "charge": 9,
      "toxicite": 2,
      "formation": 10,
      "liberte": 3,
      "ambiance": 8
    },
    "highlights": [
      "1 mois PU, 1 mois Homme, 1 mois Femme",
      "PU = Vous faites absolument TOUT",
      "Gestion des urgences (OAP, ACR, AVC)",
      "Zéro travail de coursier",
      "Hyper épuisant mais masterclass en urgences"
    ],
    "badge": "🔥 Masterclass Urgences",
    "summary": "Le terrain qui fera de vous un vrai médecin urgentiste. Extrêmement formateur au PU mais d'une lourdeur écrasante. À déconseiller en P4 si on prépare le résidanat.",
    "type": "médecine"
  },
  {
    "id": 44,
    "name": "Pneumo",
    "hospital": "Rouiba",
    "specialty": "pneumologie",
    "icon": "🫁",
    "color": "#0ea5e9",
    "period": "P4",
    "effectif": 6,
    "gardes": false,
    "gardeFreq": "Aucune",
    "roulement": false,
    "scores": {
      "charge": 8,
      "toxicite": 2,
      "formation": 8,
      "liberte": 3,
      "ambiance": 8
    },
    "highlights": [
      "Présence 5j/5 de 9h à 15h",
      "4 unités : Homme, Femme, Explorations, HDJ",
      "Beaucoup de gestes (gazo, ponctions)",
      "Très chargé en travail mais formateur",
      "Éviter en plein été (fatigant 5j/5 sans clim)"
    ],
    "badge": "🥵 Formateur mais Lourd",
    "summary": "Excellent terrain de pneumologie pour apprendre (gestes, explorations). Cependant, la présence de 9h à 15h tous les jours sans roulement le rend épuisant.",
    "type": "médecine",
    "epuisement": {
      "p1": "N/E",
      "p2": "957",
      "p3": "818",
      "p4": "900"
    }
  },
  {
    "id": 45,
    "name": "Infectiologie A",
    "hospital": "El Kettar",
    "specialty": "infectiologie",
    "icon": "🦠",
    "color": "#10b981",
    "period": "P1",
    "effectif": 5,
    "gardes": true,
    "gardeFreq": "Garde / 11",
    "roulement": false,
    "scores": {
      "charge": 5,
      "toxicite": 3,
      "formation": 5,
      "liberte": 5,
      "ambiance": 7
    },
    "highlights": [
      "9h à 12h/13h tous les jours",
      "Gardes au PU (avec internes Nicole/Lemaire)",
      "Orienté pédiatrie (Pasteur/Widal)",
      "Évacuations fréquentes (Bab el Oued, Ait Idir)",
      "Rapport de stage validé sans problème"
    ],
    "badge": "👶 Pédiatrie & Évacs",
    "summary": "Un terrain d'infectio très orienté pédiatrie avec des horaires abordables (jusqu'à midi/13h). Beaucoup d'évacuations vers d'autres CHU.",
    "type": "médecine"
  },
  {
    "id": 46,
    "name": "Dermatologie",
    "hospital": "Mustapha Basha",
    "specialty": "dermatologie",
    "icon": "🧴",
    "color": "#f43f5e",
    "period": "Multi",
    "effectif": 5,
    "gardes": false,
    "gardeFreq": "Astreintes (11h-16h)",
    "roulement": false,
    "scores": {
      "charge": 7,
      "toxicite": 7,
      "formation": 2,
      "liberte": 3,
      "ambiance": 4
    },
    "highlights": [
      "Pointage stricte (secrétaire sur le dos)",
      "Que des maladies systémiques/auto-immunes",
      "Les internes font surtout les coursiers (Avis ++)",
      "Pas de dermatologie classique (acné, etc)",
      "Pas de roulement accepté l'été"
    ],
    "badge": "📉 Fausse Dermato",
    "summary": "Une déception pour ceux qui cherchent la dermato de base. C'est de la pseudo médecine interne complexe. L'interne est réduit au rôle de coursier d'avis. Secrétaire toxique.",
    "type": "médecine",
    "epuisement": {
      "p1": "705",
      "p2": "301",
      "p3": "192",
      "p4": "324"
    }
  },
  {
    "id": 47,
    "name": "Pneumo",
    "hospital": "Mustapha Basha",
    "specialty": "pneumologie",
    "icon": "🫁",
    "color": "#38bdf8",
    "period": "P1",
    "effectif": 6,
    "gardes": false,
    "gardeFreq": "Facultatives",
    "roulement": true,
    "scores": {
      "charge": 4,
      "toxicite": 1,
      "formation": 9,
      "liberte": 6,
      "ambiance": 10
    },
    "highlights": [
      "L'un des meilleurs terrains médicaux",
      "Fin à 13h-14h",
      "Pratique +++ à l'HDJ (ponctions, gazo)",
      "Résidents et Cheffe de service super gentils",
      "Mini-soutenance de stage en fin de période",
      "Seul défaut : l'hôpital est en montée"
    ],
    "badge": "🌟 9/10",
    "summary": "Terrain exceptionnel offrant un équilibre parfait entre apprentissage (gestes), confort et ambiance. Un must-have en choix médical.",
    "type": "médecine",
    "epuisement": {
      "p1": "N/E",
      "p2": "N/E",
      "p3": "N/E",
      "p4": "875"
    }
  },
  {
    "id": 48,
    "name": "Med Interne",
    "hospital": "Mustapha Basha",
    "specialty": "médecine interne",
    "icon": "🏥",
    "color": "#818cf8",
    "period": "P4",
    "effectif": 6,
    "gardes": false,
    "gardeFreq": "Astreintes",
    "roulement": true,
    "scores": {
      "charge": 4,
      "toxicite": 2,
      "formation": 7,
      "liberte": 7,
      "ambiance": 9
    },
    "highlights": [
      "Présence 8h30 - Midi",
      "TD lundi/mercredi, RDG formateur sans pression",
      "Roulement possible entre internes",
      "Résidents et assistants très pédagogues",
      "Beaucoup d'avis gynéco du côté femme"
    ],
    "badge": "🕊️ Formateur & Calme",
    "summary": "Un terrain de médecine interne à Mustapha Basha très apprécié. Bon équilibre de vie, horaires réduits, pas de pression inutile, et équipe à l'écoute.",
    "type": "médecine"
  },
  {
    "id": 49,
    "name": "Oncologie",
    "hospital": "Beni Messous",
    "specialty": "oncologie",
    "icon": "🎗️",
    "color": "#ec4899",
    "period": "P4",
    "effectif": 5,
    "gardes": false,
    "gardeFreq": "Aucune",
    "roulement": false,
    "scores": {
      "charge": 6,
      "toxicite": 3,
      "formation": 8,
      "liberte": 5,
      "ambiance": 7
    },
    "highlights": [
      "4 jours à Beaufraisier / 1 jour à BM",
      "Idéal pour briser le tabou du cancer",
      "Gestions des complications et soins palliatifs",
      "Problèmes de transport pour Beaufraisier",
      "Rapport de stage pour chaque période (lourd)"
    ],
    "badge": "🚌 Transport Galère",
    "summary": "Terrain enrichissant sur le plan humain et médical (gestion de la douleur, complications). Le problème majeur est logistique (transport vers Beaufraisier) et la paperasse du stage.",
    "type": "médecine"
  },
  {
    "id": 50,
    "name": "Infectiologie C",
    "hospital": "El Kettar",
    "specialty": "infectiologie",
    "icon": "🦠",
    "color": "#059669",
    "period": "Multi",
    "effectif": 5,
    "gardes": true,
    "gardeFreq": "Garde / 9",
    "roulement": false,
    "scores": {
      "charge": 6,
      "toxicite": 3,
      "formation": 5,
      "liberte": 3,
      "ambiance": 8
    },
    "highlights": [
      "Présence bloquée 8h30 - 15h00",
      "Mots de jour, constantes, évacuations",
      "Nouveaux cas VIH",
      "Résidentes adorables",
      "Le gros problème : on ne peut pas sortir avant 15h"
    ],
    "badge": "⏳ Bloqué jusqu'à 15h",
    "summary": "Équipe agréable et non toxique. Cependant, le service impose de rester jusqu'à 15h tous les jours même s'il n'y a absolument rien à faire.",
    "type": "médecine"
  },
  {
    "id": 51,
    "name": "ORL",
    "hospital": "Beni Messous",
    "specialty": "ORL",
    "icon": "👂",
    "color": "#d946ef",
    "period": "P3",
    "effectif": 9,
    "gardes": true,
    "gardeFreq": "Garde / 12",
    "roulement": true,
    "scores": {
      "charge": 3,
      "toxicite": 2,
      "formation": 6,
      "liberte": 8,
      "ambiance": 8
    },
    "highlights": [
      "Parmi les terrains chir les plus légers",
      "Garde chaque 12 (roulement avec R4+R1)",
      "1 à 2 astreintes par mois en journée",
      "Gérer le box seul après apprentissage",
      "Roulement officieux entre internes"
    ],
    "badge": "🕊️ Chirurgie Légère",
    "summary": "Un des meilleurs terrains chirurgicaux car très léger. Roulement officieux très avantageux et bonne entente avec les résidents.",
    "type": "chirurgie",
    "epuisement": {
      "p1": "104",
      "p2": "69",
      "p3": "46",
      "p4": "85"
    }
  },
  {
    "id": 52,
    "name": "Orthopédie",
    "hospital": "Mustapha",
    "specialty": "orthopédie",
    "icon": "🦴",
    "color": "#0f766e",
    "period": "P1",
    "effectif": 5,
    "gardes": true,
    "gardeFreq": "Garde / 5",
    "roulement": false,
    "scores": {
      "charge": 8,
      "toxicite": 3,
      "formation": 7,
      "liberte": 5,
      "ambiance": 6
    },
    "highlights": [
      "Gardes très chargées l'été (+200 patients)",
      "Autonomie au box et salle de soins (attelles)",
      "Patients parfois agressifs la nuit",
      "Beaucoup de bagarres et social",
      "Pas de toxicité de l'équipe"
    ],
    "badge": "⚡ Très Chargé l'été",
    "summary": "Très formateur pour les urgences ortho mais très fatiguant surtout en été (AVP). À faire en début d'internat (P1/P2) tant qu'on a de l'énergie. L'équipe médicale n'est pas toxique mais les patients peuvent l'être.",
    "type": "chirurgie",
    "epuisement": {
      "p1": "301",
      "p2": "266",
      "p3": "257",
      "p4": "335-345"
    }
  },
  {
    "id": 53,
    "name": "UMC",
    "hospital": "Beni Messous",
    "specialty": "UMC",
    "icon": "🚑",
    "color": "#dc2626",
    "period": "P2",
    "effectif": 7,
    "gardes": true,
    "gardeFreq": "Monôme",
    "roulement": true,
    "scores": {
      "charge": 9,
      "toxicite": 1,
      "formation": 10,
      "liberte": 3,
      "ambiance": 9
    },
    "highlights": [
      "Apprentissage +++ (intubation, cathéters, massage cardiaque)",
      "Équipe extrêmement gentille et très pédagogique",
      "Vrai travail d'équipe, aucune toxicité",
      "Très intense et fatiguant",
      "Gérer tous les types d'urgences"
    ],
    "badge": "🎓 Formation Ultime",
    "summary": "Incroyable terrain pour la formation, vous saurez gérer n'importe quelle urgence à la fin. Équipe en or mais rythme épuisant. Fortement recommandé en P1 ou P2.",
    "type": "chirurgie",
    "epuisement": {
      "p1": "335",
      "p2": "798",
      "p3": "833",
      "p4": "915"
    }
  },
  {
    "id": 54,
    "name": "ORL",
    "hospital": "Mustapha",
    "specialty": "ORL",
    "icon": "👂",
    "color": "#d946ef",
    "period": "P1 / P3",
    "effectif": 6,
    "gardes": true,
    "gardeFreq": "Espacée",
    "roulement": true,
    "scores": {
      "charge": 4,
      "toxicite": 2,
      "formation": 8,
      "liberte": 7,
      "ambiance": 9
    },
    "highlights": [
      "Aide au bloc opératoire très formatrice",
      "Staff, professeurs et agents gentils",
      "Gardes calmes (1h-2h de sommeil possible)",
      "Sortie à midi facile, ou roulement",
      "Responsable indulgente (tghamed l3in)"
    ],
    "badge": "👍 Très Bon Terrain",
    "summary": "Très bon équilibre. L'équipe est bienveillante et l'accès au bloc est un gros plus. La charge est gérable avec un système de roulement facile à mettre en place.",
    "type": "chirurgie",
    "epuisement": {
      "p1": "615",
      "p2": "705",
      "p3": "660",
      "p4": "566"
    }
  },
  {
    "id": 55,
    "name": "Chirurgie Générale",
    "hospital": "Kouba",
    "specialty": "chirurgie générale",
    "icon": "🔪",
    "color": "#b91c1c",
    "period": "P1",
    "effectif": 12,
    "gardes": true,
    "gardeFreq": "Garde / 6 (Binôme)",
    "roulement": true,
    "scores": {
      "charge": 6,
      "toxicite": 1,
      "formation": 9,
      "liberte": 6,
      "ambiance": 10
    },
    "highlights": [
      "Accès illimité au bloc (aide op)",
      "Meilleur stage, très bonne ambiance",
      "Gérer le box seul de 8h à...",
      "Aucun travail de coursier ou évac",
      "Équipe très à l'écoute et disponible"
    ],
    "badge": "⭐ Coup de Coeur",
    "summary": "Le meilleur stage de chirurgie selon beaucoup. Immersion totale dans la spécialité avec beaucoup de bloc et ZÉRO toxicité. Idéal en P1.",
    "type": "chirurgie",
    "epuisement": {
      "p1": "863",
      "p2": "848",
      "p3": "875",
      "p4": "N/E"
    }
  },
  {
    "id": 56,
    "name": "Neurochirurgie",
    "hospital": "Ait Idir",
    "specialty": "neurochirurgie",
    "icon": "🧠",
    "color": "#6366f1",
    "period": "P1",
    "effectif": 6,
    "gardes": true,
    "gardeFreq": "Garde / 6",
    "roulement": false,
    "scores": {
      "charge": 4,
      "toxicite": 2,
      "formation": 6,
      "liberte": 5,
      "ambiance": 7
    },
    "highlights": [
      "Présence 8h - 14h (contre-visite)",
      "Programme de bloc chaque jour",
      "Beaucoup d'évacuations",
      "Garde pas trop chargée",
      "Validation du stage demande un peu de patience"
    ],
    "badge": "🚑 Beaucoup d'évacs",
    "summary": "Un terrain plutôt tranquille et non toxique, mais qui souffre d'un grand nombre d'évacuations. Vous pourrez y apprendre et aller au bloc.",
    "type": "chirurgie",
    "epuisement": {
      "p1": "N/E",
      "p2": "N/E",
      "p3": "1050",
      "p4": "N/E"
    }
  },
  {
    "id": 57,
    "name": "Chirurgie Générale",
    "hospital": "Beni Messous",
    "specialty": "chirurgie générale",
    "icon": "🔪",
    "color": "#b91c1c",
    "period": "P1",
    "effectif": 12,
    "gardes": true,
    "gardeFreq": "Garde / 6 (Binôme)",
    "roulement": false,
    "scores": {
      "charge": 8,
      "toxicite": 2,
      "formation": 8,
      "liberte": 4,
      "ambiance": 8
    },
    "highlights": [
      "Garde binôme chaque 6 jours",
      "3 unités : 4e étage, SUC (urgence), PU",
      "Rapport de garde obligatoire (internes présentent au 4e)",
      "Pas de roulement en P1 (12 internes), départ ~14h",
      "Au PU : exam clinique complet, bilans, validation facile"
    ],
    "badge": "⚡ Anarchique mais Formateur",
    "summary": "Terrain fatiguant et anarchique avec gardes chargées mais très impliquant. Équipe résidents et assistants non toxique, validation et rapport faciles.",
    "type": "chirurgie",
    "epuisement": {
      "p1": "655",
      "p2": "695",
      "p3": "983",
      "p4": "N/E"
    }
  },
  {
    "id": 58,
    "name": "UMC",
    "hospital": "BEO",
    "specialty": "UMC",
    "icon": "🚑",
    "color": "#dc2626",
    "period": "P1",
    "effectif": 8,
    "gardes": true,
    "gardeFreq": "Garde / 8",
    "roulement": false,
    "scores": {
      "charge": 8,
      "toxicite": 1,
      "formation": 8,
      "liberte": 2,
      "ambiance": 8
    },
    "highlights": [
      "Présence stricte 8h30 - 16h00",
      "Zéro travail ingrat / coursier",
      "Très formateur, on vous laisse dormir si la garde est calme",
      "1.5 mois PU, 1.5 mois Service",
      "Absences non tolérées (risque invalidation)"
    ],
    "badge": "⏱️ Présence Stricte",
    "summary": "Excellent pour la formation avec une équipe qui respecte les internes. Le point noir est l'obligation de présence stricte jusqu'à 16h tous les jours.",
    "type": "chirurgie",
    "epuisement": {
      "p1": "806",
      "p2": "900",
      "p3": "833",
      "p4": "972"
    }
  },
  {
    "id": 59,
    "name": "Chirurgie Générale",
    "hospital": "Zmirli",
    "specialty": "chirurgie générale",
    "icon": "🔪",
    "color": "#b91c1c",
    "period": "P1 / P3",
    "effectif": 12,
    "gardes": true,
    "gardeFreq": "Garde / 6 (Binôme)",
    "roulement": true,
    "scores": {
      "charge": 5,
      "toxicite": 1,
      "formation": 7,
      "liberte": 8,
      "ambiance": 9
    },
    "highlights": [
      "Aide au bloc très intéressante",
      "Zéro toxicité du R1 au Professeur",
      "Sortie à 11h/12h",
      "Roulement possible (si bonne entente avec secrétaire)",
      "Urgences abdominales +++"
    ],
    "badge": "👍 Recommandé",
    "summary": "Un terrain de chirurgie allégé avec une équipe formidable. Bon équilibre entre temps libre, ambiance et apprentissage au bloc.",
    "type": "chirurgie",
    "epuisement": {
      "p1": "1058",
      "p2": "N/E",
      "p3": "N/E",
      "p4": "N/E"
    }
  },
  {
    "id": 60,
    "name": "Chirurgie (Pr Mahmoudi)",
    "hospital": "Alger",
    "specialty": "chirurgie générale",
    "icon": "🔪",
    "color": "#b91c1c",
    "period": "Multi",
    "effectif": 12,
    "gardes": true,
    "gardeFreq": "Garde / 20",
    "roulement": true,
    "scores": {
      "charge": 4,
      "toxicite": 1,
      "formation": 6,
      "liberte": 8,
      "ambiance": 10
    },
    "highlights": [
      "Garde tous les 20 jours !",
      "Pr Mahmoudi extrêmement bienveillant",
      "Roulement mensuel entre Hommes, Femmes, Réa",
      "Accompagnement explorations (CPRE, Scanner...)",
      "Aucun pointage, sortie vers 13h-14h"
    ],
    "badge": "🌟 Le Paradis",
    "summary": "Le paradis sur terre : professeur extrêmement gentil, charge de garde quasi inexistante (1/20), flexibilité totale. Une perle rare.",
    "type": "chirurgie"
  },
  {
    "id": 61,
    "name": "Chir A (Oncologie)",
    "hospital": "CPMC",
    "specialty": "chirurgie générale",
    "type": "chirurgie",
    "icon": "🔪",
    "color": "#b91c1c",
    "period": "P1",
    "effectif": 6,
    "gardes": true,
    "gardeFreq": "Garde / 7",
    "roulement": false,
    "scores": {
      "charge": 5,
      "toxicite": 2,
      "formation": 6,
      "liberte": 6,
      "ambiance": 8
    },
    "highlights": [
      "Gardes calmes (service oncologie = anciens patients)",
      "Présentation colloque + aide au bloc",
      "TD obligatoire une fois/semaine",
      "Post garde disponible",
      "Chambre de garde propre et climatisée"
    ],
    "badge": "☀️ Gardes Calmes",
    "summary": "Service d'oncologie chirurgicale donc gardes relativement calmes. Bonne ambiance, équipe gentille. Les TD et colloques sont obligatoires.",
    "epuisement": {
      "p1": "927",
      "p2": "910",
      "p3": "868",
      "p4": "833"
    }
  },
  {
    "id": 62,
    "name": "Chirurgie Générale",
    "hospital": "BEO",
    "specialty": "chirurgie générale",
    "type": "chirurgie",
    "icon": "🔪",
    "color": "#b91c1c",
    "period": "P1 / P2",
    "effectif": 10,
    "gardes": true,
    "gardeFreq": "Garde / 5 (Binôme)",
    "roulement": false,
    "scores": {
      "charge": 9,
      "toxicite": 6,
      "formation": 7,
      "liberte": 1,
      "ambiance": 5
    },
    "highlights": [
      "Présence 7h30 - 16h TOUS les jours",
      "Garde binôme chaque 5 (PU + Service)",
      "3 services : Réa, Homme, Femme",
      "Écriture obs REA avant 8h chaque matin",
      "Très fatiguant, surveillance rapprochée à la Réa"
    ],
    "badge": "⚡ Ultra Chargé",
    "summary": "Terrain très exigeant en présence et en charge. Formateur mais épuisant. Le P2 le note toxique. À éviter si vous avez le choix.",
    "epuisement": {
      "p1": "N/E",
      "p2": "N/E",
      "p3": "N/E",
      "p4": "N/E"
    }
  },
  {
    "id": 63,
    "name": "Chir Générale B (Sans Garde)",
    "hospital": "CPMC",
    "specialty": "chirurgie générale",
    "type": "chirurgie",
    "icon": "🔪",
    "color": "#b91c1c",
    "period": "Multi",
    "effectif": 8,
    "gardes": false,
    "gardeFreq": "Aucune",
    "roulement": false,
    "scores": {
      "charge": 4,
      "toxicite": 2,
      "formation": 5,
      "liberte": 7,
      "ambiance": 7
    },
    "highlights": [
      "5/5 sans aucune garde",
      "Uniquement journées de service",
      "Très léger pour un terrain chirurgical"
    ],
    "badge": "🕊️ 0 Garde",
    "summary": "Rarissime terrain chirurgical sans garde. Idéal si vous voulez un semestre calme. Formation limitée mais rythme très confortable.",
    "epuisement": {
      "p1": "966",
      "p2": "1005",
      "p3": "1000",
      "p4": "978"
    }
  },
  {
    "id": 64,
    "name": "UMC",
    "hospital": "Mustapha",
    "specialty": "UMC",
    "type": "chirurgie",
    "icon": "🚑",
    "color": "#dc2626",
    "period": "Multi",
    "effectif": 8,
    "gardes": true,
    "gardeFreq": "Garde / 6",
    "roulement": false,
    "scores": {
      "charge": 7,
      "toxicite": 4,
      "formation": 5,
      "liberte": 2,
      "ambiance": 5
    },
    "highlights": [
      "INTERDIT d'aller au box (pas sécurisé)",
      "Affecté en soins intensifs uniquement",
      "8h00 - 16h00 strictes, patients instables",
      "Gazos, sondages, avis à répétition",
      "Certains résidents gentils, d'autres non"
    ],
    "badge": "⚠️ Pas de Box",
    "summary": "Déçevant pour ceux qui veulent gérer le box. Vous serez en réa/soins intensifs uniquement. Formateur pour la surveillance mais pas pour les urgences chirurgicales.",
    "epuisement": {
      "p1": "N/E",
      "p2": "N/E",
      "p3": "N/E",
      "p4": "N/E"
    }
  },
  {
    "id": 65,
    "name": "Chir Générale (Bitraria)",
    "hospital": "Alger",
    "specialty": "chirurgie générale",
    "type": "chirurgie",
    "icon": "🔪",
    "color": "#b91c1c",
    "period": "P1 / P3",
    "effectif": 16,
    "gardes": true,
    "gardeFreq": "Garde / 6-8",
    "roulement": true,
    "scores": {
      "charge": 6,
      "toxicite": 2,
      "formation": 7,
      "liberte": 6,
      "ambiance": 9
    },
    "highlights": [
      "Dr. Boughezala très gentille",
      "Accès au bloc opératoire",
      "Sortie possible avant 13h (après contre-visite)",
      "13 à 20 patients par garde",
      "Day off possible (pas vrai roulement)"
    ],
    "badge": "👍 Bonne Ambiance",
    "summary": "Terrain agréable et formateur avec une responsable bienveillante. Accès au bloc, bonne ambiance, sortie raisonnable. Recommandé.",
    "epuisement": {
      "p1": "1022",
      "p2": "927",
      "p3": "1058",
      "p4": "N/E"
    }
  },
  {
    "id": 66,
    "name": "Neurochirurgie",
    "hospital": "BEO",
    "specialty": "neurochirurgie",
    "type": "chirurgie",
    "icon": "🧠",
    "color": "#6366f1",
    "period": "P4",
    "effectif": 5,
    "gardes": true,
    "gardeFreq": "Garde / 5 (Service)",
    "roulement": false,
    "scores": {
      "charge": 5,
      "toxicite": 2,
      "formation": 5,
      "liberte": 5,
      "ambiance": 7
    },
    "highlights": [
      "Service neurochir pédiatrique",
      "Avis + radio + scanner en masse",
      "Garde service uniquement (pas de PU)",
      "Enfants généralement stables",
      "Responsable changé en cours de période"
    ],
    "badge": "👶 Pédiatrie",
    "summary": "Terrain de neurochirurgie pédiatrique calme. Orienté surveillance et avis. Peu de formation pratique mais enfants généralement stables la nuit.",
    "epuisement": {
      "p1": "952",
      "p2": "1050",
      "p3": "1038",
      "p4": "1050"
    }
  },
  {
    "id": 67,
    "name": "Chir Thoracique",
    "hospital": "BEO",
    "specialty": "chirurgie thoracique",
    "type": "chirurgie",
    "icon": "🫁",
    "color": "#0369a1",
    "period": "P1",
    "effectif": 8,
    "gardes": true,
    "gardeFreq": "Garde / 8",
    "roulement": false,
    "scores": {
      "charge": 5,
      "toxicite": 8,
      "formation": 4,
      "liberte": 5,
      "ambiance": 2
    },
    "highlights": [
      "4/5 + garde chaque 8",
      "TD d'anatomie obligatoires",
      "Accès au bloc (aide opératoire)",
      "RÉSIDENTES TRÈS TOXIQUES ⚠️",
      "Colloque mercredi jusqu'à 17h"
    ],
    "badge": "☠️ TOXIQUE — ÉVITER",
    "summary": "Terrain à fuir absolument selon les avis. Les résidentes sont extrêmement toxiques. Malgré un accès au bloc, l'ambiance terrible ruine le stage.",
    "epuisement": {
      "p1": "655",
      "p2": "841",
      "p3": "859",
      "p4": "718"
    }
  },
  {
    "id": 68,
    "name": "ORL",
    "hospital": "BEO",
    "specialty": "ORL",
    "type": "chirurgie",
    "icon": "👂",
    "color": "#d946ef",
    "period": "P1",
    "effectif": 6,
    "gardes": true,
    "gardeFreq": "Garde / 6 (Monôme)",
    "roulement": false,
    "scores": {
      "charge": 7,
      "toxicite": 2,
      "formation": 8,
      "liberte": 5,
      "ambiance": 8
    },
    "highlights": [
      "Garde /6 P1 → /9 P2 → /12 P3 → /15 P4",
      "Très formateur, beaucoup de gestes",
      "Résidents majoritairement haylin",
      "RDS lourd (archives + statistiques)",
      "CDS accessible pour les problèmes"
    ],
    "badge": "📈 Formation Progressive",
    "summary": "ORL très formateur avec un système de garde qui s'allège au fil des périodes. La formation pratique est réelle mais le rapport de stage est une vraie corvée.",
    "epuisement": {
      "p1": "150",
      "p2": "69",
      "p3": "85-97",
      "p4": "230"
    }
  },
  {
    "id": 69,
    "name": "Neurochirurgie",
    "hospital": "Mustapha",
    "specialty": "neurochirurgie",
    "type": "chirurgie",
    "icon": "🧠",
    "color": "#6366f1",
    "period": "P1 / P2",
    "effectif": 6,
    "gardes": true,
    "gardeFreq": "Garde / 3 (Binôme)",
    "roulement": false,
    "scores": {
      "charge": 9,
      "toxicite": 2,
      "formation": 6,
      "liberte": 2,
      "ambiance": 7
    },
    "highlights": [
      "Garde chaque 3 jours (6 internes seulement)",
      "Box géré seul, résidents aux abonnés absents",
      "200+ patients par garde courante",
      "Chambre de garde dans un état catastrophique",
      "Déchocage géré seuls des fois"
    ],
    "badge": "💀 Garde / 3j",
    "summary": "Garde tous les 3 jours, c'est clairement l'enfer. Très fatigant, chambre ignoble, effectif insuffisant. Conseil : faites de la chir générale à la place.",
    "epuisement": {
      "p1": "827",
      "p2": "827",
      "p3": "759",
      "p4": "775"
    }
  },
  {
    "id": 70,
    "name": "Chir Générale (Rahmouni)",
    "hospital": "Alger",
    "specialty": "chirurgie générale",
    "type": "chirurgie",
    "icon": "🔪",
    "color": "#b91c1c",
    "period": "P1",
    "effectif": 10,
    "gardes": true,
    "gardeFreq": "Garde / 10",
    "roulement": false,
    "scores": {
      "charge": 5,
      "toxicite": 2,
      "formation": 7,
      "liberte": 7,
      "ambiance": 8
    },
    "highlights": [
      "Garde seulement chaque 10 (light)",
      "Passage au bloc obligatoire",
      "Colloque mardi avec présentation",
      "Sortie vers 11h (service)",
      "TD à présenter"
    ],
    "badge": "😊 Équilibré",
    "summary": "Bon terrain avec un rythme équilibré. La garde rare (1/10) est un vrai avantage. Formation correcte grâce au bloc et aux colloques.",
    "epuisement": {
      "p1": "489",
      "p2": "230",
      "p3": "428",
      "p4": "479"
    }
  },
  {
    "id": 71,
    "name": "CCI",
    "hospital": "Belfort",
    "specialty": "CCI",
    "type": "chirurgie",
    "icon": "🦴",
    "color": "#0f766e",
    "period": "P3",
    "effectif": 8,
    "gardes": true,
    "gardeFreq": "Effectif dépendant",
    "roulement": false,
    "scores": {
      "charge": 8,
      "toxicite": 1,
      "formation": 9,
      "liberte": 3,
      "ambiance": 9
    },
    "highlights": [
      "Terrain très formateur et organisé",
      "Zéro toxicité — toute l'équipe gentille",
      "Vous gérez les attelles + box urgences",
      "Hyperchargé en été (éviter P3/P4 estival)",
      "TD mercredi + colloque lundi AP"
    ],
    "badge": "🎓 Top Formation",
    "summary": "Un des meilleurs terrains chirurgicaux : zéro toxicité, très formateur et bien organisé. Attention : hyperchargé en été. À faire en P1/P2 de préférence.",
    "epuisement": {
      "p1": "605",
      "p2": "818",
      "p3": "875",
      "p4": "785"
    }
  },
  {
    "id": 72,
    "name": "Chirurgie (Ain Taya)",
    "hospital": "Ain Taya",
    "specialty": "chirurgie générale",
    "type": "chirurgie",
    "icon": "🔪",
    "color": "#b91c1c",
    "period": "Multi",
    "effectif": 8,
    "gardes": true,
    "gardeFreq": "Inconnue",
    "roulement": false,
    "scores": {
      "charge": 9,
      "toxicite": 9,
      "formation": 3,
      "liberte": 1,
      "ambiance": 1
    },
    "highlights": [
      "⛔ CONSENSUS UNANIME : RUN",
      "Avis unanimement négatifs",
      "À éviter absolument selon tous les témoignages"
    ],
    "badge": "🚫 RUN — À ÉVITER",
    "summary": "Terrain à éviter à tout prix selon l'unanimité des internes qui y sont passés. Aucun avis positif n'a été rapporté.",
    "epuisement": {
      "p1": "N/E",
      "p2": "N/E",
      "p3": "N/E",
      "p4": "N/E"
    }
  },
  {
    "id": 73,
    "name": "Chir Générale (Bainem)",
    "hospital": "Bainem",
    "specialty": "chirurgie générale",
    "type": "chirurgie",
    "icon": "🔪",
    "color": "#b91c1c",
    "period": "P2",
    "effectif": 10,
    "gardes": true,
    "gardeFreq": "Garde / 5 (Binôme)",
    "roulement": false,
    "scores": {
      "charge": 8,
      "toxicite": 7,
      "formation": 6,
      "liberte": 1,
      "ambiance": 3
    },
    "highlights": [
      "Présence 8h - 16h MÊME pendant Ramadan",
      "Zéro congé, zéro roulement",
      "Absences et retards : risque invalidation",
      "Toxicité ++++ selon le P2 (résidents yetbedlo)",
      "Formation correcte mais trop contraignant"
    ],
    "badge": "⚠️ À Éviter",
    "summary": "Terrain à éviter. Aucun congé, présence ultra stricte, toxicité rapportée. Le côté formateur ne compense pas le manque total de liberté et l'ambiance difficile.",
    "epuisement": {
      "p1": "N/E",
      "p2": "N/E",
      "p3": "N/E",
      "p4": "N/E"
    }
  },
  {
    "id": 74,
    "name": "Orthopédie",
    "hospital": "Thenia",
    "specialty": "orthopédie",
    "type": "chirurgie",
    "icon": "🦴",
    "color": "#0f766e",
    "period": "Multi",
    "effectif": 8,
    "gardes": true,
    "gardeFreq": "Garde / 4",
    "roulement": false,
    "scores": {
      "charge": 10,
      "toxicite": 9,
      "formation": 4,
      "liberte": 1,
      "ambiance": 1
    },
    "highlights": [
      "Garde /4 → Bloc obligatoire → Service → Garde",
      "Prof TRÈS TOXIQUE — rapport de garde humiliant",
      "250 à 350 patients par garde",
      "Observations de 2 pages A4 obligatoires",
      "Patients agressifs et difficiles"
    ],
    "badge": "💀 PIRE TERRAIN",
    "summary": "Un des pires terrains de l'internat selon les témoignages. Rythme impossible (garde/4 + bloc), professeure extrêmement toxique, gardes infernales. À éviter absolument.",
    "epuisement": {
      "p1": "N/E",
      "p2": "N/E",
      "p3": "N/E",
      "p4": "N/E"
    }
  },
  {
    "id": 75,
    "name": "Chir Générale (Thenia)",
    "hospital": "Thenia",
    "specialty": "chirurgie générale",
    "type": "chirurgie",
    "icon": "🔪",
    "color": "#b91c1c",
    "period": "P1 / P2",
    "effectif": 10,
    "gardes": true,
    "gardeFreq": "Garde / 4-5",
    "roulement": false,
    "scores": {
      "charge": 7,
      "toxicite": 1,
      "formation": 9,
      "liberte": 5,
      "ambiance": 10
    },
    "highlights": [
      "Équipe traite les internes comme des résidents",
      "Gestes +++ (sutures, sondages, massage cardiaque)",
      "Accès au bloc avec participation active",
      "Présentation au rapport de garde",
      "Urgences chirurgicales viscérales variées"
    ],
    "badge": "❤️ Coup de Cœur",
    "summary": "Meilleur terrain de chirurgie générale pour beaucoup. Inclusion totale dans l'équipe, formation exceptionnelle, ambiance chaleureuse. À faire en P1/P2 absolument.",
    "epuisement": {
      "p1": "900",
      "p2": "N/E",
      "p3": "N/E",
      "p4": "N/E"
    }
  },
  {
    "id": 76,
    "name": "CCI",
    "hospital": "Beni Messous",
    "specialty": "CCI",
    "type": "chirurgie",
    "icon": "🦴",
    "color": "#0f766e",
    "period": "P1 / P2",
    "effectif": 8,
    "gardes": true,
    "gardeFreq": "Garde / 6 (Monôme)",
    "roulement": true,
    "scores": {
      "charge": 7,
      "toxicite": 3,
      "formation": 7,
      "liberte": 6,
      "ambiance": 6
    },
    "highlights": [
      "Garde monôme chaque 6 (24h)",
      "Ateliers jeudi + TD mercredi",
      "Roulement en journée de semaine",
      "Gardes chargées monôme",
      "Équipe +/- selon les résidents"
    ],
    "badge": "⚖️ Moyen",
    "summary": "Terrain CCI avec des gardes monômes chaque 6 jours ce qui est fatigant. Roulement en journée de semaine possible. Équipe variable selon les résidents.",
    "epuisement": {
      "p1": "489",
      "p2": "900",
      "p3": "900",
      "p4": "1066"
    }
  },
  {
    "id": 77,
    "name": "Chirurgie Maxillo-Faciale",
    "hospital": "Mustapha Basha",
    "specialty": "chirurgie maxillo-faciale",
    "type": "chirurgie",
    "icon": "🦷",
    "color": "#7c3aed",
    "period": "P1",
    "effectif": 8,
    "gardes": true,
    "gardeFreq": "Garde / 4-5 (Binôme)",
    "roulement": false,
    "scores": {
      "charge": 4,
      "toxicite": 2,
      "formation": 8,
      "liberte": 7,
      "ambiance": 8
    },
    "highlights": [
      "Terrain le plus léger en chirurgie",
      "Sutures 50-60 patients/garde en moyenne",
      "Réduction luxation ATM, examen fractures",
      "Sommeil possible à partir de 2h du matin",
      "4 TD intéressants par semaine"
    ],
    "badge": "🏆 Chirurgie la Plus Légère",
    "summary": "Le terrain chirurgical le plus léger en garde. Gestes pratiques variés et intéressants (sutures, luxations ATM, fractures). Équipe sympa et gardes gérables. Fortement recommandé.",
    "epuisement": {
      "p1": "335",
      "p2": "67",
      "p3": "112",
      "p4": "168"
    }
  },
  {
    "id": 78,
    "name": "Chir Générale (Debbussy)",
    "hospital": "Alger",
    "specialty": "chirurgie générale",
    "type": "chirurgie",
    "icon": "🔪",
    "color": "#b91c1c",
    "period": "P2",
    "effectif": 10,
    "gardes": true,
    "gardeFreq": "Garde / 5",
    "roulement": false,
    "scores": {
      "charge": 9,
      "toxicite": 9,
      "formation": 5,
      "liberte": 1,
      "ambiance": 1
    },
    "highlights": [
      "⛔ PIRE TERRAIN selon les avis",
      "Présence 8h + bloc jusque 17h + colloque",
      "Homework à corriger + 2 TDs obligatoires",
      "Aucun avantage rapporté",
      "Très toxique selon les internes"
    ],
    "badge": "🚫 PIRE TERRAIN",
    "summary": "Terrain unanimement détesté. Charge maximale, équipe toxique, aucune liberté, homework en sus. À éviter absolument.",
    "epuisement": {
      "p1": "730",
      "p2": "1038",
      "p3": "1010",
      "p4": "1005"
    }
  },
  {
    "id": 79,
    "name": "UMC",
    "hospital": "Ain Taya",
    "specialty": "UMC",
    "type": "chirurgie",
    "icon": "🚑",
    "color": "#dc2626",
    "period": "P1",
    "effectif": 8,
    "gardes": true,
    "gardeFreq": "Garde / 8 (Binôme) + Astreintes WE",
    "roulement": false,
    "scores": {
      "charge": 6,
      "toxicite": 1,
      "formation": 7,
      "liberte": 4,
      "ambiance": 9
    },
    "highlights": [
      "Service 9h-16h + 3 astreintes WE",
      "PU médical (pas chirurgical)",
      "CAT urgences, réanimation, gazométrie, sondage",
      "Professeur et équipe extrêmement sympas",
      "Mémoire structurée (IMRAD) en P1"
    ],
    "badge": "🏥 Bagage Généraliste",
    "summary": "UMC médical (pas chirurgical) avec une excellente équipe. Bon pour acquérir les réflexes du généraliste. Mémoire structurée obligatoire mais encadrée par la prof.",
    "epuisement": {
      "p1": "N/E",
      "p2": "N/E",
      "p3": "N/E",
      "p4": "N/E"
    }
  },
  {
    "id": 80,
    "name": "Neurochirurgie",
    "hospital": "Zmirli",
    "specialty": "neurochirurgie",
    "type": "chirurgie",
    "icon": "🧠",
    "color": "#6366f1",
    "period": "P1 / P3",
    "effectif": 5,
    "gardes": true,
    "gardeFreq": "Garde / 5 (Monôme)",
    "roulement": true,
    "scores": {
      "charge": 6,
      "toxicite": 4,
      "formation": 5,
      "liberte": 6,
      "ambiance": 7
    },
    "highlights": [
      "Rapport de garde OBLIGATOIRE à 8h30 (retard = interdit d'entrée)",
      "Roulement officieux possible après 1er mois",
      "Astreinte monôme (sortie 12-13h)",
      "Visite générale lundi même en post-garde",
      "Prof stricte mais terrain tolérable"
    ],
    "badge": "⏰ RDG Strict",
    "summary": "Terrain neurochir strict sur la présence au RDG. Roulement officieux possible après un mois. La prof surveille mais ferme les yeux si le travail est fait.",
    "epuisement": {
      "p1": "N/E",
      "p2": "N/E",
      "p3": "N/E",
      "p4": "N/E"
    }
  },
  {
    "id": 81,
    "name": "Chir Générale CC-A",
    "hospital": "Mustapha Basha",
    "specialty": "chirurgie générale",
    "type": "chirurgie",
    "icon": "🔪",
    "color": "#dc2626",
    "period": "P1-P4",
    "effectif": "Variable",
    "gardes": true,
    "gardeFreq": "Selon effectif",
    "roulement": false,
    "unrated": true,
    "badge": "⏳ En attente d'avis",
    "summary": "Service de chirurgie générale Clinique Chirurgicale A (CCA) du CHU Mustapha Basha. En attente de témoignages d'internes.",
    "highlights": [
      "Terrain officiel validé au choix des postes",
      "Service : Clinique Chirurgicale A (CCA)",
      "CHU Mustapha Basha — Alger Centre",
      "En attente des retours de la promotion 2026"
    ],
    "epuisement": {
      "p1": "450",
      "p2": "526",
      "p3": "615",
      "p4": "634"
    }
  },
  {
    "id": 82,
    "name": "Chir Générale CC-B (Pr Baazizi)",
    "hospital": "Mustapha Basha",
    "specialty": "chirurgie générale",
    "type": "chirurgie",
    "icon": "🔪",
    "color": "#ef4444",
    "period": "P2 recommandé",
    "effectif": 12,
    "gardes": true,
    "gardeFreq": "PU / 12 à 15j",
    "roulement": false,
    "unrated": false,
    "scores": {
      "charge": 6,
      "toxicite": 1,
      "formation": 9,
      "liberte": 5,
      "ambiance": 9
    },
    "highlights": [
      "1 mois chir femme avec Pr Baazizi (le meilleur)",
      "1 mois chir homme + 15j réa + 15j consult",
      "Gardes PU chaque 12-15 jours (résidents présents)",
      "Visite mardi matin, colloque mardi après-midi obligatoire",
      "Coursière pour les bilans, clim en été, pas toxique",
      "De préférence à choisir en P2 (P1 libèrent les R1)"
    ],
    "badge": "🌟 Pr Baazizi · Formateur",
    "summary": "Terrain exceptionnel et très formateur sous l'aile du Pr Baazizi. Horaires 8h-16h avec rotation complète (femme/homme/réa/consultation). Équipe bienveillante et coursière disponible.",
    "epuisement": {
      "p1": "780",
      "p2": "848",
      "p3": "875",
      "p4": "N/E"
    }
  },
  {
    "id": 83,
    "name": "Chir Générale CC-C",
    "hospital": "Mustapha Basha",
    "specialty": "chirurgie générale",
    "type": "chirurgie",
    "icon": "🔪",
    "color": "#f97316",
    "period": "P1",
    "effectif": 22,
    "gardes": true,
    "gardeFreq": "6-7 gardes au total",
    "roulement": true,
    "unrated": false,
    "scores": {
      "charge": 5,
      "toxicite": 2,
      "formation": 8,
      "liberte": 7,
      "ambiance": 8
    },
    "highlights": [
      "Rotation 1 mois service / 1 mois bloc / 1 mois PU",
      "Pas de pointage, maître de stage très gentil",
      "6 à 7 gardes seulement sur tout le stage (trinôme PU ou monôme service)",
      "Résidents sympas, implication garantie si motivé",
      "TD obligatoire chaque mardi assuré par les assistants",
      "Effectif très à l'aise (22 internes en P1 avec 6D)"
    ],
    "badge": "🕊️ 6-7 Gardes Total",
    "summary": "Très bon terrain avec maître de stage compréhensif. 1 mois par unité (service, bloc, PU). 6 à 7 gardes sur l'ensemble du stage, bonne ambiance et formation pratique assurée.",
    "epuisement": {
      "p1": "329",
      "p2": "192",
      "p3": "329",
      "p4": "450"
    }
  },
  {
    "id": 84,
    "name": "Chirurgie Générale",
    "hospital": "Rouiba",
    "specialty": "chirurgie générale",
    "type": "chirurgie",
    "icon": "🔪",
    "color": "#b91c1c",
    "period": "P1-P4",
    "effectif": "Variable",
    "gardes": true,
    "gardeFreq": "Selon tableau",
    "roulement": false,
    "unrated": true,
    "badge": "⏳ En attente d'avis",
    "summary": "Service de chirurgie générale de l'EPH Rouiba. Terrain officiel ouvert au choix des postes. En attente d'avis détaillé.",
    "highlights": [
      "Terrain hospitalier EPH Rouiba",
      "Chirurgie générale et viscérale",
      "Clôture P1 : 751, P2 : 994, P3 : 1038",
      "Avis d'internes en attente de collecte"
    ],
    "epuisement": {
      "p1": "751",
      "p2": "994",
      "p3": "1038",
      "p4": "1050"
    }
  },
  {
    "id": 85,
    "name": "Orthopédie",
    "hospital": "Benaknoun",
    "specialty": "orthopédie",
    "type": "chirurgie",
    "icon": "🦴",
    "color": "#d97706",
    "period": "P1-P4",
    "effectif": "Variable",
    "gardes": true,
    "gardeFreq": "Selon tableau",
    "roulement": false,
    "unrated": true,
    "badge": "⏳ En attente d'avis",
    "summary": "EHS Ben Aknoun spécialisé en chirurgie orthopédique et traumatologie. Terrain très convoité fermé très tôt au choix des postes (rang 40 en P2).",
    "highlights": [
      "EHS spécialisé en Orthopédie Ben Aknoun",
      "Terrain à fermeture rapide (P1: 168, P2: 40)",
      "Traumatologie et chirurgie réglée",
      "En attente de retour d'expérience complet"
    ],
    "epuisement": {
      "p1": "168",
      "p2": "40",
      "p3": "71",
      "p4": "204"
    }
  },
  {
    "id": 86,
    "name": "Orthopédie",
    "hospital": "BEO",
    "specialty": "orthopédie",
    "type": "chirurgie",
    "icon": "🦴",
    "color": "#d97706",
    "period": "P1-P4",
    "effectif": "Variable",
    "gardes": true,
    "gardeFreq": "Selon tableau",
    "roulement": false,
    "unrated": true,
    "badge": "⏳ En attente d'avis",
    "summary": "Service de chirurgie orthopédique et traumatologique du CHU Bab El Oued. En attente de témoignages d'internes.",
    "highlights": [
      "CHU Bab El Oued — Chirurgie Orthopédique",
      "Clôture P1: 301, P2: 251, P3: 335-345",
      "Urgences traumato et bloc opératoire",
      "En attente de retours d'internes"
    ],
    "epuisement": {
      "p1": "301",
      "p2": "251",
      "p3": "335-345",
      "p4": "335-345"
    }
  },
  {
    "id": 87,
    "name": "Orthopédie",
    "hospital": "Zmirli",
    "specialty": "orthopédie",
    "type": "chirurgie",
    "icon": "🦴",
    "color": "#d97706",
    "period": "P1-P4",
    "effectif": "Variable",
    "gardes": true,
    "gardeFreq": "Selon tableau",
    "roulement": false,
    "unrated": true,
    "badge": "⏳ En attente d'avis",
    "summary": "Service d'orthopédie de l'EHS Salim Zemirli, grand centre de traumatologie d'Alger. En attente d'évaluation détaillée.",
    "highlights": [
      "EHS Salim Zemirli (Pôle Traumatologie)",
      "Activité traumatologique lourde",
      "Clôture P1: 489, P2: 516, P3: 705",
      "Avis d'internes en attente de partage"
    ],
    "epuisement": {
      "p1": "489",
      "p2": "516",
      "p3": "705",
      "p4": "725"
    }
  },
  {
    "id": 88,
    "name": "CCI",
    "hospital": "Ain Taya",
    "specialty": "CCI",
    "type": "chirurgie",
    "icon": "🦴",
    "color": "#f59e0b",
    "period": "P1-P4",
    "effectif": "Variable",
    "gardes": true,
    "gardeFreq": "Selon tableau",
    "roulement": false,
    "unrated": true,
    "badge": "⏳ En attente d'avis",
    "summary": "Service de Chirurgie Cardio-Vasculaire et Infantile / CCI de l'EPH Ain Taya. En attente de retours d'internes.",
    "highlights": [
      "EPH Ain Taya — Service CCI",
      "Clôture P1: 900, P2: 1017, P3: 1017",
      "Chirurgie infantile et consultations",
      "En attente d'avis d'internes"
    ],
    "epuisement": {
      "p1": "900",
      "p2": "1017",
      "p3": "1017",
      "p4": "1066"
    }
  },
  {
    "id": 89,
    "name": "CCI",
    "hospital": "Birtraria",
    "specialty": "CCI",
    "type": "chirurgie",
    "icon": "🦴",
    "color": "#f59e0b",
    "period": "P1-P4",
    "effectif": "Variable",
    "gardes": true,
    "gardeFreq": "Selon tableau",
    "roulement": false,
    "unrated": true,
    "badge": "⏳ En attente d'avis",
    "summary": "Service CCI de l'EHS Birtraria. Terrain officiel au choix des postes. En attente d'évaluation détaillée.",
    "highlights": [
      "EHS Birtraria — Service CCI",
      "Clôture P1: 421, P2: 580, P3: 718",
      "Chirurgie infantile ambulatoire et hospitalisation",
      "En attente de retours d'expérience"
    ],
    "epuisement": {
      "p1": "421",
      "p2": "580",
      "p3": "718",
      "p4": "479"
    }
  },
  {
    "id": 90,
    "name": "CCI",
    "hospital": "Mustapha Basha",
    "specialty": "CCI",
    "type": "chirurgie",
    "icon": "🦴",
    "color": "#f59e0b",
    "period": "P1-P4",
    "effectif": "Variable",
    "gardes": true,
    "gardeFreq": "Selon tableau",
    "roulement": false,
    "unrated": true,
    "badge": "⏳ En attente d'avis",
    "summary": "Service CCI du CHU Mustapha Basha. Terrain très prisé avec fermeture rapide (rang 150-230). En attente d'avis d'internes.",
    "highlights": [
      "CHU Mustapha Basha — Clinique CCI",
      "Fermeture rapide (P1: 230, P2: 150, P3: 180)",
      "Chirurgie pédiatrique de pointe",
      "En attente de détails sur le rythme et les gardes"
    ],
    "epuisement": {
      "p1": "230",
      "p2": "150",
      "p3": "180",
      "p4": "301"
    }
  },
  {
    "id": 91,
    "name": "CCI",
    "hospital": "Parnet",
    "specialty": "CCI",
    "type": "chirurgie",
    "icon": "🦴",
    "color": "#f59e0b",
    "period": "P1-P4",
    "effectif": "Variable",
    "gardes": true,
    "gardeFreq": "Selon tableau",
    "roulement": false,
    "unrated": true,
    "badge": "⏳ En attente d'avis",
    "summary": "Service CCI du CHU Parnet (Nafissa Hamoud). En attente de retours d'expérience d'internes.",
    "highlights": [
      "CHU Parnet (Nafissa Hamoud) — CCI",
      "Clôture P1: 412, P2: 278, P3: 378",
      "Prise en charge médico-chirurgicale pédiatrique",
      "Avis d'internes en cours de collecte"
    ],
    "epuisement": {
      "p1": "412",
      "p2": "278",
      "p3": "378",
      "p4": "417"
    }
  },
  {
    "id": 92,
    "name": "Chirurgie Thoracique",
    "hospital": "Mustapha Basha",
    "specialty": "chirurgie thoracique",
    "type": "chirurgie",
    "icon": "🫁",
    "color": "#06b6d4",
    "period": "P1-P4",
    "effectif": "Variable",
    "gardes": true,
    "gardeFreq": "Selon tableau",
    "roulement": false,
    "unrated": true,
    "badge": "⏳ En attente d'avis",
    "summary": "Service de chirurgie thoracique et cardio-vasculaire du CHU Mustapha Basha. Postes non épuisés au choix (N/E). En attente de retour d'expérience.",
    "highlights": [
      "CHU Mustapha Basha — Chirurgie Thoracique",
      "Postes non épuisés (N/E sur P1, P2, P3, P4)",
      "Pathologies pulmonaires, médiastinales et pleurales",
      "En attente de retours détaillés"
    ],
    "epuisement": {
      "p1": "N/E",
      "p2": "N/E",
      "p3": "N/E",
      "p4": "N/E"
    }
  },
  {
    "id": 93,
    "name": "Cardiologie",
    "hospital": "CNMS",
    "specialty": "cardiologie",
    "type": "médecine",
    "icon": "❤️",
    "color": "#ef4444",
    "period": "P1-P4",
    "effectif": "Variable",
    "gardes": false,
    "gardeFreq": "Sans garde",
    "roulement": true,
    "unrated": true,
    "badge": "⏳ En attente d'avis",
    "summary": "Service de cardiologie et réadaptation cardio-vasculaire du CNMS (Centre National de Médecine du Sport). En attente de retours d'internes.",
    "highlights": [
      "CNMS (Centre National de Médecine du Sport)",
      "Clôture P1: 1010, P2: 1005, P3: 978, P4: 952",
      "Épreuves d'effort et explorations fonctionnelles",
      "Avis d'internes en attente de publication"
    ],
    "epuisement": {
      "p1": "1010",
      "p2": "1005",
      "p3": "978",
      "p4": "952"
    }
  },
  {
    "id": 94,
    "name": "Dermatologie",
    "hospital": "BEO",
    "specialty": "dermatologie",
    "type": "médecine",
    "icon": "🧴",
    "color": "#ec4899",
    "period": "P1-P4",
    "effectif": "Variable",
    "gardes": false,
    "gardeFreq": "Sans garde",
    "roulement": true,
    "unrated": true,
    "badge": "⏳ En attente d'avis",
    "summary": "Service de dermatologie et vénérologie du CHU Bab El Oued. En attente d'évaluation complète par les internes.",
    "highlights": [
      "CHU Bab El Oued — Dermatologie",
      "Clôture P1: 900, P2: 818, P3: 730, P4: 655",
      "Consultations dermatologiques et dermato-allergologie",
      "En attente de détails sur l'ambiance et la présence"
    ],
    "epuisement": {
      "p1": "900",
      "p2": "818",
      "p3": "730",
      "p4": "655"
    }
  },
  {
    "id": 95,
    "name": "Diabétologie",
    "hospital": "Mustapha Basha",
    "specialty": "diabétologie",
    "type": "médecine",
    "icon": "🩺",
    "color": "#10b981",
    "period": "P1-P4",
    "effectif": "Variable",
    "gardes": false,
    "gardeFreq": "Sans garde",
    "roulement": true,
    "unrated": true,
    "badge": "⏳ En attente d'avis",
    "summary": "Service de diabétologie du CHU Mustapha Basha. Terrain prisé avec clôture rapide en P2-P3 (rang 168-257). En attente d'évaluation.",
    "highlights": [
      "CHU Mustapha Basha — Diabétologie",
      "Clôture P1: 516, P2: 257, P3: 168, P4: 234",
      "Prise en charge diabète de type 1 et 2, pied diabétique",
      "En attente de retour d'internes"
    ],
    "epuisement": {
      "p1": "516",
      "p2": "257",
      "p3": "168",
      "p4": "234"
    }
  },
  {
    "id": 96,
    "name": "Pneumologie (Pavillon 2)",
    "hospital": "Beni Messous",
    "specialty": "pneumologie",
    "type": "médecine",
    "icon": "🫁",
    "color": "#14b8a6",
    "period": "P1-P4",
    "effectif": "Variable",
    "gardes": true,
    "gardeFreq": "Selon tableau",
    "roulement": false,
    "unrated": true,
    "badge": "⏳ En attente d'avis",
    "summary": "Deuxième unité / pavillon de pneumologie du CHU Beni Messous. En attente de retours d'internes.",
    "highlights": [
      "CHU Beni Messous — Pneumologie Unité 2",
      "Clôture P1: N/E, P2: 1050, P3: 848, P4: 544",
      "Pathologies respiratoires et explorations",
      "En attente d'évaluation complète"
    ],
    "epuisement": {
      "p1": "N/E",
      "p2": "1050",
      "p3": "848",
      "p4": "544"
    }
  },
  {
    "id": 97,
    "name": "Pneumologie (Pavillon 3)",
    "hospital": "Beni Messous",
    "specialty": "pneumologie",
    "type": "médecine",
    "icon": "🫁",
    "color": "#14b8a6",
    "period": "P1-P4",
    "effectif": "Variable",
    "gardes": true,
    "gardeFreq": "Selon tableau",
    "roulement": false,
    "unrated": true,
    "badge": "⏳ En attente d'avis",
    "summary": "Troisième unité / pavillon de pneumologie du CHU Beni Messous. En attente de retours d'internes.",
    "highlights": [
      "CHU Beni Messous — Pneumologie Unité 3",
      "Clôture P1: N/E, P2: N/E, P3: N/E, P4: 941",
      "Hospitalisation respiratoire et suivi",
      "En attente d'avis d'internes"
    ],
    "epuisement": {
      "p1": "N/E",
      "p2": "N/E",
      "p3": "N/E",
      "p4": "941"
    }
  },
  {
    "id": 98,
    "name": "UMC",
    "hospital": "Zmirli",
    "specialty": "UMC",
    "type": "chirurgie",
    "icon": "🚑",
    "color": "#dc2626",
    "period": "P1-P4",
    "effectif": "Variable",
    "gardes": true,
    "gardeFreq": "Garde d'urgence",
    "roulement": false,
    "unrated": true,
    "badge": "⏳ En attente d'avis",
    "summary": "Pavillon des Urgences Médico-Chirurgicales (UMC) de l'EHS Salim Zemirli. Centre névralgique des urgences traumatologiques. En attente d'évaluation.",
    "highlights": [
      "EHS Salim Zemirli — Urgences UMC",
      "Clôture P1 : 1022, P2-P4 : N/E",
      "Déchocage, traumatologie aiguë et sutures",
      "En attente de retours détaillés"
    ],
    "epuisement": {
      "p1": "1022",
      "p2": "N/E",
      "p3": "N/E",
      "p4": "N/E"
    }
  }
];


// ============================================================
//  UTILITY FUNCTIONS
// ============================================================

function getChargeColor(score) {
  if (score <= 2) return "#22c55e";
  if (score <= 4) return "#84cc16";
  if (score <= 6) return "#eab308";
  if (score <= 8) return "#f97316";
  return "#ef4444";
}

function getToxiciteColor(score) {
  if (score <= 1) return "#22c55e";
  if (score <= 3) return "#84cc16";
  if (score <= 5) return "#eab308";
  if (score <= 7) return "#f97316";
  return "#ef4444";
}

function getScoreColor(score) {
  if (score >= 8) return "#22c55e";
  if (score >= 6) return "#84cc16";
  if (score >= 4) return "#eab308";
  if (score >= 2) return "#f97316";
  return "#ef4444";
}

function getOverallScore(terrain) {
  if (terrain.unrated || !terrain.scores) return null;
  const s = terrain.scores;
  return (
    (s.formation * 2 + s.ambiance + s.liberte + (10 - s.charge) + (10 - s.toxicite)) / 7
  ).toFixed(1);
}

function getEpPill(val) {
  if (!val) return '<span class="ep-badge ep-ne">—</span>';
  if (val === "N/E") return '<span class="ep-badge ep-ne">N/E</span>';
  const num = parseInt(val, 10);
  if (!isNaN(num) && num < 300) return `<span class="ep-badge ep-hot">${val}</span>`;
  return `<span class="ep-badge ep-std">${val}</span>`;
}

// ============================================================
//  DOM BUILDING — CARDS
// ============================================================

function buildCards(data) {
  const grid = document.getElementById("terrain-grid");
  grid.innerHTML = "";
  data.forEach((t) => {
    const card = document.createElement("div");
    card.style.setProperty("--accent", t.color);

    if (t.unrated) {
      card.className = "terrain-card card-unrated";
      card.innerHTML = `
        <div class="card-glow"></div>
        <div class="card-header">
          <div class="card-icon">${t.icon}</div>
          <div class="card-title-block">
            <h3 class="card-name">${t.name}</h3>
            <span class="card-hospital">${t.hospital}</span>
          </div>
          <div class="card-overall card-overall-empty" title="Avis en attente">
            <span class="overall-num-na">—</span>
          </div>
        </div>

        <div class="card-badge" style="background:#94a3b818;border-color:#94a3b844;color:#94a3b8">
          ${t.badge || "⏳ En attente d'avis"}
        </div>

        <div class="card-meta">
          <span class="meta-pill">📅 P1-P4</span>
          <span class="meta-pill">🏷️ ${t.specialty}</span>
          <span class="meta-pill">🏥 ${t.hospital}</span>
        </div>

        <div class="card-epuisement">
          <div class="ep-header">
            <span class="ep-title">🎯 Rang de clôture (Choix 2026) :</span>
          </div>
          <div class="ep-row-grid">
            <div class="ep-cell"><span class="ep-p">P1</span>${getEpPill(t.epuisement?.p1)}</div>
            <div class="ep-cell"><span class="ep-p">P2</span>${getEpPill(t.epuisement?.p2)}</div>
            <div class="ep-cell"><span class="ep-p">P3</span>${getEpPill(t.epuisement?.p3)}</div>
            <div class="ep-cell"><span class="ep-p">P4</span>${getEpPill(t.epuisement?.p4)}</div>
          </div>
        </div>

        <div class="card-highlights">
          ${(t.highlights || []).slice(0, 3).map((h) => `<div class="highlight-item">→ ${h}</div>`).join("")}
          <div class="highlight-item" style="color:#e2e8f0;font-style:italic">→ Aucun interne n'a encore évalué ce service</div>
        </div>

        <button class="detail-btn detail-btn-unrated" onclick="openModal(${t.id})">
          Voir fiche & clôture ↗
        </button>
      `;
    } else {
      const overall = getOverallScore(t);
      card.className = "terrain-card";
      card.innerHTML = `
        <div class="card-glow"></div>
        <div class="card-header">
          <div class="card-icon">${t.icon}</div>
          <div class="card-title-block">
            <h3 class="card-name">${t.name}</h3>
            <span class="card-hospital">${t.hospital}</span>
          </div>
          <div class="card-overall">
            <svg class="overall-ring-svg" viewBox="0 0 60 60">
              <circle cx="30" cy="30" r="26" fill="none" stroke="#1e293b" stroke-width="5"/>
              <circle cx="30" cy="30" r="26" fill="none" stroke="${t.color}" stroke-width="5"
                stroke-dasharray="${(overall / 10) * 163.4} 163.4"
                stroke-linecap="round" transform="rotate(-90 30 30)"/>
            </svg>
            <span class="overall-num">${overall}</span>
          </div>
        </div>

        <div class="card-badge" style="background:${t.color}22;border-color:${t.color}55;color:${t.color}">
          ${t.badge}
        </div>

        <div class="card-meta">
          <span class="meta-pill">📅 ${t.period}</span>
          <span class="meta-pill">👥 ${t.effectif}</span>
          <span class="meta-pill ${t.gardes ? "garde-yes" : "garde-no"}">
            ${t.gardes ? "🌙 " + t.gardeFreq : "✅ Sans gardes"}
          </span>
          <span class="meta-pill ${t.roulement ? "roul-yes" : "roul-no"}">
            ${t.roulement ? "🔄 Roulement" : "❌ No roulement"}
          </span>
        </div>

        ${t.epuisement ? `
          <div class="card-epuisement-compact">
            <span class="ep-compact-label">🎯 Clôture :</span>
            <span class="ep-compact-val">P1: ${t.epuisement.p1}</span>
            <span class="ep-compact-val">P2: ${t.epuisement.p2}</span>
            <span class="ep-compact-val">P3: ${t.epuisement.p3}</span>
            <span class="ep-compact-val">P4: ${t.epuisement.p4}</span>
          </div>
        ` : ""}

        <div class="score-bars">
          ${scoreBar("⚡ Charge", t.scores.charge, getChargeColor(t.scores.charge))}
          ${scoreBar("☠️ Toxicité", t.scores.toxicite, getToxiciteColor(t.scores.toxicite))}
          ${scoreBar("🎓 Formation", t.scores.formation, getScoreColor(t.scores.formation))}
          ${scoreBar("🕊️ Liberté", t.scores.liberte, getScoreColor(t.scores.liberte))}
          ${scoreBar("🤝 Ambiance", t.scores.ambiance, getScoreColor(t.scores.ambiance))}
        </div>

        <div class="card-highlights">
          ${(t.highlights || []).slice(0, 4).map((h) => `<div class="highlight-item">→ ${h}</div>`).join("")}
        </div>

        <button class="detail-btn" onclick="openModal(${t.id})">
          Voir détails complets ↗
        </button>
      `;
    }

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--mx", x + "%");
      card.style.setProperty("--my", y + "%");
    });

    grid.appendChild(card);
  });
}

function scoreBar(label, value, color) {
  return `
    <div class="score-row">
      <div class="score-label">${label}</div>
      <div class="score-track">
        <div class="score-fill" style="width:${value * 10}%;background:${color};"></div>
      </div>
      <div class="score-num" style="color:${color}">${value}/10</div>
    </div>
  `;
}

// ============================================================
//  MODAL
// ============================================================

let radarInstance = null;

function openModal(id) {
  const t = TERRAINS.find((x) => x.id === id);
  if (!t) return;
  const content = document.getElementById("modal-content");

  if (t.unrated) {
    content.innerHTML = `
      <div class="modal-header" style="border-bottom-color:${t.color}">
        <div class="modal-icon-lg">${t.icon}</div>
        <div class="modal-title-block">
          <h2 class="modal-name">${t.name} — ${t.hospital}</h2>
          <span class="modal-spec">${t.specialty.toUpperCase()} · ${(t.type || "médecine").toUpperCase()}</span>
        </div>
        <div class="modal-score-badge" style="background:#94a3b822;border-color:#94a3b8;color:#94a3b8">
          N/A
        </div>
        <button class="modal-close" onclick="closeModal()">✕</button>
      </div>
      <div class="modal-body" style="display:block">
        <div class="unrated-alert">
          <span class="unrated-alert-icon">⏳</span>
          <div>
            <h3 style="margin-bottom:6px;font-size:1.05rem;">Fiche en attente d'évaluation</h3>
            <p style="font-size:0.85rem;color:var(--text-2);line-height:1.5;">
              Ce terrain figure sur les listes officielles du choix des postes (Faculté de Médecine d'Alger), mais aucun interne n'a encore transmis de compte-rendu détaillé (charge, ambiance, encadrement).
            </p>
          </div>
        </div>

        <h4 class="modal-section-title">🎯 Historique d'Épuisement des Postes (Promo 2026)</h4>
        <div class="modal-epuisement-table">
          <div class="met-col"><span class="met-lbl">Période 1 (P1)</span><span class="met-val">${t.epuisement?.p1 || 'N/E'}</span></div>
          <div class="met-col"><span class="met-lbl">Période 2 (P2)</span><span class="met-val">${t.epuisement?.p2 || 'N/E'}</span></div>
          <div class="met-col"><span class="met-lbl">Période 3 (P3)</span><span class="met-val">${t.epuisement?.p3 || 'N/E'}</span></div>
          <div class="met-col"><span class="met-lbl">Période 4 (P4)</span><span class="met-val">${t.epuisement?.p4 || 'N/E'}</span></div>
        </div>

        <div class="unrated-info-card">
          <h4>💡 Repères pour le choix de stage :</h4>
          <ul>
            <li><strong>N/E (Non Épuisé)</strong> : Des places sont restées disponibles jusqu'au dernier étudiant de la séance.</li>
            <li><strong>Rang de fermeture</strong> : Rang du dernier affecté. Plus ce numéro est bas, plus le terrain est demandé en priorité.</li>
            <li><strong>Vous y avez effectué votre stage ?</strong> Partagez vos impressions pour aider les futurs internes à faire le bon choix !</li>
          </ul>
        </div>
      </div>
    `;
  } else {
    const overall = getOverallScore(t);
    content.innerHTML = `
      <div class="modal-header" style="border-bottom-color:${t.color}">
        <div class="modal-icon-lg">${t.icon}</div>
        <div class="modal-title-block">
          <h2 class="modal-name">${t.name} — ${t.hospital}</h2>
          <span class="modal-spec">${t.specialty.toUpperCase()} · Période ${t.period}</span>
        </div>
        <div class="modal-score-badge" style="background:${t.color}22;border-color:${t.color};color:${t.color}">
          ${overall}<small>/10</small>
        </div>
        <button class="modal-close" onclick="closeModal()">✕</button>
      </div>
      <div class="modal-body">
        <div class="modal-radar-col">
          <canvas id="modal-radar" width="300" height="300"></canvas>
        </div>
        <div class="modal-info-col">
          <p class="modal-summary-text">"${t.summary}"</p>
          <div class="modal-quick-grid">
            <div class="mqg-item"><span class="mqg-l">Effectif</span><span class="mqg-v">👥 ${t.effectif} internes</span></div>
            <div class="mqg-item"><span class="mqg-l">Gardes</span><span class="mqg-v">${t.gardes ? "🌙 " + t.gardeFreq : "✅ Aucune"}</span></div>
            <div class="mqg-item"><span class="mqg-l">Roulement</span><span class="mqg-v">${t.roulement ? "🔄 Possible" : "❌ Absent"}</span></div>
            <div class="mqg-item"><span class="mqg-l">Score global</span><span class="mqg-v" style="color:${t.color};font-weight:700">${overall}/10</span></div>
          </div>

          ${t.epuisement ? `
            <h4 class="modal-section-title">🎯 Clôture aux choix de postes</h4>
            <div class="modal-epuisement-table">
              <div class="met-col"><span class="met-lbl">P1</span><span class="met-val">${t.epuisement.p1}</span></div>
              <div class="met-col"><span class="met-lbl">P2</span><span class="met-val">${t.epuisement.p2}</span></div>
              <div class="met-col"><span class="met-lbl">P3</span><span class="met-val">${t.epuisement.p3}</span></div>
              <div class="met-col"><span class="met-lbl">P4</span><span class="met-val">${t.epuisement.p4}</span></div>
            </div>
          ` : ""}

          <h4 class="modal-section-title">Points clés du terrain</h4>
          <ul class="modal-highlights-list">
            ${t.highlights.map((h) => `<li>${h}</li>`).join("")}
          </ul>
          <h4 class="modal-section-title">Scores détaillés</h4>
          <div class="modal-detail-bars">
            ${detailBar("⚡ Charge de travail", t.scores.charge, getChargeColor(t.scores.charge), "↓ Mieux si bas")}
            ${detailBar("☠️ Toxicité", t.scores.toxicite, getToxiciteColor(t.scores.toxicite), "↓ Mieux si bas")}
            ${detailBar("🎓 Formation", t.scores.formation, getScoreColor(t.scores.formation), "↑ Mieux si haut")}
            ${detailBar("🕊️ Liberté", t.scores.liberte, getScoreColor(t.scores.liberte), "↑ Mieux si haut")}
            ${detailBar("🤝 Ambiance", t.scores.ambiance, getScoreColor(t.scores.ambiance), "↑ Mieux si haut")}
          </div>
        </div>
      </div>
    `;

    setTimeout(() => {
      const ctx = document.getElementById("modal-radar");
      if (!ctx) return;
      if (radarInstance) radarInstance.destroy();
      radarInstance = new Chart(ctx, {
        type: "radar",
        data: {
          labels: ["Charge ↓", "Toxicité ↓", "Formation", "Liberté", "Ambiance"],
          datasets: [{
            label: t.name,
            data: [t.scores.charge, t.scores.toxicite, t.scores.formation, t.scores.liberte, t.scores.ambiance],
            backgroundColor: t.color + "33",
            borderColor: t.color,
            pointBackgroundColor: t.color,
            pointBorderColor: "#fff",
            pointRadius: 5,
            borderWidth: 2,
          }],
        },
        options: {
          responsive: false,
          plugins: { legend: { display: false } },
          scales: {
            r: {
              min: 0, max: 10,
              ticks: { stepSize: 2, color: "#94a3b8", backdropColor: "transparent", font: { size: 10 } },
              grid: { color: "#334155" },
              angleLines: { color: "#334155" },
              pointLabels: { color: "#cbd5e1", font: { size: 12, weight: "600" } },
            },
          },
        },
      });
    }, 60);
  }

  document.getElementById("modal").classList.add("active");
}

function detailBar(label, val, color, hint) {
  return `
    <div class="detail-bar-row">
      <div class="dbr-top"><span>${label}</span><span style="color:${color};font-weight:700">${val}/10</span></div>
      <div class="dbr-track"><div class="dbr-fill" style="width:${val * 10}%;background:${color}"></div></div>
      <span class="dbr-hint">${hint}</span>
    </div>
  `;
}

function closeModal() {
  document.getElementById("modal").classList.remove("active");
}

// ============================================================
//  COMPARISON CHART
// ============================================================

let compChart = null;

function buildComparisonChart(data) {
  const ctx = document.getElementById("comparison-chart");
  if (!ctx) return;
  if (compChart) compChart.destroy();

  const param = document.getElementById("compare-param").value;
  const paramLabels = {
    charge: "Charge", toxicite: "Toxicité", formation: "Formation",
    liberte: "Liberté", ambiance: "Ambiance", overall: "Score Global",
  };

  const ratedData = data.filter((t) => !t.unrated && t.scores);
  const labels = ratedData.map((t) => t.icon + " " + t.name + "\n" + t.hospital);
  const values = ratedData.map((t) =>
    param === "overall" ? parseFloat(getOverallScore(t)) : t.scores[param]
  );
  const colors = ratedData.map((t) => t.color + "cc");
  const borders = ratedData.map((t) => t.color);

  compChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [{
        label: paramLabels[param],
        data: values,
        backgroundColor: colors,
        borderColor: borders,
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
      }],
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: (c) => " " + c.raw + "/10" } },
      },
      scales: {
        x: { min: 0, max: 10, grid: { color: "#1e293b" }, ticks: { color: "#94a3b8", stepSize: 1 } },
        y: { grid: { display: false }, ticks: { color: "#cbd5e1", font: { size: 11 } } },
      },
    },
  });
}

// ============================================================
//  OVERVIEW SPIDER CHART
// ============================================================

let overviewChart = null;

function buildOverviewChart() {
  const ctx = document.getElementById("overview-chart");
  if (!ctx) return;
  if (overviewChart) overviewChart.destroy();

  const rated = TERRAINS.filter((t) => !t.unrated && t.scores);
  const datasets = rated.map((t) => ({
    label: t.icon + " " + t.name,
    data: [t.scores.charge, t.scores.toxicite, t.scores.formation, t.scores.liberte, t.scores.ambiance],
    backgroundColor: t.color + "18",
    borderColor: t.color,
    pointBackgroundColor: t.color,
    borderWidth: 1.5,
    pointRadius: 3,
  }));

  overviewChart = new Chart(ctx, {
    type: "radar",
    data: {
      labels: ["Charge ↓", "Toxicité ↓", "Formation", "Liberté", "Ambiance"],
      datasets,
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true, position: "right",
          labels: { color: "#cbd5e1", font: { size: 11 }, padding: 12, usePointStyle: true },
        },
      },
      scales: {
        r: {
          min: 0, max: 10,
          ticks: { stepSize: 2, color: "#94a3b8", backdropColor: "transparent", font: { size: 9 } },
          grid: { color: "#1e293b" },
          angleLines: { color: "#1e293b" },
          pointLabels: { color: "#cbd5e1", font: { size: 13, weight: "600" } },
        },
      },
    },
  });
}

// ============================================================
//  STATS BANNER
// ============================================================

function buildStats() {
  const rated = TERRAINS.filter((t) => !t.unrated && t.scores);
  if (rated.length === 0) return;
  const bestFormation = rated.reduce((a, b) => a.scores.formation > b.scores.formation ? a : b);
  const leastCharge = rated.reduce((a, b) => a.scores.charge < b.scores.charge ? a : b);
  const leastToxic = rated.reduce((a, b) => a.scores.toxicite < b.scores.toxicite ? a : b);
  const mostFree = rated.reduce((a, b) => a.scores.liberte > b.scores.liberte ? a : b);
  const bestOverall = rated.reduce((a, b) =>
    parseFloat(getOverallScore(a)) > parseFloat(getOverallScore(b)) ? a : b);

  const stats = [
    { icon: "🏆", label: "Meilleur Score Global", name: bestOverall.name, hosp: bestOverall.hospital, color: bestOverall.color },
    { icon: "🎓", label: "Meilleure Formation", name: bestFormation.icon + " " + bestFormation.name, hosp: bestFormation.hospital, color: bestFormation.color },
    { icon: "😴", label: "Moins de Charge", name: leastCharge.icon + " " + leastCharge.name, hosp: leastCharge.hospital, color: leastCharge.color },
    { icon: "🕊️", label: "Plus de Liberté", name: mostFree.icon + " " + mostFree.name, hosp: mostFree.hospital, color: mostFree.color },
    { icon: "😇", label: "Moins Toxique", name: leastToxic.icon + " " + leastToxic.name, hosp: leastToxic.hospital, color: leastToxic.color },
  ];

  document.getElementById("stats-banner").innerHTML = stats.map((s) => `
    <div class="stat-card" style="border-color:${s.color}33">
      <div class="stat-icon">${s.icon}</div>
      <div class="stat-label">${s.label}</div>
      <div class="stat-value" style="color:${s.color}">${s.name}</div>
      <div class="stat-sub">${s.hosp}</div>
    </div>
  `).join("");
}

// ============================================================
//  SORT & FILTER
// ============================================================

function getSortedFiltered() {
  const sortVal = document.getElementById("sort-select").value;
  const filterSpec = document.getElementById("filter-specialty").value;
  const filterType = document.getElementById("filter-type").value;
  const filterStatusElem = document.getElementById("filter-status");
  const filterStatus = filterStatusElem ? filterStatusElem.value : "all";

  let data = [...TERRAINS];
  if (filterType !== "all") data = data.filter((t) => (t.type || "médecine") === filterType);
  if (filterSpec !== "all") data = data.filter((t) => t.specialty === filterSpec);
  if (filterStatus === "rated") data = data.filter((t) => !t.unrated);
  if (filterStatus === "unrated") data = data.filter((t) => t.unrated);

  data.sort((a, b) => {
    // Keep rated items on top during metric sorting, unrated at bottom
    if (a.unrated && !b.unrated) return 1;
    if (!a.unrated && b.unrated) return -1;
    if (a.unrated && b.unrated) return a.name.localeCompare(b.name);

    switch (sortVal) {
      case "formation_desc": return b.scores.formation - a.scores.formation;
      case "charge_asc": return a.scores.charge - b.scores.charge;
      case "toxicite_asc": return a.scores.toxicite - b.scores.toxicite;
      case "liberte_desc": return b.scores.liberte - a.scores.liberte;
      case "ambiance_desc": return b.scores.ambiance - a.scores.ambiance;
      default: return parseFloat(getOverallScore(b)) - parseFloat(getOverallScore(a));
    }
  });
  return data;
}

function refresh() {
  const data = getSortedFiltered();
  buildCards(data);
  buildComparisonChart(data);
}

// ============================================================
//  INIT
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  buildStats();
  refresh();
  buildOverviewChart();

  document.getElementById("sort-select").addEventListener("change", refresh);
  document.getElementById("filter-type").addEventListener("change", refresh);
  document.getElementById("filter-specialty").addEventListener("change", refresh);
  const statusFilter = document.getElementById("filter-status");
  if (statusFilter) statusFilter.addEventListener("change", refresh);

  document.getElementById("compare-param").addEventListener("change", () => {
    buildComparisonChart(getSortedFiltered());
  });

  document.getElementById("modal").addEventListener("click", (e) => {
    if (e.target.id === "modal") closeModal();
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
});
