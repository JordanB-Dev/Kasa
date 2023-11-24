import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="header container">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <ul className="menu">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            A Propos
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header
