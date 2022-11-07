import '../../style/logement-content/logement-content.scss'

function LodgingContent ({product}){

    return(
        <div className='lodgingContent'>
                <div className='lodgingBody' key={product.id}>
                    <div className='lodgingTitle'>
                        <p>{product.title}</p>
                        <p>{product.location}</p>
                    </div>
                    <div className='lodgingHost'>
                        <p>{product.host.name}</p>
                        <img src={product.host.picture} alt="" />
                    </div>
                    <div className="logementTags">
                        <div className="tags">{product.tags}</div>
                        <div className="ratings">{product.rating}</div>
                    </div>
                </div>
        </div>
    )
}

export default LodgingContent