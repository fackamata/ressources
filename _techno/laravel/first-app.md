---
titre : first app
layout: default
techno: laravel
page.url: first-app
---

# laravel learn

## install laravel

install laravel from composer
```bash
composer global require "laravel/installer"
```

to make it global
```bash
export PATH="~/.config/composer/vendor/bin:$PATH"
```

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

## blade

### carbon

carbon to format data like date

### render variable
with extrapolation in blade
{% raw %}
```blade
{{ $title }}
```
{% endraw %}

### function

foreach :
{% raw %}
```blade
@foreach($posts as $post)
    <h3>{{ $post }}</h3>
@endforeach
```
{% endraw %}

# database

in config/database.php, DB_CONNECTION is the database connection name and not the name of the database

we configure the access in .env

migration goes along model in app/Models

## relation

### one to many
```bash
php artisan make:model Comment -m
```

create model and migration

then in migration we add the column that we want and the foreign key

```php
    $table->unsignedBigInteger('post_id');
    $talbe->foreign('post_id')->references('id')->on('posts');

    in shorter therms :
    $table->foreignId('post_id')->constrained();
```

and then in Post models :

```php
 public function comments()
    {
        return $this->hasMany(Comment::class);
    }
```

and in Comment models:
```php
 public function post()
    {
        return $this->belongsTo(Post::class);
    }
```

to display all comment, in the view:
{% raw %}
```blade
    @forelse($post->comments as $comment)
        <h2>{{ $comment->content }} | créé le {{ $comment->created_at->format('d-m-Y') }}</h2>
    @empty
        <h2>aucun commentaire</h2>
    @endforelse

```
{% endraw %}

@ forelse equivalent to foreach, but goes to empty if any

### many to many

need to create a linking table

```bash
php artisan make:migration create_pivot_table_post_tag
```

then we add the foreign key to our pivot table
```php
    $table->foreignId('post_id')->constrained()->onDelete('cascade');
    $table->foreignId('tag_id')->constrained()->onDelete('cascade');
```

and we migrate

```bash
php artisan migrate
```

### one to many polymorphic

like comment on video or post

to optimise and don't create to table comment

### has one through

like a post as one image and an image as one artist

with this relation we can get the artist directly from the post

### has one of many

like to get le last or the first of comments


## validation

we can use the validate function to check input like :

```php
$validated = $request->validate([
    'title' => 'required|min:5|max:255|unique:posts',
    'content'=> 'required'
]);
```
so, if title or content are empty, the form will not be validated, we won't get an error but it will reload the form

if the form is not validated a variable $errors is created.

to view error on our view:
{% raw %}
```blade
@if($errors->any())
    @foreach ($errors->all() as $error)
        <div class="text-red-500">{{ $error }}</div>        
    @endforeach
@endif
```
{% endraw %}

### custom validation rules

```bash
php artisan make:rule Uppercase
```
create a file Uppercase.php in app/Rules

in this file, edit the passes function and message if needed
```php
public function passes($attribute, $value)
{
    return strtoupper($value) === $value;
}
```

and in our Controller :
```php
'title' => ['required','min:5','max:255','unique:posts', new Uppercase], // another way with custom validation rule

```

### translate error message

in config/app.php change to :
```php
'locale' => 'fr',
```

and in resources/lang create a fr directory, copy the 4 files of en directory in it. And then change what need to be change


## file storage

in a controller :
```php
Storage::disk('local')->put('avatars', $request->file('avatar'));
```

it's gonna upload the file in storage/app/avatars

to use the public directory,in a controller :
```php
Storage::disk('public')->put('avatars', $request->avatar);
```

it's gonna upload the file in storage/app/public/avatars

without Storage, directly with $request
```php
$name = $request->avatar->store('avatartest');
```

### helper

in the documentation, there is some helpers for file like:
- exists : return a boolean
- missing : return a boolean
- download : to download a file
- url : return the url of the file
- size : return the size of the file
- path: return the path of the file, but it's better to get the url

to use those helper :
```php
Storage::disk('local')->exists($name);
Storage::disk('local')->missing($name);
Storage::download($name);
Storage::url($name);
Storage::size($name);
Storage::path($name);
```

### to display image in view

we need to create a symbolic link so laravel can link the storage/ to the app/public/ :
```bash
php artisan storage:link
```

# front-end

## include css and js

in our layout file:
{% raw %}
```blade
    <link rel="stylesheet" href="{{ asset('css/app.css')}}">    
    <!-- get the css from public directory -->
 ...

    <script src="{{ asset('js/app.js')}}"></script> 
    <!-- get the js from public directory -->
```
{% endraw %}

### laravel mix
package base on webpack encore

compile all css and js file, to get only one js and css minified to gain space

see webpack.mix.js  at the root of our app

will create /public/js and /public/css when compiling

we need npm to install all dependencies
```bash
npm install
```

to compile all js and css from ressources
```bash
npm run dev
```

### tailwind

#### installation
```bash
npm install -D tailwindcss
```

```bash
npx tailwindcss init
```

```bash
content: [
    './storage/framework/views/*.php',
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
],
```
create a tailwind.config.js where we can configure link to our file that contain template and css,
so tailwind can remove all unnecessary class name to minified 

then we need to add "layers" to our app in ressources/css/app.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

and we modifie our webpack.mix.js like in the documentation
```
mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        require('tailwindcss'),
    ]);
```
### sass/scss

in webpack.mix.js :
```php
mix.js('resources/js/app.js', 'public/js')
    .sass('resources/scss/app.scss', 'public/css', [
        //
    ]);
```

then create in resources :
file scss containing file app.scss

then run :
```bash
npm run watch
```
listen for changes in ressources, and compile only those changes

if it needs to install packages, run the same command again

don't need to lauch the command everytime to make changes as it listen for them