import { useState } from 'react'
import {MdArrowBackIosNew} from 'react-icons/md'
import {MdArrowForwardIos} from 'react-icons/md'
import '../../style/slider/slider.scss'

function Slider ({slider}){
    
    let [currentSlide, setCurrentSlide] = useState(0);   
    
    const sliderLength = slider.length

    function nextSlide (){
        setCurrentSlide(currentSlide === sliderLength - 1 ? 0 : currentSlide + 1)
    }

    function previousSlide (){
        setCurrentSlide(currentSlide === 0 ? sliderLength - 1 : currentSlide - 1)
    }

    return(
        <div className='slider'> 
            <MdArrowBackIosNew className='arrowPrev' onClick={()=>previousSlide()}/>
            <MdArrowForwardIos className='arrowNext'onClick={()=>nextSlide()}/>      
        {
            slider.map((pictures, index)=>{
                return(
                    <div className='sliderDiv' key={index}>
                        {
                            index === currentSlide && <img src={pictures} alt="" className='sliderImg'/> 
                        }
                    </div>  
                )   
            })
        }                        
        </div>
    )
}

export default Slider

