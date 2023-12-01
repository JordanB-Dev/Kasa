import { PropsWithChildren, useState } from 'react'
import arrow from '../../assets/images/icons/fleche.svg'

type Props = PropsWithChildren<{
  title: string
  description?: string
  aria?: string
}>

const DropDown: React.FC<Props> = ({ title, description, children }) => {
  const [open, setOpen] = useState<boolean>(false)

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
