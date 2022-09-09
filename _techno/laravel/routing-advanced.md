---
titre : routing advanced
layout: default
techno: laravel
---

comme pour un CRUD :
afficher les livres, afficher le formulaire d'ajout, ajout d'un livre (POST), formulaire d'édition, éditer un livre (PUT/PATCH), supprimer un livre (DELETE)

pour faire cela automatiquement, on utilise la facade route
```php
Route::resource('livre', 'App\Http\Controllers\BookController');
```
les uri commenceront par livre/... on peut changer livre par book si on veut une uri book/...

resource va créer toute les routes nécessaire à la gestion du CRUD

on peut exclure des routes
```php
Route::resource('livre', 'App\Http\Controllers\BookController')->except(['destroy', 'update']);
```

ou en créer que quelques une
```php
Route::resource('livre', 'App\Http\Controllers\BookController')->only(['destroy', 'update']);
```

pour créer un controller avec toutes les fonctions nécessaire, on ajoute l'option -r
```bash
php artisan make:controller BookController -r
```

## utilisation d'un middleware

```php
Route::group(['middleware' => 'auth'], function(){
    Route::resource('livre', 'App\Http\Controllers\BookController');
});
```

avec group, on peut attribuer un middleware à un ensemble de route

on peut attribuer plusieurs middleware
```php
Route::group(['middleware' => ['auth', 'admin']], function(){
    Route::resource('livre', 'App\Http\Controllers\BookController');
});
```

### profondeur

on peut rajouter de la profondeur à nos middleware
```php
Route::group(['middleware' => 'auth'], function(){
    Route::resource('livre', 'App\Http\Controllers\BookController');
    
    Route::group(['middleware' => 'admin'], function(){
        Route::resource('admin', 'App\Http\Controllers\AdminController');
    }
});
```

## prefix des routes

```php
Route::group(
    ['middleware' => ['auth', 'admin'],
    'prefix' => 'gestion', 
    ],
    function(){
    Route::resource('livre', 'App\Http\Controllers\BookController');
});
```

toute les routes de livre seront préfixer de gestion : gestion/livre/...


## namespace

si on place notre controller dans un dossier book, on peut le préciser dans la route

```php
Route::group(
    ['middleware' => ['auth', 'admin'],
    'namespace' => 'book', 
    ],
    function(){
    Route::resource('livre', 'App\Http\Controllers\BookController');
});
```

## name

on peut également préfixer la route avec l'option as :
```php
Route::group(
    ['middleware' => ['auth', 'admin'],
    'namespace' => 'book', 
    'as' => 'gestion.'
    ],
    function(){
    Route::resource('livre', 'App\Http\Controllers\BookController');
});
```
