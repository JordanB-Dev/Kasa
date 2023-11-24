const Banner = ({ src, title, alt, aria }) => {
  return (
    <div className="banner container">
      <img src={src} aria-label={aria} alt={alt} />
      <h1 className="banner_title" aria-label="Title banner">
        {title}
      </h1>
    </div>
  )
}

export default Banner
