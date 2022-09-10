---
titre : jekyll
layout: default
techno: jekyll
---



To install it in ubuntu : [Installation](https://jekyllrb.com/docs/installation/ubuntu/).

## create a jekyll

to create a basic website
```bash
jekyll new websiteName
```

### jekyll with no theme
```bash
jekyll new websiteName --blank
```

then create a Gemfile
```bash
bundle init
```

then in this file add jekyll
```ruby
gem "jekyll"
```

## _config.yml

this file contains configuration & global variables.

After each modification of this file, we need to restart the server

## _includes

contains HTML for elements you'd repeatedly use like header, footer, navbar, ...


## _layouts

contains templates for different types of pages.

in this directory store all the layout like default.html

to use them, in the front matter : 
```yml
---
layout: default
title: Home
---
```

## _posts

contains .md and .html blog posts

## _sass

contains styling for website

can contains multiple sass files

### include multiple sass

in assets/css/main.scss
```scss
--- 
--- 

$baseurl: "{{ site.baseurl }}";

@import "main";
@import "utilities";
...
```
list all sass files contained in _sass

## start server
```bash
bundle exec jekyll serve
```

## add collection

to add a new collection we add to _config.yml
```yml
    collections:
      recipes:
        output: true
```
where recipes is the name of our collection

output true, so all the items of our collection will be a page linkable

## debug

to inspect a variable like with console_log or var_dump :
{% raw %}
```html
{{ variable | inspect }} 
```
{% endraw %}
ou
{% raw %}
```html
{{ variable | jsonify }} 
```
{% endraw %}
