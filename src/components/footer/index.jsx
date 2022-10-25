import logoFooter from '../../images/LOGO-2.png'
import '../../style/footer/footer.scss';
import '../../style/index.css'


function Footer() {
    return (
        <div className='footer'>
        <img src={logoFooter} alt="logoFooter" className='logoKasaFooter'/>,
        <p>@2020 Kasa. All right reserved</p>
        </div>
    )
}

export default Footer;
