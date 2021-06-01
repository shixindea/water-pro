cd _site
git init
git add -A
git commit -m 'docs($site): deploy site'
git push -f git@github.com:fe6/water-pro.git master:gh-pages
