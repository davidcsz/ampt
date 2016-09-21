const fetch = require('node-fetch');
const openurl = require('openurl');

exports.getAuthCode = (appCredentials) => {
    let authUrl = appCredentials.auth_url +
        '?client_id=' + appCredentials.client_id +
        '&response_type=' + appCredentials.response_type +
        '&redirect_uri' + appCredentials.redirect_uri +
        '&scope=' + appCredentials.scope;

    openurl.open(authUrl);
}