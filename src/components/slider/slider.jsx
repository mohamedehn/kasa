// Ici sera présent le carroussel de la page logement. Installation de react responsive carousel
import { Carousel } from "react-responsive-carousel"
import { useParams } from "react-router-dom";
import data from '../../data.json'


function Slider (){

    const params = useParams();

    return(
        <Carousel>
            {data.filter((lodging)=> lodging.id === params.id).map(data, index => (
                <div key={data.id - index}>
                    <img src={data.pictures} alt="" />
                </div>
            ))}
        </Carousel>
    )
}

export default Slider

//Test pour filtrer les images injecter dans le caroussel
// function Slider (){

//     const params = useParams();
//     const navigate = useNavigate();

//     useEffect(()=>{
//         let lodging = data.find((lodging) => params.id === lodging.id);
//         if (!lodging){
//             navigate("/error")
//         }
//     });

//     return(
//         <Carousel>
//             {data.filter((lodging)=> lodging.id === params.id).map(data, index => (
//                 <div key={data.id - index}>
//                     <img src={data.pictures} alt="" />
//                 </div>
//             ))}
//         </Carousel>
//     )
// }