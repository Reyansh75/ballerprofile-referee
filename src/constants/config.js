const domain = process.env.DOMAIN || 'ballerprofile.herokuapp.com';
const protocol = process.env.PROTOCOL || 'http://';
const port = process.env.PORT;

module.exports.port = port;
module.exports.protocol = protocol;
module.exports.domain = domain;

module.exports.serverUrl = process.env.SERVER_URL || `${protocol}${domain}${port ? `:${port}` : ''}`;