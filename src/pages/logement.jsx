// Utilisation ici du hook react useparams afin de passer dans l'url l'id du logement concerné
//import { useParams } from "react-router-dom";
import React from "react";


function Logement(){

    return(
        <div>
            
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