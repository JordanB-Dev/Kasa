import { useState } from 'react'
import arrow from '../../assets/images/icons/fleche.svg'

const DropDown = ({ title, description, children }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="dropdown" id={`dropdown-${title}`}>
      <div className="dropdown_header">
        <div className="dropdown_title">{title}</div>
        <a
          className={`dropdown_fleche ${open}`}
          href={`#dropdown-${title}`}
          onClick={() => setOpen(!open)}
        >
          <img src={arrow} alt="Ouvrir cette liste" />
        </a>
      </div>
      {open && (
        <div className="dropdown_description">
          {description}
          {children}
        </div>
      )}
    </div>
  )
}

export default DropDown
