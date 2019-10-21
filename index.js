/*
Copyright IBM, 2019 All Rights Reserved.

SPDX-License-Identifier: Apache-2.0
*/


var express = require('express')
var app = express()

app.get('/', function (request, response) {
  response.send('Hello World')
})
app.listen(3000)
