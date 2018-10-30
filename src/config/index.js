'use strict';

const path = require('path');
const fs = require('fs');

let configArray = fs.readdirSync(path.join(
    __dirname,
    (process.env.NODE_ENV || 'development')
)).filter(file => path.extname(file) === '.json').map(file => file.replace(path.extname(file),''));

module.exports = configArray.reduce(function(accumulator, currentValue) {
    accumulator[currentValue] = require(path.join(
        'config',
        (process.env.NODE_ENV || 'development'),
        currentValue
    ));
    return accumulator;
}, {});