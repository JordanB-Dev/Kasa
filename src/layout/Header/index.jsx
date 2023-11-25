import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="header container">
      <div className="logo">
        <Link to="/">
          <img src={logo} tabIndex="1" alt="logo" />
        </Link>
      </div>

      <ul className="menu">
        <li tabIndex="2">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Accueil
          </NavLink>
        </li>
        <li tabIndex="3">
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
