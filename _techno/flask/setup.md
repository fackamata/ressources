---
titre : setup
layout: default
techno: flask
page.url: setup
---

## install

require python3 and pip3

create a directory for our app and go in it.

create an env

if virtualenv is not installed
```
pip3 install virtualenv
```

to install all the requirements in the working directory

```bash
virtualenv env
```
create a env directory

now we activate our environment

```bash
source env/bin/activate
```

now our command line is prefix with (env)

everything that we install now, will be in our env not anywhere else on our machine.

## requirement

let's install our requirement

```bash
pip3 install flask flask-sqlalchemy
```

python librairy that we need for our app