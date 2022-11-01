// Dans ce fichier nous retrouvons les rubriques de la page "A propos". Ici nous allons utiliser le hook usestate afin de faire apparaitre ou disparaitre le contenu de chaque onglet grâce à Collapse. On utilise également props pour le label (titre du collaps) + children (pour le contenu inséré avec un paragraphe sur notre page apropos.jsx)
import '../../style/collaps/collaps.scss'
import React, {useState} from 'react'

function Collaps(props){
    const [isOpen, setIsOpen] = useState(false);
    return(
    <section className="sectionPropos">
        <div className="collaps">
            <div className="collapsContent">
                <div className='collapsTitle'>{props.label}</div>
                <button onClick={()=> setIsOpen(!isOpen)}> V </button>
            </div>
            {isOpen && <div className='collapsText'>{props.children}</div>}
        </div>
    </section>   
    )
}

export default Collaps