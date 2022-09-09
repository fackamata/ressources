---
titre : run
layout: default
techno: docker
page.url: run
---

## latest
lancer la dernière version d'une image avec ou sans tag
```bash
docker run nginx
docker run nginx:latest
```

## older version
pour lancer une ancienne version, il suffit d'ajouter un tag
```bash
docker run redis:4.0
```

## tag

la liste de tout les tag disponible pour une image peuvent être trouver sur dockerhub.com


## stdin

par exemple si notre app nécessite un prompt pour une entré utilisateur

```bash
docker run -i kodekloud/simple-prompt-docker
```
-i => pour le mode interactif

nous retournera la sortie attendu mais pas de prompt

```bash
docker run -it kodekloud/simple-prompt-docker
```

-it => attach to terminal in a interactive mode

pour avoir le prompte il faut rajouter l'option -t (attach terminal)

## port

un container docker tourne dans un docker host

pour accéder à notre container depuis le docker host on utilise l'ip fournit mais depuis l'extérieur de ce host on doit mapper les port

```bash
docker run -p 80:5000 kodekloud/simple-prompt-docker
```

docker host ip : 192.168.1.5

maintenant quelqu'un d'extérieur à l'host peut accéder via 192.168.1.5:80

## volume

si on supprime un container toutes les données interne sont perdu

si on veut persister des data en dehors d'un container il faut mapper un repertoire

```bash
docker run -v /opt/datadir:/var/lib/mysql mysql
```

ici, on map le rep /opt/datadir du docker host avec le rep /var/lib/mysql du container mysql

## inspect container

la commande ps nous donne des infos succinte sur nos controller

pour plus d'information

```bash
docker inspect `container name`
```

## container log

pour avoir des infos sur un container en background on lance la commande log

```bash
docker logs `container name`
```

