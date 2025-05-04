import { Card } from "../components/CardHome";
import { useEffect, useState } from "react";
import { GetPeople } from "../services/api";



import useGlobalReducer from "../hooks/useGlobalReducer";

export const People = () => {

   
    const { dispatch, store } = useGlobalReducer()
    const [loading, setloading] = useState(true)

    const fecthPeople = async () => {
        try {
            const data = await GetPeople()
            console.log("*/*Data recibida: ", data); 
            dispatch({ type: 'get_people', payload: data })
        }
        finally { setloading(false) }

    }

    useEffect(() => {
        
        fecthPeople()
    }, [])
    
    return (
      <div className="container">
        <h1 className="text-center my-4 texto">Que la Fuerza te acompañe</h1>
        {loading ? (
          <button className="btn btn-dark" type="button" disabled>
            <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
            <span className="texto text-warning" role="status">Escaneando la galaxia en busca de héroes y villanos...por favor espera...</span>
          </button>
        ) : (
          <div className="row">
            {store.people?.map((person, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-3 mb-3">
                <Card
                  names={person.name}
                  imagen={'https://images.reporteindigo.com/wp-content/uploads/2023/04/personajes-star-wars.jpg'}
                  showButtonMoreInfo={true}
                  navi={(`/person/${person.uid}`)}
                  favoritos={true}
                  link={`/person/${person.uid}`}
                  image={ 'https://images.reporteindigo.com/wp-content/uploads/2023/04/personajes-star-wars.jpg' }
                />
              </div>
            ))}
          </div>
        )}
      </div>
    );
}
