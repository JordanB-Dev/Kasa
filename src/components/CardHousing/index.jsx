import Housing from '../Housing'
import Data from '../../assets/data/data.json'

const CardHousing = () => {
  const housingData = Data.map((data) => {
    const { id, cover, title } = data
    return <Housing id={id} key={id} cover={cover} title={title} />
  })

  return <div className="housing_list container">{housingData}</div>
}

export default CardHousing
