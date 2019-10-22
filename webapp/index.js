/*
Copyright IBM, 2019 All Rights Reserved.

SPDX-License-Identifier: Apache-2.0
*/

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./helper/in_memory_database.js')

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/www'))

app.get('/cars', function (request, response) {
  //see all cars
  response.json(db.findAll());
})

app.post('/cars', function (request, response) {
  let id = db.saveItem(JSON.parse(JSON.stringify(request.body)));
  response.json(db.findItem(id));
})

app.get('/cars/:id',function (request, response) {
  // get car info by id
  response.send(db.findItem(request.params.id));
})

app.put('/cars/:id', function (request, response) {
  // update car
  let id = db.updateItem(JSON.parse(JSON.stringify(request.body)),request.params.id);
  response.json(db.findItem(id));
})

app.delete('/cars/:id', function (request, response) {
  // delete car
  db.deleteItem(request.params.id);
  response.write('deleted '+ request.params.id);
  response.send();
})

app.listen(3000)
