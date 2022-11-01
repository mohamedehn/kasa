// Utilisation ici du hook react useparams afin de passer dans l'url l'id du logement concerné 
import { useParams } from "react-router-dom";
import React from "react";
 
function Logement(){
    const params = useParams();

    React.useEffect(()=>{
        console.log("params", params)
    },[params])

    return(
        <div>
            <h2>Titre d'un logement</h2>
        </div>
    )
}

export default Logement;