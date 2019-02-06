const config = require('config')
const rp = require('request-promise')

const dependencies = {
    rp
}

const { starwars } = config

const routes = {
    listPlanet: '/planets/'
}

const options = {
    method: 'GET',
    uri: `${starwars.host}${routes.listPlanet}`,
    json: true
}

exports.listPlanets = async () => {

    try {
        const { rp } = Object.assign({}, dependencies)
        const response = await rp(options)

        return response
    } catch (error) {
        throw new Error(error)
    }
}