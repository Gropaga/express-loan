module.exports = function(app) {
    require('./www')(app);
    require('./shop-api')(app);
    require('./partner-api')(app);
};