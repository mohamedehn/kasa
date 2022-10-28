import Logements from "../../../data.json"


 function Card (){
    return(
        <div className="cardBackground"></div>,
        <div className="cardApp">
        {
            Logements.map( logement =>{
                return (
                    <div className="card" key={logement.id}>
                        {logement.title}
                    </div>
                )
            })
        }
        </div>
    )
}

export default Card;