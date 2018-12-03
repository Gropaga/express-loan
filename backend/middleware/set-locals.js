module.exports = function(req, res, next) {
    res.locals.user = req.user;
    res.locals.resourceUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3080/' : '/';

    next();
};