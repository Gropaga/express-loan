const router = require('express').Router();
const rabbot = require('rabbot');

router.get('/', function(req, res) {
    res.json({ message: 'Hello shop!' });
});

router.get('/request-loan', function(req, res) {
    rabbot.publish('loan-x', {
        routingKey: "loan.request.a1",
        type: "MyMessage",
        correlationId: "one",
        contentType: "application/json",
        body: {
            text: "hello!"
        },
        messageId: "100",
        expiresAfter: 100000, // TTL in ms, in this example 1 second
        timestamp: new Date().posix, // posix timestamp (long)
        mandatory: true, //Must be set to true for onReturned to receive unqueued message
        persistent: true, //If either message or exchange defines persistent=true queued messages will be saved to disk.
    }).then(function() {
        console.log('Published message!')
    }).catch(function (err) {
        console.error(err);
    });

    res.json({ message: 'Hello shop!' });
});


module.exports = router;