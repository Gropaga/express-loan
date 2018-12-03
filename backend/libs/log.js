let winston = require('winston');
const ENV = process.env.NODE_ENV;
const path = require('path');

function getLogger(module) {
    console.log('INIT LOG>JS');

    let modulePath = module.filename.split('/').slice(-2).join('/');

    let logger = new winston.Logger({
        transports: [
            new winston.transports.Console({
                colorize: true,
                level: ENV === 'development' ? 'debug' : 'error',
                label: modulePath,
                handleExceptions: true,
                prettyPrint: true
            }),

            new winston.transports.File({
                level: 'info',
                filename: path.join(__dirname,'..','data','log','all-logs.log'),
                handleExceptions: true,
                json: true,
                maxsize: 5242880, //5MB
                maxFiles: 5,
                colorize: false,
                label: modulePath
            }),
        ]
    });

    logger.stream = {
        write: function(message, encoding){
            logger.info(message);
        }
    };

    return logger;
}

module.exports = getLogger;