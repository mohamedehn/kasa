// Dans ce fichier on récupère nos composants banner et collaps qu'on affiche sur la page logement.
// Afin d'avoir les collaps qui se ferme à l'ouverture de l'un (et éviter que tout soit ouvert) on utilise usestate. On donnera
// une valeur de départ à -1 (indiquant que tout est fermé) et en fonction de l'état au click sur le composant on déclenche un style display block
//et / ou none
import Collaps from "../../components/collaps";
import Banner from '../../components/banner-apropos';
import { useState } from "react";

function Propos() {
    
    const [currentNumber, updateNumber] = useState(-1)

    return (
        <div>
            <Banner/>
            <Collaps label="Fiabilité" updateNumber={updateNumber} number={0} currentNumber={currentNumber}>
                <p style={currentNumber === 0? {display : 'block'} : {display:'none'}}>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
            </Collaps>
            <Collaps label="Respect" updateNumber={updateNumber} number ={1} currentNumber={currentNumber}>
                <p style={currentNumber === 1? {display : 'block'} : {display:'none'}}>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </Collaps>
            <Collaps label="Service" updateNumber={updateNumber} number={2} currentNumber={currentNumber} >
                <p style={currentNumber === 2? {display : 'block'} : {display:'none'}}>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
            </Collaps>
            <Collaps label="Responsabilité" updateNumber={updateNumber} number={3} currentNumber={currentNumber} >
                <p style={currentNumber === 3? {display : 'block'} : {display:'none'}}>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique de nos hôtes.</p>
            </Collaps>
        </div>
    )
}

export default Propos;
