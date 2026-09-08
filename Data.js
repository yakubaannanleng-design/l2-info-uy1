// data.js — Contenu du programme L2 Informatique (UY1)
// Pour ajouter/modifier une UE, éditez simplement les objets ci-dessous.
// Chaque UE : code, titre, coefficient (indicatif), matières, compétences, ressources.

const PROGRAMME = {
  etablissement: "Université de Yaoundé I — Faculté des Sciences",
  filiere: "Licence 2 Informatique",
  source: "https://t.me/infosl2",
  semestres: [
    {
      numero: 1,
      ues: [
        {
          code: "INF211",
          titre: "Programmation Orientée Objet",
          matieres: [
            "Approche de conception orientée objet",
            "Programmation Objet (C++/Java/Pharo)"
          ],
          competences: [
            "Maîtriser classe, objet, héritage, polymorphisme, encapsulation, abstraction",
            "Modéliser un problème avec une approche objet (diagrammes UML de classes)",
            "Écrire du code POO propre en C++, Java ou Pharo",
            "Distinguer composition et héritage, appliquer les principes SOLID de base"
          ],
          ressources: [
            "IDE : Eclipse/IntelliJ (Java), Code::Blocks/CLion (C++), ou Pharo IDE",
            "Programmer en Java — C. Delannoy, ou Le langage C++ — Stroustrup",
            "Support de cours + TD corrigés du département",
            "Petits projets pratiques (gestion de bibliothèque, calculatrice…)"
          ]
        },
        {
          code: "INF221",
          titre: "Bases de Données et Modélisation",
          matieres: [
            "Introduction à la modélisation des Bases de données",
            "Initiation à l'implémentation des Bases de données"
          ],
          competences: [
            "Modéliser avec Merise (MCD → MLD → MPD)",
            "Maîtriser les règles de passage MCD-MLD et la normalisation (1FN, 2FN, 3FN)",
            "Implémenter une base relationnelle en SQL (DDL, DML, jointures)",
            "Comprendre clés primaires/étrangères et contraintes d'intégrité"
          ],
          ressources: [
            "SGBD : MySQL/PostgreSQL + client graphique (DBeaver, phpMyAdmin)",
            "Outil de modélisation : Looping, PowerAMC, ou draw.io",
            "Bases de données — G. Gardarin, ou polycopié Merise du département",
            "Jeux de données d'exercice pour la pratique SQL"
          ]
        },
        {
          code: "INF231",
          titre: "Méthodes Algorithmiques et Structures de Données",
          matieres: [
            "Technique de conception des algorithmes",
            "Structures de données 2"
          ],
          competences: [
            "Techniques de conception : diviser pour régner, glouton, programmation dynamique (bases)",
            "Structures avancées : listes chaînées, piles, files, arbres binaires, tables de hachage",
            "Analyse de complexité (notation grand O) et preuve de correction",
            "Implémentation en C des structures étudiées"
          ],
          ressources: [
            "Introduction à l'algorithmique — Cormen et al. (chapitres structures de données)",
            "Compilateur C (GCC) + éditeur (VS Code)",
            "Recueils d'exercices corrigés (tri, recherche, structures dynamiques)",
            "Entraînement en ligne : HackerRank, Codeforces"
          ]
        },
        {
          code: "MAT211",
          titre: "Algèbre 2A : Théorie Spectrale et Algèbre Multilinéaire",
          matieres: [
            "Théorie spectrale et systèmes différentiels",
            "Algèbre multilinéaire"
          ],
          competences: [
            "Diagonalisation, réduction des endomorphismes, valeurs/vecteurs propres",
            "Résolution de systèmes différentiels linéaires",
            "Formes multilinéaires, produit tensoriel, bases sur les tenseurs"
          ],
          ressources: [
            "Algèbre linéaire — J. Grifone, ou polycopié du département de Mathématiques",
            "Annales d'exercices corrigés (UY1 si disponibles)",
            "Xcas ou GeoGebra pour vérifier les calculs (facultatif)"
          ]
        },
        {
          code: "INF241",
          titre: "Architecture des Ordinateurs",
          matieres: [
            "Fonctionnement interne d'un ordinateur",
            "Microprocesseur"
          ],
          competences: [
            "Fonctionnement interne : UC, mémoire, bus, cycle d'instruction",
            "Notions de microprocesseur : registres, jeu d'instructions, pipeline (intro)",
            "Représentation binaire, arithmétique base 2/16, portes logiques"
          ],
          ressources: [
            "Architecture de l'ordinateur — A. Tanenbaum",
            "Simulateur de circuits logiques : Logisim",
            "Polycopié du département"
          ]
        },
        {
          code: "FBL211",
          titre: "Formation Bilingue II",
          matieres: [
            "ENG 212 : Expression and Communication in English II",
            "FRA 212 : Communication et expression en français II"
          ],
          competences: [
            "Communication académique et professionnelle en anglais",
            "Expression écrite et orale renforcée en français",
            "Vocabulaire technique bilingue lié à l'informatique"
          ],
          ressources: [
            "Supports bilingues du centre de langues",
            "Dictionnaire technique anglais-français informatique",
            "Lecture régulière d'articles techniques dans les deux langues"
          ]
        }
      ],
      optionnelle: {
        label: "UE Optionnelle S1 (choisir une seule)",
        options: [
          {
            code: "INF251",
            titre: "Génie Logiciel et Systèmes d'Information",
            matieres: ["Génie logiciel", "Introduction aux systèmes d'informations"],
            competences: [
              "Cycle de vie logiciel, méthodes agiles/cascade",
              "UML : cas d'utilisation, diagrammes de séquence",
              "Notions de systèmes d'information d'entreprise"
            ],
            ressources: [
              "UML 2 en action",
              "Outil de modélisation : StarUML",
              "Polycopié génie logiciel du département"
            ]
          },
          {
            code: "INF261",
            titre: "Système Windows et Protocoles de Routage",
            matieres: ["Système Microsoft Windows", "Protocoles de routage"],
            competences: [
              "Administration système Windows",
              "Principes de routage réseau (statique et dynamique)"
            ],
            ressources: [
              "Environnement virtualisé : VirtualBox/VMware + Windows Server",
              "Cisco Packet Tracer pour simuler le routage"
            ]
          }
        ]
      }
    },
    {
      numero: 2,
      ues: [
        {
          code: "INF212",
          titre: "Mathématiques Discrètes",
          matieres: ["Dénombrement", "Preuve de programmes"],
          competences: [
            "Combinatoire : permutations, arrangements, inclusion-exclusion",
            "Preuve de programmes : correction, invariants de boucle, terminaison"
          ],
          ressources: [
            "Mathématiques discrètes — Rosen, ou polycopié du département",
            "Exercices corrigés de combinatoire",
            "Méthode d'induction pour les preuves formelles"
          ]
        },
        {
          code: "INF222",
          titre: "Programmation Web",
          matieres: ["Technologies côté client", "Technologies côtés serveur"],
          competences: [
            "Client : HTML5, CSS3, JavaScript (DOM, événements)",
            "Serveur : PHP (ou équivalent), interaction avec base de données",
            "Construire une application web fonctionnelle de bout en bout"
          ],
          ressources: [
            "VS Code + navigateur avec outils développeur",
            "Serveur local : XAMPP/WAMP (Apache, MySQL, PHP)",
            "Documentation MDN Web Docs",
            "Projet fil rouge personnel pour consolider les acquis"
          ]
        },
        {
          code: "INF232",
          titre: "Statistiques et Analyse de Données",
          matieres: ["Statistiques descriptives", "Analyse de données"],
          competences: [
            "Statistiques descriptives : moyennes, variance, écart-type, distributions",
            "Analyse de données : corrélation, régression simple, interprétation"
          ],
          ressources: [
            "Tableur (Excel/LibreOffice Calc) ou Python (pandas)",
            "Polycopié Statistique descriptive du département",
            "Jeux de données publics : data.gov, Kaggle"
          ]
        },
        {
          code: "MAT232",
          titre: "Calcul Intégral sur ℝⁿ",
          matieres: ["Intégrale de Riemann et intégrales multiples", "Fonctions complexes et calcul des résidus"],
          competences: [
            "Intégrale de Riemann, intégrales multiples (double, triple)",
            "Fonctions complexes, calcul des résidus"
          ],
          ressources: [
            "Polycopié calcul intégral + ouvrage d'analyse complexe",
            "Annales corrigées d'exercices",
            "Xcas/GeoGebra pour vérification"
          ]
        },
        {
          code: "PPE212",
          titre: "Projet Professionnel et Pré-Immersion",
          matieres: ["Projet professionnel", "Stage ouvrier de pré-immersion"],
          competences: [
            "Construire un projet professionnel réaliste (CV, lettre de motivation, plan de carrière)",
            "Vivre une première immersion en entreprise et en tirer un retour structuré"
          ],
          ressources: [
            "Modèles de CV et lettre de motivation professionnels",
            "Contact avec une structure d'accueil pour le stage",
            "Grille de rapport de stage du département"
          ]
        }
      ],
      optionnelle: {
        label: "UE Optionnelle S2 (choisir une seule)",
        options: [
          {
            code: "INF242",
            titre: "Science des Données",
            matieres: ["Optimisation", "Langage Python"],
            competences: [
              "Notions de base d'optimisation",
              "Programmation Python appliquée à la donnée"
            ],
            ressources: [
              "Python + bibliothèques NumPy, pandas",
              "Python pour l'analyse de données — W. McKinney"
            ]
          },
          {
            code: "INF252",
            titre: "Sécurité Informatique",
            matieres: [
              "Principaux services de la sécurité informatique et mécanismes de défense",
              "Dispositifs et outils de protection"
            ],
            competences: [
              "Services de sécurité : confidentialité, intégrité, authentification",
              "Mécanismes de défense et outils de protection"
            ],
            ressources: [
              "Environnement de test isolé : VM Kali Linux",
              "Polycopié Sécurité informatique du département"
            ]
          }
        ]
      }
    }
  ],
  strategie: [
    "Régularité : traiter les TD la semaine même du cours, pas en fin de semestre",
    "Priorisation : donner le plus de temps aux UE à fort coefficient (POO, BD, Algo, Algèbre)",
    "Annales : rassembler et refaire les épreuves des années précédentes",
    "Groupes de travail : pratiquer les UE de programmation (POO, Web, BD) en binôme ou en projet",
    "Suivi de moyenne : viser au moins 14/20 dans les UE fondamentales pour compenser les UE plus faibles"
  ]
};
          
