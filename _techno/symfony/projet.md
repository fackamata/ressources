---
layout: default
titre : projet
page.url: /projet
techno: symfony
---

# symfony


- configurer son fichier .env : user et password. Pour que doctrine puisse avoir accès à la base de données

- pour créer la base de donnée par rapport aux entitées :

```
bin/console doctrine:schema:update --force 
```
```bash
symfony console doctrine:migrations:migrate
```

## Autentification et User

### création de l'user avec :  
```bash
symfony console make:user
```
permet la création d'une entité user avec une propriété unique, ici sur username
On retrouve l'entité User dans /src/Entity/


### création des entité avec : 
```bash
symfony console make:entity
```
On retrouve les entitées crées dans /src/Entity/

### création de l'authentification :
```bash
symfony console make:auth
```
Création de la page login dans /templates/security/login.html.twig

Création des fonction de login et logout dans /Controller/AuthController.php

## Formulaire

### création des formulaire avec : 
```bash
symfony console make:form
```
Créer des formulaires par rapport au entitées

### création du formulaire de registration avec : 
```bash
symfony console make:registration-form
```
Créer un formulaire d'autentification, qui peut gérer l'envoie de mail pour valider l'autentification
mais également le login dès validation et la redirection dès login

on ajoute ensuite les champs que l'on veut pour le formulaire d'enregistrement dans /src/entity/RegistrationFormType.php
```bash
symfony console make:form
```
## Enregistrement des images

on ajoute dans les entitées voulu :

```php
use App\Interfaces\FilableInterface;

class User implements FilableInterface
{
    public const FILE_DIR = '/upload/user';
...

public function getFileDirectory(): string
{
    return self::FILE_DIR;
}
```

## récupération de l'user

pour pouvoir récupérer l'username de l'user, on ajoute a l'entité user :

```php
public function __toString()
    {
        return $this->getUsername();
    }
```

## récupération des types / __toString()

pour pouvoir récupérer le nom des différent type, on ajoute a l'entité type :

```php
public function __toString()
    {
        return $this->getNom();
    }
```

## Automatisation de la date

pour enregistrer automatiquement la date de publication,

on rajoute dans l'entité    

```php
public function __construct()
    {
        $this->date = new \DateTime();
    }

```

### création des controller avec : 
```bash
symfony console make:controller
```
dans le controller on crée les différentes fonction qui on chacune des routes définies et qui renvoie vers la vue donnée.

## Front-end

### CSS

les feuilles de style sont placer dans le fichier /public/css/
les images relative au front-end sont placer dans le fichier /public/img/

### Bootstrap form

```yaml
form_themes: ['bootstrap_5_layout.html.twig']
```
Ajout de cette ligne dans /config/packages/twig.yaml.

Permet d'avoir des formulaire bootstrap dans l'ensemble de l'application

## affichage des descriptions

dans Twig, on peut couper un texte par un filtre, dans l'exemple, description n'aura que 30 charactères suivi de ...

{% raw %}
```twig
{{ conseil.description| slice(0,30)}}...
```
{% endraw %}
## Autre 

### Role

dans /config/packages/security.yaml

```yaml
security:
    ...
    access_control:
        - { path: ^/admin, roles: ROLE_ADMIN }
```

## Optimisation

### compteur de vue

création d'une fonction pour compter le nombre de vue sur une annonce ou un conseil

utilisation double, donc on créer un fonction public dans le dossier Service

### User service

fonction findByUser : pour trouver les annonces, avis, conseil en fonction de l'utilisateur connecté

fonction count : pour retourner le nombre d'annonces, avis, conseil de chaque utilisateur connecté

### Image

Utilisation du bundle LiipImagineBundle pour optimiser les images.

Pour l'installer :
```bash
composer require liip/imagine-bundle
```

Configuration dans le fichier Config/Packages/liip_imagine.yaml :
```yaml
liip_imagine:
    # valid drivers options include "gd" or "gmagick" or "imagick"
    driver: "gd"
    filter_sets:
        miniature:      # nom de notre filtre
            quality: 75 # compresse l'image à 75%
            filters:    # quel filtre on applique
                thumbnail:  # on lui spécifie le filtre
                    size: [600, 330]    # on définit notre format
                    mode: outbound      # le mode de découpe à utiliser si le ration ne convient pas
```

Ça créé un nouveau dossier : /public/media/cache/miniature/ reprend la hiérarchie des images.

et pour utiliser notre nouveau filtre 'miniature', dans un fichier twig :
{% raw %}
```twig
<img src="{{ annonce.photo | imagine_filter('miniature') }}" alt="{{ annonce.titre }}" />
```
{% endraw %}


# déploiement

## heroku

on se log sur heroku :
```bash
heroku login
```

on créer le répertoire partagetonterrain avec la région europe :
```bash
heroku create --region eu partagetonterrain
```

ce qui créer l'application

https://partagetonterrain.herokuapp.com/

on modifie la config d'heroku :
```bash
heroku config:set APP_ENV=prod
```
```bash
heroku config:set APP_SECRET=$(php -r 'echo bin2hex(random_bytes(16));')
```

### création du Procfile :
```bash
touch Procfile
echo "release: php bin/console cache:clear" > Procfile
echo "web: heroku-php-apache2 public/" > Procfile
```
La première commande pour que le cache soit netoyer à chaque nouveau déploiement

### ajout pour MySql :

```bash
heroku addons:add cleardb:ignite
```
```bash
heroku config:get CLEARDB_DATABASE_URL
```

Pour voir les config heroku :
```bash
heroku config
```

### ajout apache
```bash
composer require symfony/apache-pack
```

créer le fichier .htaccess dans /public

# page d'erreur

installer twig-pack
```bash
composer require symfony/twig-pack
```

Dans Template créer les dossier bundles/TwigBundle/Exception


Pour voir les erreurs, il faut passer en mode prod dans .env, et toujours supprimer le cache en prod
dans var/cache/prod

Sinon pour tester en mode dev dans l'url on tape :

[127.0.0.1:8000/index.php/_error/404](http://127.0.0.1:8000/index.php/_error/404)


### code et texte dans twig

Pour récupérer les codes ou messages d'erreur dans twig :
{% raw %}
```twig
{{ status_code }}
{{ status_text }}
```
{% endraw %}

on peut mettre un dump vide pour voir toutes les infos disponible

## page d'erreur personaliser

installer twig-pack
```bash
composer require symfony/twig-pack
```

Dans Template créer les dossier bundles/TwigBundle/Exception


Pour voir les erreurs, il faut passer en mode prod dans .env, et toujours supprimer le cache en prod
dans var/cache/prod

Sinon pour tester en mode dev dans l'url on tape :

[127.0.0.1:8000/index.php/_error/404](http://127.0.0.1:8000/index.php/_error/404)


### code et texte dans twig

Pour récupérer les codes ou messages d'erreur dans twig :
{% raw %}
```twig
{{ status_code }}
{{ status_text }}
```
{% endraw %}

on peut mettre un dump vide pour voir toutes les données auquelles ont a accès.

