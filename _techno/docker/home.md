---
titre : home
layout: default
techno: docker
page.url: home
---

## à quoi sert-il ?

facilite les problèmes de dépendances, librairies entre les systèmes.
Si je travail avec nodeJS, MongoDB, Reddit et Ansible, je peux créer un container pour chacun. Chaque container aura les dépendances et les librairies utile à chaque techno.

## container

des environements totalement isolé. Ils ont leur propre process, services, network interfaces, mount.
Ils tournent tous sur le même OS Kernel

Les containers sont réutilisable n'importe où autant de fois que l'on veut.

Ils sont beaucoup moins gourmant en ressources et en poids (en Mb contre Gb pour VirtualMachine), ils chargent très rapidement.


## OS

la différence entre les différent OS linux c'est les softwares qui sont installer, les drivers, l'interface utilisateur.

Il partage tous l'OS Kernel Linux.

Si on veut faire tourner des containers ubuntu, fedora, redHat... On peut, il partageront tous l'OS kernel, et chaque container aura les softwares, driver... propres à chaque OS.


## comment ça marche.

Beaucoup d'OS, DBB, services on des images toute prête sur DockerHub

```bash
docker run ansible
docker run mongodb
docker run redis
```

cette commande va nous installer les containers ansible, mongodb et redis


on peut également installer plusieurs container d'une même techno
```bash
docker run nodejs
docker run nodejs
docker run nodejs
```
comme ça, si un des containers ne fonctionne pas correctement on n'a juste a détruire son container


## container vs image

une image est un package, une configuration prêt à être utiliser. 

un container et une version de cette image, on peut en faire tourner autaut que voulu.

Une image docker fonctionnera de la même façon sur n'importe quel ordi.