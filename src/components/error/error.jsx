import '../../style/error/error.scss'

function ErrorContent(){
    return(
        <div>
            <h2>404</h2>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <a href="/" className='errorLink'>Retourner sur la page d'accueil</a>
        </div>
    )
}

export default ErrorContent