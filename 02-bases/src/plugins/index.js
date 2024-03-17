const { getUuid } = require('../plugins/get-id.plugin');
const { getAge } = require('../plugins/get-age.plugin');
const { httpClientPlugin } = require('../plugins/http-client');

module.exports = {
    getAge,
    getUuid,
    httpClientPlugin
}