---
titre : soft delete
layout: default
techno: laravel
---
ne supprime pas de façon permanente

rajoute la colonne delete_at qui une fois rempli sera considérer comme supprimer

pour utiliser le softdelete, on utilise un Trait 
```php
class Flight extends Model
{
    use SoftDeletes;
}
```

et ensuite on fait une migration pour créer la colonne delete_at
```bash
php artisan make:migration add_delete_at_to_post_table --table=Posts
```

dans le fichier créer, on met à jour les schemas en se servant de la [documentation](https://laravel.com/docs/9.x/eloquent#querying-soft-deleted-models)
```php
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
 
Schema::table('posts', function (Blueprint $table) {
    $table->softDeletes();
});
 
Schema::table('posts', function (Blueprint $table) {
    $table->dropSoftDeletes();
});
```

et pour prendre en compte ces changement : 
```bash
php artisan migrate
```

## suprimer un post

pour supprimer un post en particulier

```php
$post = Post:find(1);

$post->delete();
```

notre post n'apparait plus dans la vue, mais il est toujours présent dans notre base de données avec une date dans 
la colonne delete_at

## récupérer un post supprimer

```php
$post_supprimer = Post::withTrashed()->where('id', 1)->get();

dd($post_supprimer);
```


## restaurer un post supprimer

```php
$post_supprimer = Post::withTrashed()->where('id', 1)->restore();
```

## supprimer définitivement

:warning: **Warning:** Le post est supprimé définitivement.

```php
$post = Post:find(1);

$post->forceDelete();
```

cette fois le post est supprimer en base de données, il est impossible de le retrouver.

