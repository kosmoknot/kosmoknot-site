#! /usr/bin/bash

printf "Started the push \nPushing to git\n"

git push
printf "\nPushing to neocities\n"

PATH="`ruby -e 'puts Gem.user_dir'`/bin:$PATH"
neocities push .

printf "\nneocities stats:\n"
neocities info kosmoknot
