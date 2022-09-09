---
titre : environment variables
layout: default
techno: docker
page.url: environment variables
---

## lancer les variable d'environnement

pour lancer une variable d'environnement lors du lancement d'un container
```bash
docker run -e APP_COLOR=blue simple-webapp-color
```

-e => environment variable

## trouver les variable d'environnement

pour trouver les différentes variable d'environnement disponible pour une image

```bash
docker inspect `container name`
```

dans le resultat sous config on retrouve env qui regroupe les variables d'environnement set dans le container
