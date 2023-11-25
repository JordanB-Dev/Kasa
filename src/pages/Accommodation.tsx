import { useLocation } from 'react-router-dom'
import accommodation from '../assets/data/data.json'
import AccommodationContent from '../components/AccommodationContent'
import Error from './Error'

const Accommodation = () => {
  const { search } = useLocation()
  const idaccommodation = new URLSearchParams(search).get('id')
  const data = accommodation.find(
    (accommodation) => accommodation.id === idaccommodation,
  )

  return <>{data ? <AccommodationContent apartment={data} /> : <Error />}</>
}

export default Accommodation
