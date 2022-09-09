---
layout: default
titre : usefull package
page.url: /usefull-package
techno: symfony
---
# adding packages

## list recipes installed
```bash
composer recipes
```

## annotation
```bash
composer require annotations
```
to add route via annotation

## Web Debug Toolbar 
```bash
composer require debug --dev
```
we got the web debug toolbar


## Http Client
```bash
composer require symfony/http-client
```
Provides powerful methods to fetch HTTP resources synchronously or asynchronously

## asset component
```bash
composer require symfony/asset
```
to access files through asset

### exemple
{% raw %}
```html
<link rel="stylesheet" href="{{ asset('css/app.css') }}">
```
{% endraw %}

## twig
```bash
composer require symfony/twig-pack
    or
composer require templates      // flex aliases
```
create a templates repository and install twig pack


## make

```bash
composer require --dev symfony/maker-bundle
```
now we can use make in the CLI 

## remove packages
```bash
composer remove [package_name_or_recipe_name]
```
