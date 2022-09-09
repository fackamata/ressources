---
titre : authentication
layout: default
techno: laravel
---

## configure database

in .env, put the name of the database. As well as username and password

## install laravel/breeze

nous permet d'utiliser un system d'authentification

```bash
composer require laravel/breeze --dev
```

maintenant on peut utiliser la commande
```bash
php artisan breeze:install
```

nous a créé toutes les class de l'authentification dans `app/Http/Auth/`, ainsi que les vues correspondantes dans `ressources/views/auth/`

cette commande nous créé le fichier routes/auth.php, où on retrouve un certain nombre de route utile à l'authentification

on peut voir ces routes avec la commande:
```bash
php artisan route:list
```

pour utiliser complètement ce système d'authentification, il faut compiler les assets et installer les différentes dépendances Front 
```bash
npm install && npm run dev
```

npm install : pour installer
npm run dev : pour compiler

## migrer les tables

après avoir créer une base de donnée, on migre
```bash
php artisan migrate
```

## midleware

pour gérer l'accès à certaine vue et obligé l'authentification pour y accéder

le middleware va courcircuiter notre requete HTTP

```php
public function __construct()
{
    $this->middleware('auth')->except(['bar', 'test']);
}
```
l'ajout du middleware auth dans le constructeur de notre Controller test oblige l'utilisateur à être connecté pour accéder au page désservie par le controlleur Test

si on n'est pas connecté, on est renvoyer à la page login. On peut modifier cette redirection dans le fichier  `App\Http\Middleware\Authenticate.php`

on peut autoriser des routes sans login avec la fonction except.


## accès depuis la vue

### seulement si authentifier

{% raw %}
```twig
@auth
    {{ Auth::user()->name }}  // pour récupérer le nom de l'utilisateur
    {{ Auth::user()->id }}  // pour récupérer l'id de l'utilisateur
    ....
@endauth
```
{% endraw %}
le contenu à l'intérieur de ses balises blade sera visible seulement si l'utilisateur est connecté

## si non authenfifier

```twig
@guest
    'Vous n'êtes pas connecté'
@endguest
```

le contenu à l'intérieur de ses balises blade sera visible seulement si l'utilisateur n'est pas connecté
