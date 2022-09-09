---
titre : docker registry
layout: default
techno: docker
page.url: docker registry
---

docker registry est le cloud, c'est là où les images sont rangées

![image name](/assets/img/docker/imageName.png)

quand on précise qu'un seul nom, docker assume que les deux sont similaires

par défaut toutes les images sont stockées dans docker hub

![docker io](/assets/img/docker/dockerIo.png)

## private registry

si on ne veut pas partager ses images, on les places dans des registres privés.

AWS, Azure ou BCP donne accès à un registre privé par défaut.


## docker private registry

on peut placer des images privé dans docker

on doit alors se loger

```bash
docker login private-registry.io
```

et pour lancer un container

```bash
docker run private-registry.io/apps/internal-app
```

si on est pas loguer, docker nous indiquera que l'image ne peut pas être trouvé

## docker registry local

docker registry à sa propre image, on peut lancer un container à partir de celle-la.

```bash
docker run -d -p 5000:5000 --name registry registry:2
```

pour enregistrer une image dans ce registre

```bash
docker image tag my-image localhost:5000/my-image
```
on doit taguer l'image avec l'adresse de notre registre privé

on peut maintenant pusher notre image dans ce registre

```bash
docker push localhost:5000/my-image
```

en utilisant la commande `push` et les info de notre registre et le nom de notre image

on peut maintenant puller cette image depuis ce réseau

si on est sur le même host :

```bash
docker pull localhost:5000/my-image
```

ou par l'ip ou le nom de domain du docker host, si on est sur un notre host dans notre environnement :

```bash
docker pull 192.168.56.100:5000/my-image
```


