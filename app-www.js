const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const HttpError = require('error').HttpError;
const config = require('config');
const expressErrorHandler = require('errorhandler');
const session = require('./libs/session');
const passport = require('./libs/passport');
const rabbot = require('./rabbot');

const db = require('./libs/db');

const app = express();
// setting routes

const log = require('./libs/log')(module);

app.engine('ejs', require('ejs-locals'));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(morgan('dev',{'stream': log.stream}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session);

app.use(passport.initialize());
app.use(passport.session());

app.use(require('./middleware/http-error'));
app.use(require('./middleware/flash'));
app.use(require('./middleware/set-locals'));

require('routes')(app);

app.use(express.static(path.join(__dirname, 'public')));


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(new HttpError(404, 'Page Not Found'));
});

// error handler
app.use(function (err, req, res, next) {
    if (err instanceof HttpError) {
        res.sendHttpError(err);
    } else {
        if (app.get('env') === 'development') {
            expressErrorHandler()(err, req, res, next);
        } else {
            log.error(err);
            err = new HttpError(500);
            res.sendHttpError(err);
        }
    }

});

module.exports = app;
