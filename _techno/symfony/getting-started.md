---
layout: default
titre : getting started
page.url: /getting-started
techno: symfony
---

# first step

create a skeleton project :
```bash
symfony new `project_name` --version=5.1
```
this create a simple app on version 5.1

create a full project:
```bash
symfony new `project_name` --wepapp
```
this is the full version with all dependences

## check req

to check if we got all requirement
```bash
symfony check:req
```

## start server

to develop in https mode, install localy a https server:
```bash
symfony server:ca:install
```

to launch server :
```bash
symfony serve
or
symfony serve -d	// run in background 
symfony server:stop	 // to stop the background server
```


dans .env : changer les infos de la base de données
pour que ce soit pris en compte avec phpmyadmin :
	$ bin/console doctrine:database:create


	$request = Request::createFromGlobals(); = Request $request appelé en param de la fonction
créer un objet qui prend en compte toutes les globals $_POST $_GET $_SESSION ...
ex :	$age = $request->query->get('age', 0);
=> récupere $_GET["age"] sinon $age=0, query = methode get