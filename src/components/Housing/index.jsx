import { NavLink } from 'react-router-dom'

const Housing = ({ id, cover, title }) => {
  return (
    <NavLink to={`/housing?id=${id}`} key={id} className="housing">
      <img src={cover} alt={title} aria-label={`Picture: ${title}`} />
      <div className="housing_bg"></div>
      <p aria-label={`Title: ${title}`}>{title}</p>
    </NavLink>
  )
}

export default Housing
