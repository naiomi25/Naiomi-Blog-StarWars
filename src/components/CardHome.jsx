import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import botonVolverurl from "../assets/img/volverAtras.png";
import storeReducer from "../store";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Card = ({ names, navi, children, image, loading = false, texto,
   naviback, showButtonMoreInfo, showButtonBack, favoritos,link}) => {
  
  const navigate = useNavigate()
  const {dispatch,store} = useGlobalReducer()


  const contenedorFavoritos =item && store.favorites.some((e) => e.name === item.name)

    const handlefavoritos = () => {

    contenedorFavoritos ? (dispatch({ type: 'delete-favorite', payload: {name} })
    ) : (
      dispatch({ type: 'add-favorite',payload:{ names,link,image}}))


  }



  return (

    <>
      {loading ? (
        <button className="btn btn-dark" type="button" disabled>
          <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
          <span className="texto" role="status">{texto}</span>
        </button>
      ) : (
        <div className="card" style={{ width: "18rem" }}>
          <img src={image} className="card-img-top" alt={`imagen de ${names}`} />
          <div className="card-body">
            <h5 className="card-title">{names}</h5>

          <div className="d-flex justify-content-between">
            {showButtonMoreInfo && (
              <button className="btn btn-outline-dark" onClick={() => navigate(navi)}>
                More info
              </button>
            )}

            {favoritos && (
              
                <button className="btn btn-light"  onClick={handlefavoritos}>  {contenedorFavoritos ? '❤️' : '🤍'} </button>
             
            )}
            </div>
            {children}

            {showButtonBack && (
              <div className="btnContenedor">
                <button className="btn btn-outline-dark" onClick={() => navigate(naviback)}> Volver </button>
                <img className='btnAtras' src={botonVolverurl} />
              </div>

            )}




          </div>
        </div>
      )}
    </>
  )
}