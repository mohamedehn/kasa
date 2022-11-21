import { useState } from 'react'
import { useEffect } from 'react'
import backgroundPropos from '../../images/kalen.png'
import backgroundProposMobile from '../../images/propos.png'
import '../../style/banner-apropos/banner-apropos.scss'
/* Utilisation ici de usestate et useEffect afin de re render la page lorsque l'on atteint un breakpoints (modification de l'image 
de la bannière de la page à propos).
*/
function Banner() {

    const [width, setWidth] = useState(window.innerWidth);

    const updateWidth = () =>{
        setWidth(window.innerWidth);
    }

    useEffect(()=>{
        window.addEventListener('resize',updateWidth);
        return() => window.removeEventListener('resize', updateWidth)
    })

    return (
            <section className='bannerPropos'>
                <div className='maskGroupPropos'>
                    <div className='backgroundPropos'></div>
                    <img src={width>=768 ? backgroundPropos : backgroundProposMobile} alt="background" className='imgBackgroundPropos'/>
                </div>
            </section>
        )
}

export default Banner;
