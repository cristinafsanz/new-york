## Installation & Usage

    bundle install
    bundle exec jekyll serve

## Publish to Github Pages

    JEKYLL_ENV=production bundle exec rake site:publish

## Local work
    git clone https://github.com/cristinafsanz/new-york.git
    git checkout -b gh-pages
    git pull origin gh-pages

Make all necessary changes

    bundle exec jekyll build --save
    build exec jekyll serve

    git add ...
    git commit -m "..."
    git push origin gh-pages


## Thanks

This blog was forked from https://github.com/willkoehler/my_blog 

Will Koehler's blog was forked from https://github.com/kippt/jekyll-incorporated. Originally built for
[sendtoinc.com](https://sendtoinc.com), your workspace for sharing and organizing knowledge.
Original template built by:

**Karri Saarinen**

+ [http://twitter.com/karrisaarinen](http://twitter.com/karrisaarinen)
+ [http://github.com/ksaa](http://github.com/ksaa)

**Jori Lallo**

+ [http://twitter.com/jorilallo](http://twitter.com/jorilallo)
+ [http://github.com/jorde](http://github.com/jorilallo)
