---
titre : docker images
layout: default
techno: docker
page.url: docker images
---

on peut créer sa propre image pour le déploiement ou l'envoie d'une app.

losrque l'on créé une image il faut lister les commandes que l'on ferait pour un déploiement manuel.

par exemple pour une app sous flask :
 - OS ubuntu
 - update apt repo
 - install dependencies using apt
 - install Python dependencies using pip
 - copy source code to /opt folder
 - run the web server using 'flask' command

## create a image

first create a Dockerfile

```docker
FROM Ubuntu

RUN apt-get update
RUN apt-get install python

RUN pip install flask
RUN pip install flask-mysql

COPY . /opt/source-code

ENTRYPOINT FLASK_APP=/opt/source-code/app.py flask run
```

### code translation

`FROM Ubuntu` => OS de base de notre container

`RUN` => pour installer les dépendances
à partir de l'OS Ubuntu, install les dépendence, python.
Install flask et flask-mysql à partir de pip

on copie le code source dans le dossier `/opt/source-code`

on définit l'ENTRYPOINT dans notre dossier est on lance la commande `flask run`


### build image

une fois notre Dockerfile rempli on build l'image avec la commande 
```bash
docker build Dockerfile -t dockerAccount/my-app .
```
-t => tag name for image

cette commande va créer une image sur notre machine

pour rendre cette image dispo dans dockerhub, on utilise la command push
```bash
docker push dockerAccount/my-app
```

## Dockerfile

un Dockerfile s'organise avec des instructions et des arguments

les instructions sont en majuscule et les arguments suivent en minuscule

un container doit toujours être construit à partir d'une autre image ou d'un OS avec la commande `FROM`

`RUN` => lancer une commande à partir de l'OS de base

`COPY` => copie le fichier depuis notre machine dans le image docker
`ENTRYPOINT` => la commande à lancer lorsque l'on lance notre container

## l'architecture en couche

notre dossier dockefile une fois builder va exécuter les commandes à la suite et créer notre image avec une architecture en couche (layer)

dans notre exemple :

 - Base Ubuntu Layer
 - Changes in apt packages
 - Changes in pip packages
 - source code
 - Update Entrypoint with 'flask' command

quand on va télécharger une image ses différentes layer sont télécharger indépendemment et chaque layer enregistre uniquement les changement qui la concerne

cette architecture nous permet de rajouter des layer facilement et de débuguer des layer défectueuse

### build

lorsque l'on lance la commande `build` on voit ses différentes layer s'exécuter dans le terminal 

### docker history

on peut voir les informations comme la taille de chaqu'une de nos layer avec la command `history`

```bash
docker history marlen/my-app
```

## que peut-on containerize

on peut construire une image pour une appli web ou un simple script

l'avantage c'est que l'on install rien, on utilise juste l'image docker et quand on supprime cette image, tout est netoyer pas besoin de désinstaller.


## utilité

un container sert à exécuter une certaine tâche.

Il n'est pas prévu pour faire tourner un OS