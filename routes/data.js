'use strict';
const { Console } = require('console');
var express = require('express');
const fs = require('fs');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  fs.readFile('.\\data\\data.json', (err, data) => {
    if (err) {
      console.error(err);
      res.send();
      return
    }
    else {
      console.log(data);
      res.send(data);
    }
  });

  
});

module.exports = router;
