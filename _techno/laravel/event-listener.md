---
layout: default
titre : event listener
techno: laravel
---

il existe différent type d'event comme : login, logout, registered, passwordReset...

dans le fichier `app/Http/Controllers/Auth/RegisteredUserController.php`, à la ligne 49, on utilise la fonction event
```php
event(new Registered($user));
```

cette fonction va appeler les listeners de cette évênement

dans le fichier `app/Providers/EventServiceProvider.php`, on retrouve ce listener
```php
protected $listen = [
    Registered::class => [
        SendEmailVerificationNotification::class,
    ],
];
```
quand l'évênement Registered est déclenché, la fonction SendEmailVerificationNotification va être déclenchée.

## création d'event

voir [documentation](https://laravel.com/docs/9.x/events#generating-events-and-listeners)

on créer l'event :
```bash
php artisan make:event PostCreatedEvent
```

on créer le listener :
```bash
php artisan make:listener PostCreatedListener --event=PostCreatedEvent
```

Ces commandes vont nous créer les dossier Event et Listener dans app


## utilisation d'un event
```php
event(new PostCreatedEvent($post));
```

celui-ci va appeler le listener PostCreatedListener, et on place la logique dans la fonction handle de notre listener
```php
public function handle(PostCreatedEvent $event)
{
    dd($event->post->title . ' vient d\être créé !');
}
```

## mapping
on doit mapper ses event listener dans le EventService Provider pour pouvoir l'utiliser:
```php
protected $listen = [
    Registered::class => [
        SendEmailVerificationNotification::class,
    ],
    PostCreatedEvent::class => [
        PostCreatedListener::class,
    ],
];
```