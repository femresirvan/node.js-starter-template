# node.js-starter-template

[Turkçe (Hazırlanıyor...)]() - [English]()

_Be aware of that is incomplete documentation!_

![](https://img.shields.io/badge/Under%20Development!-red.svg)
![](https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white)
![](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![](https://img.shields.io/badge/Express.js-404D59)
![](https://img.shields.io/badge/MongoDB-4EA94B?logo=mongodb&logoColor=white)
![](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)
![](https://img.shields.io/github/license/femresirvan/node.js-starter-template)

### Table of Contents

- [Introduction](#-introduction)
- [Features](#features)
- [Roadmap](#%EF%B8%8F-roadmap)
- [Project Structure](#-project-structure)
- [Dependencies](#dependencies)
- [Installation](#prerequisite)
  - [Prerequisite](#prerequisite)
  - [Installation](#-installation)
- [MongoDB & Mongoose Notes](#%EF%B8%8F-mongodbmongoose-notes)
- [Contributes & Donates](#-contributesdonates)

### 🎀 Introduction

Brief Node.js starter kit powered by MVC design.

### Features

- ...
- ..
- ..

### 🛣️ Roadmap

- [x] Install dependencies, configure `eslint.js` etc.
- [x] Complete `express.js` configurations.
- [x] Install `swagger-ui-express`.
- [ ] Complete `mongoose.js` configurations.
- [ ] Make email auth and user schemas with `passport-jwt` `passport-local`.
- [ ] Make google auth with `passport-google-oauth2`
- [ ] Extend with swagger.
- [ ] Implement test environment.
- [ ] And many more..

### 🏢 Project Structure

This will be replace.

![](https://user-images.githubusercontent.com/60824063/151278303-31cd8529-cfb5-4532-97f9-901de5fd98b8.png)

### Dependencies

- Helmet (Security Middleware)
- Swagger (API Documentation)
- Express.js (a back end web application framework for Node.js)
- Mongoose (creates a connection between MongoDB and Node.js)
- dotenv (to integrate .env files)
- HTTP
- Chalk (String coloring for console)
- ESLint with Airbnb style
- Prettier
- Morgan (Logger for requests)
- Passport.js (for Authentication&Authorization)
- Passport local
- Passport Google Oauth

<!-- ### 👀 Review -->

## Prerequisite

- [Node.js & NPM](https://nodejs.org/en/download/)
<!-- - [Google OAuth API Key](https://developers.google.com/identity/protocols/oauth2) -->
- [MongoDB](https://www.mongodb.com/)

### 👨‍💻 Installation

Clone repository

```bash
$ git clone https://github.com/femresirvan/node.js-starter-template.git
$ cd node.js-starter-template
```

Install dependencies

```bash
$ npm i
```

Configure .env

```bash
➥ ~./env
PORT=PORT_NUMBER
NODE_ENV='dev' #Not prepared yet.
MONGODB_URI="NOT COMPLETED"
GOOGLE_ID="NOT COMPLETED"
GOOGLE_SECRET="NOT COMPLETED"
```

### ✔️ MongoDB&Mongoose Notes

MongoDB has very flexible structure so database models can be updated during the development phase.

#### MongoDB Database Creation Steps

- Specify key points and entities.
- Make ER Diagram to specify relationship between entities.
- Choose a specific design pattern to create database.
- Keep update the database schemas on issues while developing.

#### What to do to optimize MongoDB performance?

- Create spesific indexes
- Use complex aggregations

#### Most common design patterns used in Mongodb

- Approximation
- Attribute
- Bucket
- Computed
- Document Versioning
- Extended Reference
- Outlier
- Pre-allocation
- Polymorphic
- Schema Versioning
- Subset
- Tree

#### Documentations

[Quick Start with Mongoose](https://betterprogramming.pub/simple-notes-app-with-node-js-and-mongoosejs-6595cd5d15b)

[MongoDB Design Patterns Documentation](https://www.mongodb.com/blog/post/building-with-patterns-a-summary)

[MongoDB Documentation](https://docs.mongodb.com/)

[Mongoose Documentation](https://mongoosejs.com/docs/)

### Other Documentations

[JS Book](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/README.md)

### 🤝 Contributes&Donates

> 😊 Give me any advice by sending email!
>
> Email: femresirvan@gmail.com
