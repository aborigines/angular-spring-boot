# angular with spring boot backend

built in angular to spring boot backend

the frontend from [my repository](https://github.com/aborigines/angular-webpack-docker-nginx)

this project inspiration from [jhipster](http://jhipster.tech)

## step build gitlab-ci

- test the frontend
  - test
  - cache frontend folder (node_modules)
- build the frontend
  - load cache frontend from step test-frontend
  - build frotend
  - cache build frontend
- the backend
  - load cache build frontend (target/classes/static)
  - complie the backend
  - build jar
