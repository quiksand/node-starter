
const sayHello = async ctx => {
    ctx.body = "Hello world";
    ctx.status = 200;
};

module.exports = {
    sayHello: sayHello
};