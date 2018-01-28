const format = require('util').format;
const isArray = require('util').isArray;

// based on connect-flash
module.exports = function(req, res, next) {
    req.flash = function(type, msg) {
        if (req.session === undefined) throw Error('req.flash() requires sessions');
        const msgs = req.session.flash = req.session.flash || {};
        if (type && msg) {
            // util.format is available in Node.js 0.6+
            if (arguments.length > 2 && format) {
                const args = Array.prototype.slice.call(arguments, 1);
                msg = format.apply(undefined, args);
            } else if (isArray(msg)) {
                msg.forEach(function(val){
                    (msgs[type] = msgs[type] || []).push(val);
                });
                return msgs[type].length;
            }
            return (msgs[type] = msgs[type] || []).push(msg);
        } else if (type) {
            const arr = msgs[type];
            delete msgs[type];
            return arr || [];
        } else {
            this.session.flash = {};
            return msgs;
        }
    };

    req.flash.exists = function(type) {
        const msgs = req.session.flash = req.session.flash || {};
        const arr = msgs[type];
        return (arr !== undefined);
    };

    res.locals.flash = req.flash;
    next();
};