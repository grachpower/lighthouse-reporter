#!/bin/bash

export DOCKER_REGISTRY=46.229.221.45:5000/;
docker stack deploy -c docker-lighthouse-reporter.yml lighthouse
