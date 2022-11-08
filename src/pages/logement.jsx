// Utilisation ici du hook react useparams afin de récupérer dans l'url l'id du logement concerné. Une fois le logement récupéré
//on passera une variable product qui stockera les données. Et on utilisera dans les composants le props product.
// utilisation de useeffect afin de comparer l'id récupérer via params et l'id de l'api local (data.json)
// Usenavigate permet de rediriger vers une page erreur si un logement n'existe pas

import React from "react";
//import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import data from '../data.json'
import Slider from "../components/slider/slider";
import LodgingContent from "../components/logement-content";

const Logement = ()=> {

    const params = useParams();
    //const navigate = useNavigate();

    const product = data.find((product) => params.id === product.id);
    const { pictures } = product

    return(
        <div className="lodgingDetail">
            {
                data.filter((product) => product.id === params.id).map((data, index)=>(
                    <div className="ficheLogement" key={data.id - index}>
                        <Slider slider={pictures}/>
                        <LodgingContent product={product}/>
                    </div>
                )   
                )
            }
        </div>
    )
}

export default Logement;
