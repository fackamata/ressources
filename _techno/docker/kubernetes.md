---
titre : kubernetes
layout: default
techno: docker
page.url: kubernetes
---

on peut lancer 1000 containers, Kb va s'occuper de les répartir dans nos node
```bash
kubectl run --replicas=1000 my-web-server
```

il peut updater ses 1000 containers à la suite
```bash
kubectl rolling-update my-web-server --image=web-server:2
```

on peut revenir avant l'update
```bash
kubectl rolling-update my-web-server --rollback
```

## kubectl

quelque commandes

```bash
kubectl run hello-minikube
```
pour déployer une application


```bash
kubectl cluster-info
```
pour voir les infos sur un cluster


```bash
kubectl get nodes 
```
pour lister tous les nodes de notre cluster


```bash
kubectl run my-web-app --image=my-web-app --replicas=100
```
pour lancer 100 instances de my-web-app à partir de l'image my-web-app