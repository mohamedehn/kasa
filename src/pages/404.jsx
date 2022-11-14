//Ici il s'agit de la page erreur dans laquelle nous importons notre composant ErrorContent

import '../style/error/error.scss'
import ErrorContent from '../components/error/error';

function Error(){
    return(
        <div>
            <ErrorContent/>
        </div>
    )
}

export default Error;