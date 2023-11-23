import StarImg from '../../assets/images/star.png'
import EmptyStar from '../../assets/images/emptystar.png'

const Rating = ({ data }) => {
  const { rating } = data

  const accommodation = []
  let star = true
  for (let index = 0; index < 5; index++) {
    if (index === parseInt(rating)) {
      star = false
    }
    if (star === true) {
      accommodation.push(
        <img
          key={index}
          className="star"
          src={StarImg}
          alt={`${data?.rating}/5`}
        />,
      )
    } else {
      accommodation.push(
        <img
          key={index}
          className="star"
          src={EmptyStar}
          alt={`${data?.rating}/5`}
        />,
      )
    }
  }

  return <div className="rating">{accommodation}</div>
}

export default Rating
