import background from '../../../images/IMG.png'
import '../../../style//body/banner/banner.scss'

function Section() {
    return (
        <section className='section'>
            <div className='maskGroup'>
                <div className='firstBackground'></div>
                <img src={background} alt="background" className='background'/>
            </div>
            <p>Chez vous, partout et ailleurs</p>
        </section>
    )
}

export default Section;