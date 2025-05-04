
import { GetDetailPlanets } from "../services/apiDetailFetches";


import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect, useState } from "react";
import { Card } from "../components/CardHome";
import { useParams } from "react-router-dom";

export const DetailPlanets = ()=>{
   const {id} = useParams()
   const{store,dispatch}= useGlobalReducer()
   const [loading,setloading] = useState(true)
  

    const fetchDetailPlanet = async()=>{
        try{

            const data = await GetDetailPlanets(id)
            console.log('*/*detalles del planeta')
            dispatch ({ type :'detail_planet', payload : data})
        }
        finally{
            setloading(false)
        }
        
    }
    useEffect(()=>{
        fetchDetailPlanet()
    },[id])


return(
    <div className="container  d-flex justify-content-center">
       
       <Card
            imagen={'https://img.freepik.com/foto-gratis/esfera-celeste-resplandeciente-orbita-galaxia-estrellada-generada-ia_188544-15599.jpg?semt=ais_hybrid&w=740'}
            texto = '   cargando planeta... ' 
            loading = {loading}
            showButtonBack={true}
            naviback={'/planets'}
            names={store.planet?.name}> 
            <p>Clima : {store.planet?.climate}</p>
            <p>Diameter :{store.planet?.diameter}</p>
            <p>Population :{store.planet?.population}</p>
            <p>Terrain : {store.planet?.terrain}</p>
        </Card>

          

     </div>
    
)
}