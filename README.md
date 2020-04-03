# angular with spring boot backend

built in angular to spring boot backend

this project inspiration from [jhipster](http://jhipster.tech)

## prerequisite

- angular 9.1
- spring boot 2 (with java 11)

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
