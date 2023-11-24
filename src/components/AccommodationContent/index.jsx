import AccommodationInfo from '../AccommodationInfo'
import DropDown from '../Dropdown'
import Gallery from '../Gallery'

const AccommodationContent = ({ data }) => {
  const { pictures, description } = data

  return (
    <div className="accommodation_content container">
      <Gallery pictures={pictures} />
      <AccommodationInfo data={data} />
      <div className="dropdown_section">
        <DropDown description={description} title="Description" />
        <DropDown title="Équipements">
          {data?.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </DropDown>
      </div>
    </div>
  )
}

export default AccommodationContent
