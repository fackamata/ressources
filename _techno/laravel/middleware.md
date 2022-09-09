---
titre : middleware
layout: default
techno: laravel
---

permet de couper la requête entre le client et le server

pour autoriser l'accès seulement aux personnes identifier sur plusieurs route :
```php
Route::middleware('auth')->group(function() {
    Route::get('/foo', [TestConstroller::class, 'foo']);
    Route::get('/bar', [TestConstroller::class, 'bar']);
});
```
dans le fichier web.php

## dans un controller

on peut utiliser les middlewares directement dans la fonction construct d'un controller
```php
public function __construct()
{
    $this->middleware('auth')->except('bar');
}
```

## middleware personnalisé
```bash
php artisan make:middleware IsAdmin
```
créé le fichier `app/Http/Middleware/IsAdmin.php`

on doit l'enregistrer dans notre `app/Http/kernel.php`
```php
protected $routeMiddleware = [
    'auth' => \App\Http\Middleware\Authenticate::class,
    ...
    'admin' => \App\Http\Middleware\IsAdmin::class,        
];
```

on peut déshormais l'utiliser comme n'importe quel middleware

on entre la logique du middleware dans la fonction handle
```php
public function handle(Request $request, Closure $next)
{
    // on vérifie si l'utilisateur connecté est administrateur

    // si oui, continuer jusqu'a la prochaine requête
    if(auth()->user()->admin == 1){
        return $next($request); // je passe la main à la prochaine request
    } else {
        // si non, on retourne une 403
        abort(403);
    }
}
```
