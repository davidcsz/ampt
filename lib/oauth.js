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

// Returns a promise that results in the access token request response JSON object 
exports.getAccessToken = (authCode, appCredentials) => {
    return new Promise ((fulfill, reject) => {
        let authHeader = Buffer.from(appCredentials.client_id + ':' + appCredentials.client_secret, 'ascii');

        fetch(appCredentials.tokenEndpoint, {
            method: 'POST',
            header: {
                'Authorization': 'Basic ' + authHeader.toString('base64'),
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'code=' + authCode + '&grant_type=authorization_code&redirect_uri=' + appCredentials.redirect_url
        }).then((tokenRequestResponse) => {
            if (tokenRequestResponse.status >= 400) {
                reject(tokenRequestResponse.json());
            } else if (tokenRequestResponse.status < 400 && tokenRequestResponse.status >= 200) {
                return tokenRequestResponse.json();
            } 
        }).then((tokenResponseJson) => {
            fulfill(tokenResponseJson);

            // Returns the following:
            // {
            //     access_token,
            //     token_type,
            //     scope,
            //     expires_in,
            //     refresh_token
            // }
        });
    });
}

exports.refreshAccessToken = (userTokens, appCredentials) =>{
    return new Promise ((fulfill, reject) => {
        let authHeader = Buffer.from(appCredentials.client_id + ':' + appCredentials.client_secret, 'ascii');

        fetch(appCredentials.tokenEndpoint, {
            method: 'POST',
            header: {
                'Authorization': 'Basic ' + authHeader.toString('base64'),
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=refresh_token&refresh_token=' + userTokens.refresh_token
        }).then((refreshRequestResponse) => {
            if (refreshRequestResponse.status >= 400) {
                reject(refreshRequestResponse.json());
            } else if (refreshRequestResponse.status < 400 && refreshRequestResponse.status >= 200) {
                return refreshRequestResponse.json();
            } 
        }).then((refreshResponseJson) => {
            fulfill(refreshResponseJson);

            // Returns the following:
            // {
            //     access_token,
            //     token_type,
            //     scope,
            //     expires_in,
            //     refresh_token
            // }
        });
    }); 
}