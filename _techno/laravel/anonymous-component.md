---
titre : anonymous component
layout: default
techno: laravel
page.url: anonymous-component
---


## créer un composant anonyme

```bash
php artisan make:component Alert --inline
```
l'ajout de l'option inline indique que ce sera un composant anonyme

cette commande va créer `app/View/Components/Alert.php`

il n'a pas de vue (component), juste un controller

on rentre le contenu directement dans la fonction render du fichier Alerte.php

## utilisation

```twig
<x-alert/>
```

## dynamic component

### création

le contraire du composant anonyme, il n'a pas de controller, juste une vue

on le créer directement dans `ressources/views/components` : testBlade.php
```twig
<div>
    Je suis la div de test
</div>
```

### utilisation
```twig
<x-testBlade/>
```
