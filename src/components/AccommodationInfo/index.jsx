import Tags from '../Tags'

const AccommodationInfo = ({ data }) => {
  const { title, location } = data

  const tags = data?.tags.map((tags, index) => {
    return <Tags key={index} tags={tags} />
  })

  return (
    <div className="accommodation_info container">
      <div className="accommodation_info_left">
        <h2>{title}</h2>
        <p>{location}</p>
        <div className="tag_list">{tags}</div>
      </div>
    </div>
  )
}

export default AccommodationInfo
