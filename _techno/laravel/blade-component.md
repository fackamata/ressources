---
layout: default
titre : blade component
techno: laravel
page.url: /blade-component
---

plus optimiser que les composant anonyme et dynamique

## créer un nouveau composant
```bash
php artisan make:component NewFirstComponent
```

créé un nouveau fichier app\View\Component\NewFirstComponent.php, qui fonctionne comme un sous controller
créé un nouveau fichier ressource\view\components\new-first-component.blade.php

## utiliser un composant blade

dans une vue:
```twig
<x-newFirstComponent />
```

## utilisation de variable
on initialise la variable dans NewFirstComponent.php
```php
class NewFirstComponent extends Component
{
    public $name;

    public function __construct($name)
    {
        $this->name = $name;
    }
```

initialisation de notre composant blade

{% raw %}
```twig
<h3>salut {{ $name }}</h3>
```
{% endraw %}

utilisation dans blade
```twig
<x-newFirstComponent name='richard'/>
```

## variable dynamique

on initialise la variable dans NewFirstComponent.php
```php
class NewFirstComponent extends Component
{
    public $name;
    public $title;

    public function __construct($name, $title)
    {
        $this->name = $name;
        $this->title = $title;
    }
```

initialisation de notre composant blade
{% raw %}
```twig
<h3>salut {{ $name }}, le post à pour titre {{ $title }}</h3>
```
{% endraw %}

utilisation dans blade
```twig
<x-newFirstComponent name='richard' :title="$post->title" />
```

## utilisation de style
dans notre composant
{% raw %}
```twig
<div {{ $attributes }}>
    ...
</div>
```
{% endraw %}

pour autoriser l'utilisation de classe dans notre vue

utilisation dans blade
```twig
<x-newFirstComponent name='richard' class='text-green-300' />
```

## fusionner les attributs

{% raw %}
```twig
<div {{ $attributes->merge(['class' => 'font-bold']) }}>
    ...
</div>
```
{% endraw %}

## render des tags

on créer une fonction getTags dans notre NewFirstComponent, et on les retourne à la vue dans la fonction render
```php
public function render()
{
    return view('components.new-first-component', [
        'tags' => $this->getTags()
    ]);
}

private function getTags()
{
    return [
        'HTML',
        'PHP',
        'JavaScript'
    ];
}
```

et on peut ensuite l'utiliser dans notre component blade
{% raw %}
```twig
<div>
    <h3 class="text-green-300" >salut {{ $name }}</h3>

    @foreach ($tags as $tag)
        {{ $tag }}
    @endforeach
</div>
```
{% endraw %}

## ajout de contenu

```twig
<x-newFirstComponent name='slot'>
    <div>test d'inclusion de contenu</div>
</x-newFirstComponent>
```

pour qu'il soit inclus, on rajoute slot à l'endroit voulu dans notre component blade
{% raw %}
```twig
<div>
    <h3 class="text-green-300" >salut {{ $name }}</h3>

    {{ $slot }}
    @foreach ($tags as $tag)
        {{ $tag }}
    @endforeach
</div>
```
{% endraw %}

### balise <x-slot>

```twig
<x-newFirstComponent name='slot'>
    <x-slot name='soustitre'>un sous titre</x-slot>
</x-newFirstComponent>
```

pour qu'il soit inclus, on rajoute la variable du nom du slot à l'endroit voulu dans notre component blade
{% raw %}
```twig
<div>
    <h3 class="text-green-300" >salut {{ $name }}</h3>

{% endraw %}
{% raw %}
    {{ $soustitre }}

    @foreach ($tags as $tag)
        {{ $tag }}
    @endforeach
</div>
```
{% endraw %}