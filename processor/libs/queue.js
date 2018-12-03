'use strict';

const config = require('config');
// NOTE: set db: 0
const queue = require('kue').createQueue({
    socket: config.redis.path,
    db: config.redis.db
});

queue.watchStuckJobs(6000);

queue.on('ready', () => {
    // If you need to
    console.info('Queue is ready!');
});

queue.on('error', (err) => {
    // handle connection errors here
    console.error('There was an error in the main queue!');
    console.error(err);
    console.error(err.stack);
});

function createPayment(data, done) {
    queue.create('payment', data)
        .priority('critical')
        .attempts(8)
        .backoff(true)
        .removeOnComplete(false)
        .save((err) => {
            if (err) {
                console.error(err);
                done(err);
            }
            if (!err) {
                done();
            }
        });
}

queue.process('payment', (job, done) => {
    // This is the data we sent into the #create() function call earlier
    // We're setting it to a constant here so we can do some guarding against accidental writes
    const data = job.data;

    done();
    //... do other stuff with the data.
});

module.exports = {
    create: (data, done) => {
        createPayment(data, done);
    }
};