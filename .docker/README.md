# Carnet de santé - Environnement Docker

## Description

## Builder cds-app : howto

Un fichier docker-compose.build.yml permet de préparer les sources de l'app. Il faut créer un .env désignant ce fichier compose pour pouvoir builder l'app.
```bash
# Installation des dépendances
docker-compose run --rm node rm node_modules -rf
docker-compose run --rm node npm install
# Construction de l'app (exemple pour l'environnement LBN de préprod)
docker-compose run --rm node ng build --env=lbn-pprod
```

Adaptez le numéro de version avec la variable d'environnement APP_VERSION dans le fichier `.env`

```bash
docker-compose build cds-app

# Suppression des dangling images (Optionnel)
docker rmi $(docker images -f dangling=true -q)
```