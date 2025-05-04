import React from "react";

const ApiUrl = "https://www.swapi.tech/api"


export const GetPeople = async ()=>{
    try {
        const response = await fetch (`${ApiUrl}/people/`);
        const data = await response.json()
        return data.results
}
    catch(error){
        console.log ('*/*error fetchin de personas',error)

    }
}
 
export const GetPlanet = async ()=>{
    try{
        const response = await fetch(`${ApiUrl}/planets/`)
        const data = await response.json()
        return data.results
        
    }

    catch(error){
        console.log ('*/*error fetchin de personas',error)

    }

}

export const GetStarShips = async() => {
    try{
            const result = await fetch(`${ApiUrl}/starships/`)
            const data = await result.json()
            console.log ('*/* resultados de las naves,',data)
            return data.results
            
        }
    catch(error){
        console.log('*/* error al hacer fetchin de naves',error)
    }
}
