---
titre : getting started
layout: default
techno: docker
page.url: getting-started
---

## community edition

### install docker


docs.docker.com click on get docker

dans le panel a gauche, choisir son systeme (ubuntu)

suivre les instructions


pour tester que tout fonctionne correctement:
```bash
docker run docker/whalesay cowsay Hello-World!
```

docker va télécharger l'image docker/whalesay cowsay

à chaque fois que l'on va lancer cette commande, on pourra utiliser cowsay car on à une copy de l'image en local.

## docker commands

pour afficher la liste des commandes docker
```bash
docker
```

### run

```bash
docker run nginx
```
va pull l'image (si elle n'est pas déjà en local) et lancer un container de celle-ci

une fois la tache de notre container exécuter, ce container va s'arrêter automatiquement

pour donner un nom particulier à un container il faut utiliser l'options --name
```bash
docker run --name webapp nginx
```
notre container aura le nom webapp

### run -attach and detach

#### attach

on peut lancer un container dans un terminal

```bash
docker run kodekloud/simple-webapp
```

on va pouvoir lancer des commandes dans ce container à partir de notre terminal

#### dettach

```bash
docker run -d kodekloud/simple-webapp
```
cette commande nous renvoie l'id de notre container

lance le container en background, on peut voir ce container tourner avec la commande `docker ps`

pour rattacher ce container à notre CLI :

```bash
docker attach `id ou nom du container`
```

quand on utilise l'id d'un container dans une commande docker, les premier symbole suffise ex : a043d


### ps

```bash
docker ps
```

la commande ps nous donne des information sur les containers en cour d'exécution, comme l'id, le nom de l'image et le nom du container

```bash
docker ps -a
```
pour avoir la liste de tous les containers qui tournent ou pas

### stop

pour arrêter un container il nous faut son nom ou l'id:
```bash
docker stop `nom du container ou id`
```

### rm

pour supprimer un container définitivement
```bash
docker rm `nom du container ou id`
```

cette commande nous renvoie le nom du container supprimer

### images

liste des images présentent sur notre machine
```bash
docker images
```

pour supprimer une image
```bash
docker rmi nginx
```
bien s'assurer auparavant qu'aucun container de cette image ne tourne sur notre machine

### pull

télécharge une image docker sans lancer de container
```bash
docker pull nginx
```

### exécuter une commande dans un container

```bash
docker exec `container name` cat /etc/hosts
```

cette commande va afficher le contenu de /etc/hosts de mon container `container name`



