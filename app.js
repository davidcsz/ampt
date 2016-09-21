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

// Spotify authentication
server.route({
    method: 'GET',
    path: '/spotify-auth',
    handler: function (request, reply) {
        if (request.query.code === undefined) {
            console.log('Path hit:', request);
            console.log('Sending user to Spotify auth page');

            oauth.getAuthCode(config.appCredentials.spotify);
            reply('Spotify auth...');
        } else if (request.query.code !== undefined) {
            console.log('Path hit:', request);
            console.log('Got Spotify auth code');
            console.log('Getting Spotify access token');

            oauth.getAccessToken(request.query.code);
            reply('Got Spotify access token!');
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