module.exports = function(app) {
    require('./www')(app);
    require('./shop-api')(app);
    require('./loan-api')(app);
};