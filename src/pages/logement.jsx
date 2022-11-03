// Utilisation ici du hook react useparams afin de récupérer dans l'url l'id du logement concerné.
// utilisation de useeffect afin de comparer l'id récupérer via params et l'id de l'api local (data.json)
// Usenavigate permet de rediriger vers une page erreur si un logement n'existe pas

import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import data from '../data.json'
import Slider from "../components/slider/slider";


function Logement(){

    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        let lodgingDetail = data.find((lodgingDetail) => params.id === lodgingDetail.id);
        if (!lodgingDetail){
            navigate("/error")
        }
    });

    return(
        <div className="lodgingDetail">
            
            {
                data.filter((lodgingDetail) => lodgingDetail.id === params.id).map((data, index)=>(
                    
                    <div className="ficheLogement" key={data.id - index}>
                        <Slider/>
                        <div className="carrousel"></div>
                        <div className="logementTitle">
                            <p>{data.title}</p>
                            <p>{data.location}</p>
                            <div>
                                <p>{data.host.name}</p>
                                <img src={data.host.picture} alt="" />
                            </div>
                        </div>
                        <div className="logementTags">
                            <div className="tags">{data.tags}</div>
                            <div className="ratings">{data.rating}</div>
                        </div>
                        <div className="logementInfo"></div>
                    </div>
                )
                
                )
            }
            
        </div>
    )
}

export default Logement;

//TEST 1
//React.useEffect(()=>{
    //     console.log("params", params)
    // },[params])

    //const {id} = useParams();
    //const {datas} = useFetch("./logements.json")
    
//TEST 2
    //const {id} = useParams;
    // const [data, setData] = useState([])

    // useEffect(()=>{
    //     const getData = async () => {
    //         const result = await fetch('../data.json')
    //         console.log(result);
    //     }
    //     const verifyID = json.find((logement)=> logement.id === id)
    //     setData(verifyID)
    //     if(verifyID !== id){
    //         return <Error/>
    //     }
    //     getData()
    // },[id])