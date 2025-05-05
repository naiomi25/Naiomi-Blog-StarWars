import { Card } from "../components/CardHome";
import { GetPeople, GetStarShips } from "../services/api";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect, useState } from "react";

export const Starships = () =>{

const { dispatch , store} = useGlobalReducer()
const [loading,setloading] = useState(true)


const fetchStarShips = async()=>{
    try{
        const data = await GetStarShips()
        console.log ('*/*respuesta ok',data)
        dispatch({type :'get_starship',payload : data})
    }
    finally{
        setloading(false)
    }
}

useEffect(()=>{
    fetchStarShips()
},[])

return (
  <div className="container">
    <h1 className="text-center my-4 texto">No es una luna, es una estación espacial</h1>

    {loading ? (
      <button className="btn btn-dark" type="button" disabled>
        <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
        <span className="texto  text-warning" role="status">  Listando naves de la flota rebelde...</span>
      </button>
    ) : (
      <div className="row">
        {store.starships?.map((starship, index) => (
          <div key={index} className="col-12 col-sm-6 col-lg-3 mb-3">
            <Card
              names={starship.name}
              imagen={'https://pm1.aminoapps.com/6290/d3726fec767734d6673a592824e99fa65d3e9ee8_hq.jpg'}
              showButtonMoreInfo={true}
              navi={`/starship/${starship.uid}`}
              favoritos={true}
              item= {starship}
              link={`/starship/${starship.uid}`}
            />
          </div>
        ))}
      </div>
    )}
  </div>
);
}