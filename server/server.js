const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {User} = require('./model/User');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());










app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});

module.exports = {app};




