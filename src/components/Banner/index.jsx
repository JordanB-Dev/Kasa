import bannerHome from '../../assets/images/home.png'
import bannerAbout from '../../assets/images/about.png'

const Banner = ({ name }) => {
  return (
    <div className="banner container">
      {name === 'Home' ? (
        <img
          src={bannerHome}
          aria-label="Banner home"
          alt="Un paysage de falaises"
        />
      ) : (
        <img
          src={bannerAbout}
          aria-label="Banner about"
          alt="Un paysage de montagnes"
        />
      )}
      <h1 className="banner_title" aria-label="Title banner">
        {name === 'Home' ? 'Chez vous, partout et ailleurs' : ''}
      </h1>
    </div>
  )
}

export default Banner
