---
titre : simple app
layout: default
techno: laravel
page.url: simple-app
---

# simple-app

## création du projet
```bash
laravel new simple-app --git
```
créer un repo git

on se repositionne dans le projet
```bash
cd simple-app
```

on ouvre vs code
```bash
code .
```

dans le fichier .env, on configure l'accès à la BDD
et je peux migrer la migration de base
```bash
php artisan migrate
```


## installation des librairies js
```bash
npm install
```


## création controller


```bash
php artisan make:controller
```
on créé la fonction index et on la test en renvoyant hello world

on créé une route home 

on créé la view pour tester

## création d'une migration

```bash
php artisan make:migration create_lessons_table
```
dans le fichier migration créé on rajoute les colonnes title et description

on créé un model Lesson

```bash
php artisan make:model Lesson
```

on rajoute l'autorisation de auto-assignement avec

```php
protected $fillable = ['title','description'];
```


## factory

pour travailler avec des fausses données on utilise factory

```bash
php artisan make:factory LessonFactory --model=Lesson
```
dans le fichier /database/factory/LessonFactory, on rempli les info pour title et description

on créé le seeder lier

```bash
php artisan make:seeder LessonSeeder
```
dans le fichier /database/seeders/LessonSeeder, on lui dit de créer 10 lessons.

et dans le DatabaseSeeder, on lui dit de lancer le LessonSeeder

on lance ensuite la commande
```bash
php artisan migrate:fresh --seed
```

cette commande nettoie la base de donnée effectue les migration et lance les seeders


## eloquent query

on va envoyer nos lessons à la vue dans notre homeController

```php
public function index(Request $request)
    {
        $lessons = Lesson::all();
        return view('home', compact('lessons'));
    }
```

on test dans notre vue que title et description s'affiche bien
{% raw %}
```twig
@foreach ($lessons as $lesson)
    <h3><a href="{{ route('lesson.view', ['lesson' => $lesson->slug]) }}">{{$lesson->title}}</a></h3>
    <p>{{$lesson->description}}</p>
    <hr>
@endforeach
```
{% endraw %}
pour créer notre slug. on l'ajoute au fillable dans notre model, on le rajoute dans notre factory et dans notre migration

on rafraichi notre BDD
```bash
php artisan migrate:fresh --seed
```

## lesson par id

on créé une nouvelle route pour chaque lesson 

```php
Route::get('/lesson/{lesson:slug}', [LessonController::class,'view'])->name('lesson.view');
```
on accèdera au lesson à partir du slug et on nomme cette route `lesson.view`


on créé un controller Lesson
```sh
php artisan make:controller LessonController
```

on créé la vue correspondante


## table author 

même logique :

model ( autorize name assignement ) > factory > migration( + nom ) > seeder(2) > appel au seeder > rafraichi la BDD

pour créer un model, une migration et une factory
```bash
php artisan make:model Author -mf
```
pour avoir une migration et un controller -mc


## créer la relation

dans la migration lesson on rajoute l'id de l'auteur

dans le model author, on indique qu'un auteur à plusieurs lessons

```php
public function lessons()
    {
        return $this->hasMany(Lesson::class);
    }
```

dans le model lesson, on indique qu'une lesson appartient à un seul author
```php
public function author()
    {
        return $this->belongTo(Author::class);
    }
```

on ajoute l'author_id dans notre lessonSeeder

```php
 public function definition()
    {
        return [
            'title' => $this->faker->sentence,
            'description' => $this->faker->text,
            'slug' => $this->faker->slug,
            'author_id' => Author::inRandomOrder()->first()->id,
        ];
    }
```

on rajoute le nom de l'auteur dans notre vue

