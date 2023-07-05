#!/bin/bash

day=$(date +%d)
month=$(date +%m)
year=$(date +%Y)

if (( day <= 15 )); then
  tag="${year}.${month}.01"
else
  tag="${year}.${month}.15"
fi

printf "$tag"
