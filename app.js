'use strict';

const hapi = require('hapi');
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

    }
});

// Start server
server.start((error) => {
    if (error) {
        throw error;
    }

    console.log('Server running at:', server.info.uri);
});