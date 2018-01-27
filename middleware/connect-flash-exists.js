module.exports = function(req, res, next) {
    req.flash.exists = function(type) {
        const msgs = req.session.flash = req.session.flash || {};
        const arr = msgs[type];
        return (arr !== undefined);
    };

    next();
};