import backgroundPropos from '../../images/kalen.png'
import '../../style/banner-apropos/banner-apropos.scss'

function Banner() {
    return (
        <section className='bannerPropos'>
            <div className='maskGroupPropos'>
                <div className='backgroundPropos'></div>
                <img src={backgroundPropos} alt="background" className='imgBackgroundPropos'/>
            </div>
        </section>
    )
}

export default Banner;