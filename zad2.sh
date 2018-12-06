#!/bin/sh
if [ -z "$1" ] ; then
echo "Please give data";
exit 1
fi
user="$1"
echo "Commits";
git shortlog | awk -v a="$user" '{if($1==a)print $2;}'
echo "Changed/deleted lines";
git log --author="$user" --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; } END { printf "Added lines: %s Deleted lines: %s Total changed lines: %s\n", add, subs, add+subs }'

