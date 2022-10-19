import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'

function Header() {
    return (
        <img src={logo} alt="logo"/>,
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/apropos">A Propos</Link>
        </nav>
    )
}

export default Header