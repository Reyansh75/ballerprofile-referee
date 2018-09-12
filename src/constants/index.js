const actions = require('./actions');
const cookies = require('./cookies');
const forms = require('./forms');
const paths = require('./paths');
const config = require('./config');

module.exports.MIN_PASSWORD_LENGTH = 6;
module.exports.NOTIFICATION_TIMEOUT_MS = 3000;
module.exports.POLLING_INTERVAL_MS = 10000;
module.exports.TOKEN_EXPIRE_MINUTES = 15;

module.exports.actions = actions;
module.exports.cookies = cookies;
module.exports.forms = forms;
module.exports.config = config;
module.exports.paths = paths;
