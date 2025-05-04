import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { GetDetailStarship } from "../services/apiDetailFetches";
import { use, useEffect, useState } from "react";
import { Card } from "../components/CardHome";


export const  DetailStarShip = ()=>{

    const {id} = useParams()
    const {store,dispatch}= useGlobalReducer()
    const [loading,setloading]= useState(true)

    const fetchDetailStartShips = async()=>{
        try{
            const data = await GetDetailStarship (id)
            console.log ( '*/* data recibida,',data)
            dispatch ({type : 'detail_starship', payload: data})
        }
        finally{
            setloading((false))
        }
    }

useEffect(()=>{
    console.log ( 'obteniendo el id',id)
    fetchDetailStartShips()
},[id])

return(

    <div className="container d-flex justify-content-center">
        <Card
        names = {store.starship?.name}
        imagen={'https://www.ecestaticos.com/imagestatic/clipping/49f/c0c/49fc0cc538c946f685014487ba2c4478/las-naves-espaciales-mas-temibles-que-han-surcado-la-galaxia-en-la-saga-de-star-wars.jpg?mtime=1622853097'}
        showButtonBack={true}
        naviback={"/starships"}
        loading = {loading}
        texto = 'cargando naves....' 
        >
            <p>Capacidad : {store.starship?.passengers} </p>
            <p>Tripulación : {store.starship?.crew}</p>
            <p>Velocidad máx de atmoferación : {store.starship?.max_atmosphering_speed}</p>
            <p>Modelo : {store.starship?.model}</p>
        </Card>

    </div>
)

}