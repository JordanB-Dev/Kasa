import Housing from '../Housing'
import apartments from '../../assets/data/data.json'

const CardHousing = () => {
  return (
    <div className="housing_list container">
      {apartments.map(({ id, cover, title }) => (
        <Housing id={id} key={id} cover={cover} title={title} />
      ))}
    </div>
  )
}

export default CardHousing
