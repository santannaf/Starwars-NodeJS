const Hapi = require('hapi')
const config = require('config')

const routes = require('./project/controllers/routes')

const port = config.server.port
const host = config.env

const deployment = async () => {

    const server = Hapi.server({
        host,
        port
    })

    await server.register(
        {
            name: 'test',
            version: '1.0.0',
            register: routes
        }
    )

    return server
}

const start = async () => {

    try {
        const server = await deployment()
        await server.start()
        console.log('Server running at:', server.info.uri);
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
}

start()