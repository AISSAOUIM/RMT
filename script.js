// ============================================================
//  TERRAIN DATA â€” Rated from real intern reviews (7e med)
//  Scale: 1â€“10
//  Charge    : 10 = maximum workload
//  ToxicitÃ©  : 10 = very toxic team / environment
//  Formation : 10 = exceptional learning
//  LibertÃ©   : 10 = maximum schedule freedom
//  Ambiance  : 10 = best team atmosphere
// ============================================================

const TERRAINS = [
  {
    id: 1,
    name: "REA MÃ©dicale",
    hospital: "Beni Messous",
    specialty: "rÃ©animation",
    icon: "ðŸ«€",
    color: "#FF4D6D",
    period: "Multi",
    effectif: 6,
    gardes: true,
    gardeFreq: "Chaque 6j",
    roulement: false,
    scores: {
      charge: 9,
      toxicite: 1,
      formation: 10,
      liberte: 2,
      ambiance: 10
    },
    highlights: [
      "Garde toutes les 6 nuits (24h)",
      "5/5 â€” 9h â†’ 13h30",
      "Intubation, voie centrale, CAT",
      "Ã‰quipe hayline â€” 9/10",
      "GazomÃ©trie chaque jour",
      "Terrain des vrais mÃ©decins"
    ],
    badge: "ðŸ† Best Formation",
    summary: "Terrain ultra-formateur, Ã©quipe exceptionnelle mais trÃ¨s chargÃ©. Le rythme intense en fait la meilleure Ã©cole de la mÃ©decine pratique.",
    type: "mÃ©decine",
    epuisement: {
      p1: "301",
      p2: "479",
      p3: "806",
      p4: "544"
    }
  },
  {
    id: 2,
    name: "Cardio A2",
    hospital: "Mustapha Basha",
    specialty: "cardiologie",
    icon: "â¤ï¸",
    color: "#FF6B35",
    period: "P3",
    effectif: 5,
    gardes: true,
    gardeFreq: "Chaque 10j",
    roulement: true,
    scores: {
      charge: 6,
      toxicite: 3,
      formation: 8,
      liberte: 6,
      ambiance: 8
    },
    highlights: [
      "Gardes 24h (sem: 9h / WE: 10h)",
      "Roulement 1 sur 3 pour le service",
      "Coronographie et rythmologie",
      "Colloques de cas du mercredi",
      "Salle d'Ã©cho-cÅ“urs disponible",
      "Service en travaux â€” Ã©volution future"
    ],
    badge: "ðŸ“ˆ Bon Ã‰quilibre",
    summary: "Bon terrain cardiologique avec accÃ¨s aux gestes techniques. Ã‰quipe sympa, roulement 1/3 pour le service. Gardes formatives.",
    type: "mÃ©decine",
    epuisement: {
      p1: "278",
      p2: "104",
      p3: "204",
      p4: "324"
    }
  },
  {
    id: 3,
    name: "Cardio",
    hospital: "Parnet",
    specialty: "cardiologie",
    icon: "ðŸ’“",
    color: "#FF8C42",
    period: "P3",
    effectif: 10,
    gardes: true,
    gardeFreq: "Chaque 10j",
    roulement: true,
    scores: {
      charge: 7,
      toxicite: 2,
      formation: 8,
      liberte: 6,
      ambiance: 9
    },
    highlights: [
      "10 internes â€” gardes 24h",
      "Roulement service 1 sur 5",
      "2 Ã  10 avis par jour en ambulance",
      "Chambre de garde disponible",
      "CDS strict mais correct",
      "Ã‰quipe rÃ©sidents hayline"
    ],
    badge: "ðŸŒŸ Super Ambiance",
    summary: "Stage inoubliable selon les internes. Ã‰quipe exceptionnelle, gardes bÃ©nÃ©fiques. La charge ambulances peut Ãªtre lourde.",
    type: "mÃ©decine",
    epuisement: {
      p1: "695",
      p2: "735",
      p3: "509",
      p4: "634"
    }
  },
  {
    id: 4,
    name: "Gastro",
    hospital: "Beni Messous",
    specialty: "gastroentÃ©rologie",
    icon: "ðŸ«",
    color: "#FFBE0B",
    period: "P4",
    effectif: 11,
    gardes: false,
    gardeFreq: "Aucune",
    roulement: true,
    scores: {
      charge: 6,
      toxicite: 3,
      formation: 6,
      liberte: 7,
      ambiance: 6
    },
    highlights: [
      "Pas de gardes",
      "Roulement 15j travail / 15j repos",
      "HDJ trÃ¨s chargÃ© â€” jusqu'Ã  16h",
      "Service lÃ©ger â€” sortie 12h",
      "Roulement service / HDJ",
      "CDS a demandÃ© 6 internes par jour"
    ],
    badge: "âš–ï¸ Roulement IdÃ©al",
    summary: "Excellent roulement nÃ©gociÃ© (15j/15j). Service lÃ©ger mais HDJ exigeant. Pas de gardes. Ã‰quipe mixte selon les unitÃ©s.",
    type: "mÃ©decine",
    epuisement: {
      p1: "230",
      p2: "50",
      p3: "40",
      p4: "150"
    }
  },
  {
    id: 5,
    name: "Gastro",
    hospital: "BEO",
    specialty: "gastroentÃ©rologie",
    icon: "ðŸ«",
    color: "#8AC926",
    period: "P3",
    effectif: 8,
    gardes: false,
    gardeFreq: "Aucune",
    roulement: true,
    scores: {
      charge: 5,
      toxicite: 1,
      formation: 8,
      liberte: 6,
      ambiance: 10
    },
    highlights: [
      "8 internes en binÃ´mes sur 4 unitÃ©s",
      "5/5 matinÃ©e 9h â†’ 12h",
      "Roulement officieux 1s/2 possible",
      "Ã‰quipe exceptionnelle (trÃ¨s bien classÃ©s)",
      "Ponctions d'ascite, endoscopies",
      "Responsable internes exemplaire"
    ],
    badge: "ðŸ’Ž Meilleure Ã‰quipe",
    summary: "Terrain Ã©quilibrÃ© entre formation et lÃ©gÃ¨retÃ©. Ã‰quipe exceptionnelle, responsable idÃ©ale. RecommandÃ© si vous aimez la gastro.",
    type: "mÃ©decine",
    epuisement: {
      p1: "499",
      p2: "112",
      p3: "85",
      p4: "197"
    }
  },
  {
    id: 6,
    name: "Rhumato",
    hospital: "Beni Messous",
    specialty: "rhumatologie",
    icon: "ðŸ¦´",
    color: "#1982C4",
    period: "P4",
    effectif: 5,
    gardes: false,
    gardeFreq: "Aucune",
    roulement: false,
    scores: {
      charge: 4,
      toxicite: 1,
      formation: 7,
      liberte: 4,
      ambiance: 9
    },
    highlights: [
      "5/5 pointage 9hâ€“15h",
      "Pas de gardes, week-end libre",
      "Consulte, HDJ, DMO, Ã©cho, capillaro",
      "Infiltrations et gestes",
      "PrÃ©sence obligatoire â€” pas de roulement",
      "Ã‰quipe trÃ¨s gentille"
    ],
    badge: "â˜€ï¸ Terrain Calme",
    summary: "Terrain lÃ©ger avec bonne formation rhumatologique. Pas de gardes, WE libres. La prÃ©sence obligatoire sans roulement peut peser sur 3 mois.",
    type: "mÃ©decine",
    epuisement: {
      p1: "N/E",
      p2: "N/E",
      p3: "N/E",
      p4: "N/E"
    }
  },
  {
    id: 7,
    name: "Endocrino",
    hospital: "BEO",
    specialty: "endocrinologie",
    icon: "ðŸ§¬",
    color: "#6A4C93",
    period: "P3",
    effectif: 6,
    gardes: false,
    gardeFreq: "Aucune",
    roulement: true,
    scores: {
      charge: 4,
      toxicite: 5,
      formation: 5,
      liberte: 6,
      ambiance: 5
    },
    highlights: [
      "Instable selon le responsable",
      "P3 : Pr Si Youcef strict (TDs, pointage)",
      "Premier mois stressant",
      "2e mois : 1â€“2 j/semaine",
      "3e mois : congÃ©s + 2j/semaine",
      "Avis multiples (ophtalmo, radio, ORL...)"
    ],
    badge: "âš ï¸ Variable",
    summary: "Terrain trÃ¨s variable selon la pÃ©riode et le responsable. Peut aller de 4â€“5 j/semaine Ã  2 j/semaine. InstabilitÃ© potentielle.",
    type: "mÃ©decine",
    epuisement: {
      p1: "257",
      p2: "74",
      p3: "20",
      p4: "127"
    }
  },
  {
    id: 8,
    name: "Onco",
    hospital: "Rouiba",
    specialty: "oncologie",
    icon: "ðŸŽ—ï¸",
    color: "#06D6A0",
    period: "P1",
    effectif: 8,
    gardes: false,
    gardeFreq: "Astreinte 8j",
    roulement: true,
    scores: {
      charge: 4,
      toxicite: 2,
      formation: 5,
      liberte: 7,
      ambiance: 8
    },
    highlights: [
      "Pas de gardes formelles",
      "8h30 â†’ 12â€“14h (max 15h)",
      "Astreinte 9â€“16h (8 jours/stage)",
      "Rapport de stage obligatoire (120 patients)",
      "Soutenance obligatoire en P1",
      "La plupart des mÃ©decins trÃ¨s gentils"
    ],
    badge: "ðŸ“ Rapport Lourd",
    summary: "Terrain lÃ©ger en termes de prÃ©sence mais le rapport de stage (Ã©tude 120 patients + soutenance) reprÃ©sente une charge intellectuelle importante.",
    type: "mÃ©decine"
  },
  {
    id: 9,
    name: "Med Interne",
    hospital: "Ain Taya",
    specialty: "mÃ©decine interne",
    icon: "ðŸ¥",
    color: "#118AB2",
    period: "P3",
    effectif: 7,
    gardes: true,
    gardeFreq: "Chaque 9â€“10j",
    roulement: true,
    scores: {
      charge: 4,
      toxicite: 2,
      formation: 7,
      liberte: 7,
      ambiance: 8
    },
    highlights: [
      "Roulement 1/4 Ã  1/3",
      "Gardes avec UMC â€” libÃ©ration Ã  minuit",
      "Visite dimanche pÃ©dagogique",
      "Planchage lundi",
      "Cas variÃ©s : MICI, AI, auto-inflammation",
      "LibertÃ© Ã  12h hors admissions"
    ],
    badge: "ðŸŽ“ PÃ©dagogique",
    summary: "Bon terrain avec cas variÃ©s et Ã©quipe disponible. Roulement confortable, gardes lÃ©gÃ¨res (minuit libÃ©ration). IdÃ©al pour apprendre tout en restant flexible.",
    type: "mÃ©decine"
  },
  {
    id: 10,
    name: "Med LÃ©gale",
    hospital: "Beni Messous",
    specialty: "mÃ©decine lÃ©gale",
    icon: "âš–ï¸",
    color: "#4CC9F0",
    period: "Multi",
    effectif: 4,
    gardes: false,
    gardeFreq: "Aucune",
    roulement: true,
    scores: {
      charge: 2,
      toxicite: 1,
      formation: 2,
      liberte: 9,
      ambiance: 9
    },
    highlights: [
      "Consultation, autopsie, unitÃ© pÃ©nitentiaire",
      "PrÃ©sence non vraiment obligatoire",
      "Autopsies optionnelles",
      "Colloque mardi 14hâ€“16h30",
      "Roulement demi-journÃ©e/semaine en P2",
      "Astreinte jusqu'Ã  16h (sortie souvent plus tÃ´t)"
    ],
    badge: "ðŸ˜´ Ultra LÃ©ger",
    summary: "Le terrain le plus light de l'internat. Quasi aucune toxicitÃ©, Ã©quipe super, mais quasi aucune formation mÃ©dicale clinique. Pour rÃ©cupÃ©rer ou prÃ©parer le concours.",
    type: "mÃ©decine"
  },
  {
    id: 11,
    name: "HÃ©mato",
    hospital: "CPMC",
    specialty: "hÃ©matologie",
    icon: "ðŸ©¸",
    color: "#EF476F",
    period: "P4",
    effectif: 5,
    gardes: false,
    gardeFreq: "Aucune",
    roulement: false,
    scores: {
      charge: 7,
      toxicite: 2,
      formation: 8,
      liberte: 2,
      ambiance: 8
    },
    highlights: [
      "Tous les jours â€” pas de roulement",
      "1.5 mois HDJ + PU greffe de moelle",
      "1.5 mois service unitÃ© stÃ©rile",
      "Imagerie interne (Ã©cho/scanner/IRM)",
      "Greffe de moelle unique Ã  CPMC et Blida",
      "9h â†’ 14h (dialyse = plus long)"
    ],
    badge: "ðŸ”¬ Rare et Unique",
    summary: "ExpÃ©rience unique avec la greffe de moelle osseuse. Ã‰quipe gentille et terrain trÃ¨s formateur en hÃ©mato. Le manque total de roulement est le principal inconvÃ©nient.",
    type: "mÃ©decine"
  },
  {
    id: 12,
    name: "Med Interne",
    hospital: "Beni Messous",
    specialty: "mÃ©decine interne",
    icon: "ðŸ¥",
    color: "#6366f1",
    period: "Multi",
    effectif: 6,
    gardes: false,
    gardeFreq: "Aucune",
    roulement: false,
    scores: {
      charge: 7,
      toxicite: 6,
      formation: 3,
      liberte: 2,
      ambiance: 4
    },
    highlights: [
      "Pointage 8h30, prÃ©sence tous les jours",
      "Service maladies de systÃ¨me â€” pas de PU",
      "Ã‰vacuations ++ bÃªte noire des internes",
      "Ambulancier part sans vous â€” dÃ©brouillard",
      "Quelques gestes : BGSA, capillaroscopie",
      "2 TDs Ã  prÃ©senter par interne"
    ],
    badge: "ðŸ˜¤ Ã‰vacs Cauchemar",
    summary: "Terrain dÃ©criÃ© pour l'utilisation des internes comme agents d'Ã©vacuation sans soutien. Peu formateur cliniquement. RÃ©sidents mixtes. Ã€ Ã©viter si vous habitez loin.",
    type: "mÃ©decine"
  },
  {
    id: 13,
    name: "Endocrino",
    hospital: "Beni Messous",
    specialty: "endocrinologie",
    icon: "ðŸ§¬",
    color: "#a78bfa",
    period: "P1",
    effectif: 5,
    gardes: false,
    gardeFreq: "Aucune",
    roulement: true,
    scores: {
      charge: 3,
      toxicite: 1,
      formation: 3,
      liberte: 7,
      ambiance: 8
    },
    highlights: [
      "Roulement 2sem/3 (P1 = 5 internes)",
      "Avis uniquement â€” fin max 12h",
      "Pas de pointage ni d'astreinte",
      "Rapport de stage signÃ© avant fin P1",
      "CDS trÃ¨s gentille et protectrice",
      "Surtout diabÃ©tologie, peu d'endocrino rare"
    ],
    badge: "â˜€ï¸ Ultra LÃ©ger",
    summary: "Terrain mÃ©dical trÃ¨s lÃ©ger. CDS exemplaire. RÃ©sidents pÃ©dagogues. Peu de cas rares d'endocrino. La P2/P3/P4 est encore plus espacÃ©e avec plus d'internes.",
    type: "mÃ©decine",
    epuisement: {
      p1: "192",
      p2: "46",
      p3: "20",
      p4: "112"
    }
  },
  {
    id: 14,
    name: "Diabeto",
    hospital: "BEO",
    specialty: "diabÃ©tologie",
    icon: "ðŸ©º",
    color: "#f0abfc",
    period: "P4",
    effectif: 3,
    gardes: false,
    gardeFreq: "Aucune",
    roulement: false,
    scores: {
      charge: 5,
      toxicite: 4,
      formation: 4,
      liberte: 5,
      ambiance: 6
    },
    highlights: [
      "Pointage & dÃ©pointage (P4 seulement)",
      "Admissions, avis, radio + FO ophtalmo",
      "Roulement 1s/2 Ã  1s/3 autres pÃ©riodes",
      "Visite 9hâ€“15h (longue)",
      "Sortie 12hâ€“12h30 si roulement",
      "Formation rÃ©sidente-dÃ©pendante"
    ],
    badge: "âš ï¸ Pointage Strict",
    summary: "Terrain correct si roulement bien gÃ©rÃ© (autres pÃ©riodes). Le pointage en P4 et la secrÃ©taire sont les points noirs. Formation possible si vous posez des questions.",
    type: "mÃ©decine",
    epuisement: {
      p1: "479",
      p2: "257",
      p3: "168",
      p4: "235"
    }
  },
  {
    id: 15,
    name: "REA",
    hospital: "Bainem",
    specialty: "rÃ©animation",
    icon: "ðŸ«€",
    color: "#fb7185",
    period: "P4",
    effectif: 5,
    gardes: true,
    gardeFreq: "Effectif dÃ©pendant",
    roulement: true,
    scores: {
      charge: 3,
      toxicite: 1,
      formation: 6,
      liberte: 9,
      ambiance: 10
    },
    highlights: [
      "Que des gardes â€” aucune tÃ¢che service",
      "AccÃ¨s REA, bloc, dÃ©cochage, bronchoscopie",
      "Suivez juste les rÃ©sidents",
      "Chambre de garde disponible",
      "0 toxicitÃ© â€” tout le monde gentil",
      "Meilleur terrain pour se reposer"
    ],
    badge: "ðŸŒ´ Vider l'Internat",
    summary: "Le meilleur terrain pour souffler. Que des gardes, aucune obligation service. AccÃ¨s passif Ã  des gestes techniques importants. 0 toxicitÃ©. Vivement recommandÃ© pour rÃ©cupÃ©rer.",
    type: "mÃ©decine",
    epuisement: {
      p1: "612",
      p2: "407",
      p3: "329",
      p4: "360"
    }
  },
  {
    id: 16,
    name: "Cardio A1",
    hospital: "Mustapha Basha",
    specialty: "cardiologie",
    icon: "â¤ï¸",
    color: "#f97316",
    period: "P1",
    effectif: 8,
    gardes: true,
    gardeFreq: "Chaque 16j (â†’14j)",
    roulement: true,
    scores: {
      charge: 5,
      toxicite: 2,
      formation: 8,
      liberte: 7,
      ambiance: 9
    },
    highlights: [
      "Roulement 1 sem/4 (service en travaux)",
      "Gardes monomes â€” chaque 16j puis 14j",
      "Travail fini 11hâ€“12h, astreinte max 14h",
      "ECG ++ formation trÃ¨s solide",
      "AccÃ¨s bloc rythmologie",
      "Toute l'Ã©quipe explique trÃ¨s bien"
    ],
    badge: "ðŸ“ˆ ECG Expert",
    summary: "TrÃ¨s bon terrain cardiologique malgrÃ© les travaux. Roulement 1/4, gardes espacÃ©es, Ã©quipe pÃ©dagogue et trÃ¨s sympa. Formation ECG et prise en charge CV solide.",
    type: "mÃ©decine",
    epuisement: {
      p1: "479",
      p2: "555",
      p3: "516",
      p4: "345"
    }
  },
  {
    id: 17,
    name: "Urologie",
    hospital: "Mustapha Basha",
    specialty: "urologie",
    icon: "ðŸ”¬",
    color: "#0ea5e9",
    period: "P2",
    effectif: 7,
    gardes: true,
    gardeFreq: "Chaque 6j (PU 24h)",
    roulement: false,
    scores: {
      charge: 7,
      toxicite: 2,
      formation: 7,
      liberte: 5,
      ambiance: 7
    },
    highlights: [
      "Gardes 24h au PU â€” 30-40 patients/garde",
      "Sondage urinaire â€” vous devenez experts",
      "Colloque mardi avec TDs des assistants",
      "Pas de service (travaux)",
      "Examen clinique + prescriptions",
      "âš ï¸ DÃ©conseillÃ© aux femmes (Ø¥Ø­Ø±Ø§Ø¬)"
    ],
    badge: "ðŸ”± Chirurgie Pratique",
    summary: "Bon terrain urologique avec gardes actives (30-40 patients). Cas variÃ©s : RVA, coliques, infections, torsions. Service en travaux. NB : dÃ©conseillÃ© aux Ã©tudiantes selon les tÃ©moignages.",
    type: "chirurgie",
    epuisement: {
      p1: "1010",
      p2: "927",
      p3: "1022",
      p4: "N/E"
    }
  },
  {
    id: 18,
    name: "Pneumo (Pr Khlaf)",
    hospital: "Beni Messous",
    specialty: "pneumologie",
    icon: "ðŸ«",
    color: "#38bdf8",
    period: "P3",
    effectif: 6,
    gardes: false,
    gardeFreq: "Aucune",
    roulement: true,
    scores: {
      charge: 3,
      toxicite: 2,
      formation: 3,
      liberte: 8,
      ambiance: 9
    },
    highlights: [
      "Service lÃ©ger â€” sortie 11h ou avant",
      "Roulement possible entre internes",
      "Avis principalement cardio + radio + Ã©cho",
      "RÃ©sidents TRÃˆS gentils (Dr Khelfellah)",
      "Majors dÃ©fendaient les internes",
      "P4 : responsable changÃ©e â†’ quasi absents"
    ],
    badge: "ðŸŒ¿ Ã‰quipe en Or",
    summary: "Terrain lÃ©ger avec une Ã©quipe de rÃ©sidents exceptionnelle. Peu formateur cliniquement mais idÃ©al pour se reposer. Roulement possible. Ambiance excellente.",
    type: "mÃ©decine",
    epuisement: {
      p1: "885",
      p2: "664",
      p3: "655",
      p4: "398"
    }
  },
  {
    id: 19,
    name: "Med Interne",
    hospital: "Birtraria",
    specialty: "mÃ©decine interne",
    icon: "ðŸ¥",
    color: "#84cc16",
    period: "P3",
    effectif: 5,
    gardes: true,
    gardeFreq: "Monome (frÃ©q. variable)",
    roulement: false,
    scores: {
      charge: 7,
      toxicite: 4,
      formation: 5,
      liberte: 3,
      ambiance: 6
    },
    highlights: [
      "PrÃ©sence 8h30â€“13h30 + astreinte 16h",
      "Gardes monomes â€” Ã©quipe rÃ©sident dÃ©pendant",
      "Ã‰vacuations +++ : bÃªte noire du terrain",
      "RDG obligatoire, TD en anglais Ã  prÃ©senter",
      "Cas variÃ©s service + gardes formateurs",
      "Internes utilisÃ©s pour les Ã©vacs"
    ],
    badge: "ðŸš‘ Ã‰vacs RedoutÃ©es",
    summary: "Terrain avec de bons cas mais les Ã©vacuations Ã  rÃ©pÃ©tition dÃ©motivent les internes. RÃ©sidents gentils. Bonne formation potentielle si on ne se laisse pas dÃ©courager.",
    type: "mÃ©decine"
  },
  {
    id: 20,
    name: "NÃ©phro",
    hospital: "BEO",
    specialty: "nÃ©phrologie",
    icon: "ðŸ’§",
    color: "#22d3ee",
    period: "Multi",
    effectif: 5,
    gardes: true,
    gardeFreq: "WE (prof-imposÃ©es)",
    roulement: false,
    scores: {
      charge: 6,
      toxicite: 3,
      formation: 6,
      liberte: 3,
      ambiance: 7
    },
    highlights: [
      "PrÃ©sence chaque jour, pas de roulement",
      "RDG 8h30 quotidien (parfois skippÃ©)",
      "Fin vers 14h",
      "Astreintes + gardes WE ajoutÃ©es par prof",
      "1 observation + 1 TD par interne",
      "Pas de pointage mais trÃ¨s surveillÃ©"
    ],
    badge: "ðŸ‘ï¸ TrÃ¨s SurveillÃ©",
    summary: "Terrain correct mais strict. Le prof a ajoutÃ© des gardes le weekend. Pas de pointage officiel mais les absences sont trÃ¨s remarquÃ©es. Formation convenable.",
    type: "mÃ©decine"
  },
  {
    id: 21,
    name: "Rhumato",
    hospital: "Benaknoun",
    specialty: "rhumatologie",
    icon: "ðŸ¦´",
    color: "#a3e635",
    period: "P4",
    effectif: 4,
    gardes: false,
    gardeFreq: "Aucune",
    roulement: true,
    scores: {
      charge: 2,
      toxicite: 2,
      formation: 2,
      liberte: 9,
      ambiance: 8
    },
    highlights: [
      "Roulement 1s/2, pas de jeudi",
      "9h30 â†’ 12hâ€“13h max",
      "Pas de prÃ©sence obligatoire",
      "DÃ©tachement et transfert acceptÃ©s",
      "RÃ©sidents proches et gentils",
      "Formation quasi nulle (hammouda matt3alam walou)"
    ],
    badge: "ðŸ˜´ Repos Total",
    summary: "Le terrain idÃ©al pour souffler. Roulement 1s/2, aucune garde, horaires trÃ¨s courts, pas de prÃ©sence obligatoire. Mais attention : pratiquement rien Ã  apprendre.",
    type: "mÃ©decine",
    epuisement: {
      p1: "705",
      p2: "421",
      p3: "536",
      p4: "235"
    }
  },
  {
    id: 22,
    name: "ORL",
    hospital: "Mustapha Basha",
    specialty: "ORL",
    icon: "ðŸ‘‚",
    color: "#fb923c",
    period: "P3",
    effectif: 7,
    gardes: true,
    gardeFreq: "1 interne/service",
    roulement: true,
    scores: {
      charge: 6,
      toxicite: 3,
      formation: 7,
      liberte: 6,
      ambiance: 6
    },
    highlights: [
      "2 services + urgences",
      "Roulement 1 interne/service (officieux)",
      "Gardes avec R1 (monomes)",
      "Chirurgie = formation solide",
      "R1 haylin, R2 corrects, majors peu contactÃ©s",
      "Responsable aware mais ferme les yeux"
    ],
    badge: "ðŸ¥ Chirurgie Utile",
    summary: "Bon terrain chirurgical ORL. Gardes monomes actives. Roulement officieux 1/interne/service. Formation chirurgicale intÃ©ressante. Ã‰quipe mixte selon les niveaux.",
    type: "chirurgie",
    epuisement: {
      p1: "615",
      p2: "705",
      p3: "660",
      p4: "566"
    }
  },
  {
    id: 23,
    name: "NÃ©phro",
    hospital: "Mustapha Basha",
    specialty: "nÃ©phrologie",
    icon: "ðŸ’§",
    color: "#06b6d4",
    period: "Multi",
    effectif: 5,
    gardes: true,
    gardeFreq: "J0/J1/J2 (greffe) + Sam",
    roulement: true,
    scores: {
      charge: 6,
      toxicite: 3,
      formation: 7,
      liberte: 4,
      ambiance: 6
    },
    highlights: [
      "8h30 â†’ 14h tous les jours",
      "3 unitÃ©s : service, dialyse, greffe, DP",
      "Gardes J0/J1/J2 si greffe + astreintes sam",
      "Avis + accompagnement radio",
      "Dialyse pÃ©ritonÃ©ale unique",
      "Gardes : juste assister les rÃ©sidents"
    ],
    badge: "ðŸ”¬ Greffe & Dialyse",
    summary: "Terrain nÃ©phro complet avec 4 unitÃ©s. Greffe et dialyse pÃ©ritonÃ©ale offrent une expÃ©rience rare. Gardes lÃ©gÃ¨res (assister rÃ©sidents). Charge quotidienne sans roulement.",
    type: "mÃ©decine"
  },
  {
    id: 24,
    name: "Rhumato",
    hospital: "BEO",
    specialty: "rhumatologie",
    icon: "ðŸ¦´",
    color: "#4ade80",
    period: "Multi",
    effectif: 5,
    gardes: false,
    gardeFreq: "Aucune",
    roulement: true,
    scores: {
      charge: 3,
      toxicite: 1,
      formation: 5,
      liberte: 8,
      ambiance: 9
    },
    highlights: [
      "5/5 officiel â†’ roulement officieux 2/5",
      "Consultations avec professeurs",
      "Avis de service principalement",
      "Aucune toxicitÃ©",
      "RÃ©sidents tous trÃ¨s gentils",
      "Apprentissage diagnostique en consultation"
    ],
    badge: "âœ¨ ZÃ©ro ToxicitÃ©",
    summary: "Terrain trÃ¨s agrÃ©able avec un roulement officieux 2/5. Aucune toxicitÃ©, Ã©quipe au top. Formation correcte en consultation rhumatologique. IdÃ©al pour un Ã©quilibre serein.",
    type: "mÃ©decine",
    epuisement: {
      p1: "235",
      p2: "104",
      p3: "74",
      p4: "192"
    }
  },
  {
    id: 25,
    name: "Med Interne",
    hospital: "BEO",
    specialty: "mÃ©decine interne",
    icon: "ðŸ¥",
    color: "#818cf8",
    period: "P1",
    effectif: 6,
    gardes: false,
    gardeFreq: "Aucune",
    roulement: false,
    scores: {
      charge: 5,
      toxicite: 2,
      formation: 6,
      liberte: 5,
      ambiance: 8
    },
    highlights: [
      "9h â†’ 12h tous les jours (CDS strict)",
      "Services H/F â€” 1.5 mois chacun",
      "Colloque lundi + visites lundi & jeudi",
      "Constantes, avis ORL/ophtalmo, examen clinique",
      "Pas de travail de coursier",
      "TD programme + prÃ©sentation patients"
    ],
    badge: "ðŸ“š Formation Correcte",
    summary: "Terrain Ã©quilibrÃ©, matÃ©riel disponible, Ã©quipe sympa et pÃ©dagogue. Pas de roulement mais horaires courts (9-12h). CDS strict sur la prÃ©sence mais correct. Bon pour la P1.",
    type: "mÃ©decine"
  },
  {
    id: 26,
    name: "HÃ©patologie",
    hospital: "Mustapha Basha",
    specialty: "hÃ©patologie",
    icon: "ðŸ«€",
    color: "#fbbf24",
    period: "P4",
    effectif: 5,
    gardes: false,
    gardeFreq: "Aucune",
    roulement: false,
    scores: {
      charge: 7,
      toxicite: 3,
      formation: 6,
      liberte: 3,
      ambiance: 7
    },
    highlights: [
      "5/5 â€” 3 unitÃ©s : HDJ, service, USC",
      "8h30 â†’ 14hâ€“15h (service/USC plus tard)",
      "Pas de gardes, pas de roulement",
      "1 mois par unitÃ©",
      "CDS trÃ¨s gentille, accorde jours libres",
      "Fatigant l'Ã©tÃ©"
    ],
    badge: "â˜€ï¸ Fatiguant l'Ã‰tÃ©",
    summary: "Terrain sans gardes mais 5/5 sans roulement. CDS bienveillante. 3 unitÃ©s variÃ©es. Quelques rÃ©sidents toxiques selon les cas. Charge Ã©levÃ©e l'Ã©tÃ©. Pas de dÃ©tachement possible.",
    type: "mÃ©decine"
  },
  {
    id: 27,
    name: "Gastro",
    hospital: "Mustapha Basha",
    specialty: "gastroentÃ©rologie",
    icon: "ðŸ«",
    color: "#d97706",
    period: "P3",
    effectif: 6,
    gardes: false,
    gardeFreq: "Aucune",
    roulement: false,
    scores: {
      charge: 5,
      toxicite: 2,
      formation: 4,
      liberte: 5,
      ambiance: 7
    },
    highlights: [
      "5/5 Ã  8h30 + RDG",
      "Avis anti-TNF (stomato, dermato, anesthÃ©sie)",
      "RCP dimanche, colloque jeudi",
      "Focus mÃ©dicaments nouveaux mercredi",
      "TDs faits par les assistants",
      "Peu formateur â€” proactivitÃ© requise"
    ],
    badge: "ðŸ“‹ ProactivitÃ© Requise",
    summary: "Terrain peu formateur si vous attendez qu'on vienne vous enseigner. Mais si vous posez des questions, les rÃ©sidents (non toxiques) peuvent vous apprendre. RDG quotidien obligatoire.",
    type: "mÃ©decine",
    epuisement: {
      p1: "N/E",
      p2: "N/E",
      p3: "N/E",
      p4: "1000"
    }
  },
  {
    id: 28,
    name: "ORL",
    hospital: "BEO",
    specialty: "ORL",
    icon: "ðŸ‘‚",
    color: "#f59e0b",
    period: "P1",
    effectif: 5,
    gardes: true,
    gardeFreq: "Chaque 6j (P1)",
    roulement: true,
    scores: {
      charge: 8,
      toxicite: 2,
      formation: 8,
      liberte: 4,
      ambiance: 7
    },
    highlights: [
      "P1 : garde/6 â€” P2 : /9 â€” P3 : /12 â€” P4 : /15",
      "Post-garde uniquement (lÃ©ger)",
      "Rapport de stage : binÃ´me, stats archives",
      "Gardes progressivement espacÃ©es",
      "CDS trÃ¨s accessible et protecteur",
      "RÃ©sidents majoritairement gentils"
    ],
    badge: "ðŸ“‰ Gardes Progressives",
    summary: "La charge en P1 est Ã©levÃ©e (garde/6j) mais elle diminue fortement chaque pÃ©riode. Terrain formateur avec des gardes actives. Rapport de stage avec stats d'archives. CDS de cÃ´tÃ© des internes.",
    type: "chirurgie",
    epuisement: {
      p1: "150",
      p2: "69",
      p3: "85-97",
      p4: "230"
    }
  },
  {
    id: 29,
    name: "REA Polyvalente",
    hospital: "BEO",
    specialty: "rÃ©animation",
    icon: "ðŸ«€",
    color: "#e11d48",
    period: "P2",
    effectif: 5,
    gardes: true,
    gardeFreq: "Chaque 5j",
    roulement: false,
    scores: {
      charge: 9,
      toxicite: 4,
      formation: 9,
      liberte: 2,
      ambiance: 6
    },
    highlights: [
      "5/5 + garde chaque 5j + RDG obligatoire",
      "RDG 9h â€” discussions trÃ¨s riches",
      "Planchage mardi jusqu'Ã  16hâ€“17h",
      "Pas de chambre internes (dortoir prÃ©caire)",
      "Pas de gestes directs pour internes",
      "CDS trÃ¨s stricte â€” Ã©quipe fÃ©minine Ã  100%"
    ],
    badge: "ðŸ§  Max Formation BEO",
    summary: "Le terrain le plus formateur de BEO selon les tÃ©moignages. Raisonnement clinique dÃ©veloppÃ© via les RDGs. Mais trÃ¨s chargÃ©, gardes tous les 5j sans chambre d'internes. CDS stricte.",
    type: "mÃ©decine",
    epuisement: {
      p1: "660",
      p2: "756",
      p3: "751",
      p4: "765"
    }
  },
  {
    id: 30,
    name: "Med LÃ©gale",
    hospital: "Mustapha Basha",
    specialty: "mÃ©decine lÃ©gale",
    icon: "âš–ï¸",
    color: "#94a3b8",
    period: "Multi",
    effectif: 4,
    gardes: false,
    gardeFreq: "Aucune",
    roulement: true,
    scores: {
      charge: 2,
      toxicite: 1,
      formation: 3,
      liberte: 8,
      ambiance: 9
    },
    highlights: [
      "1.5 mois pinel + 1.5 mois consultation",
      "Roulement selon effectif (1 interne/sem consulte)",
      "Avis principalement â€” Ã©quipe hayline",
      "Pinel : variÃ©tÃ© de cas psychiatrico-lÃ©gaux",
      "CDS accessible et de cÃ´tÃ© des internes",
      "TrÃ¨s lÃ©ger â€” idÃ©al pour prÃ©parer le concours"
    ],
    badge: "ðŸ“š PrÃ©parez le Concours",
    summary: "Terrain trÃ¨s light, 0 toxicitÃ©. Le pinel offre une variÃ©tÃ© de cas intÃ©ressants. La consultation reste lÃ©gÃ¨re. Ã‰quipe hayline. IdÃ©al pour rÃ©viser tout en assurant un minimum clinique.",
    type: "mÃ©decine"
  },
  {
    id: 31,
    name: "Cardiologie",
    hospital: "Beni Messous",
    specialty: "cardiologie",
    icon: "â¤ï¸",
    color: "#f97316",
    period: "P3",
    effectif: 4,
    gardes: false,
    gardeFreq: "Aucune (travaux)",
    roulement: true,
    scores: {
      charge: 4,
      toxicite: 2,
      formation: 6,
      liberte: 7,
      ambiance: 8
    },
    highlights: [
      "4 unitÃ©s : consult, PU, hospi, USIC",
      "Sortie max Ã  midi",
      "ECG matin + accompagnement patients",
      "Formation ++ si l'interne s'implique",
      "Pas de gardes (chambre en travaux)",
      "P4 un peu plus chargÃ©"
    ],
    badge: "â˜€ï¸ MatinÃ©e LÃ©gÃ¨re",
    summary: "Terrain agrÃ©able et peu chargÃ©, avec une sortie vers midi. La formation est bonne si vous Ãªtes proactif. Les gardes Ã©taient suspendues pour cause de travaux.",
    type: "mÃ©decine",
    epuisement: {
      p1: "718",
      p2: "910",
      p3: "789",
      p4: "705"
    }
  },
  {
    id: 32,
    name: "Endocrino",
    hospital: "CPMC",
    specialty: "endocrinologie",
    icon: "ðŸ§¬",
    color: "#a78bfa",
    period: "P3",
    effectif: 5,
    gardes: false,
    gardeFreq: "Aucune",
    roulement: false,
    scores: {
      charge: 5,
      toxicite: 6,
      formation: 8,
      liberte: 4,
      ambiance: 6
    },
    highlights: [
      "Pointage strict 9h tous les jours",
      "IrathÃ©rapie (dim/mar) - papiers et ordo",
      "Visites longues (Pr Kesri jusqu'Ã  13h+)",
      "TrÃ¨s intÃ©ressant (pathologies thyroÃ¯diennes variÃ©es)",
      "SecrÃ©taire stricte sur la prÃ©sence",
      "Rapport de stage long et exigeant"
    ],
    badge: "ðŸ“š Visites Longues",
    summary: "Excellent terrain pour la thÃ©orie et les pathologies rares, mais prÃ©sence obligatoire avec une secrÃ©taire stricte. Les visites de professeurs sont trÃ¨s instructives mais longues.",
    type: "mÃ©decine",
    epuisement: {
      p1: "544",
      p2: "383",
      p3: "112",
      p4: "301"
    }
  },
  {
    id: 33,
    name: "REA Polyvalente",
    hospital: "Mustapha Basha",
    specialty: "rÃ©animation",
    icon: "ðŸ«€",
    color: "#e11d48",
    period: "P2",
    effectif: 6,
    gardes: true,
    gardeFreq: "Semaine + Astreinte WE",
    roulement: false,
    scores: {
      charge: 7,
      toxicite: 3,
      formation: 8,
      liberte: 4,
      ambiance: 7
    },
    highlights: [
      "Gardes en monÃ´me, pas de roulement",
      "Vous faites des gestes (gazo, intubation, sondage)",
      "Astreintes le weekend jusqu'Ã  17h",
      "TD, TP et planchage des rÃ©sidents mardi",
      "On se dÃ©place avec l'Ã©quipe (urgences)"
    ],
    badge: "ðŸ’‰ Gestes Techniques",
    summary: "Terrain de rÃ©animation trÃ¨s formateur oÃ¹ on vous laisse pratiquer des gestes. ChargÃ© en gardes et astreintes le week-end, mais l'apprentissage au contact des rÃ©sidents est riche.",
    type: "mÃ©decine",
    epuisement: {
      p1: "573",
      p2: "875",
      p3: "725",
      p4: "526"
    }
  },
  {
    id: 34,
    name: "ORL",
    hospital: "Kouba",
    specialty: "ORL",
    icon: "ðŸ‘‚",
    color: "#f59e0b",
    period: "P1",
    effectif: 5,
    gardes: true,
    gardeFreq: "Garde / 6 jours",
    roulement: false,
    scores: {
      charge: 4,
      toxicite: 2,
      formation: 8,
      liberte: 7,
      ambiance: 9
    },
    highlights: [
      "Service 5/5 mais souvent libÃ©rÃ© Ã  10h",
      "Ã‰quipe trÃ¨s chill et gentille",
      "Participation au bloc opÃ©ratoire !",
      "Pas d'Ã©vacuations, peu d'avis",
      "Endoscopie le mercredi (jusqu'Ã  15h)"
    ],
    badge: "ðŸ”ª AccÃ¨s au Bloc",
    summary: "Super terrain ORL, trÃ¨s intÃ©ressant avec accÃ¨s au bloc opÃ©ratoire. L'Ã©quipe est gentille et le service est globalement lÃ©ger avec des sorties parfois trÃ¨s tÃ´t.",
    type: "chirurgie",
    epuisement: {
      p1: "580",
      p2: "690",
      p3: "675",
      p4: "700"
    }
  },
  {
    id: 35,
    name: "Med Interne",
    hospital: "Kouba",
    specialty: "mÃ©decine interne",
    icon: "ðŸ¥",
    color: "#6366f1",
    period: "Multi",
    effectif: 6,
    gardes: true,
    gardeFreq: "Garde / 9 jours (monÃ´me)",
    roulement: false,
    scores: {
      charge: 8,
      toxicite: 3,
      formation: 8,
      liberte: 2,
      ambiance: 8
    },
    highlights: [
      "Pointage et dÃ©pointage obligatoires (8h30-15h)",
      "Beaucoup d'Ã©vacuations (bÃªte noire)",
      "TrÃ¨s riche et formateur si on s'implique",
      "RÃ©sidents et Professeur trÃ¨s compÃ©tents",
      "Colloque obligatoire et long (jeudi)",
      "Chambre de garde de luxe"
    ],
    badge: "ðŸš‘ Ã‰vacuations ++",
    summary: "Un service organisÃ© et trÃ¨s formateur avec une excellente Ã©quipe mÃ©dicale. BÃ©mols : charge horaire stricte (8h30-15h) et beaucoup d'Ã©vacuations fatigantes.",
    type: "mÃ©decine"
  },
  {
    id: 36,
    name: "RÃ©a / UMC",
    hospital: "Zmirli",
    specialty: "rÃ©animation",
    icon: "ðŸ«€",
    color: "#be123c",
    period: "P3",
    effectif: 5,
    gardes: true,
    gardeFreq: "Effectif dÃ©pendant",
    roulement: true,
    scores: {
      charge: 9,
      toxicite: 4,
      formation: 9,
      liberte: 2,
      ambiance: 6
    },
    highlights: [
      "1.5 mois service / 1.5 mois dÃ©choc chir",
      "Tous les gestes : intubation, gazo, VVP, PDP",
      "ExtrÃªmement chargÃ© surtout en P3",
      "2 TDs Ã  prÃ©senter",
      "SystÃ¨me un peu plus souple en P4"
    ],
    badge: "ðŸš¨ ExtrÃªme Urgence",
    summary: "Pour ceux qui veulent apprendre l'extrÃªme urgence et la rÃ©animation pure. ExtrÃªmement chargÃ© et fatigant, mais formation technique incomparable.",
    type: "mÃ©decine",
    epuisement: {
      p1: "920",
      p2: "936",
      p3: "978",
      p4: "675"
    }
  },
  {
    id: 37,
    name: "NÃ©phro",
    hospital: "Beni Messous",
    specialty: "nÃ©phrologie",
    icon: "ðŸ’§",
    color: "#0ea5e9",
    period: "P1",
    effectif: 6,
    gardes: true,
    gardeFreq: "Variable (selon R1)",
    roulement: false,
    scores: {
      charge: 7,
      toxicite: 3,
      formation: 8,
      liberte: 4,
      ambiance: 8
    },
    highlights: [
      "2 unitÃ©s (Hospitalisation et Greffe)",
      "Hospi : trÃ¨s chargÃ©e en avis",
      "Greffe : trÃ¨s lÃ©ger, sortie rapide",
      "RDG trÃ¨s intÃ©ressant",
      "Des rÃ©sidents exceptionnels"
    ],
    badge: "ðŸ“– RDG Instructif",
    summary: "Terrain nÃ©phro solide. L'unitÃ© d'hospitalisation demande beaucoup de travail (avis), mais compensÃ© par une super Ã©quipe et des moments d'enseignement de qualitÃ©.",
    type: "mÃ©decine"
  },
  {
    id: 38,
    name: "Urologie",
    hospital: "BEO",
    specialty: "urologie",
    icon: "ðŸ”¬",
    color: "#0284c7",
    period: "P4",
    effectif: 5,
    gardes: true,
    gardeFreq: "Garde de 24h / 6",
    roulement: false,
    scores: {
      charge: 8,
      toxicite: 2,
      formation: 8,
      liberte: 6,
      ambiance: 8
    },
    highlights: [
      "Pas de service, QUE des gardes (24h)",
      "TrÃ¨s chargÃ© (40 Ã  80 patients / nuit)",
      "Coliques, RVA, pyÃ©lonÃ©phrites",
      "Tu examines et tu traites les cas simples",
      "Ã‰quipe trÃ¨s sympa (non toxique)"
    ],
    badge: "ðŸŒ™ Nuits Blanches",
    summary: "Rythme particulier : uniquement des gardes trÃ¨s actives. Excellent pour gÃ©rer les urgences urologiques simples de faÃ§on autonome. Ã‰quipe bienveillante.",
    type: "chirurgie",
    epuisement: {
      p1: "941",
      p2: "885",
      p3: "915",
      p4: "730"
    }
  },
  {
    id: 39,
    name: "NÃ©phro",
    hospital: "Parnet",
    specialty: "nÃ©phrologie",
    icon: "ðŸ’§",
    color: "#38bdf8",
    period: "P2",
    effectif: 5,
    gardes: true,
    gardeFreq: "Garde / 6",
    roulement: true,
    scores: {
      charge: 3,
      toxicite: 2,
      formation: 4,
      liberte: 8,
      ambiance: 8
    },
    highlights: [
      "Roulement 1 sem / 2",
      "Sortie Ã  midi",
      "TrÃ¨s peu de tÃ¢ches (scanners, qlq avis)",
      "Gardes lÃ©gÃ¨res oÃ¹ on dort bien",
      "Terrain idÃ©al pour prÃ©parer un concours"
    ],
    badge: "ðŸ’¤ Sommeil Garanti",
    summary: "Un terrain extrÃªmement calme. Avec un roulement 1 semaine sur 2 et des gardes tranquilles, c'est l'endroit parfait si vous avez besoin de temps libre pour Ã©tudier.",
    type: "mÃ©decine"
  },
  {
    id: 40,
    name: "Pneumo",
    hospital: "BEO",
    specialty: "pneumologie",
    icon: "ðŸ«",
    color: "#bae6fd",
    period: "P1",
    effectif: 6,
    gardes: false,
    gardeFreq: "Aucune",
    roulement: false,
    scores: {
      charge: 4,
      toxicite: 2,
      formation: 5,
      liberte: 6,
      ambiance: 8
    },
    highlights: [
      "PrÃ©sence tous les jours 9h - 14h",
      "Pas de gardes ni d'astreintes",
      "Pas d'Ã©vacuations",
      "RÃ©sidentes et cheffe de service sympas",
      "TÃ¢ches classiques (constantes, cliniques, avis interne)"
    ],
    badge: "ðŸŒ¬ï¸ Respirable",
    summary: "Un terrain de pneumo serein sans gardes, sans Ã©vacuations et avec une bonne Ã©quipe. IdÃ©al pour une P1 sans trop de pression.",
    type: "mÃ©decine",
    epuisement: {
      p1: "N/E",
      p2: "1027",
      p3: "1005",
      p4: "589"
    }
  },
  {
    id: 41,
    name: "Pneumo (Pr Khlaf)",
    hospital: "Beni Messous",
    specialty: "pneumologie",
    icon: "ðŸ«",
    color: "#7dd3fc",
    period: "P3",
    effectif: 5,
    gardes: false,
    gardeFreq: "Aucune",
    roulement: false,
    scores: {
      charge: 4,
      toxicite: 3,
      formation: 5,
      liberte: 7,
      ambiance: 7
    },
    highlights: [
      "5/5 jours, sortie vers 13h/14h max",
      "TÃ¢ches : Avis, constantes, biopsies, gazo",
      "Personnel globalement bienveillant",
      "La direction voulait imposer des gardes (Ã  vÃ©rifier)",
      "Validation de stage facile si on est disciplinÃ©"
    ],
    badge: "ðŸ“‹ Routine LÃ©gÃ¨re",
    summary: "Terrain stable sans mauvaise surprise (pour le moment pas de gardes). L'Ã©quipe est correcte et on sort assez tÃ´t l'aprÃ¨s-midi.",
    type: "mÃ©decine",
    epuisement: {
      p1: "885",
      p2: "664",
      p3: "655",
      p4: "398"
    }
  },
  {
    id: 42,
    name: "Med Interne",
    hospital: "Rouiba",
    specialty: "mÃ©decine interne",
    icon: "ðŸ¥",
    color: "#818cf8",
    period: "P2",
    effectif: 5,
    gardes: false,
    gardeFreq: "Astreintes (17h)",
    roulement: false,
    scores: {
      charge: 5,
      toxicite: 5,
      formation: 5,
      liberte: 3,
      ambiance: 5
    },
    highlights: [
      "Pointage strict 9h-14h (Roulement impossible)",
      "TrÃ¨s riche (Maladies systÃ¨me, onco, hÃ©mato)",
      "Internes peu impliquÃ©s (tÃ¢ches administratives)",
      "Attention : Chef de service trÃ¨s stricte",
      "Astreintes PU inutiles et non formatives"
    ],
    badge: "âš ï¸ CDS Stricte",
    summary: "Un terrain riche en cas mÃ©dicaux rares, mais on vous laisse souvent un rÃ´le de spectateur/secrÃ©taire. Il ne faut surtout pas Ã©nerver le chef de service.",
    type: "mÃ©decine"
  },
  {
    id: 43,
    name: "Med Interne",
    hospital: "Zmirli",
    specialty: "mÃ©decine interne",
    icon: "ðŸ¥",
    color: "#4f46e5",
    period: "Multi",
    effectif: 5,
    gardes: true,
    gardeFreq: "Monomes (16h Sem, 10h WE)",
    roulement: true,
    scores: {
      charge: 9,
      toxicite: 2,
      formation: 10,
      liberte: 3,
      ambiance: 8
    },
    highlights: [
      "1 mois PU, 1 mois Homme, 1 mois Femme",
      "PU = Vous faites absolument TOUT",
      "Gestion des urgences (OAP, ACR, AVC)",
      "ZÃ©ro travail de coursier",
      "Hyper Ã©puisant mais masterclass en urgences"
    ],
    badge: "ðŸ”¥ Masterclass Urgences",
    summary: "Le terrain qui fera de vous un vrai mÃ©decin urgentiste. ExtrÃªmement formateur au PU mais d'une lourdeur Ã©crasante. Ã€ dÃ©conseiller en P4 si on prÃ©pare le rÃ©sidanat.",
    type: "mÃ©decine"
  },
  {
    id: 44,
    name: "Pneumo",
    hospital: "Rouiba",
    specialty: "pneumologie",
    icon: "ðŸ«",
    color: "#0ea5e9",
    period: "P4",
    effectif: 6,
    gardes: false,
    gardeFreq: "Aucune",
    roulement: false,
    scores: {
      charge: 8,
      toxicite: 2,
      formation: 8,
      liberte: 3,
      ambiance: 8
    },
    highlights: [
      "PrÃ©sence 5j/5 de 9h Ã  15h",
      "4 unitÃ©s : Homme, Femme, Explorations, HDJ",
      "Beaucoup de gestes (gazo, ponctions)",
      "TrÃ¨s chargÃ© en travail mais formateur",
      "Ã‰viter en plein Ã©tÃ© (fatigant 5j/5 sans clim)"
    ],
    badge: "ðŸ¥µ Formateur mais Lourd",
    summary: "Excellent terrain de pneumologie pour apprendre (gestes, explorations). Cependant, la prÃ©sence de 9h Ã  15h tous les jours sans roulement le rend Ã©puisant.",
    type: "mÃ©decine",
    epuisement: {
      p1: "N/E",
      p2: "957",
      p3: "818",
      p4: "900"
    }
  },
  {
    id: 45,
    name: "Infectiologie A",
    hospital: "El Kettar",
    specialty: "infectiologie",
    icon: "ðŸ¦ ",
    color: "#10b981",
    period: "P1",
    effectif: 5,
    gardes: true,
    gardeFreq: "Garde / 11",
    roulement: false,
    scores: {
      charge: 5,
      toxicite: 3,
      formation: 5,
      liberte: 5,
      ambiance: 7
    },
    highlights: [
      "9h Ã  12h/13h tous les jours",
      "Gardes au PU (avec internes Nicole/Lemaire)",
      "OrientÃ© pÃ©diatrie (Pasteur/Widal)",
      "Ã‰vacuations frÃ©quentes (Bab el Oued, Ait Idir)",
      "Rapport de stage validÃ© sans problÃ¨me"
    ],
    badge: "ðŸ‘¶ PÃ©diatrie & Ã‰vacs",
    summary: "Un terrain d'infectio trÃ¨s orientÃ© pÃ©diatrie avec des horaires abordables (jusqu'Ã  midi/13h). Beaucoup d'Ã©vacuations vers d'autres CHU.",
    type: "mÃ©decine"
  },
  {
    id: 46,
    name: "Dermatologie",
    hospital: "Mustapha Basha",
    specialty: "dermatologie",
    icon: "ðŸ§´",
    color: "#f43f5e",
    period: "Multi",
    effectif: 5,
    gardes: false,
    gardeFreq: "Astreintes (11h-16h)",
    roulement: false,
    scores: {
      charge: 7,
      toxicite: 7,
      formation: 2,
      liberte: 3,
      ambiance: 4
    },
    highlights: [
      "Pointage stricte (secrÃ©taire sur le dos)",
      "Que des maladies systÃ©miques/auto-immunes",
      "Les internes font surtout les coursiers (Avis ++)",
      "Pas de dermatologie classique (acnÃ©, etc)",
      "Pas de roulement acceptÃ© l'Ã©tÃ©"
    ],
    badge: "ðŸ“‰ Fausse Dermato",
    summary: "Une dÃ©ception pour ceux qui cherchent la dermato de base. C'est de la pseudo mÃ©decine interne complexe. L'interne est rÃ©duit au rÃ´le de coursier d'avis. SecrÃ©taire toxique.",
    type: "mÃ©decine",
    epuisement: {
      p1: "705",
      p2: "301",
      p3: "192",
      p4: "324"
    }
  },
  {
    id: 47,
    name: "Pneumo",
    hospital: "Mustapha Basha",
    specialty: "pneumologie",
    icon: "ðŸ«",
    color: "#38bdf8",
    period: "P1",
    effectif: 6,
    gardes: false,
    gardeFreq: "Facultatives",
    roulement: true,
    scores: {
      charge: 4,
      toxicite: 1,
      formation: 9,
      liberte: 6,
      ambiance: 10
    },
    highlights: [
      "L'un des meilleurs terrains mÃ©dicaux",
      "Fin Ã  13h-14h",
      "Pratique +++ Ã  l'HDJ (ponctions, gazo)",
      "RÃ©sidents et Cheffe de service super gentils",
      "Mini-soutenance de stage en fin de pÃ©riode",
      "Seul dÃ©faut : l'hÃ´pital est en montÃ©e"
    ],
    badge: "ðŸŒŸ 9/10",
    summary: "Terrain exceptionnel offrant un Ã©quilibre parfait entre apprentissage (gestes), confort et ambiance. Un must-have en choix mÃ©dical.",
    type: "mÃ©decine",
    epuisement: {
      p1: "N/E",
      p2: "N/E",
      p3: "N/E",
      p4: "875"
    }
  },
  {
    id: 48,
    name: "Med Interne",
    hospital: "Mustapha Basha",
    specialty: "mÃ©decine interne",
    icon: "ðŸ¥",
    color: "#818cf8",
    period: "P4",
    effectif: 6,
    gardes: false,
    gardeFreq: "Astreintes",
    roulement: true,
    scores: {
      charge: 4,
      toxicite: 2,
      formation: 7,
      liberte: 7,
      ambiance: 9
    },
    highlights: [
      "PrÃ©sence 8h30 - Midi",
      "TD lundi/mercredi, RDG formateur sans pression",
      "Roulement possible entre internes",
      "RÃ©sidents et assistants trÃ¨s pÃ©dagogues",
      "Beaucoup d'avis gynÃ©co du cÃ´tÃ© femme"
    ],
    badge: "ðŸ•Šï¸ Formateur & Calme",
    summary: "Un terrain de mÃ©decine interne Ã  Mustapha Basha trÃ¨s apprÃ©ciÃ©. Bon Ã©quilibre de vie, horaires rÃ©duits, pas de pression inutile, et Ã©quipe Ã  l'Ã©coute.",
    type: "mÃ©decine"
  },
  {
    id: 49,
    name: "Oncologie",
    hospital: "Beni Messous",
    specialty: "oncologie",
    icon: "ðŸŽ—ï¸",
    color: "#ec4899",
    period: "P4",
    effectif: 5,
    gardes: false,
    gardeFreq: "Aucune",
    roulement: false,
    scores: {
      charge: 6,
      toxicite: 3,
      formation: 8,
      liberte: 5,
      ambiance: 7
    },
    highlights: [
      "4 jours Ã  Beaufraisier / 1 jour Ã  BM",
      "IdÃ©al pour briser le tabou du cancer",
      "Gestions des complications et soins palliatifs",
      "ProblÃ¨mes de transport pour Beaufraisier",
      "Rapport de stage pour chaque pÃ©riode (lourd)"
    ],
    badge: "ðŸšŒ Transport GalÃ¨re",
    summary: "Terrain enrichissant sur le plan humain et mÃ©dical (gestion de la douleur, complications). Le problÃ¨me majeur est logistique (transport vers Beaufraisier) et la paperasse du stage.",
    type: "mÃ©decine"
  },
  {
    id: 50,
    name: "Infectiologie C",
    hospital: "El Kettar",
    specialty: "infectiologie",
    icon: "ðŸ¦ ",
    color: "#059669",
    period: "Multi",
    effectif: 5,
    gardes: true,
    gardeFreq: "Garde / 9",
    roulement: false,
    scores: {
      charge: 6,
      toxicite: 3,
      formation: 5,
      liberte: 3,
      ambiance: 8
    },
    highlights: [
      "PrÃ©sence bloquÃ©e 8h30 - 15h00",
      "Mots de jour, constantes, Ã©vacuations",
      "Nouveaux cas VIH",
      "RÃ©sidentes adorables",
      "Le gros problÃ¨me : on ne peut pas sortir avant 15h"
    ],
    badge: "â³ BloquÃ© jusqu'Ã  15h",
    summary: "Ã‰quipe agrÃ©able et non toxique. Cependant, le service impose de rester jusqu'Ã  15h tous les jours mÃªme s'il n'y a absolument rien Ã  faire.",
    type: "mÃ©decine"
  },
  {
    id: 51,
    name: "ORL",
    hospital: "Beni Messous",
    specialty: "ORL",
    icon: "ðŸ‘‚",
    color: "#d946ef",
    period: "P3",
    effectif: 9,
    gardes: true,
    gardeFreq: "Garde / 12",
    roulement: true,
    scores: {
      charge: 3,
      toxicite: 2,
      formation: 6,
      liberte: 8,
      ambiance: 8
    },
    highlights: [
      "Parmi les terrains chir les plus lÃ©gers",
      "Garde chaque 12 (roulement avec R4+R1)",
      "1 Ã  2 astreintes par mois en journÃ©e",
      "GÃ©rer le box seul aprÃ¨s apprentissage",
      "Roulement officieux entre internes"
    ],
    badge: "ðŸ•Šï¸ Chirurgie LÃ©gÃ¨re",
    summary: "Un des meilleurs terrains chirurgicaux car trÃ¨s lÃ©ger. Roulement officieux trÃ¨s avantageux et bonne entente avec les rÃ©sidents.",
    type: "chirurgie",
    epuisement: {
      p1: "104",
      p2: "69",
      p3: "46",
      p4: "85"
    }
  },
  {
    id: 52,
    name: "OrthopÃ©die",
    hospital: "Mustapha",
    specialty: "orthopÃ©die",
    icon: "ðŸ¦´",
    color: "#0f766e",
    period: "P1",
    effectif: 5,
    gardes: true,
    gardeFreq: "Garde / 5",
    roulement: false,
    scores: {
      charge: 8,
      toxicite: 3,
      formation: 7,
      liberte: 5,
      ambiance: 6
    },
    highlights: [
      "Gardes trÃ¨s chargÃ©es l'Ã©tÃ© (+200 patients)",
      "Autonomie au box et salle de soins (attelles)",
      "Patients parfois agressifs la nuit",
      "Beaucoup de bagarres et social",
      "Pas de toxicitÃ© de l'Ã©quipe"
    ],
    badge: "âš¡ TrÃ¨s ChargÃ© l'Ã©tÃ©",
    summary: "TrÃ¨s formateur pour les urgences ortho mais trÃ¨s fatiguant surtout en Ã©tÃ© (AVP). Ã€ faire en dÃ©but d'internat (P1/P2) tant qu'on a de l'Ã©nergie. L'Ã©quipe mÃ©dicale n'est pas toxique mais les patients peuvent l'Ãªtre.",
    type: "chirurgie",
    epuisement: {
      p1: "301",
      p2: "266",
      p3: "257",
      p4: "335-345"
    }
  },
  {
    id: 53,
    name: "UMC",
    hospital: "Beni Messous",
    specialty: "UMC",
    icon: "ðŸš‘",
    color: "#dc2626",
    period: "P2",
    effectif: 7,
    gardes: true,
    gardeFreq: "MonÃ´me",
    roulement: true,
    scores: {
      charge: 9,
      toxicite: 1,
      formation: 10,
      liberte: 3,
      ambiance: 9
    },
    highlights: [
      "Apprentissage +++ (intubation, cathÃ©ters, massage cardiaque)",
      "Ã‰quipe extrÃªmement gentille et trÃ¨s pÃ©dagogique",
      "Vrai travail d'Ã©quipe, aucune toxicitÃ©",
      "TrÃ¨s intense et fatiguant",
      "GÃ©rer tous les types d'urgences"
    ],
    badge: "ðŸŽ“ Formation Ultime",
    summary: "Incroyable terrain pour la formation, vous saurez gÃ©rer n'importe quelle urgence Ã  la fin. Ã‰quipe en or mais rythme Ã©puisant. Fortement recommandÃ© en P1 ou P2.",
    type: "chirurgie",
    epuisement: {
      p1: "335",
      p2: "798",
      p3: "833",
      p4: "915"
    }
  },
  {
    id: 54,
    name: "ORL",
    hospital: "Mustapha",
    specialty: "ORL",
    icon: "ðŸ‘‚",
    color: "#d946ef",
    period: "P1 / P3",
    effectif: 6,
    gardes: true,
    gardeFreq: "EspacÃ©e",
    roulement: true,
    scores: {
      charge: 4,
      toxicite: 2,
      formation: 8,
      liberte: 7,
      ambiance: 9
    },
    highlights: [
      "Aide au bloc opÃ©ratoire trÃ¨s formatrice",
      "Staff, professeurs et agents gentils",
      "Gardes calmes (1h-2h de sommeil possible)",
      "Sortie Ã  midi facile, ou roulement",
      "Responsable indulgente (tghamed l3in)"
    ],
    badge: "ðŸ‘ TrÃ¨s Bon Terrain",
    summary: "TrÃ¨s bon Ã©quilibre. L'Ã©quipe est bienveillante et l'accÃ¨s au bloc est un gros plus. La charge est gÃ©rable avec un systÃ¨me de roulement facile Ã  mettre en place.",
    type: "chirurgie",
    epuisement: {
      p1: "615",
      p2: "705",
      p3: "660",
      p4: "566"
    }
  },
  {
    id: 55,
    name: "Chirurgie GÃ©nÃ©rale",
    hospital: "Kouba",
    specialty: "chirurgie gÃ©nÃ©rale",
    icon: "ðŸ”ª",
    color: "#b91c1c",
    period: "P1",
    effectif: 12,
    gardes: true,
    gardeFreq: "Garde / 6 (BinÃ´me)",
    roulement: true,
    scores: {
      charge: 6,
      toxicite: 1,
      formation: 9,
      liberte: 6,
      ambiance: 10
    },
    highlights: [
      "AccÃ¨s illimitÃ© au bloc (aide op)",
      "Meilleur stage, trÃ¨s bonne ambiance",
      "GÃ©rer le box seul de 8h Ã ...",
      "Aucun travail de coursier ou Ã©vac",
      "Ã‰quipe trÃ¨s Ã  l'Ã©coute et disponible"
    ],
    badge: "â­ Coup de Coeur",
    summary: "Le meilleur stage de chirurgie selon beaucoup. Immersion totale dans la spÃ©cialitÃ© avec beaucoup de bloc et ZÃ‰RO toxicitÃ©. IdÃ©al en P1.",
    type: "chirurgie",
    epuisement: {
      p1: "863",
      p2: "848",
      p3: "875",
      p4: "N/E"
    }
  },
  {
    id: 56,
    name: "Neurochirurgie",
    hospital: "Ait Idir",
    specialty: "neurochirurgie",
    icon: "ðŸ§ ",
    color: "#6366f1",
    period: "P1",
    effectif: 6,
    gardes: true,
    gardeFreq: "Garde / 6",
    roulement: false,
    scores: {
      charge: 4,
      toxicite: 2,
      formation: 6,
      liberte: 5,
      ambiance: 7
    },
    highlights: [
      "PrÃ©sence 8h - 14h (contre-visite)",
      "Programme de bloc chaque jour",
      "Beaucoup d'Ã©vacuations",
      "Garde pas trop chargÃ©e",
      "Validation du stage demande un peu de patience"
    ],
    badge: "ðŸš‘ Beaucoup d'Ã©vacs",
    summary: "Un terrain plutÃ´t tranquille et non toxique, mais qui souffre d'un grand nombre d'Ã©vacuations. Vous pourrez y apprendre et aller au bloc.",
    type: "chirurgie",
    epuisement: {
      p1: "N/E",
      p2: "N/E",
      p3: "1050",
      p4: "N/E"
    }
  },
  {
    id: 57,
    name: "Chirurgie GÃ©nÃ©rale",
    hospital: "Beni Messous",
    specialty: "chirurgie gÃ©nÃ©rale",
    icon: "ðŸ”ª",
    color: "#b91c1c",
    period: "P1",
    effectif: 12,
    gardes: true,
    gardeFreq: "Garde / 6 (BinÃ´me)",
    roulement: false,
    scores: {
      charge: 8,
      toxicite: 2,
      formation: 8,
      liberte: 4,
      ambiance: 8
    },
    highlights: [
      "Garde binÃ´me chaque 6 jours",
      "3 unitÃ©s : 4e Ã©tage, SUC (urgence), PU",
      "Rapport de garde obligatoire (internes prÃ©sentent au 4e)",
      "Pas de roulement en P1 (12 internes), dÃ©part ~14h",
      "Au PU : exam clinique complet, bilans, validation facile"
    ],
    badge: "âš¡ Anarchique mais Formateur",
    summary: "Terrain fatiguant et anarchique avec gardes chargÃ©es mais trÃ¨s impliquant. Ã‰quipe rÃ©sidents et assistants non toxique, validation et rapport faciles.",
    type: "chirurgie",
    epuisement: {
      p1: "655",
      p2: "695",
      p3: "983",
      p4: "N/E"
    }
  },
  {
    id: 58,
    name: "UMC",
    hospital: "BEO",
    specialty: "UMC",
    icon: "ðŸš‘",
    color: "#dc2626",
    period: "P1",
    effectif: 8,
    gardes: true,
    gardeFreq: "Garde / 8",
    roulement: false,
    scores: {
      charge: 8,
      toxicite: 1,
      formation: 8,
      liberte: 2,
      ambiance: 8
    },
    highlights: [
      "PrÃ©sence stricte 8h30 - 16h00",
      "ZÃ©ro travail ingrat / coursier",
      "TrÃ¨s formateur, on vous laisse dormir si la garde est calme",
      "1.5 mois PU, 1.5 mois Service",
      "Absences non tolÃ©rÃ©es (risque invalidation)"
    ],
    badge: "â±ï¸ PrÃ©sence Stricte",
    summary: "Excellent pour la formation avec une Ã©quipe qui respecte les internes. Le point noir est l'obligation de prÃ©sence stricte jusqu'Ã  16h tous les jours.",
    type: "chirurgie",
    epuisement: {
      p1: "806",
      p2: "900",
      p3: "833",
      p4: "972"
    }
  },
  {
    id: 59,
    name: "Chirurgie GÃ©nÃ©rale",
    hospital: "Zmirli",
    specialty: "chirurgie gÃ©nÃ©rale",
    icon: "ðŸ”ª",
    color: "#b91c1c",
    period: "P1 / P3",
    effectif: 12,
    gardes: true,
    gardeFreq: "Garde / 6 (BinÃ´me)",
    roulement: true,
    scores: {
      charge: 5,
      toxicite: 1,
      formation: 7,
      liberte: 8,
      ambiance: 9
    },
    highlights: [
      "Aide au bloc trÃ¨s intÃ©ressante",
      "ZÃ©ro toxicitÃ© du R1 au Professeur",
      "Sortie Ã  11h/12h",
      "Roulement possible (si bonne entente avec secrÃ©taire)",
      "Urgences abdominales +++"
    ],
    badge: "ðŸ‘ RecommandÃ©",
    summary: "Un terrain de chirurgie allÃ©gÃ© avec une Ã©quipe formidable. Bon Ã©quilibre entre temps libre, ambiance et apprentissage au bloc.",
    type: "chirurgie",
    epuisement: {
      p1: "1058",
      p2: "N/E",
      p3: "N/E",
      p4: "N/E"
    }
  },
  {
    id: 60,
    name: "Chirurgie (Pr Mahmoudi)",
    hospital: "Alger",
    specialty: "chirurgie gÃ©nÃ©rale",
    icon: "ðŸ”ª",
    color: "#b91c1c",
    period: "Multi",
    effectif: 12,
    gardes: true,
    gardeFreq: "Garde / 20",
    roulement: true,
    scores: {
      charge: 4,
      toxicite: 1,
      formation: 6,
      liberte: 8,
      ambiance: 10
    },
    highlights: [
      "Garde tous les 20 jours !",
      "Pr Mahmoudi extrÃªmement bienveillant",
      "Roulement mensuel entre Hommes, Femmes, RÃ©a",
      "Accompagnement explorations (CPRE, Scanner...)",
      "Aucun pointage, sortie vers 13h-14h"
    ],
    badge: "ðŸŒŸ Le Paradis",
    summary: "Le paradis sur terre : professeur extrÃªmement gentil, charge de garde quasi inexistante (1/20), flexibilitÃ© totale. Une perle rare.",
    type: "chirurgie"
  },
  {
    id: 61,
    name: "Chir A (Oncologie)",
    hospital: "CPMC",
    specialty: "chirurgie gÃ©nÃ©rale",
    type: "chirurgie",
    icon: "ðŸ”ª",
    color: "#b91c1c",
    period: "P1",
    effectif: 6,
    gardes: true,
    gardeFreq: "Garde / 7",
    roulement: false,
    scores: {
      charge: 5,
      toxicite: 2,
      formation: 6,
      liberte: 6,
      ambiance: 8
    },
    highlights: [
      "Gardes calmes (service oncologie = anciens patients)",
      "PrÃ©sentation colloque + aide au bloc",
      "TD obligatoire une fois/semaine",
      "Post garde disponible",
      "Chambre de garde propre et climatisÃ©e"
    ],
    badge: "â˜€ï¸ Gardes Calmes",
    summary: "Service d'oncologie chirurgicale donc gardes relativement calmes. Bonne ambiance, Ã©quipe gentille. Les TD et colloques sont obligatoires.",
    epuisement: {
      p1: "927",
      p2: "910",
      p3: "868",
      p4: "833"
    }
  },
  {
    id: 62,
    name: "Chirurgie GÃ©nÃ©rale",
    hospital: "BEO",
    specialty: "chirurgie gÃ©nÃ©rale",
    type: "chirurgie",
    icon: "ðŸ”ª",
    color: "#b91c1c",
    period: "P1 / P2",
    effectif: 10,
    gardes: true,
    gardeFreq: "Garde / 5 (BinÃ´me)",
    roulement: false,
    scores: {
      charge: 9,
      toxicite: 6,
      formation: 7,
      liberte: 1,
      ambiance: 5
    },
    highlights: [
      "PrÃ©sence 7h30 - 16h TOUS les jours",
      "Garde binÃ´me chaque 5 (PU + Service)",
      "3 services : RÃ©a, Homme, Femme",
      "Ã‰criture obs REA avant 8h chaque matin",
      "TrÃ¨s fatiguant, surveillance rapprochÃ©e Ã  la RÃ©a"
    ],
    badge: "âš¡ Ultra ChargÃ©",
    summary: "Terrain trÃ¨s exigeant en prÃ©sence et en charge. Formateur mais Ã©puisant. Le P2 le note toxique. Ã€ Ã©viter si vous avez le choix.",
    epuisement: {
      p1: "N/E",
      p2: "N/E",
      p3: "N/E",
      p4: "N/E"
    }
  },
  {
    id: 63,
    name: "Chir GÃ©nÃ©rale B (Sans Garde)",
    hospital: "CPMC",
    specialty: "chirurgie gÃ©nÃ©rale",
    type: "chirurgie",
    icon: "ðŸ”ª",
    color: "#b91c1c",
    period: "Multi",
    effectif: 8,
    gardes: false,
    gardeFreq: "Aucune",
    roulement: false,
    scores: {
      charge: 4,
      toxicite: 2,
      formation: 5,
      liberte: 7,
      ambiance: 7
    },
    highlights: [
      "5/5 sans aucune garde",
      "Uniquement journÃ©es de service",
      "TrÃ¨s lÃ©ger pour un terrain chirurgical"
    ],
    badge: "ðŸ•Šï¸ 0 Garde",
    summary: "Rarissime terrain chirurgical sans garde. IdÃ©al si vous voulez un semestre calme. Formation limitÃ©e mais rythme trÃ¨s confortable.",
    epuisement: {
      p1: "966",
      p2: "1005",
      p3: "1000",
      p4: "978"
    }
  },
  {
    id: 64,
    name: "UMC",
    hospital: "Mustapha",
    specialty: "UMC",
    type: "chirurgie",
    icon: "ðŸš‘",
    color: "#dc2626",
    period: "Multi",
    effectif: 8,
    gardes: true,
    gardeFreq: "Garde / 6",
    roulement: false,
    scores: {
      charge: 7,
      toxicite: 4,
      formation: 5,
      liberte: 2,
      ambiance: 5
    },
    highlights: [
      "INTERDIT d'aller au box (pas sÃ©curisÃ©)",
      "AffectÃ© en soins intensifs uniquement",
      "8h00 - 16h00 strictes, patients instables",
      "Gazos, sondages, avis Ã  rÃ©pÃ©tition",
      "Certains rÃ©sidents gentils, d'autres non"
    ],
    badge: "âš ï¸ Pas de Box",
    summary: "DÃ©Ã§evant pour ceux qui veulent gÃ©rer le box. Vous serez en rÃ©a/soins intensifs uniquement. Formateur pour la surveillance mais pas pour les urgences chirurgicales.",
    epuisement: {
      p1: "N/E",
      p2: "N/E",
      p3: "N/E",
      p4: "N/E"
    }
  },
  {
    id: 65,
    name: "Chir GÃ©nÃ©rale (Bitraria)",
    hospital: "Alger",
    specialty: "chirurgie gÃ©nÃ©rale",
    type: "chirurgie",
    icon: "ðŸ”ª",
    color: "#b91c1c",
    period: "P1 / P3",
    effectif: 16,
    gardes: true,
    gardeFreq: "Garde / 6-8",
    roulement: true,
    scores: {
      charge: 6,
      toxicite: 2,
      formation: 7,
      liberte: 6,
      ambiance: 9
    },
    highlights: [
      "Dr. Boughezala trÃ¨s gentille",
      "AccÃ¨s au bloc opÃ©ratoire",
      "Sortie possible avant 13h (aprÃ¨s contre-visite)",
      "13 Ã  20 patients par garde",
      "Day off possible (pas vrai roulement)"
    ],
    badge: "ðŸ‘ Bonne Ambiance",
    summary: "Terrain agrÃ©able et formateur avec une responsable bienveillante. AccÃ¨s au bloc, bonne ambiance, sortie raisonnable. RecommandÃ©.",
    epuisement: {
      p1: "1022",
      p2: "927",
      p3: "1058",
      p4: "N/E"
    }
  },
  {
    id: 66,
    name: "Neurochirurgie",
    hospital: "BEO",
    specialty: "neurochirurgie",
    type: "chirurgie",
    icon: "ðŸ§ ",
    color: "#6366f1",
    period: "P4",
    effectif: 5,
    gardes: true,
    gardeFreq: "Garde / 5 (Service)",
    roulement: false,
    scores: {
      charge: 5,
      toxicite: 2,
      formation: 5,
      liberte: 5,
      ambiance: 7
    },
    highlights: [
      "Service neurochir pÃ©diatrique",
      "Avis + radio + scanner en masse",
      "Garde service uniquement (pas de PU)",
      "Enfants gÃ©nÃ©ralement stables",
      "Responsable changÃ© en cours de pÃ©riode"
    ],
    badge: "ðŸ‘¶ PÃ©diatrie",
    summary: "Terrain de neurochirurgie pÃ©diatrique calme. OrientÃ© surveillance et avis. Peu de formation pratique mais enfants gÃ©nÃ©ralement stables la nuit.",
    epuisement: {
      p1: "952",
      p2: "1050",
      p3: "1038",
      p4: "1050"
    }
  },
  {
    id: 67,
    name: "Chir Thoracique",
    hospital: "BEO",
    specialty: "chirurgie thoracique",
    type: "chirurgie",
    icon: "ðŸ«",
    color: "#0369a1",
    period: "P1",
    effectif: 8,
    gardes: true,
    gardeFreq: "Garde / 8",
    roulement: false,
    scores: {
      charge: 5,
      toxicite: 8,
      formation: 4,
      liberte: 5,
      ambiance: 2
    },
    highlights: [
      "4/5 + garde chaque 8",
      "TD d'anatomie obligatoires",
      "AccÃ¨s au bloc (aide opÃ©ratoire)",
      "RÃ‰SIDENTES TRÃˆS TOXIQUES âš ï¸",
      "Colloque mercredi jusqu'Ã  17h"
    ],
    badge: "â˜ ï¸ TOXIQUE â€” Ã‰VITER",
    summary: "Terrain Ã  fuir absolument selon les avis. Les rÃ©sidentes sont extrÃªmement toxiques. MalgrÃ© un accÃ¨s au bloc, l'ambiance terrible ruine le stage.",
    epuisement: {
      p1: "655",
      p2: "841",
      p3: "859",
      p4: "718"
    }
  },
  {
    id: 68,
    name: "ORL",
    hospital: "BEO",
    specialty: "ORL",
    type: "chirurgie",
    icon: "ðŸ‘‚",
    color: "#d946ef",
    period: "P1",
    effectif: 6,
    gardes: true,
    gardeFreq: "Garde / 6 (MonÃ´me)",
    roulement: false,
    scores: {
      charge: 7,
      toxicite: 2,
      formation: 8,
      liberte: 5,
      ambiance: 8
    },
    highlights: [
      "Garde /6 P1 â†’ /9 P2 â†’ /12 P3 â†’ /15 P4",
      "TrÃ¨s formateur, beaucoup de gestes",
      "RÃ©sidents majoritairement haylin",
      "RDS lourd (archives + statistiques)",
      "CDS accessible pour les problÃ¨mes"
    ],
    badge: "ðŸ“ˆ Formation Progressive",
    summary: "ORL trÃ¨s formateur avec un systÃ¨me de garde qui s'allÃ¨ge au fil des pÃ©riodes. La formation pratique est rÃ©elle mais le rapport de stage est une vraie corvÃ©e.",
    epuisement: {
      p1: "150",
      p2: "69",
      p3: "85-97",
      p4: "230"
    }
  },
  {
    id: 69,
    name: "Neurochirurgie",
    hospital: "Mustapha",
    specialty: "neurochirurgie",
    type: "chirurgie",
    icon: "ðŸ§ ",
    color: "#6366f1",
    period: "P1 / P2",
    effectif: 6,
    gardes: true,
    gardeFreq: "Garde / 3 (BinÃ´me)",
    roulement: false,
    scores: {
      charge: 9,
      toxicite: 2,
      formation: 6,
      liberte: 2,
      ambiance: 7
    },
    highlights: [
      "Garde chaque 3 jours (6 internes seulement)",
      "Box gÃ©rÃ© seul, rÃ©sidents aux abonnÃ©s absents",
      "200+ patients par garde courante",
      "Chambre de garde dans un Ã©tat catastrophique",
      "DÃ©chocage gÃ©rÃ© seuls des fois"
    ],
    badge: "ðŸ’€ Garde / 3j",
    summary: "Garde tous les 3 jours, c'est clairement l'enfer. TrÃ¨s fatigant, chambre ignoble, effectif insuffisant. Conseil : faites de la chir gÃ©nÃ©rale Ã  la place.",
    epuisement: {
      p1: "827",
      p2: "827",
      p3: "759",
      p4: "775"
    }
  },
  {
    id: 70,
    name: "Chir GÃ©nÃ©rale (Rahmouni)",
    hospital: "Alger",
    specialty: "chirurgie gÃ©nÃ©rale",
    type: "chirurgie",
    icon: "ðŸ”ª",
    color: "#b91c1c",
    period: "P1",
    effectif: 10,
    gardes: true,
    gardeFreq: "Garde / 10",
    roulement: false,
    scores: {
      charge: 5,
      toxicite: 2,
      formation: 7,
      liberte: 7,
      ambiance: 8
    },
    highlights: [
      "Garde seulement chaque 10 (light)",
      "Passage au bloc obligatoire",
      "Colloque mardi avec prÃ©sentation",
      "Sortie vers 11h (service)",
      "TD Ã  prÃ©senter"
    ],
    badge: "ðŸ˜Š Ã‰quilibrÃ©",
    summary: "Bon terrain avec un rythme Ã©quilibrÃ©. La garde rare (1/10) est un vrai avantage. Formation correcte grÃ¢ce au bloc et aux colloques.",
    epuisement: {
      p1: "489",
      p2: "230",
      p3: "428",
      p4: "479"
    }
  },
  {
    id: 71,
    name: "CCI",
    hospital: "Belfort",
    specialty: "CCI",
    type: "chirurgie",
    icon: "ðŸ¦´",
    color: "#0f766e",
    period: "P3",
    effectif: 8,
    gardes: true,
    gardeFreq: "Effectif dÃ©pendant",
    roulement: false,
    scores: {
      charge: 8,
      toxicite: 1,
      formation: 9,
      liberte: 3,
      ambiance: 9
    },
    highlights: [
      "Terrain trÃ¨s formateur et organisÃ©",
      "ZÃ©ro toxicitÃ© â€” toute l'Ã©quipe gentille",
      "Vous gÃ©rez les attelles + box urgences",
      "HyperchargÃ© en Ã©tÃ© (Ã©viter P3/P4 estival)",
      "TD mercredi + colloque lundi AP"
    ],
    badge: "ðŸŽ“ Top Formation",
    summary: "Un des meilleurs terrains chirurgicaux : zÃ©ro toxicitÃ©, trÃ¨s formateur et bien organisÃ©. Attention : hyperchargÃ© en Ã©tÃ©. Ã€ faire en P1/P2 de prÃ©fÃ©rence.",
    epuisement: {
      p1: "605",
      p2: "818",
      p3: "875",
      p4: "785"
    }
  },
  {
    id: 72,
    name: "Chirurgie (Ain Taya)",
    hospital: "Ain Taya",
    specialty: "chirurgie gÃ©nÃ©rale",
    type: "chirurgie",
    icon: "ðŸ”ª",
    color: "#b91c1c",
    period: "Multi",
    effectif: 8,
    gardes: true,
    gardeFreq: "Inconnue",
    roulement: false,
    scores: {
      charge: 9,
      toxicite: 9,
      formation: 3,
      liberte: 1,
      ambiance: 1
    },
    highlights: [
      "â›” CONSENSUS UNANIME : RUN",
      "Avis unanimement nÃ©gatifs",
      "Ã€ Ã©viter absolument selon tous les tÃ©moignages"
    ],
    badge: "ðŸš« RUN â€” Ã€ Ã‰VITER",
    summary: "Terrain Ã  Ã©viter Ã  tout prix selon l'unanimitÃ© des internes qui y sont passÃ©s. Aucun avis positif n'a Ã©tÃ© rapportÃ©.",
    epuisement: {
      p1: "N/E",
      p2: "N/E",
      p3: "N/E",
      p4: "N/E"
    }
  },
  {
    id: 73,
    name: "Chir GÃ©nÃ©rale (Bainem)",
    hospital: "Bainem",
    specialty: "chirurgie gÃ©nÃ©rale",
    type: "chirurgie",
    icon: "ðŸ”ª",
    color: "#b91c1c",
    period: "P2",
    effectif: 10,
    gardes: true,
    gardeFreq: "Garde / 5 (BinÃ´me)",
    roulement: false,
    scores: {
      charge: 8,
      toxicite: 7,
      formation: 6,
      liberte: 1,
      ambiance: 3
    },
    highlights: [
      "PrÃ©sence 8h - 16h MÃŠME pendant Ramadan",
      "ZÃ©ro congÃ©, zÃ©ro roulement",
      "Absences et retards : risque invalidation",
      "ToxicitÃ© ++++ selon le P2 (rÃ©sidents yetbedlo)",
      "Formation correcte mais trop contraignant"
    ],
    badge: "âš ï¸ Ã€ Ã‰viter",
    summary: "Terrain Ã  Ã©viter. Aucun congÃ©, prÃ©sence ultra stricte, toxicitÃ© rapportÃ©e. Le cÃ´tÃ© formateur ne compense pas le manque total de libertÃ© et l'ambiance difficile.",
    epuisement: {
      p1: "N/E",
      p2: "N/E",
      p3: "N/E",
      p4: "N/E"
    }
  },
  {
    id: 74,
    name: "OrthopÃ©die",
    hospital: "Thenia",
    specialty: "orthopÃ©die",
    type: "chirurgie",
    icon: "ðŸ¦´",
    color: "#0f766e",
    period: "Multi",
    effectif: 8,
    gardes: true,
    gardeFreq: "Garde / 4",
    roulement: false,
    scores: {
      charge: 10,
      toxicite: 9,
      formation: 4,
      liberte: 1,
      ambiance: 1
    },
    highlights: [
      "Garde /4 â†’ Bloc obligatoire â†’ Service â†’ Garde",
      "Prof TRÃˆS TOXIQUE â€” rapport de garde humiliant",
      "250 Ã  350 patients par garde",
      "Observations de 2 pages A4 obligatoires",
      "Patients agressifs et difficiles"
    ],
    badge: "ðŸ’€ PIRE TERRAIN",
    summary: "Un des pires terrains de l'internat selon les tÃ©moignages. Rythme impossible (garde/4 + bloc), professeure extrÃªmement toxique, gardes infernales. Ã€ Ã©viter absolument.",
    epuisement: {
      p1: "N/E",
      p2: "N/E",
      p3: "N/E",
      p4: "N/E"
    }
  },
  {
    id: 75,
    name: "Chir GÃ©nÃ©rale (Thenia)",
    hospital: "Thenia",
    specialty: "chirurgie gÃ©nÃ©rale",
    type: "chirurgie",
    icon: "ðŸ”ª",
    color: "#b91c1c",
    period: "P1 / P2",
    effectif: 10,
    gardes: true,
    gardeFreq: "Garde / 4-5",
    roulement: false,
    scores: {
      charge: 7,
      toxicite: 1,
      formation: 9,
      liberte: 5,
      ambiance: 10
    },
    highlights: [
      "Ã‰quipe traite les internes comme des rÃ©sidents",
      "Gestes +++ (sutures, sondages, massage cardiaque)",
      "AccÃ¨s au bloc avec participation active",
      "PrÃ©sentation au rapport de garde",
      "Urgences chirurgicales viscÃ©rales variÃ©es"
    ],
    badge: "â¤ï¸ Coup de CÅ“ur",
    summary: "Meilleur terrain de chirurgie gÃ©nÃ©rale pour beaucoup. Inclusion totale dans l'Ã©quipe, formation exceptionnelle, ambiance chaleureuse. Ã€ faire en P1/P2 absolument.",
    epuisement: {
      p1: "900",
      p2: "N/E",
      p3: "N/E",
      p4: "N/E"
    }
  },
  {
    id: 76,
    name: "CCI",
    hospital: "Beni Messous",
    specialty: "CCI",
    type: "chirurgie",
    icon: "ðŸ¦´",
    color: "#0f766e",
    period: "P1 / P2",
    effectif: 8,
    gardes: true,
    gardeFreq: "Garde / 6 (MonÃ´me)",
    roulement: true,
    scores: {
      charge: 7,
      toxicite: 3,
      formation: 7,
      liberte: 6,
      ambiance: 6
    },
    highlights: [
      "Garde monÃ´me chaque 6 (24h)",
      "Ateliers jeudi + TD mercredi",
      "Roulement en journÃ©e de semaine",
      "Gardes chargÃ©es monÃ´me",
      "Ã‰quipe +/- selon les rÃ©sidents"
    ],
    badge: "âš–ï¸ Moyen",
    summary: "Terrain CCI avec des gardes monÃ´mes chaque 6 jours ce qui est fatigant. Roulement en journÃ©e de semaine possible. Ã‰quipe variable selon les rÃ©sidents.",
    epuisement: {
      p1: "489",
      p2: "900",
      p3: "900",
      p4: "1066"
    }
  },
  {
    id: 77,
    name: "Chirurgie Maxillo-Faciale",
    hospital: "Mustapha Basha",
    specialty: "chirurgie maxillo-faciale",
    type: "chirurgie",
    icon: "ðŸ¦·",
    color: "#7c3aed",
    period: "P1",
    effectif: 8,
    gardes: true,
    gardeFreq: "Garde / 4-5 (BinÃ´me)",
    roulement: false,
    scores: {
      charge: 4,
      toxicite: 2,
      formation: 8,
      liberte: 7,
      ambiance: 8
    },
    highlights: [
      "Terrain le plus lÃ©ger en chirurgie",
      "Sutures 50-60 patients/garde en moyenne",
      "RÃ©duction luxation ATM, examen fractures",
      "Sommeil possible Ã  partir de 2h du matin",
      "4 TD intÃ©ressants par semaine"
    ],
    badge: "ðŸ† Chirurgie la Plus LÃ©gÃ¨re",
    summary: "Le terrain chirurgical le plus lÃ©ger en garde. Gestes pratiques variÃ©s et intÃ©ressants (sutures, luxations ATM, fractures). Ã‰quipe sympa et gardes gÃ©rables. Fortement recommandÃ©.",
    epuisement: {
      p1: "335",
      p2: "67",
      p3: "112",
      p4: "168"
    }
  },
  {
    id: 78,
    name: "Chir GÃ©nÃ©rale (Debbussy)",
    hospital: "Alger",
    specialty: "chirurgie gÃ©nÃ©rale",
    type: "chirurgie",
    icon: "ðŸ”ª",
    color: "#b91c1c",
    period: "P2",
    effectif: 10,
    gardes: true,
    gardeFreq: "Garde / 5",
    roulement: false,
    scores: {
      charge: 9,
      toxicite: 9,
      formation: 5,
      liberte: 1,
      ambiance: 1
    },
    highlights: [
      "â›” PIRE TERRAIN selon les avis",
      "PrÃ©sence 8h + bloc jusque 17h + colloque",
      "Homework Ã  corriger + 2 TDs obligatoires",
      "Aucun avantage rapportÃ©",
      "TrÃ¨s toxique selon les internes"
    ],
    badge: "ðŸš« PIRE TERRAIN",
    summary: "Terrain unanimement dÃ©testÃ©. Charge maximale, Ã©quipe toxique, aucune libertÃ©, homework en sus. Ã€ Ã©viter absolument.",
    epuisement: {
      p1: "730",
      p2: "1038",
      p3: "1010",
      p4: "1005"
    }
  },
  {
    id: 79,
    name: "UMC",
    hospital: "Ain Taya",
    specialty: "UMC",
    type: "chirurgie",
    icon: "ðŸš‘",
    color: "#dc2626",
    period: "P1",
    effectif: 8,
    gardes: true,
    gardeFreq: "Garde / 8 (BinÃ´me) + Astreintes WE",
    roulement: false,
    scores: {
      charge: 6,
      toxicite: 1,
      formation: 7,
      liberte: 4,
      ambiance: 9
    },
    highlights: [
      "Service 9h-16h + 3 astreintes WE",
      "PU mÃ©dical (pas chirurgical)",
      "CAT urgences, rÃ©animation, gazomÃ©trie, sondage",
      "Professeur et Ã©quipe extrÃªmement sympas",
      "MÃ©moire structurÃ©e (IMRAD) en P1"
    ],
    badge: "ðŸ¥ Bagage GÃ©nÃ©raliste",
    summary: "UMC mÃ©dical (pas chirurgical) avec une excellente Ã©quipe. Bon pour acquÃ©rir les rÃ©flexes du gÃ©nÃ©raliste. MÃ©moire structurÃ©e obligatoire mais encadrÃ©e par la prof.",
    epuisement: {
      p1: "N/E",
      p2: "N/E",
      p3: "N/E",
      p4: "N/E"
    }
  },
  {
    id: 80,
    name: "Neurochirurgie",
    hospital: "Zmirli",
    specialty: "neurochirurgie",
    type: "chirurgie",
    icon: "ðŸ§ ",
    color: "#6366f1",
    period: "P1 / P3",
    effectif: 5,
    gardes: true,
    gardeFreq: "Garde / 5 (MonÃ´me)",
    roulement: true,
    scores: {
      charge: 6,
      toxicite: 4,
      formation: 5,
      liberte: 6,
      ambiance: 7
    },
    highlights: [
      "Rapport de garde OBLIGATOIRE Ã  8h30 (retard = interdit d'entrÃ©e)",
      "Roulement officieux possible aprÃ¨s 1er mois",
      "Astreinte monÃ´me (sortie 12-13h)",
      "Visite gÃ©nÃ©rale lundi mÃªme en post-garde",
      "Prof stricte mais terrain tolÃ©rable"
    ],
    badge: "â° RDG Strict",
    summary: "Terrain neurochir strict sur la prÃ©sence au RDG. Roulement officieux possible aprÃ¨s un mois. La prof surveille mais ferme les yeux si le travail est fait.",
    epuisement: {
      p1: "N/E",
      p2: "N/E",
      p3: "N/E",
      p4: "N/E"
    }
  },
  {
    id: 81,
    name: "Chir GÃ©nÃ©rale CC-A",
    hospital: "Mustapha Basha",
    specialty: "chirurgie gÃ©nÃ©rale",
    type: "chirurgie",
    icon: "ðŸ”ª",
    color: "#dc2626",
    period: "P1-P4",
    effectif: "Variable",
    gardes: true,
    gardeFreq: "Selon effectif",
    roulement: false,
    unrated: true,
    badge: "â³ En attente d'avis",
    summary: "Service de chirurgie gÃ©nÃ©rale Clinique Chirurgicale A (CCA) du CHU Mustapha Basha. En attente de tÃ©moignages d'internes.",
    highlights: [
      "Terrain officiel validÃ© au choix des postes",
      "Service : Clinique Chirurgicale A (CCA)",
      "CHU Mustapha Basha â€” Alger Centre",
      "En attente des retours de la promotion 2026"
    ],
    epuisement: {
      p1: "450",
      p2: "526",
      p3: "615",
      p4: "634"
    }
  },
  {
    id: 82,
    name: "Chir GÃ©nÃ©rale CC-B (Pr Baazizi)",
    hospital: "Mustapha Basha",
    specialty: "chirurgie gÃ©nÃ©rale",
    type: "chirurgie",
    icon: "ðŸ”ª",
    color: "#ef4444",
    period: "P2 recommandÃ©",
    effectif: 12,
    gardes: true,
    gardeFreq: "PU / 12 Ã  15j",
    roulement: false,
    unrated: false,
    scores: {
      charge: 6,
      toxicite: 1,
      formation: 9,
      liberte: 5,
      ambiance: 9
    },
    highlights: [
      "1 mois chir femme avec Pr Baazizi (le meilleur)",
      "1 mois chir homme + 15j rÃ©a + 15j consult",
      "Gardes PU chaque 12-15 jours (rÃ©sidents prÃ©sents)",
      "Visite mardi matin, colloque mardi aprÃ¨s-midi obligatoire",
      "CoursiÃ¨re pour les bilans, clim en Ã©tÃ©, pas toxique",
      "De prÃ©fÃ©rence Ã  choisir en P2 (P1 libÃ¨rent les R1)"
    ],
    badge: "ðŸŒŸ Pr Baazizi Â· Formateur",
    summary: "Terrain exceptionnel et trÃ¨s formateur sous l'aile du Pr Baazizi. Horaires 8h-16h avec rotation complÃ¨te (femme/homme/rÃ©a/consultation). Ã‰quipe bienveillante et coursiÃ¨re disponible.",
    epuisement: {
      p1: "780",
      p2: "848",
      p3: "875",
      p4: "N/E"
    }
  },
  {
    id: 83,
    name: "Chir GÃ©nÃ©rale CC-C",
    hospital: "Mustapha Basha",
    specialty: "chirurgie gÃ©nÃ©rale",
    type: "chirurgie",
    icon: "ðŸ”ª",
    color: "#f97316",
    period: "P1",
    effectif: 22,
    gardes: true,
    gardeFreq: "6-7 gardes au total",
    roulement: true,
    unrated: false,
    scores: {
      charge: 5,
      toxicite: 2,
      formation: 8,
      liberte: 7,
      ambiance: 8
    },
    highlights: [
      "Rotation 1 mois service / 1 mois bloc / 1 mois PU",
      "Pas de pointage, maÃ®tre de stage trÃ¨s gentil",
      "6 Ã  7 gardes seulement sur tout le stage (trinÃ´me PU ou monÃ´me service)",
      "RÃ©sidents sympas, implication garantie si motivÃ©",
      "TD obligatoire chaque mardi assurÃ© par les assistants",
      "Effectif trÃ¨s Ã  l'aise (22 internes en P1 avec 6D)"
    ],
    badge: "ðŸ•Šï¸ 6-7 Gardes Total",
    summary: "TrÃ¨s bon terrain avec maÃ®tre de stage comprÃ©hensif. 1 mois par unitÃ© (service, bloc, PU). 6 Ã  7 gardes sur l'ensemble du stage, bonne ambiance et formation pratique assurÃ©e.",
    epuisement: {
      p1: "329",
      p2: "192",
      p3: "329",
      p4: "450"
    }
  },
  {
    id: 84,
    name: "Chirurgie GÃ©nÃ©rale",
    hospital: "Rouiba",
    specialty: "chirurgie gÃ©nÃ©rale",
    type: "chirurgie",
    icon: "ðŸ”ª",
    color: "#b91c1c",
    period: "P1-P4",
    effectif: "Variable",
    gardes: true,
    gardeFreq: "Selon tableau",
    roulement: false,
    unrated: true,
    badge: "â³ En attente d'avis",
    summary: "Service de chirurgie gÃ©nÃ©rale de l'EPH Rouiba. Terrain officiel ouvert au choix des postes. En attente d'avis dÃ©taillÃ©.",
    highlights: [
      "Terrain hospitalier EPH Rouiba",
      "Chirurgie gÃ©nÃ©rale et viscÃ©rale",
      "ClÃ´ture P1 : 751, P2 : 994, P3 : 1038",
      "Avis d'internes en attente de collecte"
    ],
    epuisement: {
      p1: "751",
      p2: "994",
      p3: "1038",
      p4: "1050"
    }
  },
  {
    id: 85,
    name: "OrthopÃ©die",
    hospital: "Benaknoun",
    specialty: "orthopÃ©die",
    type: "chirurgie",
    icon: "ðŸ¦´",
    color: "#d97706",
    period: "P1-P4",
    effectif: "Variable",
    gardes: true,
    gardeFreq: "Selon tableau",
    roulement: false,
    unrated: true,
    badge: "â³ En attente d'avis",
    summary: "EHS Ben Aknoun spÃ©cialisÃ© en chirurgie orthopÃ©dique et traumatologie. Terrain trÃ¨s convoitÃ© fermÃ© trÃ¨s tÃ´t au choix des postes (rang 40 en P2).",
    highlights: [
      "EHS spÃ©cialisÃ© en OrthopÃ©die Ben Aknoun",
      "Terrain Ã  fermeture rapide (P1: 168, P2: 40)",
      "Traumatologie et chirurgie rÃ©glÃ©e",
      "En attente de retour d'expÃ©rience complet"
    ],
    epuisement: {
      p1: "168",
      p2: "40",
      p3: "71",
      p4: "204"
    }
  },
  {
    id: 86,
    name: "OrthopÃ©die",
    hospital: "BEO",
    specialty: "orthopÃ©die",
    type: "chirurgie",
    icon: "ðŸ¦´",
    color: "#d97706",
    period: "P1-P4",
    effectif: "Variable",
    gardes: true,
    gardeFreq: "Selon tableau",
    roulement: false,
    unrated: true,
    badge: "â³ En attente d'avis",
    summary: "Service de chirurgie orthopÃ©dique et traumatologique du CHU Bab El Oued. En attente de tÃ©moignages d'internes.",
    highlights: [
      "CHU Bab El Oued â€” Chirurgie OrthopÃ©dique",
      "ClÃ´ture P1: 301, P2: 251, P3: 335-345",
      "Urgences traumato et bloc opÃ©ratoire",
      "En attente de retours d'internes"
    ],
    epuisement: {
      p1: "301",
      p2: "251",
      p3: "335-345",
      p4: "335-345"
    }
  },
  {
    id: 87,
    name: "OrthopÃ©die",
    hospital: "Zmirli",
    specialty: "orthopÃ©die",
    type: "chirurgie",
    icon: "ðŸ¦´",
    color: "#d97706",
    period: "P1-P4",
    effectif: "Variable",
    gardes: true,
    gardeFreq: "Selon tableau",
    roulement: false,
    unrated: true,
    badge: "â³ En attente d'avis",
    summary: "Service d'orthopÃ©die de l'EHS Salim Zemirli, grand centre de traumatologie d'Alger. En attente d'Ã©valuation dÃ©taillÃ©e.",
    highlights: [
      "EHS Salim Zemirli (PÃ´le Traumatologie)",
      "ActivitÃ© traumatologique lourde",
      "ClÃ´ture P1: 489, P2: 516, P3: 705",
      "Avis d'internes en attente de partage"
    ],
    epuisement: {
      p1: "489",
      p2: "516",
      p3: "705",
      p4: "725"
    }
  },
  {
    id: 88,
    name: "CCI",
    hospital: "Ain Taya",
    specialty: "CCI",
    type: "chirurgie",
    icon: "ðŸ¦´",
    color: "#f59e0b",
    period: "P1-P4",
    effectif: "Variable",
    gardes: true,
    gardeFreq: "Selon tableau",
    roulement: false,
    unrated: true,
    badge: "â³ En attente d'avis",
    summary: "Service de Chirurgie Cardio-Vasculaire et Infantile / CCI de l'EPH Ain Taya. En attente de retours d'internes.",
    highlights: [
      "EPH Ain Taya â€” Service CCI",
      "ClÃ´ture P1: 900, P2: 1017, P3: 1017",
      "Chirurgie infantile et consultations",
      "En attente d'avis d'internes"
    ],
    epuisement: {
      p1: "900",
      p2: "1017",
      p3: "1017",
      p4: "1066"
    }
  },
  {
    id: 89,
    name: "CCI",
    hospital: "Birtraria",
    specialty: "CCI",
    type: "chirurgie",
    icon: "ðŸ¦´",
    color: "#f59e0b",
    period: "P1-P4",
    effectif: "Variable",
    gardes: true,
    gardeFreq: "Selon tableau",
    roulement: false,
    unrated: true,
    badge: "â³ En attente d'avis",
    summary: "Service CCI de l'EHS Birtraria. Terrain officiel au choix des postes. En attente d'Ã©valuation dÃ©taillÃ©e.",
    highlights: [
      "EHS Birtraria â€” Service CCI",
      "ClÃ´ture P1: 421, P2: 580, P3: 718",
      "Chirurgie infantile ambulatoire et hospitalisation",
      "En attente de retours d'expÃ©rience"
    ],
    epuisement: {
      p1: "421",
      p2: "580",
      p3: "718",
      p4: "479"
    }
  },
  {
    id: 90,
    name: "CCI",
    hospital: "Mustapha Basha",
    specialty: "CCI",
    type: "chirurgie",
    icon: "ðŸ¦´",
    color: "#f59e0b",
    period: "P1-P4",
    effectif: "Variable",
    gardes: true,
    gardeFreq: "Selon tableau",
    roulement: false,
    unrated: true,
    badge: "â³ En attente d'avis",
    summary: "Service CCI du CHU Mustapha Basha. Terrain trÃ¨s prisÃ© avec fermeture rapide (rang 150-230). En attente d'avis d'internes.",
    highlights: [
      "CHU Mustapha Basha â€” Clinique CCI",
      "Fermeture rapide (P1: 230, P2: 150, P3: 180)",
      "Chirurgie pÃ©diatrique de pointe",
      "En attente de dÃ©tails sur le rythme et les gardes"
    ],
    epuisement: {
      p1: "230",
      p2: "150",
      p3: "180",
      p4: "301"
    }
  },
  {
    id: 91,
    name: "CCI",
    hospital: "Parnet",
    specialty: "CCI",
    type: "chirurgie",
    icon: "ðŸ¦´",
    color: "#f59e0b",
    period: "P1-P4",
    effectif: "Variable",
    gardes: true,
    gardeFreq: "Selon tableau",
    roulement: false,
    unrated: true,
    badge: "â³ En attente d'avis",
    summary: "Service CCI du CHU Parnet (Nafissa Hamoud). En attente de retours d'expÃ©rience d'internes.",
    highlights: [
      "CHU Parnet (Nafissa Hamoud) â€” CCI",
      "ClÃ´ture P1: 412, P2: 278, P3: 378",
      "Prise en charge mÃ©dico-chirurgicale pÃ©diatrique",
      "Avis d'internes en cours de collecte"
    ],
    epuisement: {
      p1: "412",
      p2: "278",
      p3: "378",
      p4: "417"
    }
  },
  {
    id: 92,
    name: "Chirurgie Thoracique",
    hospital: "Mustapha Basha",
    specialty: "chirurgie thoracique",
    type: "chirurgie",
    icon: "ðŸ«",
    color: "#06b6d4",
    period: "P1-P4",
    effectif: "Variable",
    gardes: true,
    gardeFreq: "Selon tableau",
    roulement: false,
    unrated: true,
    badge: "â³ En attente d'avis",
    summary: "Service de chirurgie thoracique et cardio-vasculaire du CHU Mustapha Basha. Postes non Ã©puisÃ©s au choix (N/E). En attente de retour d'expÃ©rience.",
    highlights: [
      "CHU Mustapha Basha â€” Chirurgie Thoracique",
      "Postes non Ã©puisÃ©s (N/E sur P1, P2, P3, P4)",
      "Pathologies pulmonaires, mÃ©diastinales et pleurales",
      "En attente de retours dÃ©taillÃ©s"
    ],
    epuisement: {
      p1: "N/E",
      p2: "N/E",
      p3: "N/E",
      p4: "N/E"
    }
  },
  {
    id: 93,
    name: "Cardiologie",
    hospital: "CNMS",
    specialty: "cardiologie",
    type: "mÃ©decine",
    icon: "â¤ï¸",
    color: "#ef4444",
    period: "P1-P4",
    effectif: "Variable",
    gardes: false,
    gardeFreq: "Sans garde",
    roulement: true,
    unrated: true,
    badge: "â³ En attente d'avis",
    summary: "Service de cardiologie et rÃ©adaptation cardio-vasculaire du CNMS (Centre National de MÃ©decine du Sport). En attente de retours d'internes.",
    highlights: [
      "CNMS (Centre National de MÃ©decine du Sport)",
      "ClÃ´ture P1: 1010, P2: 1005, P3: 978, P4: 952",
      "Ã‰preuves d'effort et explorations fonctionnelles",
      "Avis d'internes en attente de publication"
    ],
    epuisement: {
      p1: "1010",
      p2: "1005",
      p3: "978",
      p4: "952"
    }
  },
  {
    id: 94,
    name: "Dermatologie",
    hospital: "BEO",
    specialty: "dermatologie",
    type: "mÃ©decine",
    icon: "ðŸ§´",
    color: "#ec4899",
    period: "P1-P4",
    effectif: "Variable",
    gardes: false,
    gardeFreq: "Sans garde",
    roulement: true,
    unrated: true,
    badge: "â³ En attente d'avis",
    summary: "Service de dermatologie et vÃ©nÃ©rologie du CHU Bab El Oued. En attente d'Ã©valuation complÃ¨te par les internes.",
    highlights: [
      "CHU Bab El Oued â€” Dermatologie",
      "ClÃ´ture P1: 900, P2: 818, P3: 730, P4: 655",
      "Consultations dermatologiques et dermato-allergologie",
      "En attente de dÃ©tails sur l'ambiance et la prÃ©sence"
    ],
    epuisement: {
      p1: "900",
      p2: "818",
      p3: "730",
      p4: "655"
    }
  },
  {
    id: 95,
    name: "DiabÃ©tologie",
    hospital: "Mustapha Basha",
    specialty: "diabÃ©tologie",
    type: "mÃ©decine",
    icon: "ðŸ©º",
    color: "#10b981",
    period: "P1-P4",
    effectif: "Variable",
    gardes: false,
    gardeFreq: "Sans garde",
    roulement: true,
    unrated: true,
    badge: "â³ En attente d'avis",
    summary: "Service de diabÃ©tologie du CHU Mustapha Basha. Terrain prisÃ© avec clÃ´ture rapide en P2-P3 (rang 168-257). En attente d'Ã©valuation.",
    highlights: [
      "CHU Mustapha Basha â€” DiabÃ©tologie",
      "ClÃ´ture P1: 516, P2: 257, P3: 168, P4: 234",
      "Prise en charge diabÃ¨te de type 1 et 2, pied diabÃ©tique",
      "En attente de retour d'internes"
    ],
    epuisement: {
      p1: "516",
      p2: "257",
      p3: "168",
      p4: "234"
    }
  },
  {
    id: 96,
    name: "Pneumologie (Pavillon 2)",
    hospital: "Beni Messous",
    specialty: "pneumologie",
    type: "mÃ©decine",
    icon: "ðŸ«",
    color: "#14b8a6",
    period: "P1-P4",
    effectif: "Variable",
    gardes: true,
    gardeFreq: "Selon tableau",
    roulement: false,
    unrated: true,
    badge: "â³ En attente d'avis",
    summary: "DeuxiÃ¨me unitÃ© / pavillon de pneumologie du CHU Beni Messous. En attente de retours d'internes.",
    highlights: [
      "CHU Beni Messous â€” Pneumologie UnitÃ© 2",
      "ClÃ´ture P1: N/E, P2: 1050, P3: 848, P4: 544",
      "Pathologies respiratoires et explorations",
      "En attente d'Ã©valuation complÃ¨te"
    ],
    epuisement: {
      p1: "N/E",
      p2: "1050",
      p3: "848",
      p4: "544"
    }
  },
  {
    id: 97,
    name: "Pneumologie (Pavillon 3)",
    hospital: "Beni Messous",
    specialty: "pneumologie",
    type: "mÃ©decine",
    icon: "ðŸ«",
    color: "#14b8a6",
    period: "P1-P4",
    effectif: "Variable",
    gardes: true,
    gardeFreq: "Selon tableau",
    roulement: false,
    unrated: true,
    badge: "â³ En attente d'avis",
    summary: "TroisiÃ¨me unitÃ© / pavillon de pneumologie du CHU Beni Messous. En attente de retours d'internes.",
    highlights: [
      "CHU Beni Messous â€” Pneumologie UnitÃ© 3",
      "ClÃ´ture P1: N/E, P2: N/E, P3: N/E, P4: 941",
      "Hospitalisation respiratoire et suivi",
      "En attente d'avis d'internes"
    ],
    epuisement: {
      p1: "N/E",
      p2: "N/E",
      p3: "N/E",
      p4: "941"
    }
  },
  {
    id: 98,
    name: "UMC",
    hospital: "Zmirli",
    specialty: "UMC",
    type: "chirurgie",
    icon: "ðŸš‘",
    color: "#dc2626",
    period: "P1-P4",
    effectif: "Variable",
    gardes: true,
    gardeFreq: "Garde d'urgence",
    roulement: false,
    unrated: true,
    badge: "â³ En attente d'avis",
    summary: "Pavillon des Urgences MÃ©dico-Chirurgicales (UMC) de l'EHS Salim Zemirli. Centre nÃ©vralgique des urgences traumatologiques. En attente d'Ã©valuation.",
    highlights: [
      "EHS Salim Zemirli â€” Urgences UMC",
      "ClÃ´ture P1 : 1022, P2-P4 : N/E",
      "DÃ©chocage, traumatologie aiguÃ« et sutures",
      "En attente de retours dÃ©taillÃ©s"
    ],
    epuisement: {
      p1: "1022",
      p2: "N/E",
      p3: "N/E",
      p4: "N/E"
    }
  },
  {
    id: 99,
    name: "GynÃ©cologie Belfort",
    hospital: "Belfort",
    specialty: "gynÃ©cologie",
    type: "gynÃ©cologie",
    icon: "ðŸ¼",
    color: "#ec4899",
    period: "P1-P4",
    effectif: "50",
    gardes: true,
    gardeFreq: "Chaque 10-12j",
    roulement: true,
    badge: "ðŸ¼ GynÃ©cologie Â· Belfort",
    summary: "Service de gynÃ©cologie-obstÃ©trique de Belfort. Roulement 1S/4, gardes trÃ¨s chargÃ©es avec ERCF frÃ©quents et ambiance difficile.",
    scores: { charge: 9, toxicite: 8, formation: 2, liberte: 8, ambiance: 3 },
    highlights: ["Roulement 1S/4", "Gardes trÃ¨s chargÃ©es chaque 10-12j", "ERCF frÃ©quents", "Ambiance toxique", "Chambre de garde acceptable"],
    review: "Garde hyper chargÃ©e, Ã©quipe toxique. Seul avantage c'est le roulement (1S/4). Ã‰vitez si vous ne supportez pas la charge.",
    epuisement: { p1: "1017", p2: "827", p3: "763", p4: "440" }
  },
  {
    id: 100,
    name: "GynÃ©cologie ZÃ©ralda",
    hospital: "ZÃ©ralda",
    specialty: "gynÃ©cologie",
    type: "gynÃ©cologie",
    icon: "ðŸ¼",
    color: "#a855f7",
    period: "P1-P4",
    effectif: "31",
    gardes: true,
    gardeFreq: "Chaque 10j",
    roulement: true,
    badge: "ðŸ¼ GynÃ©cologie Â· ZÃ©ralda",
    summary: "Service de gynÃ©cologie de ZÃ©ralda. Organisation libre, pas d'ERCF, gardes trinÃ´me. Responsable comprÃ©hensive.",
    scores: { charge: 6, toxicite: 4, formation: 6, liberte: 9, ambiance: 8 },
    highlights: ["Roulement libre (officieux)", "Garde trinÃ´me chaque 10j", "Pas d'ERCF", "5 unitÃ©s (PU/Bloc/Post-partum/GHR/Service)", "TD Ã  prÃ©senter"],
    review: "Libre de s'organiser, pas d'ERCF, tÃ¢ches lÃ©gÃ¨res. La responsable vous laisse tranquilles si le travail est fait.",
    epuisement: { p1: "966", p2: "640", p3: "421", p4: "324" }
  },
  {
    id: 101,
    name: "GynÃ©cologie Parnet",
    hospital: "Parnet",
    specialty: "gynÃ©cologie",
    type: "gynÃ©cologie",
    icon: "ðŸ¼",
    color: "#f43f5e",
    period: "P1-P4",
    effectif: "Variable",
    gardes: true,
    gardeFreq: "Chaque 9j",
    roulement: true,
    badge: "ðŸ¼ GynÃ©cologie Â· Parnet",
    summary: "Service de gynÃ©cologie de Parnet. Meilleur roulement (1S/4-1S/5) mais ambiance trÃ¨s toxique. ERCF exigÃ©s par les rÃ©sidentes.",
    scores: { charge: 6, toxicite: 9, formation: 2, liberte: 9, ambiance: 2 },
    highlights: ["Roulement 1S/4 ou 1S/5", "Garde lÃ©gÃ¨re", "ERCF imposÃ©s par les rÃ©sidentes", "Formation nulle", "Ambiance trÃ¨s toxique"],
    review: "Roulement exceptionnel mais Ã©quipe extrÃªmement toxique. On n'apprend rien, on est lÃ  pour la tension et les ERCF. 4 obs + validation objectifs exigÃ©s.",
    epuisement: { p1: "810", p2: "509", p3: "356", p4: "180" }
  },
  {
    id: 102,
    name: "GynÃ©cologie Pasteur",
    hospital: "Pasteur",
    specialty: "gynÃ©cologie",
    type: "gynÃ©cologie",
    icon: "ðŸ¼",
    color: "#14b8a6",
    period: "P1-P4",
    effectif: "13",
    gardes: true,
    gardeFreq: "MonÃ´me chaque 5j",
    roulement: true,
    badge: "ðŸ¼ GynÃ©cologie Â· Pasteur",
    summary: "Service de gynÃ©cologie de Pasteur. Roulement officiel 1S/5, gardes monÃ´me Ã  13h, service propre et climatisÃ©, Ã©quipe globalement gentille.",
    scores: { charge: 7, toxicite: 4, formation: 5, liberte: 8, ambiance: 7 },
    highlights: ["Roulement 1S/5 (officiel)", "Garde monÃ´me dÃ¨s 13h", "ERCF gÃ©rables", "Ã‰quipe sympa si sÃ©rieux", "Service propre et climatisÃ©"],
    review: "PlutÃ´t sympa, ERCF mais gÃ©rables. Cadre agrÃ©able, Ã©quipe gentille si vous Ãªtes sÃ©rieux. Gardes variables (parfois chargÃ©es en P1 car P1 libÃ©rÃ©s pour exam).",
    epuisement: { p1: "1038", p2: "848", p3: "841", p4: "526" }
  },
  {
    id: 103,
    name: "GynÃ©cologie Ain Taya",
    hospital: "Ain Taya",
    specialty: "gynÃ©cologie",
    type: "gynÃ©cologie",
    icon: "ðŸ¼",
    color: "#f59e0b",
    period: "P1-P4",
    effectif: "Variable",
    gardes: true,
    gardeFreq: "Chaque 11j (quadrinÃ´me)",
    roulement: true,
    badge: "ðŸ¼ GynÃ©cologie Â· Ain Taya",
    summary: "Service de gynÃ©cologie d'Ain Taya. Charge lÃ©gÃ¨re, pas d'ERCF, roulement 1S/3 ou 1S/4. Point nÃ©gatif : la distance.",
    scores: { charge: 4, toxicite: 5, formation: 6, liberte: 7, ambiance: 7 },
    highlights: ["Roulement 1S/3 ou 1S/4", "Garde quadrinÃ´me chaque 11j", "Pas d'ERCF", "Formateur au PU/Bloc", "TD tous les mardis"],
    review: "Terrain formateur (PU/Bloc). Pas d'ERCF, charge lÃ©gÃ¨re, encadrement variable. Point nÃ©gatif : la distance. Rapport de stage parfois long Ã  valider.",
    epuisement: { p1: "N/E", p2: "N/E", p3: "1144", p4: "573" }
  },
  {
    id: 104,
    name: "GynÃ©cologie Mustapha",
    hospital: "Mustapha Pacha",
    specialty: "gynÃ©cologie",
    type: "gynÃ©cologie",
    icon: "ðŸ¼",
    color: "#3b82f6",
    period: "P1-P4",
    effectif: "Variable",
    gardes: true,
    gardeFreq: "Chaque 8j (24h)",
    roulement: true,
    badge: "ðŸ¼ GynÃ©cologie Â· Mustapha",
    summary: "4 services (GHR Tarnier, Paul Bar, RÃ©a, Couvelaire). Gardes chargÃ©es 24h, ERCF interdits aux internes, gestes possibles si vous les demandez.",
    scores: { charge: 8, toxicite: 4, formation: 7, liberte: 5, ambiance: 8 },
    highlights: ["4 services (GHR/Tarnier/Paul Bar/RÃ©a)", "Garde 24h chaque 8j post-garde", "ERCF interdits aux internes âœ…", "Gestes possibles si demandÃ©s", "Ã‰quipe non toxique"],
    review: "ExpÃ©rience dÃ©pend du service (roulement variable). Gardes chargÃ©es mais ERCF interdits et Ã©quipe bienveillante. On peut apprendre si on s'implique.",
    epuisement: { p1: "67", p2: "417", p3: "204", p4: "730" }
  },
  {
    id: 105,
    name: "GynÃ©cologie Kouba",
    hospital: "Kouba",
    specialty: "gynÃ©cologie",
    type: "gynÃ©cologie",
    icon: "ðŸ¼",
    color: "#8b5cf6",
    period: "P1-P4",
    effectif: "Variable",
    gardes: true,
    gardeFreq: "Chaque 10j (quadrinÃ´me)",
    roulement: true,
    badge: "ðŸ¼ GynÃ©cologie Â· Kouba",
    summary: "Service de gynÃ©cologie de Kouba. Roulement 4/jour, garde quadrinÃ´me chaque 10j, service lÃ©ger mais formation inexistante et rÃ©sidents difficiles.",
    scores: { charge: 5, toxicite: 8, formation: 1, liberte: 8, ambiance: 3 },
    highlights: ["Roulement 4/jour", "Garde quadrinÃ´me chaque 10j", "Charge lÃ©gÃ¨re", "Formation zÃ©ro (PAS de gestes)", "RÃ©sidents trÃ¨s difficiles"],
    review: "LÃ©ger niveau charge mais formation inexistante et rÃ©sidents difficiles. 'The biggest task was trying to survive the mean residents'. TDs 2x/semaine prÃ©sence notÃ©e.",
    epuisement: { p1: "N/E", p2: "1165", p3: "N/E", p4: "700" }
  },
  {
    id: 106,
    name: "GynÃ©cologie HMEA",
    hospital: "HMEA",
    specialty: "gynÃ©cologie",
    type: "gynÃ©cologie",
    icon: "ðŸ¼",
    color: "#ef4444",
    period: "P1-P4",
    effectif: "5",
    gardes: true,
    gardeFreq: "Chaque 8j",
    roulement: false,
    badge: "ðŸ¼ GynÃ©cologie Â· HMEA",
    summary: "HMEA â€” Gardes trÃ¨s chargÃ©es (chaque 8j), ERCF++++ et constantes, pas de chambre de garde. Service propre et organisÃ© mais trÃ¨s Ã©puisant.",
    scores: { charge: 9, toxicite: 8, formation: 3, liberte: 5, ambiance: 4 },
    highlights: ["Garde chaque 8j (trÃ¨s chargÃ©e)", "ERCF++++ et constantes", "Pas de chambre de garde", "Pointage obligatoire", "Propre et organisÃ©"],
    review: "TrÃ¨s fatiguant, corvÃ©es (ERCF, constantes) et mÃªme pas de chambre de garde. Si vous avez le choix, Ã©vitez. Gros points positifs : la propretÃ©.",
    epuisement: { p1: "1136", p2: "1113", p3: "1150", p4: "900" }
  },
  {
    id: 107,
    name: "GynÃ©cologie Bologhine",
    hospital: "Baineim",
    specialty: "gynÃ©cologie",
    type: "gynÃ©cologie",
    icon: "ðŸ¼",
    color: "#10b981",
    period: "P1-P4",
    effectif: "21",
    gardes: true,
    gardeFreq: "TrinÃ´me (chaque 6-12j)",
    roulement: true,
    badge: "ðŸ¼ GynÃ©cologie Â· Bologhine",
    summary: "Service de gynÃ©cologie Bologhine (Baineim). RÃ©sidents sympas, accÃ¨s au bloc, rapport d'activitÃ© obligatoire pour tous les P.",
    scores: { charge: 6, toxicite: 3, formation: 7, liberte: 7, ambiance: 8 },
    highlights: ["Garde trinÃ´me (chaque 6-12j)", "Roulement 1S/2 en fin de stage", "Peu de travail au service", "AccÃ¨s au bloc opÃ©ratoire", "Rapport d'activitÃ© obligatoire (tous P)"],
    review: "Bien passÃ©. RÃ©sidents sympas, on peut apprendre au bloc si on veut. Rapport d'activitÃ© obligatoire sinon stage non validÃ©. Note : 7.5/10.",
    epuisement: { p1: "N/E", p2: "N/E", p3: "N/E", p4: "1182" }
  },
  {
    id: 108,
    name: "GynÃ©cologie Thenia",
    hospital: "Thenia",
    specialty: "gynÃ©cologie",
    type: "gynÃ©cologie",
    icon: "ðŸ¼",
    color: "#06b6d4",
    period: "P2-P4",
    effectif: "8-26",
    gardes: true,
    gardeFreq: "Chaque 8-9j",
    roulement: true,
    badge: "ðŸ¼ GynÃ©cologie Â· Thenia",
    summary: "Service de gynÃ©cologie de Thenia. Prof trÃ¨s gentille, roulement en trinÃ´me par mois d'unitÃ©, gardes chaque 8-9j, TD Ã  prÃ©senter.",
    scores: { charge: 7, toxicite: 3, formation: 7, liberte: 4, ambiance: 8 },
    highlights: ["Prof 'un bout de sucre'", "Garde chaque 8-9j", "3 unitÃ©s avec roulement mensuel", "TD Ã  prÃ©senter", "P4 : que des gardes (chaque 9j)"],
    review: "Ã‰quipe sympa (la prof est un sucre). Gardes gÃ©rables, bonne ambiance gÃ©nÃ©rale. En P4 : uniquement des gardes et post-gardes.",
    epuisement: { p1: "N/E", p2: "N/E", p3: "N/E", p4: "863" }
  },
  {
    id: 109,
    name: "GynÃ©cologie BM",
    hospital: "Beni Messous",
    specialty: "gynÃ©cologie",
    type: "gynÃ©cologie",
    icon: "ðŸ¼",
    color: "#f97316",
    period: "P1-P4",
    effectif: "Variable",
    gardes: true,
    gardeFreq: "Chaque 9j",
    roulement: false,
    badge: "ðŸ¼ GynÃ©cologie Â· Beni Messous",
    summary: "GynÃ©cologie BM â€” SecrÃ©taire stricte imposant le pointage. Pas de roulement semaine. Terrain chill uniquement si les internes sont solidaires. 8 unitÃ©s.",
    scores: { charge: 7, toxicite: 6, formation: 5, liberte: 4, ambiance: 6 },
    highlights: ["SecrÃ©taire stricte (pointage)", "8 unitÃ©s dans le service", "Garde chaque 9j", "Pas de roulement semaine officieux", "Chill si solidaires (effectif 35+)"],
    review: "Pas de roulement semaine Ã  cause de la secrÃ©taire. Terrain chill seulement si les internes sont solidaires. RÃ©sidentes : certaines toxiques, d'autres non.",
    epuisement: { p1: "818", p2: "479", p3: "243", p4: "150" }
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
  if (!val) return '<span class="ep-badge ep-ne">â€”</span>';
  if (val === "N/E") return '<span class="ep-badge ep-ne">N/E</span>';
  const num = parseInt(val, 10);
  if (!isNaN(num) && num < 300) return `<span class="ep-badge ep-hot">${val}</span>`;
  return `<span class="ep-badge ep-std">${val}</span>`;
}

// ============================================================
//  DOM BUILDING â€” CARDS
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
            <span class="overall-num-na">â€”</span>
          </div>
        </div>

        <div class="card-badge" style="background:#94a3b818;border-color:#94a3b844;color:#94a3b8">
          ${t.badge || "â³ En attente d'avis"}
        </div>

        <div class="card-meta">
          <span class="meta-pill">ðŸ“… P1-P4</span>
          <span class="meta-pill">ðŸ·ï¸ ${t.specialty}</span>
          <span class="meta-pill">ðŸ¥ ${t.hospital}</span>
        </div>

        <div class="card-epuisement">
          <div class="ep-header">
            <span class="ep-title">ðŸŽ¯ Rang de clÃ´ture (Choix 2026) :</span>
          </div>
          <div class="ep-row-grid">
            <div class="ep-cell"><span class="ep-p">P1</span>${getEpPill(t.epuisement?.p1)}</div>
            <div class="ep-cell"><span class="ep-p">P2</span>${getEpPill(t.epuisement?.p2)}</div>
            <div class="ep-cell"><span class="ep-p">P3</span>${getEpPill(t.epuisement?.p3)}</div>
            <div class="ep-cell"><span class="ep-p">P4</span>${getEpPill(t.epuisement?.p4)}</div>
          </div>
        </div>

        <div class="card-highlights">
          ${(t.highlights || []).slice(0, 3).map((h) => `<div class="highlight-item">â†’ ${h}</div>`).join("")}
          <div class="highlight-item" style="color:#e2e8f0;font-style:italic">â†’ Aucun interne n'a encore Ã©valuÃ© ce service</div>
        </div>

        <button class="detail-btn detail-btn-unrated" onclick="openModal(${t.id})">
          Voir fiche & clÃ´ture â†—
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
          <span class="meta-pill">ðŸ“… ${t.period}</span>
          <span class="meta-pill">ðŸ‘¥ ${t.effectif}</span>
          <span class="meta-pill ${t.gardes ? "garde-yes" : "garde-no"}">
            ${t.gardes ? "ðŸŒ™ " + t.gardeFreq : "âœ… Sans gardes"}
          </span>
          <span class="meta-pill ${t.roulement ? "roul-yes" : "roul-no"}">
            ${t.roulement ? "ðŸ”„ Roulement" : "âŒ No roulement"}
          </span>
        </div>

        ${t.epuisement ? `
          <div class="card-epuisement-compact">
            <span class="ep-compact-label">ðŸŽ¯ ClÃ´ture :</span>
            <span class="ep-compact-val">P1: ${t.epuisement.p1}</span>
            <span class="ep-compact-val">P2: ${t.epuisement.p2}</span>
            <span class="ep-compact-val">P3: ${t.epuisement.p3}</span>
            <span class="ep-compact-val">P4: ${t.epuisement.p4}</span>
          </div>
        ` : ""}

        <div class="score-bars">
          ${scoreBar("âš¡ Charge", t.scores.charge, getChargeColor(t.scores.charge))}
          ${scoreBar("â˜ ï¸ ToxicitÃ©", t.scores.toxicite, getToxiciteColor(t.scores.toxicite))}
          ${scoreBar("ðŸŽ“ Formation", t.scores.formation, getScoreColor(t.scores.formation))}
          ${scoreBar("ðŸ•Šï¸ LibertÃ©", t.scores.liberte, getScoreColor(t.scores.liberte))}
          ${scoreBar("ðŸ¤ Ambiance", t.scores.ambiance, getScoreColor(t.scores.ambiance))}
        </div>

        <div class="card-highlights">
          ${(t.highlights || []).slice(0, 4).map((h) => `<div class="highlight-item">â†’ ${h}</div>`).join("")}
        </div>

        <button class="detail-btn" onclick="openModal(${t.id})">
          Voir dÃ©tails complets â†—
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
          <h2 class="modal-name">${t.name} â€” ${t.hospital}</h2>
          <span class="modal-spec">${t.specialty.toUpperCase()} Â· ${(t.type || "mÃ©decine").toUpperCase()}</span>
        </div>
        <div class="modal-score-badge" style="background:#94a3b822;border-color:#94a3b8;color:#94a3b8">
          N/A
        </div>
        <button class="modal-close" onclick="closeModal()">âœ•</button>
      </div>
      <div class="modal-body" style="display:block">
        <div class="unrated-alert">
          <span class="unrated-alert-icon">â³</span>
          <div>
            <h3 style="margin-bottom:6px;font-size:1.05rem;">Fiche en attente d'Ã©valuation</h3>
            <p style="font-size:0.85rem;color:var(--text-2);line-height:1.5;">
              Ce terrain figure sur les listes officielles du choix des postes (FacultÃ© de MÃ©decine d'Alger), mais aucun interne n'a encore transmis de compte-rendu dÃ©taillÃ© (charge, ambiance, encadrement).
            </p>
          </div>
        </div>

        <h4 class="modal-section-title">ðŸŽ¯ Historique d'Ã‰puisement des Postes (Promo 2026)</h4>
        <div class="modal-epuisement-table">
          <div class="met-col"><span class="met-lbl">PÃ©riode 1 (P1)</span><span class="met-val">${t.epuisement?.p1 || 'N/E'}</span></div>
          <div class="met-col"><span class="met-lbl">PÃ©riode 2 (P2)</span><span class="met-val">${t.epuisement?.p2 || 'N/E'}</span></div>
          <div class="met-col"><span class="met-lbl">PÃ©riode 3 (P3)</span><span class="met-val">${t.epuisement?.p3 || 'N/E'}</span></div>
          <div class="met-col"><span class="met-lbl">PÃ©riode 4 (P4)</span><span class="met-val">${t.epuisement?.p4 || 'N/E'}</span></div>
        </div>

        <div class="unrated-info-card">
          <h4>ðŸ’¡ RepÃ¨res pour le choix de stage :</h4>
          <ul>
            <li><strong>N/E (Non Ã‰puisÃ©)</strong> : Des places sont restÃ©es disponibles jusqu'au dernier Ã©tudiant de la sÃ©ance.</li>
            <li><strong>Rang de fermeture</strong> : Rang du dernier affectÃ©. Plus ce numÃ©ro est bas, plus le terrain est demandÃ© en prioritÃ©.</li>
            <li><strong>Vous y avez effectuÃ© votre stage ?</strong> Partagez vos impressions pour aider les futurs internes Ã  faire le bon choix !</li>
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
          <h2 class="modal-name">${t.name} â€” ${t.hospital}</h2>
          <span class="modal-spec">${t.specialty.toUpperCase()} Â· PÃ©riode ${t.period}</span>
        </div>
        <div class="modal-score-badge" style="background:${t.color}22;border-color:${t.color};color:${t.color}">
          ${overall}<small>/10</small>
        </div>
        <button class="modal-close" onclick="closeModal()">âœ•</button>
      </div>
      <div class="modal-body">
        <div class="modal-radar-col">
          <canvas id="modal-radar" width="300" height="300"></canvas>
        </div>
        <div class="modal-info-col">
          <p class="modal-summary-text">"${t.summary}"</p>
          <div class="modal-quick-grid">
            <div class="mqg-item"><span class="mqg-l">Effectif</span><span class="mqg-v">ðŸ‘¥ ${t.effectif} internes</span></div>
            <div class="mqg-item"><span class="mqg-l">Gardes</span><span class="mqg-v">${t.gardes ? "ðŸŒ™ " + t.gardeFreq : "âœ… Aucune"}</span></div>
            <div class="mqg-item"><span class="mqg-l">Roulement</span><span class="mqg-v">${t.roulement ? "ðŸ”„ Possible" : "âŒ Absent"}</span></div>
            <div class="mqg-item"><span class="mqg-l">Score global</span><span class="mqg-v" style="color:${t.color};font-weight:700">${overall}/10</span></div>
          </div>

          ${t.epuisement ? `
            <h4 class="modal-section-title">ðŸŽ¯ ClÃ´ture aux choix de postes</h4>
            <div class="modal-epuisement-table">
              <div class="met-col"><span class="met-lbl">P1</span><span class="met-val">${t.epuisement.p1}</span></div>
              <div class="met-col"><span class="met-lbl">P2</span><span class="met-val">${t.epuisement.p2}</span></div>
              <div class="met-col"><span class="met-lbl">P3</span><span class="met-val">${t.epuisement.p3}</span></div>
              <div class="met-col"><span class="met-lbl">P4</span><span class="met-val">${t.epuisement.p4}</span></div>
            </div>
          ` : ""}

          <h4 class="modal-section-title">Points clÃ©s du terrain</h4>
          <ul class="modal-highlights-list">
            ${t.highlights.map((h) => `<li>${h}</li>`).join("")}
          </ul>
          <h4 class="modal-section-title">Scores dÃ©taillÃ©s</h4>
          <div class="modal-detail-bars">
            ${detailBar("âš¡ Charge de travail", t.scores.charge, getChargeColor(t.scores.charge), "â†“ Mieux si bas")}
            ${detailBar("â˜ ï¸ ToxicitÃ©", t.scores.toxicite, getToxiciteColor(t.scores.toxicite), "â†“ Mieux si bas")}
            ${detailBar("ðŸŽ“ Formation", t.scores.formation, getScoreColor(t.scores.formation), "â†‘ Mieux si haut")}
            ${detailBar("ðŸ•Šï¸ LibertÃ©", t.scores.liberte, getScoreColor(t.scores.liberte), "â†‘ Mieux si haut")}
            ${detailBar("ðŸ¤ Ambiance", t.scores.ambiance, getScoreColor(t.scores.ambiance), "â†‘ Mieux si haut")}
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
          labels: ["Charge â†“", "ToxicitÃ© â†“", "Formation", "LibertÃ©", "Ambiance"],
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
    charge: "Charge", toxicite: "ToxicitÃ©", formation: "Formation",
    liberte: "LibertÃ©", ambiance: "Ambiance", overall: "Score Global",
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
      labels: ["Charge â†“", "ToxicitÃ© â†“", "Formation", "LibertÃ©", "Ambiance"],
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
    { icon: "ðŸ†", label: "Meilleur Score Global", name: bestOverall.name, hosp: bestOverall.hospital, color: bestOverall.color },
    { icon: "ðŸŽ“", label: "Meilleure Formation", name: bestFormation.icon + " " + bestFormation.name, hosp: bestFormation.hospital, color: bestFormation.color },
    { icon: "ðŸ˜´", label: "Moins de Charge", name: leastCharge.icon + " " + leastCharge.name, hosp: leastCharge.hospital, color: leastCharge.color },
    { icon: "ðŸ•Šï¸", label: "Plus de LibertÃ©", name: mostFree.icon + " " + mostFree.name, hosp: mostFree.hospital, color: mostFree.color },
    { icon: "ðŸ˜‡", label: "Moins Toxique", name: leastToxic.icon + " " + leastToxic.name, hosp: leastToxic.hospital, color: leastToxic.color },
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
  if (filterType !== "all") data = data.filter((t) => (t.type || "mÃ©decine") === filterType);
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
