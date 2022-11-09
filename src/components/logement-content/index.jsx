// Dans ce fichier nous créeons notre composant qui va permettre d'injecter tout les informations du corps de la page logement.
// on passe en props le "product" du composant parent "logement" ainsi on peut récupérer l'ensemble des données.
import '../../style/logement-content/logement-content.scss'
//import data from '../../data.json'
//import { useParams } from 'react-router-dom';

function LodgingContent ({product}){

    //const params = useParams()

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
                <div className="logementTags">
                        <div className="tags">{product.tags[0]}</div>
                        <div className="tags">{product.tags[1]}</div>
                        <div className="tags">{product.tags[2]}</div>
                        <div className="tags">{product.tags[3]}</div>
                        <div className="ratings">{product.rating}</div>
                </div>
        </div>
    )
}

export default LodgingContent

// {
//     product.map((tags, index)=>{
//         return(
//             <div key={index}>
//                 {index === <div>{tags}</div>}
//             </div>
//         )
//     })
// } 