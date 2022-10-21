import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import '../../style/header.css';
import '../../style/index.css'


function Header() {
    return (
        <div className='header'>
        <img src={logo} alt="logo" className='logoKasa'/>,
        <nav className='nav'>
            <Link to="/" className='accueil'>Accueil</Link>
            <Link to="/apropos" className='aPropos'>A Propos</Link>
        </nav>
        </div>
    )
}

export default Header;
