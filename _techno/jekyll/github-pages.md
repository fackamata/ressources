---
titre : github pages
layout: default
techno: jekyll
---

## to deploy on github

### config.yml

in _config.yml, add github repository name to baseurl

```yml
baseurl: "/repoName" 
```

### Gemfile

```ruby
# gem "jekyll"
# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
gem "github-pages", group: :jekyll_plugins
```

we need to comment the line  gem "jekyll' and add the gem 'github-pages'

Then we install


