const router = require('express').Router();

router.get('/', function(req, res) {
    res.json({ message: 'Hello loan!' });
});

module.exports = router;