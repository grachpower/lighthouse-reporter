#!/bin/bash
#export $(cat .env | xargs);
export DOCKER_REGISTRY=46.229.221.57:5000/;

if [ $# -eq 0 ]
  then
    echo -e "Please specify image to build:\ne.g. frontend or nginx"
    exit 1
fi

[ -z "$DOCKER_REGISTRY" ] && echo -e "Please set DOCKER_REGISTRY addres\nIt should end with slash." && exit 1;

hash="$(git rev-parse --short HEAD)";
name=$1

docker tag "${DOCKER_REGISTRY}${name}:latest" "${DOCKER_REGISTRY}${name}:previous" || true;
docker build -f "$1.Dockerfile" -t "${DOCKER_REGISTRY}${name}:$hash" -t "${DOCKER_REGISTRY}${name}:latest" .;
docker push "${DOCKER_REGISTRY}${name}:previous";
docker push "${DOCKER_REGISTRY}${name}:$hash";
docker push "${DOCKER_REGISTRY}${name}:latest";
