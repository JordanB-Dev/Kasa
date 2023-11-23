import DropDown from '../Dropdown'

const AccommodationContent = ({ data }) => {
  const { pictures, description } = data

  const equipementsDropDown = data?.equipments.map((equipment, index) => {
    return <li key={index}>{equipment}</li>
  })

  return (
    <div className="accommodation_content container">
      <div className="dropdown_section">
        <DropDown description={description} title="Description" />
        <DropDown title="Équipements" description={equipementsDropDown} />
      </div>
    </div>
  )
}

export default AccommodationContent
