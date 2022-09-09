---
layout: default
titre : authorization
techno: laravel
---

similaire au role dans symfony

## migration pour ajouter une colonne à user

```bash
php artisan make:migration add_admin_column_to_users_table --table=users
```

ensuite, on ajoute une colonne admin à user qui par defaut est un boolean à O.
```php
public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->boolean('admin')->default(0);
        });
    }
```

et on migre
```bash
php artisan migrate
```

## gates

dans le fichier `app/Providers/AuthServiceProvider.php`

dans la fonction boot on défini une gate
```php
Gate::define('access-admin', function (User $user){
        return $user->admin;
    });
```

avec la façade Gate on a les méthodes allows ou denies