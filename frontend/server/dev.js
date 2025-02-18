const config = require('../webpack.config');
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const compiler = webpack(config);
const express = require('express');
const app = express();

app.use(middleware(compiler, {
    // webpack-dev-middleware options
}));

app.listen(3080, () => console.log('Example app listening on port 3080!'));