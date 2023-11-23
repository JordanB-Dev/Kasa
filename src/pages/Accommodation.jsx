import { Fragment } from 'react'
import { useLocation } from 'react-router-dom'
import accommodation from '../assets/data/data.json'
import AccommodationContent from '../components/AccommodationContent'
import Error from './Error'

const Accommodation = () => {
  const { search } = useLocation()
  const idaccommodation = new URLSearchParams(search).get('id')
  const data = accommodation.filter(
    (accommodation) => accommodation.id.toString() === idaccommodation,
  )[0]

  return (
    <Fragment>
      {data ? <AccommodationContent data={data} /> : <Error />}
    </Fragment>
  )
}

export default Accommodation
