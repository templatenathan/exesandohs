#!/bin/bash
repositoryName=$1
gh repo create templatenathan/$repositoryName --template "https://github.com/templatenathan/template" --public

while [ ! -f $repositoryName/package.json ]
do
  rm -rf $repositoryName
  sleep 0.1
  gh repo clone github.com/templatenathan/$repositoryName
done

cd $repositoryName
sed -i '' -e "s/\"name\": \"template\"/\"name\": \"$repositoryName\"/g" "package.json"
sed -i '' -e "s/templatenathan_template/$repositoryName/g" ".github/workflows/sonarcloud.yml"
sed -i '' -e "s/\"template\"/\"$repositoryName\"/g" "main.tf"
npm i
git add .
git commit -m "chore: change 'template' to '$repositoryName' in package json"
sfdx force:project:create -n $repositoryName
git add .
git commit -m "chore: initialize salesforce project"
git push
echo "finished setting up the repo: $repositoryName"
code .
