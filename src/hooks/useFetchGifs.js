import {useState,useEffect} from "react"
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data : [],
        loading : true
    });

    useEffect(() => {
        //Se ejecuta la primera vez que se renderiza y retornamos las imagenes
        //Hasta que se haya completado la petición
        getGifs(category)
            .then(imageResponse => {
                setState({
                    data : imageResponse,
                    loading : false
                })
            })
    },[category]); 


    return state;
}