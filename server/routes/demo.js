
const sayHello = async ctx => {
    try {
        ctx.body = { message: 'Hi There!' }
        ctx.status = 200
      } catch (err) {
        ctx.status = 500
      }
};

module.exports = {
    sayHello: sayHello
};