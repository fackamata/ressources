---
titre : CMD vs ENTRYPOINT
layout: default
techno: docker
page.url: /CMD-vs-ENTRYPOINT
---

## CMD

l'instruction `CMD` sert à définir quelle commande va être lancer lors de l'exécution de notre container

```docker
FROM ubuntu:14.04
...
CMD ["bash"]
```

### format

l'instruction `CMD` peuvent être écrite de deux façon

dans un array :
```docker
CMD ["command", "param1"]
CMD ["sleep", "5"]
```

en mode shell :
```docker
CMD command param1
CMD sleep 5
```

### inconvénient

avec l'instruction `CMD`, l'argument de la commande est codé en dure et on ne peut pas y accéder lorsque l'on run notre container

## ENTRYPOINT

```docker
ENTRYPOINT ["sleep"]
```

avec l'instruction `ENTRYPOINT` on va pouvoir donné un argument à la commande exécuter lors du run de container

```docker
docker run ubuntu-sleeper 10
```

c'est comme si on avait écrit dans notre Dockerfile
```docker
CMD sleep 10
```

mais cette fois on peut lui donner la valeur souhaité à chaque lancement de container


### valeur par défaut

si on veut définir une valeur par défaut à notre ENTRYPOINT 
```docker
FROM Ubuntu
ENTRYPOINT ["sleep"]
CMD ["5"]
```

ici l'instruction `CMD` va nous permettre de rajouter l'argument 5 à notre `ENTRYPOINT` sleep

comme ça si on entre aucun argument, notre container exécutera la commande sleep pour 5 seconde.

Si on ajoute un argument lors du run de notre container, l'argument de l'instruction `CMD` sera remplacer par le notre.

### changement de ENTRYPOINT

```bash
docker run --entrypoint sleep2.0 ubuntu-sleeper 10
```
--entrypoint => nouvelle commande à exécuter lors du lancement de notre container
