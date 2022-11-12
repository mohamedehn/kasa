// Dans ce fichier nous retrouvons les rubriques de la page "A propos". Ici nous allons utiliser le hook usestate afin de faire apparaitre ou disparaitre le contenu de chaque onglet grâce à Collapse. On utilise également props pour le label (titre du collaps) + children (pour le contenu inséré avec un paragraphe sur notre page apropos.jsx)
import '../../style/collaps/collaps.scss'
//import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'

function Collaps({label, number, updateNumber, currentNumber, children}){
    
    return(
    <section className="sectionPropos sectionLodging">
        <div className="collaps">
            <div className="collapsContent" onClick={()=> updateNumber(number === currentNumber? -1 : number)}>
                <div className='collapsTitle'>{label}</div>
                <div className='button'><FontAwesomeIcon icon={currentNumber === number? faAngleUp : faAngleDown}/></div>
            </div>
            <div className='collapsText'>{children}</div>
        </div>
    </section>   
    )
}

export default Collaps