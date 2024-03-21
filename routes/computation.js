var express = require('express');
var router = express.Router();
 
/* Computation end point. */
router.get('/', function(req, res, next) {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
 
  const x = req.query.x ? parseFloat(req.query.x) : randomNumber;
 
 
  res.send(`Math.pow() of ${x} is ${Math.pow(x)}<br> Math.sign() applied to ${x} is ${Math.sign(x)}<br> Math.tanh() applied to ${x} is ${Math.tanh(x)}<br>Math.trunc() of ${x} is ${Math.trunc(x)}`);
 
});

module.exports = router;