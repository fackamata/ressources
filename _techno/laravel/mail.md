---
layout: default
titre : mail
techno: laravel
---

on doit créer une class mail :
```bash
php artisan make:mail
```
créer un fichier dans `App/Mail/TestMail.php`
```php
public function build()
{
    return $this->from('monemails@test.com')
            ->subject('Mon objet personnalisé')
            ->view('emails.test');
}
```


on créer ensuite une vue `ressources/views/emails/test.blade.php`, en fonction du nom que l'on a donné dans la fonction
build de TestMail.


on peut définir le contenu de notre mail comme n'importe quelle vue blade

## pièce jointe

```php
public function build()
{
    
    return $this->from('monemails@test.com')
                ->subject('Mon objet personnalisé')
                ->view('emails.test')
                ->attach(public_path('likn.png'))
                ->attachFromStorage('img/test.png');
}
```

à la suite de la vue, on peut rajouter des pièces jointes.
- attach : depuis le dossier public avec public_path
- attachFromStorage : depuis le dossier Storage

## markdown

```bash
php artisan make:mail TestMarkdownMail -m emails.markdown-test
```

créé le fichier `ressources/views/emails/mardown-test.blade.php`
créé également `app/Mail/TestMarkdownMail.php`
