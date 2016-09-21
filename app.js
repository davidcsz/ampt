'use strict';

const hapi = require('hapi');
const oauth = require('./lib/oauth.js');
const config = require('./config');

const server = new hapi.Server();
server.connection({
    port: config.dev.server.port
});

// Routes
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello!');
    }
});

// Fitbit authentication
server.route({
    method: 'GET',
    path: '/spotify-auth',
    handler: function (request, reply) {
        if (request.query.code === undefined) {
            console.log('Path hit:', request);
            console.log('Sending user to Fitbit auth page');

            oauth.getAuthCode(config.dev.appCredentials.fitbit);
            reply('Fitbit auth...');
        } else if (request.query.code !== undefined) {
            console.log('Path hit:', request);
            console.log('Got Fitbit auth code');
            console.log('Getting Fitbit access token');

            oauth.getAccessToken(request.query.code, config.dev.appCredentials.Fitbit)
            .catch((accessTokenRequestError) => {
                console.log('Failed to retrieve Fitbit access_token! Error: ' + accessTokenRequestError);
                reply('Failed to get a Fitbit access token. :(')
            })
            .then((accessTokenJson) =>{
                console.log('Successfully retrieved Fitbit access_token: ' + accessTokenJson);
                reply('Got Fitbit access token!');
            });
        }
    }
});

// Spotify authentication
server.route({
    method: 'GET',
    path: '/spotify-auth',
    handler: function (request, reply) {
        if (request.query.code === undefined) {
            console.log('Path hit:', request);
            console.log('Sending user to Spotify auth page');

            oauth.getAuthCode(config.dev.appCredentials.spotify);
            reply('Spotify auth...');
        } else if (request.query.code !== undefined) {
            console.log('Path hit:', request);
            console.log('Got Spotify auth code');
            console.log('Getting Spotify access token');

            oauth.getAccessToken(request.query.code, config.dev.appCredentials.spotify)
            .catch((accessTokenRequestError) => {
                console.log('Failed to retrieve Spotify access_token! Error: ' + accessTokenRequestError);
                reply('Failed to get Spotify access token. :(')
            })
            .then((accessTokenJson) =>{
                console.log('Successfully retrieved Spotify access_token: ' + accessTokenJson);
                reply('Got Spotify access token!');
            });
        }
    }
});

// Start server
server.start((error) => {
    if (error) {
        throw error;
    }

    console.log('Server running at:', server.info.uri);
});