const Job = require('./lib');

function EmailJob(context) {
    Job.apply(this, arguments);
    this.queueName = 'email_queue';
    this.rules = {
        title: {
            type: 'string',
            required: true,
            message: 'Title is required.'
        },
        to: {
            type: 'string',
            required: true,
            match: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'To(destination) is required.'
        },
        template: {
            type: 'string',
            required: true,
            message: 'Template is required.'
        },
    };
}

module.exports = EmailJob;