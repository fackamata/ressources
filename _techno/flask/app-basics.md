---
titre : app-basics
layout: default
techno: flask
---

## app

create a app.py file in /

```py
from flask import Flask, render_templates
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
app =  Flask(__name__)

# /// relative path
# //// absolute path
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQALchemy(app) # initialize database with the setting of our app


# create a model

class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.string(200), nullable=False)
    completed = db.Column(db.Integer, default=0)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        ''' return a string everytime we create an element '''
        return '<Task %r>' % self.id

# app.route decorator for our routes
@app.route('/')
def index():
    return render_templates('main.html')

if __name__ == "__main__":
    # debug=True to have all errors
    app.run(debug=True)
```

## serve

```bash
python3 app.py
```

this command start a web server where we can see our app

## static & templates

```bash
mkdir static
mkdir templates
```

static => to store css, js, image
static => to store templates

in templates we create a file main.html

in this file we create our app skeleton with block



```jinja
{% raw %}
{# from flask import url_for #}
<link rel='stylesheet' href='{{ url_for('static', filename='css/app.css')}}'>
{{ block head}} {{ endblock}}
{{ block body}} {{ endblock}}
{{ block footer}} {{ endblock}}
{% endraw %}
```

and to use it in all the others pages
```jinja
{% raw %}
{% extends 'main.html' %}
{% block head%} {{endblock}}
{% block body%} {{endblock}}
{% block footer%} {{endblock}}
{% endraw %}
```


