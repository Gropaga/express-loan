'use strict';

const path = require('path');
const fs = require('fs');

console.log(path.join(
    process.env.CONFIG_PATH || __dirname,
    (process.env.NODE_ENV || 'development')
));

console.log(__dirname);

let configArray = fs.readdirSync(path.join(
    __dirname,
    (process.env.NODE_ENV || 'development')
)).filter(file => path.extname(file) === '.json')
    .map(file => file.replace(path.extname(file),''))
    .reduce(function(accumulator, currentValue) {
        accumulator[currentValue] = require(path.join(
            __dirname,
            (process.env.NODE_ENV || 'development'),
            currentValue
        ));
        return accumulator;
    }, {});

module.exports = configArray;