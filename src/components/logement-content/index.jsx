// Dans ce fichier nous créeons notre composant qui va permettre d'injecter tout les informations du corps de la page logement.
// on passe en props le "product" du composant parent "logement" ainsi on peut récupérer l'ensemble des données.
import '../../style/logement-content/logement-content.scss'

function LodgingContent ({product}){

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
                        <div className="tags">{product.tags}</div>
                        <div className="ratings">{product.rating}</div>
                    </div>
        </div>
    )
}

export default LodgingContent