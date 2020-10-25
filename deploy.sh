npm run build

cd public

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:CoolBreezeIsComing/qingd.github.io.git

cd ../
rm -rf public