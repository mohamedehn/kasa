// Utilisation ici du hook react useparams afin de récupérer dans l'url l'id du logement concerné. Une fois le logement récupéré
// on passera une variable product qui stockera les données. Et on utilisera dans les composants le props product.
// Utilisation du composant ErrorContent dans le cas ou le product Id serait undefined
import React from "react";
import { useParams } from "react-router-dom";
import data from '../data.json'
import Slider from "../components/slider/slider";
import LodgingContent from "../components/logement-content";
import ErrorContent from "../components/error/error"

const Logement = () => {

    const params = useParams();

    const product = data.find((product) => params.id === product.id) 

    if (product === undefined){
        return <ErrorContent/>
    }
 
    const { pictures } = product
    
        return(
            <div className="lodgingDetail">
                {
                    data.filter((product) => product.id === params.id).map((data, index)=>(
                        <div className="ficheLogement" key={data.id - index}>
                            <Slider slider={pictures}/>
                            <LodgingContent product={product} />
                        </div>
                    ))
                }
            </div>
        )
}

export default Logement;
