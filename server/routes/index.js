const koaBody = require('koa-body');
const Router = require('koa-router');
const demo = require('./demo');

const router = new Router();

router.get('/demo', koaBody(), demo.sayHello);

module.exports = router.routes.bind(router);