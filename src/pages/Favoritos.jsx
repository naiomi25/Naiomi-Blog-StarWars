import { use } from "react"
import { Card } from "../components/CardHome"
import useGlobalReducer from "../hooks/useGlobalReducer"



export const Favoritos = ()=>{
    const {store}= useGlobalReducer()

    return(
        <div className="container">
        <h1 className="text-center my-4">Tus Favoritos</h1>
        <div className="row">
            {store.favorites.length > 0 ? (
                store.favorites.map((item, index) => (

                      <div key={index} className="col-12 col-sm-6 col-lg-3 mb-3">
                        <Card
                            names={item.name}
                            imagen={item.image}
                            naviback={'/favoritos'}
                            navi={item.link}
                            
                            favoritos={true}
                            item={item}
                            showButtonMoreInfo={true}
                        />
                    </div>
                ))
            ) : (
                <p className="text-center">No tienes favoritos aún.</p>
            )}
        </div>
        </div>
    );
};