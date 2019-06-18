#!/usr/bin/env bash

environment=$1

set -e

echo "start build..."
yarn build

echo "build sucess..."

if [ "$environment" == 'dev' ]
then
   ansible-playbook -i inventory-dev play-book.yml
elif [ "$environment" == 'prod' ]
then
  #  ansible-playbook -i inventory-prod site-aliyun.yml
  echo "prod"
else
   echo "env???"
fi

echo "Deploy finished at $(date '+%Y-%m-%d %H:%M:%S')"
