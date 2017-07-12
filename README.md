# CdsApp

## Installation
Pour commencer à travailler sur le projet, il vous faudra installer différents outils :

**Obligatoire:**
- Installer NodeJs (version 7.4 - 19/01/2017)
- Cloner le projet
- Exécuter `npm i` à la racine du projet
- Exécuter `npm i -g angular-cli@1.0.0-beta.32.3`

**Facultatif:**

Pour pouvoir déployer sur android

- Télécharger et installer le JDK et le SDK (version 5 et 6 - que les SDK, pas les images système) (Utiliser SDK Manager)
- Exécuter `npm i -g cordova`
- Exécuter `cordova platform add android`

## Développement

Pour démarrer le développement, vous devez lancer le serveur local.  
Il suffit d'exécuter la commande `npm start`.  
Une fois le chargement terminé et le message `webpack: Compiled successfully` affiché, vous pourrez accéder à l'adresse [http://localhost:4200](http://localhost:4200) sur votre navigateur.  
Pour rappel, le navigateur cible est principalement **firefox**.

Des commandes sont disponibles grâce à [Angular-CLI](https://github.com/angular/angular-cli) pour générer des composants, des services...

### Docker

``` sh
cd .docker
cp .env.dit .env
```
Editer le fichier .env en remplaçant le **[ENV]** par **dev** si c'est pour le développement.  
Pour les autres plateformes, utiliser **release** ou **integration** par exemple.
``` sh
docker-compose run --rm node yarn install #Pour installer les dépendances
docker-compose run --rm node ng build #Pour compiler l'application
docker-compose up -d #Pour démarrer le serveur
```

## Tests

Seulement les tests e2e sont mis en place pour le moment. Il s'agit de tests end-to-end, autrement dit, ils vont simuler une interaction d'un utilisateur avec le navigateur.  
Pour lancer l'exécution des tests, veuillez exécuter la commande : `npm run e2e`  
Pour information, les test e2e sont basés sur [Protractor](http://www.protractortest.org/).   
**NB**: Il est possible de configurer un IDE Jetbrains en faisant une nouvelle configuration d'exécution de type **protractor** en spécifiant le fichier de configuration `cds-app/protractor.conf.js` 
