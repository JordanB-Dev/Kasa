import { createRef, useEffect, useState } from 'react'
import ArrowLeft from '../../assets/images/icons/chevron-left.svg'
import ArrowRight from '../../assets/images/icons/chevron-right.svg'

type Props = {
  pictures: string[]
}

const Gallery: React.FC<Props> = ({ pictures }) => {
  const galleryRef = createRef<HTMLDivElement>()
  const [position, setPosition] = useState<number>(1)
  const [width, setWidth] = useState<number>(0)
  const [transitionTime, setTransitionTime] = useState<number>(0)

  function handleResize() {
    setTransitionTime(0)
    if (galleryRef?.current?.clientWidth) {
      setWidth(galleryRef.current.clientWidth)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  })

  const keyCodeLightBox = (e: {
    keyCode: number
    preventDefault: () => void
  }) => {
    if (e.keyCode === 37) {
      e.preventDefault()
      handleClickPrevious()
    }

    if (e.keyCode === 39) {
      e.preventDefault()
      handleClickNext()
    }
  }

  document.addEventListener('keydown', keyCodeLightBox)

  const handleClickPrevious = () => {
    setTransitionTime(0.8)
    position === 1 ? setPosition(pictures.length) : setPosition(position - 1)
  }

  const handleClickNext = () => {
    setTransitionTime(0.8)
    position === pictures.length ? setPosition(1) : setPosition(position + 1)
  }

  return (
    <div className="gallery" id="galleryRef" ref={galleryRef}>
      {pictures.length > 1 && (
        <img
          src={ArrowLeft}
          tabIndex={5}
          className="gallery_arrowLeft"
          onClick={handleClickPrevious}
        />
      )}

      {pictures.map((picture, i) => (
        <img
          key={`${i + 1}`}
          aria-label={`picture-${i + 1}`}
          src={picture}
          alt="accomodations"
          className="gallery_img"
          style={{
            left: `${width * (i - (position - 1))}px`,
            transition: `left ${transitionTime}s ease-in-out`,
          }}
        />
      ))}

      {pictures.length > 1 && (
        <p className="gallery_counter">
          {position}/{pictures.length}
        </p>
      )}

      {pictures.length > 1 && (
        <img
          src={ArrowRight}
          tabIndex={4}
          className="gallery_arrowRight"
          onClick={handleClickNext}
        />
      )}
    </div>
  )
}

export default Gallery
