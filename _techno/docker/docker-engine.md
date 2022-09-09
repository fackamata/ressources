---
titre : docker engine
layout: default
techno: docker
page.url: docker engine
---

quand on install docker, celà install 3 choses:

docker deamon tourne en arrière plan, il manage les objets docker comme les containers, les images, les volumes et network

docker CLI peut fonctionner sur un remote docker engine
```bash
docker -H=remote-docker-engine:2375
```

avec l'option -H en lui précisant l'adresse et le port du docker engine

pour lancer un container nginx en remote :

```bash
docker -H=10.123.2.1:2375 run nginx
```

## partage des resources

dans un sytem linux, les container partages les ressources CPU et Memory

![system ressources](/assets/img/docker/systemeRessources.png)

par défaut il n'y a pas de limitation pour un containeur sur les ressources qu'il peut utiliser. Un containeur peut utiliser 100% du CPU

pour limiter le cpu pour un containeur

```bash
docker run --cpus=.5 ubuntu
```
dans ce cas, le container ubuntu ne pourra pas utiliser plus de 50% du CPU

pareil pour la mémoire

```bash
docker run --memory=100m ubuntu
```
dans ce cas, le container ubuntu ne pourra pas utiliser plus de 100Mb de mémoire