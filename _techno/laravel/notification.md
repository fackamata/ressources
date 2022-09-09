---
titre : notification
layout: default
techno: laravel
---

pour créer une notification
```bash
php artisan make:notification UserRegisterNotification
```

créé le fichier `app/Notification/UserRegisterNotification`

## notification en base de données

```php
php artisan notifications:table
php artisan migrate
```

pour créer une table notification

### envoie en bdd

dans le UserRegisterNotification.php
```php
public function via($notifiable)
    {
        return ['mail', 'database'];
    }
```

et on dit ce qu'il faut enregistrer en bdd dans la fonction toArray
```php
public function toArray($notifiable)
    {
        return [
            'title' => 'Mon titre est ' . $this->post['title'],
            'mon_email' => $notifiable->email
        ];
    }
```

### notification dans une vue

pour voir les notifications dans une vue

{% raw %}
```twig
@foreach(auth()->user()->notifications as $notification){
    <p>{{ $notification }}</p>
}
@endforeach
```
{% endraw %}