require('../config');
require('../lib');
const Koa = require('koa');
const serve = require('koa-static')
const routes = require('./routes');

const app = new Koa();
app.use(routes());
app.use(serve(__dirname + '/../client/dist'));

module.exports = app;
