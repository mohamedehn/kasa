// Dans ce fichier nous créeons notre composant qui va permettre d'injecter tout les informations du corps de la page logement.
// on passe en props le "product" du composant parent "logement" ainsi on peut récupérer l'ensemble des données.
import '../../style/logement-content/logement-content.scss'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Collaps from '../collaps'

function LodgingContent ({product}){

    const rateArray = [1,2,3,4,5]

    return(
        <div className='lodgingContent'>
                <div className='lodgingBody' key={product.id}>
                    <div className='lodgingTitle'>
                        <p className='lodgingP lodgingName'>{product.title}</p>
                        <p className='lodgingP lodgingLocation'>{product.location}</p>
                    </div>
                    <div className='lodgingHost'>
                        <p className='hostName'>{product.host.name}</p>
                        <img src={product.host.picture} alt="" className='hostPictures' />
                    </div>
                </div>
                <div className="lodgingTags">
                        <div className="tags">
                            {product.tags.map((tag, index)=>(
                                <div className='tag' key={index}>{tag}</div>
                            ))}
                        </div>
                        <div className="ratings">
                            {
                                rateArray.map((stars, index)=>(
                                    stars <= product.rating ? (<div key={index}><FontAwesomeIcon icon={faStar}/></div>) : 
                                    (<div key={index}><FontAwesomeIcon icon={["fa-duotone", "fa-star"]} className="greyStar"/></div>)
                                ))
                            }
                        </div>
                </div>
                <div className='lodgingText'>
                            <div className='lodgingDescription'> <Collaps label="Description"/> 
                                <div className='description'>{product.description}</div>
                            </div>
                            <div className='lodgingEquipments'> <Collaps label="Equipements"/> 
                                <div className='equipments'>{product.equipments.map((list, index)=>(
                                    <div key={index} className='listEquipments'>{list}</div>
                                ))}
                                </div>
                            </div>
                </div>
        </div>
    )
}

export default LodgingContent
