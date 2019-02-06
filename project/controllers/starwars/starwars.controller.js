
const dependencies = {
    requestStarwarsPlanets: require('../../services/starwars/starwars.service')
}

module.exports = async (request, h) => {
    try {

        const { requestStarwarsPlanets } = Object.assign({}, dependencies)
        const response = await requestStarwarsPlanets()

        return h.response(response.results).code(200)
    } catch (error) {
        console.log(error)
        return h.response(error.message).code(400)
    }
}