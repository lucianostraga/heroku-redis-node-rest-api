# NodeJS  Rest API implementation of Heroku Redis by Luciano Straga

A Redis Rest API with NodeJS using [Express JS](http://expressjs.com/) and [Redis](https://www.npmjs.com/package/redis)

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
git clone git@github.com:heroku/node-js-sample.git # or clone your own fork
cd node-js-sample
npm install
npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

You can deploy your own copy of the app using the web-based flow:

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Generate some data 

Create a new key

```sh
GET REQUEST: YOUR_APP_NAME.herokuapp.com/setKey?key=myKey&value=myValue
```

Generating Random Data

```sh
GET REQUEST: YOUR_APP_NAME.herokuapp.com/gendata?count=NUMBER_OF_RECORDS_TO_CREATE
```

## Get One Key
```sh
GET REQUEST: YOUR_APP_NAME.herokuapp.com/key/myKey
```

## Get All Keys
```sh
GET REQUEST: YOUR_APP_NAME.herokuapp.com/allKeys
```

## Get All Values
```sh
GET REQUEST: YOUR_APP_NAME.herokuapp.com/allValues
```
## Delete all data in database
```sh
GET REQUEST: YOUR_APP_NAME.herokuapp.com/flushdb
```