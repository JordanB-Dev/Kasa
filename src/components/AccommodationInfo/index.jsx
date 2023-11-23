const AccommodationInfo = ({ data }) => {
  const { title, location } = data

  return (
    <div className="accommodation_info container">
      <div className="accommodation_info_container_left">
        <h2>{title}</h2>
        <p>{location}</p>
        <div className="tag_list"></div>
      </div>
    </div>
  )
}

export default AccommodationInfo
