import Tags from '../Tags'
import Host from '../Host'
import Rating from '../Rating'

const AccommodationInfo = ({ apartment }) => {
  const { title, location } = apartment

  const tags = apartment?.tags.map((tags, index) => {
    return <Tags key={index} tags={tags} />
  })

  return (
    <div className="accommodation_info container">
      <div className="accommodation_info_left">
        <h2>{title}</h2>
        <p>{location}</p>
        <div className="tag_list">
          {apartment?.tags.map((tags, index) => (
            <Tags key={index} tags={tags} />
          ))}
        </div>
      </div>
      <div className="accommodation_info_right">
        <Host host={apartment.host} />
        <Rating data={apartment} />
      </div>
    </div>
  )
}

export default AccommodationInfo
