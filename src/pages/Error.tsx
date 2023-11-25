import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="error_page">
      <p className="error_page_fourCent" aria-label="error">
        404
      </p>
      <p className="error_page_notFound" aria-label="Error 404 page not found">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="error_page_link" aria-label="Link" to="/">
        Retourner sur la page d’accueil
      </Link>
    </div>
  )
}

export default ErrorPage
