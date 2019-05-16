const app = require('./app');
const config = require('../config')

app.listen(config.serverPort, () => {
    console.log('Server listening on port ' + config.serverPort);
});