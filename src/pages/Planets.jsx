import { Card } from "../components/CardHome";
import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { GetPlanet } from "../services/api";

export const Planets = () => {

    
    const {dispatch, store} = useGlobalReducer()
    const [loading, setloading] = useState(true)

    const fetchPLanet = async () => {
        try {
            const data = await GetPlanet()
            console.log('*/* data recibida', data)
            dispatch({ type: 'get_planets', payload: data })
        }

        finally {
            setloading(false)

        }
    }
    useEffect(() => {
        fetchPLanet()
    }, [])



    return (
        <div className="container">
          <h1 className="text-center my-4 texto">
            Hace mucho tiempo, en una galaxia muy, muy lejana...
          </h1>
      
          {loading ? (
            <button className="btn btn-dark" type="button" disabled>
              <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
              <span className="texto text-warning" role="status">   Cargando datos del sistema estelar...</span>
            </button>
          ) : (
            <div className="row">
              {store.planets?.map((planet, index) => (
                <div key={index} className="col-12 col-sm-6 col-lg-3 mb-3">
                  <Card
                    names={planet.name}
                    imagen={'https://www.tendencias21.es/photo/art/grande/8030293-12502202.jpg?v=1437035337'}
                    navi={`/planet/${planet.uid}`}
                    showButtonMoreInfo={true}
                    favoritos={true}
                  item= {planet}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      );

}