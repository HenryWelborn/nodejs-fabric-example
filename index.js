/*
Copyright IBM, 2019 All Rights Reserved.

SPDX-License-Identifier: Apache-2.0
*/

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./helper/datashim.js')

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/www'))

app.get('/users', function (request, response) {
  //see all users
  response.json(db.findAll());
})

app.post('/users', function (request, response) {
  let id = db.saveItem(JSON.parse(JSON.stringify(request.body)));
  response.json(db.findItem(id));
})

app.get('/users/:id',function (request, response) {
  // get user info by id
  response.send(db.findItem(request.params.id));
})

app.put('/users/:id', function (request, response) {
  // update user
  let id = db.updateItem(JSON.parse(JSON.stringify(request.body)),request.params.id);
  response.json(db.findItem(id));
})

app.delete('/users/:id', function (request, response) {
  // delete user
  db.deleteItem(request.params.id);
  response.write('deleted '+ request.params.id);
  response.send();
})

app.listen(3000)
