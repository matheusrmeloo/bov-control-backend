![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/1f72aae1a173f21246ef)

# BovControl Backend 🐮
An API for registering, consulting and editing Animals!

Technologies:

- Database ([MongoDB](https://www.mongodb.com)) and [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- ORM ([Mongoose](https://mongoosejs.com))
- Tests ([Mocha](https://mochajs.org) and [Super Test](https://github.com/visionmedia/supertest))
- API Documentation ([apidoc](https://apidocjs.com))
- Babel ([Babel](https://babeljs.io))
# Installation
First clone this project on your local machine. To clone use the command:
```console
$ git clone project_url
```
After that, to run the project, you first need to have Node.js installed. To install [Node.js](https://nodejs.org/en/) go to the link below in your browser and follow its step by step. `In the project I'm using version 10.13.0 of Node.`
```console
https://nodejs.org
```
After installing Node, open the terminal in the project and install the necessary dependencies, using the command:
```console
$ npm i
```
Or
```console
$ npm install
```
And then your project is ready to be used!

# Environment settings
You will need a `.env` file. In this file, you put all your sensitive and environment info.

Note: You can just make a copy of `.env.example` and name it as `.env`

**Is recommended to not commit the `.env` file.**

### Endpoints:
Full URL = `{host}/api/{endpoint}`

    POST /animal - Create animal
    GET /animal - Get all animals
    GET /animal/:id - Get Specific animal
    PATCH /animal/:id - Modify specific animal

### [`Complete Documentation`](https://matheusrmeloo.github.io/bov-control-backend/)

# Heroku

It is possible to test the project online, this repository is linked with a heroku app.

That is our link for dev API: https://bovcontrol-dev.herokuapp.com/api/enpoint_url

# Running Project
After you have done the entire installation process, you can run the project by running the command in the project terminal, the command:
```console
$ npm start
```
And this command will initialize the API so that you can receive calls locally.
# Running Tests
The code is covered by unit tests, so if you want to run the project tests, you only need to open the project terminal and execute the command:
```console
$ npm test
```
