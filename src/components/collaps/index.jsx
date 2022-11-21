// Dans ce fichier nous retrouvons les rubriques de la page "A propos". Ici nous allons utiliser le hook usestate afin de faire apparaitre ou disparaitre le contenu de chaque onglet grâce à Collapse. On utilise également props pour le label (titre du collaps) + children (pour le contenu inséré avec un paragraphe sur notre page apropos.jsx)
import '../../style/collaps/collaps.scss'
//import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


function Collaps({label, children}){
    
    const[isOpen, setIsOpen] = useState(false)

    return(
    <section className="sectionPropos sectionLodging">
        <div className="collaps">
            <div className="collapsContent" onClick={()=> setIsOpen(!isOpen)}>
                <div className='collapsTitle'>{label}</div>
                <div className='button'><FontAwesomeIcon icon={isOpen? faAngleUp : faAngleDown}/></div>
            </div>
            <div className='collapsText' style={isOpen? {display:"block"} : {display:"none"}}>{children}</div>
        </div>
    </section>   
    )
}

export default Collaps