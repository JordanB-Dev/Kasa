import { NavLink } from 'react-router-dom'

type Props = {
  id: string
  title: string
  cover: string
}

const Housing: React.FC<Props> = ({ id, cover, title }) => {
  return (
    <NavLink to={`/housing?id=${id}`} key={id} className="housing">
      <img src={cover} alt={title} aria-label={`Picture: ${title}`} />
      <div className="housing_bg"></div>
      <p aria-label={`Title: ${title}`}>{title}</p>
    </NavLink>
  )
}

export default Housing
