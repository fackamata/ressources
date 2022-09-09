---
titre : docker swarm
layout: default
techno: docker
page.url: docker swarm
---

on peut créer plusieurs host, docker swarm va s'occuper de distribuer nos container entres ces hosts pour de meilleur performance

pour cela on doit avoir plusieur host avec docker installer

on désigne un de ces hosts comme le swarm manager et les autres comme slave/worker

ensuite on lance `docker swarm init` dans le swarm manager, ça va l'initialiser

cette commande nous renvera une autre commande à lancer sur nos worker host `docker swarm join --token <token>` pour qu'il ce join à notre swarm manager

nos worker sont maintenant des nodes de notre swarm cluster

## docker swarm orchestration

pour lancer plusieurs instances d'un serveur web
```bash
docker service create --replicas=3 my-web-server
```

docker service va créer 3 instances de notre webserver

cette commande est lancer depuis le manager node

docker service create fonctionne comme docker run, on lui passe les options de la même manière 
