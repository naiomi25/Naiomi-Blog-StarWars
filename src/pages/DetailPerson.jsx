import { useFetcher, useParams } from "react-router-dom";
import { GetDetailPeople } from "../services/apiDetailFetches";

import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect, useState } from "react";
import { Card } from "../components/CardHome";



export const DetailPerson = () => {

    const { id } = useParams()
    const { dispatch, store } = useGlobalReducer()
    const [loading, setloading] = useState(true)

    const fetchDetailPerson = async () => {
        try {

            const data = await GetDetailPeople(id)
            dispatch({ type: 'detail_person', payload: data })
        }
        finally {
            setloading(false)
        }


    }

    useEffect(() => {

        fetchDetailPerson()
    }, [id])

    return (

        <div className="container  d-flex justify-content-center">
            <Card
                names={store.person?.name}
                naviback={"/people"}
                showButtonBack={true}
                loading={loading}
                imagen={'https://mieducacionenlinea.com/wp-content/uploads/2024/09/Personajes-Iconicos-Universo-Star-Wars.webp'}
                texto='cargando personajes...'
            >
                <p> Genero : {store.person?.gender}</p>
                <p> Altura :  {store.person?.height}</p>
                <p>Año de nacimiento :{store.person?.birth_year}</p>
                <p>Color de pelo : {store.person?.hair_color}</p>


            </Card>

        </div>
    )



}