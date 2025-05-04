import { useParams } from "react-router-dom"

const ApiUrl = "https://www.swapi.tech/api"



export const GetDetailPeople = async (id) => {
    try {

        const response = await fetch(`${ApiUrl}/people/${id}/`)

        const data = await response.json()
        console.log(data.result.properties)

        return data.result.properties
    }

    catch (error) {
        console.log('*/* error al hacer fetch de los detalles de personajes', error)
    }

}

export const GetDetailStarship = async (id) => {
    try {
        const response = await fetch(`${ApiUrl}/starships/${id}/`)
        const data = await response.json()

        return data.result.properties

    }
    catch (error) {
        console.log('*/* error al hacer fetch de los detalles de personajes', error)
    }


}
export const GetDetailPlanets = async (id) => {
    console.log("🪐 ID recibido para fetch del planeta:", id);
    try {
        const response = await fetch(`${ApiUrl}/planets/${id}/`)
        const data = await response.json()
        return data.result.properties
    }
    catch (error) {
        console.log('*/* error al hacer fetch de los detalles de personajes', error)
    }


}