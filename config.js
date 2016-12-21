let config = {
    dev: {
        server: {
            port: 3000
        },
        appCredentials: {
            spotify: {
                client_id: 'ef12d39900a84da787b2a9837a3e532b',
                client_secret: '',
                auth_url: 'https://accounts.spotify.com/authorize',
                response_type: 'code',
                scope: 'playlist-read-private playlist-read-collaborative playlist-modify-public user-follow-read user-library-read user-read-private user-top-read',
                redirect_uri: 'http://davpc:3000/spotify-auth',
                token_endpoint: 'https://accounts.spotify.com/api/token'
            },
            fitbit: {
                client_id: '227ZX9',
                client_secret: '',
                auth_url: 'https://www.fitbit.com/oauth2/authorize',
                response_type: 'code',
                scope: 'activity heartrate location profile',
                redirect_uri: 'http://davpc:3000/fitbit-auth',
                token_endpoint: 'https://api.fitbit.com/oauth2/token'
            }
        } 
    }
}

module.exports = config;