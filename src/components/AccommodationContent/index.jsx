import AccommodationInfo from '../AccommodationInfo'
import DropDown from '../Dropdown'
import Gallery from '../Gallery'

const AccommodationContent = ({ apartment }) => {
  const { pictures, description } = apartment

  return (
    <div className="accommodation_content container">
      <Gallery pictures={pictures} />
      <AccommodationInfo apartment={apartment} />
      <div className="dropdown_section">
        <DropDown description={description} title="Description" />
        <DropDown title="Équipements">
          {apartment?.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </DropDown>
      </div>
    </div>
  )
}

export default AccommodationContent
