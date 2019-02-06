const { listPlanets } = require('../../infra/starwars/repositories/starwars')

const dependencies = {
    listPlanets
}

module.exports = async () => {

    try {
        const { listPlanets } = Object.assign({}, dependencies)
        const response = await listPlanets()
        console.log(response.results)

        return response
    } catch (error) {
        console.log(error)
        throw new Error(`Nao foi possível listar os planetas`)
    }
}