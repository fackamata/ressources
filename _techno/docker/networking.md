---
titre : networking
layout: default
techno: docker
page.url: networking
---

lorsque l'on install docker, cela créé 3 réseaux automatiquement

- bridge
- none
- host

réseau par défaut ou les container son rattachés

si on veut rattacher un container à un autre réseau il faut le préciser avec l'option `--network`
```bash
docker run Ubuntu --network=host
docker run Ubuntu --network=none
```

## bridge

c'est un réseau privé interne créé par docker sur la machine (host)

par défaut chaque container est lancer dans ce réseau.

en général chaque container à une address ip dans les 172.17.0.0/255

chaque container peut recourir à un autre en utilisant ces ip

pour accéder à ces container depuis l'extérieur, il nous faut mapper les port

une autre possibilité est de rattacher nos container au réseau host

## host

pour accéder au container sans avoir a mapper les ports.

mais on ne pourra pas lancer plusieur container similaire comme un server web car les ports seront les même

## none

les container dans ce réseau sont isolé. on ne peut pas y accéder depuis l'extérieur 


## network

par défaut tout nos container seront reliés à un seul bridge réseau à l'intérieur de host

![un réseau](/assets/img/docker/singleNetwork.png)


si l'on veut créer plusieur réseau

![plusieurs réseau](/assets/img/docker/multipleNetwork.png)

ici on créé un nouveau réseau à partir du driver bridge et du subnet 182.18.0/16 suivi par le nom custom-isolated-network

## voir les réseau

pour voir les réseau configurer dans un container on lance la commande `inspect`

```bash
docker inspect `container name`
```

dans les résultats dans la section `NetworkSettings` > `Ǹetwork` on peut retrouver le type de réseau ainsi que son ip interne et son address MAC

pour voir les réseau configurer dans notre systeme on lance la commande `network`

```bash
docker network ls
```

on peut inspecter un network
```bash
docker network inspect bridge
```

## accès entre container

pour avoir accès d'un container à un autre on pourrai utiliser leur address ip mais celle-ci pourrait être différente

on utilisera plutôt le nom des container. Docker comprend un server DNS interne

le serveur DNS interne de docker utilise l'addres 127.17.0.11

 
## création de réseau

docker network create --driver bridge --subnet 182.18.0.1/24 --gateway 182.18.0.1 wp-mysql-network 