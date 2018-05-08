const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const db;
// Connect
MongoClient.connect('mongodb://localhost', function (err, client) {
  if (err) throw err;
  this.db = client.db('app');
});



// Error handling
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};

// Response handling
let response = {
  status: 200,
  data: [],
  message: null
};

// Get users
router.get('/users', (req, res) => {
  db.collection('user')
    .find()
    .toArray()
    .then((user) => {
      response.data = user;
      res.json(response);
    })
    .catch((err) => {
      sendError(err, res);
    });
});

module.exports = router;
