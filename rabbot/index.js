const rabbot = require("../node_modules/rabbot");
const config = require("config");
const fs = require('fs');

rabbot.configure(config.rabbot).then(function () {
    console.log('Rabbot: successfully connected');
}).catch(function (err) {
    console.error('Rabbot: Could not connect or configure:', err);
    process.exit();
});



rabbot.log( [
    { level: "info", stream: process.stdout },
    { level: "debug", stream: fs.createWriteStream( "./debug.log" ), objectMode: true }
] );

exports.rabbot = rabbot;