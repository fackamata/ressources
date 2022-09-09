---
titre : docker compose
layout: default
techno: docker
page.url: docker compose
---

avec docker compose on fait de la config avec yaml

## complexe application

si on utilise plusieurs container il est plus simple de les configurer à l'aide d'un fichier docker-compose.yml

![docker-compose.yml](/assets/img/docker/dockerCompose.png)

une fois notre docker-compose configurer on lance la commande `up`

```bash
docker-compose up
```

cette commande va installer l'ensemble de notre stack définit dans docker compose

## --links

pour relier différent container on peut utiliser l'option link

```bash
docker run -d --name=redis redis
docker run -d --name=vote -p 5000:80 --link redis:redis voting-app
docker run -d --name=db postgres:9.4 
docker run -d --name=result -p 5001:80 result-app
docker run -d --name=worker --link db:db --link redis:redis worker
```

on peut remarquer que plus gros est notre stack et plus les liens vont être compliquer à maintenir

### avec docker-compose

pour le même stack en utilisant docker-compose.yml
```yaml
redis:
  image: redis
db:
  image: postgres:9.4
vote:
  image: voting-app
  ports:
    - 5000:80
  links:
    - redis
result:
  image: result-app
  ports:
    - 5001:80
  links:
    - db
worker:
  image: worker
  links:
    - db
    - redis
```

et pour lancer cette config

```bash
docker-compose up
```

le fichier docker-compose est beaucoup plus clair et si des changement sont à opérer, ce sera plus simple

## compose - build

on peut utiliser des images de dockerhub dans notre yaml mais également des image que l'on a créé nous même. Si celle ci ne sont pas encore build, on le précise dans notre docker-compose

```yaml
vote:
  build: ./vote
```

au lien de l'instruction `image`, on va utiliser l'instruction `build` avec le chemin où se situe notre code.

Maintenant quand on va lancer `docker-composer up`, docker va d'abord builder notre image, lui donner un nom temporaire et run un container à partir de cette image. 

## docker compose -versions

docker compose à évolué avec le temps.

pour les versions 2 et suppérieur, on spécifie en début de fichier la version que l'on utilise

![compose version](/assets/img/docker/composeVersion.png)

### with network

dans la version 1, docker attache tout les container au réseau bridge par défaut. Et les links sont là pour relier nos différent container.

dans la version 2, docker créé un réseau bridge dédié à cette application et y attache tous les containers. Les containers communique entre eux en utilisant leur service name. les links sont du coup inutile

### priorité d'install

à partir de la version 2, on peut spécifier un ordre d'install en indiquant si un container est dépendant d'un autre avec `depends_on`

```yaml
version: 2
services:
  redis:
    image: redis
  vote:
    image: voting-app
    depends_on:
      - redis
```

dans cette exemple docker installera redis avant vote puisque celui-ci dépend de redis

### plusieur réseau

avec la version 2, on peut créer des réseau avec docker-compose

![compose version](/assets/img/docker/ComposeMultipleNetwork.png)

dans cette exemple, on relie certain container au réseau back-end et d'autre au réseau back-end et front-end. Le container worker devrait lui aussi être relié au réseau back-end