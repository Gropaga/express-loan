const express = require('express');
const router = express.Router();
const queue = require('libs/queue');


/* GET home page. */
router.get('/', function (req, res, next) {
    queue.create({yopt: 123}, () => {console.log('Payment created')});

    res.render('index', {title: 'Express'});
});

module.exports = router;
