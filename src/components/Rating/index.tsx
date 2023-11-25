import StarImg from '../../assets/images/star.png'
import EmptyStar from '../../assets/images/emptystar.png'

type Props = {
  rating: string
}

const Rating: React.FC<Props> = ({ rating }) => {
  const stars = [...Array(5).keys()]

  return (
    <div className="rating">
      {stars.map((starIndex, index) => (
        <img
          key={index}
          className="star"
          src={starIndex < parseInt(rating) ? StarImg : EmptyStar}
          alt={`${rating}/5`}
        />
      ))}
    </div>
  )
}

export default Rating
