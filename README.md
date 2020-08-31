# Room Challenge

## :page_with_curl: Summary

This project was developed as a prerequisite in the selection process.

## :necktie: The Business Roles

-   Management of users and rooms

## :arrow_forward: Environment

- You can use Docker Compose to run the entire stack required for the application, if you are a docker user :whale:
More details below in the running section.
- You can also run the application directly on your computer. Just have NodeJS 12+.

- Mongo is run in memory if run directly on your computer.

## :fire: Getting Started

These instructions will get this project up and running in your machine or docker host.

### :whale: Using Docker Environment

 - Clone the project:
```sh
$ git clone git@github.com:jfranconetooo/room-challenge.git
```

 - Access the project folder
 ```sh
$ cd room-challenge
```

 - With the [docker](https://docs.docker.com/get-docker/) previously installed, just run the following command:
 ```sh
$ docker-compose up -d
```

> See the structure of the :page_facing_up:[docker-compose.yml](https://github.com/jfranconetooo/room-challenge/blob/master/docker-compose.yml) file for more infos.

> Access to the mongodb database will be available at: `mongodb://127.0.0.1:27017/room-challenge`

> The host for accessing the API endpoints is: `http://127.0.0.1:3000`

> Make sure everything is working fine by accessing the healthcheck endpoint: `http://127.0.0.1:3000/`
> If everything went well, you will see something like:
```sh
Server is running
```
### :computer: Using your computer

### :wave: Prerequisites

> [Node.js](http://nodejs.org/)

> [NPM](https://www.npmjs.com/)

### :rocket: Installing

 - Clone the project:
```sh
$ git clone git@github.com:jfranconetooo/room-challenge.git
```

 - Access the project folder
 ```sh
$ cd room-challenge
```

- Install all packages using NPM:
```sh
$ npm i
```

- To execute in Development environment:
```sh
$ npm start
```


## :robot: API and Endpoints

> You can use the following postman collection to make using the API easier [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/c91d598c6cccf365c9be)