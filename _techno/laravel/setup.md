---
titre : setup
layout: default
techno: laravel
---

# setup

## install laravel

install laravel from composer
```bash
composer global require "laravel/installer"
```

to make it global
```bash
export PATH="~/.config/composer/vendor/bin:$PATH"

## new app

via composer and github repository
```bash
composer create-project laravel/laravel app-name
```

via laravel
```bash
laravel new blog
```

install missing packages and dependency
```bash
composer install
```

test the app
```bash
php artisan serve
```

### shortcut

```bash
php artisan make:model Timer -mc
```
The command above will not only create the Models, it will also create the migrations and controllers due to the -mc flag. 
- -f -> factory
- -m -> migration
- -c -> controller
- -r -> crud

```bash
php artisan route:list
```
to list all route of our app

## rooting

in routes directory, web.php

we can return a view : in ressources/view
or a string
or a json

### naming route

with the option name, we name a route so if we want to change url, we don't have to change everything
```php
Route::get('/contact', [PostController::class, 'contact'])->name('contact');
```

### find all route 
```bash
php artisan route:list
```

### verification in the rooting
```php
Route::get('/posts/{id}', [PostController::class, 'show'])->whereNumber($id); 
```
we check that id is a number, if not return 404 error code

## controller

controller should send the view

in app/Http/Controllers

new controllers extends controller, controller.php in the directory above

we can make a controller with CLI
```bash
php artisan make:controller
```

