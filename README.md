# Refugees-Helping-Refugees



Note: This repo uses NextJS (already been configured, see pages).

<br><br>
To make changes to the repo, please make sure to first off— build the nextJS static site
```
npm run build
```
Replace old docs with fresh build (as that's what's being deployed to the domain)
```
rm -rf docs
mv out docs
```
Stage, commit, and push changes
```
git add docs
git commit -m "commit message goes here"
git push origin main
```
<sup> Obviously replace commit message with your own based on the commit </sup>

Please note that with NextJS, you do NOT need to push any other files besides what's already here and the docs. When you run `npm build` everything is organized inside of the docs directory already.

Hamzah Alani
