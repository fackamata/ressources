---
titre : storage
layout: default
techno: docker
page.url: storage
---

lors de l'installation de docker le dossier /var/lib/docker est créé

lors d'un build d'image, docker garde en cache les layer. Si on build une autre image avec des layer similaire, docker ne va pas les builder mais utiliser les layer garder en cache. Donc un gain de temps lors du build ou update

## container layer

![layer right](/assets/img/docker/layerRight.png)

une image contient plusieur layer en read only

quand on run cette image, une container layer est créé en mode read & write. Mais toute les infos de ce couche sont supprimer quand on ferme notre conteneur

## persiste data of container

pour persister des données d'un container, il faut créer un volume

```bash
docker volume create data_volume
```

ce volume est stocker dans le dossier volumes: /var/lib/docker/volumes/data_volume/


### volume mounting
on monte les volumes présent dans /var/lib/docker/volumes/

```bash
docker run -v data_volume:/var/lib/mysql mysql
```
-v => mount a volume

avec l'option v, on peut monter un volume dans notre container à l'emplacement indiquer

si on a pas créé le volume avant cette commande, docker va le créer automatiquement

### bind mounting

on peut monter n'impote quel dossier du docker host

```bash
docker run -v /data/mysql:/var/lib/mysql mysql
```

## new way

l'option -v est obsolet, il est préférable d'utiliser --mount, c'est plus parlant

```bash
docker run --mount type=bind,source=/data/mysql,target=/var/lib/mysql mysql
```

on y précise le type de mount (bind,volume), la source et la target

![volume mounting](/assets/img/docker/volumeMounting.png)

## storage drivers

l'architecture en layer, le montage de disk est possible grace aux storage drivers.

il y a plusieur driver :
- AUFS - ubuntu
- ZFS
- BTRFS
- Device Mapper - fedora/centOS
- Overlay
- Overlay2

docker va choisir automatiquement le meilleur driver en fonction de notre OS

