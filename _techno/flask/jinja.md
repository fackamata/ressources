---
titre : jinja
layout: default
techno: flask
---


There are a few kinds of delimiters. The default Jinja delimiters are configured as follows:
```jinja
{% raw %}
{% ... %} for Statements
{% endraw %}

{% raw %}
{{ ... }} for Expressions to print to the template output
{% endraw %}

{% raw %}
{# ... #} for Comments not included in the template output
{% endraw %}
```


## Standard Context

The following global variables are available within Jinja2 templates by default:

### config

The current configuration object (flask.Flask.config) 

### request

The current request object (flask.request). This variable is unavailable if the template was rendered without an active request context.

### session

The current session object (flask.session). This variable is unavailable if the template was rendered without an active request context.

### g

The request-bound object for global variables (flask.g). This variable is unavailable if the template was rendered without an active request context.

### url_for()

The flask.url_for() function.

### get_flashed_messages()

The flask.get_flashed_messages() function.


## Registering Filters

If you want to register your own filters in Jinja2 you have two ways to do that. You can either put them by hand into the jinja_env of the application or use the template_filter() decorator.

The two following examples work the same and both reverse an object:

```python
@app.template_filter('reverse')
def reverse_filter(s):
    return s[::-1]

def reverse_filter(s):
    return s[::-1]
app.jinja_env.filters['reverse'] = reverse_filter
```

In case of the decorator the argument is optional if you want to use the function name as name of the filter. Once registered, you can use the filter in your templates in the same way as Jinja2’s builtin filters, for example if you have a Python list in context called mylist:

```jinja
{% raw %}
{% for x in mylist | reverse %}
{% endfor %}
{% endraw %}
```
