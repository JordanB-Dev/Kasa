import AccommodationInfo from '../AccommodationInfo'
import DropDown from '../Dropdown'
import Gallery from '../Gallery'

const AccommodationContent = ({ data }) => {
  const { pictures, description } = data

  const equipementsDropDown = data?.equipments.map((equipment, index) => {
    return <li key={index}>{equipment}</li>
  })

  return (
    <div className="accommodation_content container">
      <Gallery pictures={pictures} />
      <AccommodationInfo data={data} />
      <div className="dropdown_section">
        <DropDown description={description} title="Description" />
        <DropDown title="Équipements" description={equipementsDropDown} />
      </div>
    </div>
  )
}

export default AccommodationContent
