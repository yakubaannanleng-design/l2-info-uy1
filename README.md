# l2-info-uy
projet de développement d'une plateforme de révision destiné aux élèves et étudiants 
# Plateforme — Cursus L2 Informatique (UY1)

Site statique (HTML/CSS/JS pur, aucune dépendance) qui présente les compétences
visées et les ressources nécessaires pour chaque UE de la L2 Informatique,
avec recherche et navigation par semestre.

## Structure des fichiers

```
index.html   → structure de la page
style.css    → identité visuelle
app.js       → logique d'affichage (navigation, recherche, routage)
data.js      → TOUT le contenu (UE, compétences, ressources). C'est le seul
               fichier à modifier pour mettre à jour ou enrichir le contenu.
```

## Mettre à jour le contenu

Ouvrez `data.js` : chaque UE est un objet avec `code`, `titre`, `matieres`,
`competences` (liste) et `ressources` (liste). Pour ajouter une compétence ou
une ressource, ajoutez une ligne dans le tableau correspondant. Pour ajouter
une UE, copiez un bloc existant et modifiez ses champs. Aucune connaissance
du reste du code n'est nécessaire.

## Héberger gratuitement sur GitHub Pages

1. Créez un dépôt GitHub (public), par exemple `l2-info-uy1`.
2. Ajoutez ces 4 fichiers (`index.html`, `style.css`, `app.js`, `data.js`) à
   la racine du dépôt et poussez-les (`git add . && git commit -m "init" && git push`).
3. Dans le dépôt : **Settings → Pages → Source**, choisissez la branche
   `main` et le dossier `/ (root)`, puis enregistrez.
4. Après 1–2 minutes, le site est en ligne à l'adresse
   `https://<votre-nom-utilisateur>.github.io/<nom-du-depot>/`.
5. Toute future modification de `data.js` poussée sur `main` met le site à
   jour automatiquement, sans rien reconfigurer.

## Permettre à d'autres étudiants de proposer des ajouts

Puisque tout le contenu est dans un seul fichier lisible (`data.js`), le plus
simple est d'accepter les contributions via des *pull requests* GitHub :
un(e) camarade modifie `data.js` sur sa propre copie du dépôt et propose la
modification, que vous validez avant fusion.

