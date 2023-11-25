import Tags from '../Tags'
import Host from '../Host'
import Rating from '../Rating'

type Props = {
  apartment: {
    title?: string
    location?: string
    tags: string[]
    rating: string
    host: {
      name: string
      picture: string
    }
  }
}

const AccommodationInfo: React.FC<Props> = ({ apartment }) => {
  const { title, location } = apartment

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
        <Rating rating={apartment.rating} />
      </div>
    </div>
  )
}

export default AccommodationInfo
