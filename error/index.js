const util = require('util');
const http = require('http');

util.inherits(HttpError, Error);
HttpError.prototype.name = 'HttpError';
module.exports.HttpError = HttpError;
function HttpError(status, message) {
    Error.apply(this, arguments);
    Error.captureStackTrace(this, HttpError);

    this.status = status;
    this.message = message || http.STATUS_CODES[status] || 'Error';
}

util.inherits(HttpError, Error);
JsonError.prototype.name = 'HttpError';
module.exports.HttpError = HttpError;
function JsonError(status, message) {
    Error.apply(this, arguments);
    Error.captureStackTrace(this, HttpError);

    this.status = status;
    this.message = message || http.STATUS_CODES[status] || 'Error';
}