import Banner from '../components/Banner'
import bannerHome from '../assets/images/home.png'
import CardHousing from '../components/CardHousing'

const Home = () => {
  return (
    <main className="home container">
      <Banner
        src={bannerHome}
        alt="Un paysage de falaises"
        aria="Banner home"
        title="Chez vous, partout et ailleurs"
      />
      <CardHousing />
    </main>
  )
}

export default Home
