
const starWarsRoute = require('./starwars/routes')

const register = (server, options, next) => {
    server.register({
        name: 'routes-starwars',
        register: starWarsRoute
    })

    return next
}

module.exports = register