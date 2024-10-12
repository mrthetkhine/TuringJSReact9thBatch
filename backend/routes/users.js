var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('/user routes');
  //res.send('respond with a resource');
  let user = {
    name : 'Someone',
    age : 20
  };
  res.json(user);
});
router.get('/something', function(req, res, next) {
  console.log('/user routes something');
  //res.send('respond with a resource');
  let user = {
    name : 'to another else',
    age : 20
  };
  res.json(user);
});
module.exports = router;
