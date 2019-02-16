
const request = require('./starwars.controller')

function route(server) {
    server.route(
        {
            method: 'GET',
            path: '/planets',
            config: {
                handler: request
            }
        },
    )
}

route.attributes = {
    name: 'router'
}

module.exports = route