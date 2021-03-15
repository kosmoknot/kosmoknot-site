#! /usr/bin/bash

printf "Started the push \n \n \nPushing to git\n"

git push
printf "\n \n \n Pushing to neocities\n"

neocities push .

printf "\n \n \nneocities stats:\n"
neocities info kosmoknot
