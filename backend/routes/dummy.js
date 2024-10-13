var express = require('express');
var router = express.Router();

router.get('/', function (req, res,next) {
    console.log('first route');
    next();
})
router.get('/', function (req, res,next) {
    console.log('second route');
    res.json({
        data : "Data from second route"
    })
})
module.exports = router;