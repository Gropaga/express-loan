const kue = require('kue');
const schema = require('validate');
const config = require('config');

function Job(context) {
    this.context = context;
    // const queue = kue.createQueue();
    this.rules = {};
    this.errors = null;
    this.queueName = 'untitled_queue';

    this.validator = schema(this.rules);

    this.createQueue = () => {
        this.errors = this.validator.validate(this.context);
            const queue = kue.createQueue({
                redis: {
                    socket: config.redis.path,
                    db: -1
                },
            });

        if (!this.errors) {
            return queue.create(
                this.queueName,
                this.context
            ).save(function (err) {
                if (!err) {
                    console.log(job.id);
                }
            });
        }
    };
}

module.exports = Job;