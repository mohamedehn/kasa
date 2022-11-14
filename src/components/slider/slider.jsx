// Dans ce fichier on stock notre carroussel produit grâce ) useState. On stock les photos dans un tableau que l'on renvoi avec MAP
// on attribue l'index à la première photo et grâce à l'évènement onclick et aux fonctions nextslide et previousslide on modifie le state
// en modifiant le state on change de photo (stocké dans le tableau). Enfin les conditions stockées dans nos fonctions nous permettent 
// de revenir à la première photo si l'on dépasse la longueur du tableau grâce à length
import { useState } from 'react'
import {MdArrowBackIosNew} from 'react-icons/md'
import {MdArrowForwardIos} from 'react-icons/md'
import '../../style/slider/slider.scss'

function Slider ({slider}){
    
    let [currentSlide, setCurrentSlide] = useState(0);   
    
    const sliderLength = slider.length // permet de vérifier la longueur du tableau

    // Ci-dessous deux fonctions afin de revenir à la première photo que ce soit avec le bouton suivant ou précédent
    function nextSlide (){
        setCurrentSlide(currentSlide === sliderLength - 1 ? 0 : currentSlide + 1)
    }

    function previousSlide (){
        setCurrentSlide(currentSlide === 0 ? sliderLength - 1 : currentSlide - 1)
    }

    // Ci-dessous fonction pour retourner les images avec les flèches. Condition employées afin de ne pas afficher de flèches si 1 img

    const numberPictures = () => {
        if (sliderLength - 1 >= 1){
            return true;
        }else{
            return false;
        }};

    return numberPictures ()? (
        <div className='slider'> 
            <MdArrowBackIosNew className='arrowPrev' onClick={()=>previousSlide()}/>
            <MdArrowForwardIos className='arrowNext'onClick={()=>nextSlide()}/>  
        {
            slider.map((pictures, index)=>{
                return(
                    <div className='sliderDiv' key={index}>
                        {index === currentSlide && <img src={pictures} alt="" className='sliderImg'/>}
                        <span className="numberSlide">{currentSlide + 1}/{sliderLength}</span>
                    </div>  
                )   
            })
        }                        
        </div> 
    ) :(
        slider.map((pictures, index)=>{
            return(
                <div className='sliderSingleImg' key={index}>
                    {index === currentSlide && <img src={pictures} alt="" className='sliderSingleImg'/>}
                </div>  
            )   
        })     
    )
}

export default Slider

