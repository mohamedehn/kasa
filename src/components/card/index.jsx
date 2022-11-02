import Logements from "../../data.json"
import "../../style/card/card.scss"
import { Link } from "react-router-dom"

 function Card (){
    return(
        <div className="cardBackground"></div>,
        <div className="cardApp">
            <div className="logements">
        {
            Logements.map( logement =>{
                return (
                    <div className="coverCard" key={logement.id}>
                        <Link to={`/logement/${logement.id}`} key={logement.id}>
                            <img src={logement.cover} alt="coverPictures" className="coverPictures"/>
                            <p className="cardTitle" key={logement.id}>
                            {logement.title}</p>
                        </Link>
                    </div>
                )
            })
        }
            </div>
        </div>
    )
}

export default Card;